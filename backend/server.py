from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import ipaddress
import logging
import httpx
from html import escape
from html.parser import HTMLParser
from urllib.parse import urlparse
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional, Literal
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Emergent managed email proxy — base URL is a constant, never from env
EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ["EMERGENT_EMAIL_KEY"]
EMAIL_FROM_NAME = os.environ["EMAIL_FROM_NAME"]
NOTIFICATION_EMAIL = os.environ.get('NOTIFICATION_EMAIL', 'contacto@brendarubio.com.ar')
EMAIL_REPLY_TO = os.environ.get('EMAIL_REPLY_TO')

app = FastAPI(title="Dra. Brenda M. Rubio — Mediación Prejudicial")
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


# ---------- Models ----------
class AudienceRequestCreate(BaseModel):
    consultant_type: Literal["abogado", "particular"] = "abogado"
    lawyer_name: str = Field(..., min_length=2, max_length=200)
    matricula: Optional[str] = Field(default="", max_length=100)
    email: EmailStr
    phone: Optional[str] = Field(default="", max_length=50)
    preferred_date: Optional[str] = Field(default="", max_length=20)
    procedure_type: str = Field(..., min_length=2, max_length=150)
    description: str = Field(..., min_length=10, max_length=4000)
    privacy_accepted: bool = Field(...)
    # Honeypot — must be empty
    website: Optional[str] = ""


class AudienceRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    consultant_type: Optional[str] = "abogado"
    lawyer_name: str
    matricula: Optional[str] = ""
    email: EmailStr
    phone: Optional[str] = ""
    preferred_date: Optional[str] = ""
    procedure_type: Optional[str] = ""
    description: str
    privacy_accepted: bool = True
    email_sent: bool = False
    email_error: Optional[str] = None
    confirmation_sent: bool = False
    confirmation_error: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Email ----------
def build_notification_html(data: AudienceRequest) -> str:
    consultant_label = "Abogado/a o Estudio Jurídico" if data.consultant_type == "abogado" else "Particular"
    matricula_row = ""
    if data.consultant_type == "abogado" and data.matricula:
        matricula_row = f'<tr><td style="padding:8px 0;color:#6B7280;">Matrícula</td><td style="padding:8px 0;">{escape(data.matricula)}</td></tr>'
    fecha_row = ""
    if data.preferred_date:
        try:
            fecha_fmt = datetime.strptime(data.preferred_date, "%Y-%m-%d").strftime("%d/%m/%Y")
        except ValueError:
            fecha_fmt = data.preferred_date
        fecha_row = f'<tr><td style="padding:8px 0;color:#6B7280;">Fecha preferida para la audiencia</td><td style="padding:8px 0;">{escape(fecha_fmt)} (sujeta a confirmación de disponibilidad)</td></tr>'
    return f"""
    <!DOCTYPE html>
    <html>
      <body style="margin:0;padding:0;background:#F4F5F7;font-family:Arial,Helvetica,sans-serif;color:#0F2A47;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F4F5F7;padding:32px 0;">
          <tr><td align="center">
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="background:#FFFFFF;border:1px solid rgba(15,42,71,0.12);border-radius:8px;overflow:hidden;">
              <tr><td style="padding:24px 32px 8px 32px;border-bottom:1px solid rgba(15,42,71,0.10);background:#0F2A47;color:#FBFBF9;">
                <p style="margin:0 0 4px 0;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#C8A464;">Nueva consulta</p>
                <h1 style="margin:0 0 16px 0;font-size:22px;font-weight:600;color:#FBFBF9;">Solicitud desde el sitio</h1>
              </td></tr>
              <tr><td style="padding:24px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:14px;color:#0F2A47;">
                  <tr><td style="padding:8px 0;width:220px;color:#6B7280;">Tipo de consultante</td><td style="padding:8px 0;"><strong>{consultant_label}</strong></td></tr>
                  <tr><td style="padding:8px 0;color:#6B7280;">Nombre / Estudio</td><td style="padding:8px 0;"><strong>{escape(data.lawyer_name)}</strong></td></tr>
                  {matricula_row}
                  <tr><td style="padding:8px 0;color:#6B7280;">Email</td><td style="padding:8px 0;"><a href="mailto:{escape(data.email)}" style="color:#0F2A47;">{escape(data.email)}</a></td></tr>
                  <tr><td style="padding:8px 0;color:#6B7280;">Teléfono</td><td style="padding:8px 0;">{escape(data.phone) if data.phone else '—'}</td></tr>
                  {fecha_row}
                  <tr><td style="padding:8px 0;color:#6B7280;">Tipo de trámite</td><td style="padding:8px 0;"><strong>{escape(data.procedure_type)}</strong></td></tr>
                </table>
                <div style="margin-top:16px;padding:16px;background:#F4EBD4;border-left:3px solid #C8A464;border-radius:4px;">
                  <p style="margin:0 0 8px 0;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#0F2A47;">Consulta</p>
                  <p style="margin:0;font-size:14px;line-height:1.6;color:#0F2A47;white-space:pre-wrap;">{escape(data.description)}</p>
                </div>
              </td></tr>
              <tr><td style="padding:16px 32px;border-top:1px solid rgba(15,42,71,0.10);font-size:12px;color:#6B7280;">
                Recibido el {data.created_at.strftime('%d/%m/%Y %H:%M UTC')} · ID: {data.id} · Enviado por {escape(EMAIL_FROM_NAME)}
              </td></tr>
            </table>
          </td></tr>
        </table>
      </body>
    </html>
    """


# ---------- Guardrail gate (estructura anti-abuso del email) ----------
_SHORTENERS = ("bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", "goo.gl", "rebrand.ly")
_CRED_ASK = ("reply with your password", "reply with the code", "send your password", "cvv",
             "send us your password", "enter your password below", "confirm your card number",
             "your full card number", "seed phrase", "recovery phrase", "verify your card",
             "social security number", "confirm your bank details")
_HOSTISH = re.compile(r"\b(?:https?://)?((?:[a-z0-9-]+\.)+[a-z]{2,})", re.I)


def _host_ok(host: str) -> bool:
    if not host or "xn--" in host:
        return False
    try:
        ipaddress.ip_address(host)
        return False
    except ValueError:
        pass
    return not any(host == s or host.endswith("." + s) for s in _SHORTENERS)


def _same_site(shown: str, real: str) -> bool:
    return shown == real or real.endswith("." + shown) or shown.endswith("." + real)


class _EmailScan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags, self.urls, self.anchors = set(), [], []
        self._href, self._text = None, []

    def handle_starttag(self, tag, attrs):
        self.tags.add(tag.lower())
        self.urls += [v for k, v in attrs if k.lower() in ("href", "src") and v]
        if tag.lower() == "a":
            self._href = dict((k.lower(), v) for k, v in attrs).get("href")
            self._text = []

    def handle_data(self, data):
        if self._href is not None:
            self._text.append(data)

    def handle_endtag(self, tag):
        if tag.lower() == "a" and self._href is not None:
            self.anchors.append((self._href, "".join(self._text)))
            self._href, self._text = None, []


def _assert_safe_email(subject: str, html: str) -> None:
    scan = _EmailScan()
    scan.feed(html)
    if scan.tags & {"form", "input", "textarea", "select"}:
        raise ValueError("No forms or input fields in email")
    body = f"{subject}\n{html}".lower()
    for p in _CRED_ASK:
        if p in body:
            raise ValueError(f"Email asks the recipient for credentials: {p!r}")
    for url in scan.urls:
        low = url.strip().lower()
        if low.startswith(("mailto:", "tel:", "cid:", "#")):
            continue
        if not low.startswith("https://"):
            raise ValueError(f"Email links/assets must be absolute https: {url!r}")
        host = urlparse(low).hostname or ""
        if not _host_ok(host) or urlparse(low).username is not None:
            raise ValueError(f"Shortened, numeric-host or credential-bearing URL: {url!r}")
    for href, text in scan.anchors:
        real = urlparse(href.strip().lower()).hostname or ""
        if not real:
            continue
        for m in _HOSTISH.finditer(text):
            if not _same_site(m.group(1).lower(), real):
                raise ValueError(f"Anchor text {m.group(1)!r} != real link host {real!r}")


async def send_email(*, to: str, subject: str, html: str, reply_to: Optional[str] = None) -> Optional[str]:
    _assert_safe_email(subject, html)
    payload = {"to": [to], "subject": subject, "html": html, "from_name": EMAIL_FROM_NAME}
    if reply_to:
        payload["contact_email"] = reply_to
    async with httpx.AsyncClient(timeout=30) as http_client:
        resp = await http_client.post(
            f"{EMAIL_BASE_URL}/api/v1/email/send",
            headers={"X-Email-Key": EMAIL_KEY},
            json=payload,
        )
    resp.raise_for_status()
    return resp.json().get("id")


async def send_notification_email(data: AudienceRequest) -> tuple[bool, Optional[str]]:
    try:
        email_id = await send_email(
            to=NOTIFICATION_EMAIL,
            subject="Nueva consulta desde el sitio web",
            html=build_notification_html(data),
        )
        logger.info(f"Notification email sent: {email_id}")
        return True, None
    except Exception as e:
        logger.exception("Notification email failed")
        return False, str(e)


def build_confirmation_html(data: AudienceRequest) -> str:
    return f"""
    <!DOCTYPE html>
    <html>
      <body style="margin:0;padding:0;background:#F4F5F7;font-family:Arial,Helvetica,sans-serif;color:#0F2A47;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F4F5F7;padding:32px 0;">
          <tr><td align="center">
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="background:#FFFFFF;border:1px solid rgba(15,42,71,0.12);border-radius:8px;overflow:hidden;">
              <tr><td style="padding:24px 32px 8px 32px;border-bottom:1px solid rgba(15,42,71,0.10);background:#0F2A47;color:#FBFBF9;">
                <p style="margin:0 0 4px 0;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#C8A464;">Consulta recibida</p>
                <h1 style="margin:0 0 16px 0;font-size:22px;font-weight:600;color:#FBFBF9;">Gracias por su consulta</h1>
              </td></tr>
              <tr><td style="padding:24px 32px;font-size:14px;line-height:1.7;color:#0F2A47;">
                <p style="margin:0 0 12px 0;">Estimado/a <strong>{escape(data.lawyer_name)}</strong>:</p>
                <p style="margin:0 0 12px 0;">Recibí su consulta a través de mi sitio web y le responderé personalmente a la brevedad, por el medio que indicó, con la disponibilidad de fechas y los próximos pasos.</p>
                <p style="margin:0;">Si consignó una fecha preferida para la audiencia, la misma queda sujeta a confirmación de disponibilidad.</p>
              </td></tr>
              <tr><td style="padding:0 32px 24px 32px;">
                <div style="padding:16px;background:#F4EBD4;border-left:3px solid #C8A464;border-radius:4px;font-size:13px;line-height:1.8;color:#0F2A47;">
                  <strong>Dra. Brenda M. Rubio</strong> · Abogada UBA · Mediadora prejudicial matriculada<br/>
                  Correo: <a href="mailto:contacto@brendarubio.com.ar" style="color:#0F2A47;">contacto@brendarubio.com.ar</a><br/>
                  WhatsApp: +54 9 11 5639-2309<br/>
                  Paraná 426, piso 15, oficina "K", CABA
                </div>
              </td></tr>
              <tr><td style="padding:16px 32px;border-top:1px solid rgba(15,42,71,0.10);font-size:12px;color:#6B7280;">
                Mensaje automático de confirmación enviado por {escape(EMAIL_FROM_NAME)}. Si lo prefiere, puede responder a este correo o comunicarse por los medios indicados.
              </td></tr>
            </table>
          </td></tr>
        </table>
      </body>
    </html>
    """


async def send_confirmation_email(data: AudienceRequest) -> tuple[bool, Optional[str]]:
    try:
        email_id = await send_email(
            to=data.email,
            subject="Recibí su consulta — Dra. Brenda M. Rubio, mediadora",
            html=build_confirmation_html(data),
            reply_to=EMAIL_REPLY_TO,
        )
        logger.info(f"Confirmation email sent: {email_id}")
        return True, None
    except Exception as e:
        logger.exception("Confirmation email failed")
        return False, str(e)


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Dra. Brenda M. Rubio — API operativa", "status": "ok"}


@api_router.get("/health")
async def health():
    return {"status": "ok", "service": "mediacion-prejudicial-api"}


@api_router.post("/audience-requests", response_model=AudienceRequest, status_code=201)
async def create_audience_request(payload: AudienceRequestCreate):
    # Honeypot — silently reject bots
    if payload.website:
        logger.warning("Honeypot triggered — rejecting bot submission")
        raise HTTPException(status_code=400, detail="Solicitud rechazada")

    if not payload.privacy_accepted:
        raise HTTPException(status_code=400, detail="Debe aceptar la Política de Privacidad para enviar la consulta")

    data = payload.model_dump()
    data.pop("website", None)
    request_obj = AudienceRequest(**data)

    sent, error = await send_notification_email(request_obj)
    request_obj.email_sent = sent
    request_obj.email_error = error

    conf_sent, conf_error = await send_confirmation_email(request_obj)
    request_obj.confirmation_sent = conf_sent
    request_obj.confirmation_error = conf_error

    doc = request_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()

    try:
        await db.audience_requests.insert_one(doc)
    except Exception:
        logger.exception("Failed to persist audience request")
        raise HTTPException(status_code=500, detail="Error al guardar la solicitud")

    return request_obj


@api_router.get("/audience-requests", response_model=List[AudienceRequest])
async def list_audience_requests():
    items = await db.audience_requests.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for it in items:
        if isinstance(it.get('created_at'), str):
            try:
                it['created_at'] = datetime.fromisoformat(it['created_at'])
            except ValueError:
                it['created_at'] = datetime.now(timezone.utc)
    return items


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
