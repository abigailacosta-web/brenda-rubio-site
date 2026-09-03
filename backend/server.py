from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
import resend
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend config
resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
NOTIFICATION_EMAIL = os.environ.get('NOTIFICATION_EMAIL', 'brendamrubio@gmail.com')

# App + Router
app = FastAPI(title="Dra. Brenda M. Rubio — Mediación Prejudicial")
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ---------- Models ----------
class AudienceRequestCreate(BaseModel):
    lawyer_name: str = Field(..., min_length=2, max_length=200)
    matricula: Optional[str] = Field(default="", max_length=100)
    email: EmailStr
    phone: str = Field(..., min_length=4, max_length=50)
    procedure_type: str = Field(..., min_length=2, max_length=120)
    insurance_company: Optional[str] = Field(default="", max_length=200)
    description: str = Field(..., min_length=10, max_length=4000)


class AudienceRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    lawyer_name: str
    matricula: Optional[str] = ""
    email: EmailStr
    phone: str
    procedure_type: Optional[str] = ""
    insurance_company: Optional[str] = ""
    description: str
    email_sent: bool = False
    email_error: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Email ----------
def build_notification_html(data: AudienceRequest) -> str:
    return f"""
    <!DOCTYPE html>
    <html>
      <body style="margin:0;padding:0;background:#F4F5F7;font-family:Arial,Helvetica,sans-serif;color:#0F2A47;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F4F5F7;padding:32px 0;">
          <tr><td align="center">
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="background:#FFFFFF;border:1px solid rgba(15,42,71,0.12);border-radius:8px;overflow:hidden;">
              <tr><td style="padding:24px 32px 8px 32px;border-bottom:1px solid rgba(15,42,71,0.10);background:#0F2A47;color:#FBFBF9;">
                <p style="margin:0 0 4px 0;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#C8A464;">Nueva solicitud</p>
                <h1 style="margin:0 0 16px 0;font-size:22px;font-weight:600;color:#FBFBF9;">Consulta desde el sitio</h1>
              </td></tr>
              <tr><td style="padding:24px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:14px;color:#0F2A47;">
                  <tr><td style="padding:8px 0;width:220px;color:#6B7280;">Nombre / Estudio</td><td style="padding:8px 0;"><strong>{data.lawyer_name}</strong></td></tr>
                  <tr><td style="padding:8px 0;color:#6B7280;">Matrícula</td><td style="padding:8px 0;">{data.matricula or '—'}</td></tr>
                  <tr><td style="padding:8px 0;color:#6B7280;">Email</td><td style="padding:8px 0;"><a href="mailto:{data.email}" style="color:#0F2A47;">{data.email}</a></td></tr>
                  <tr><td style="padding:8px 0;color:#6B7280;">Teléfono</td><td style="padding:8px 0;">{data.phone}</td></tr>
                  <tr><td style="padding:8px 0;color:#6B7280;">Tipo de trámite</td><td style="padding:8px 0;"><strong>{data.procedure_type}</strong></td></tr>
                  <tr><td style="padding:8px 0;color:#6B7280;">Aseguradora / Contraparte</td><td style="padding:8px 0;">{data.insurance_company or '—'}</td></tr>
                </table>
                <div style="margin-top:16px;padding:16px;background:#F4EBD4;border-left:3px solid #C8A464;border-radius:4px;">
                  <p style="margin:0 0 8px 0;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#0F2A47;">Mensaje</p>
                  <p style="margin:0;font-size:14px;line-height:1.6;color:#0F2A47;white-space:pre-wrap;">{data.description}</p>
                </div>
              </td></tr>
              <tr><td style="padding:16px 32px;border-top:1px solid rgba(15,42,71,0.10);font-size:12px;color:#6B7280;">
                Recibido el {data.created_at.strftime('%d/%m/%Y %H:%M UTC')} · ID: {data.id}
              </td></tr>
            </table>
          </td></tr>
        </table>
      </body>
    </html>
    """


async def send_notification_email(data: AudienceRequest) -> tuple[bool, Optional[str]]:
    if not resend.api_key:
        return False, "RESEND_API_KEY no configurado"
    params = {
        "from": SENDER_EMAIL,
        "to": [NOTIFICATION_EMAIL],
        "reply_to": data.email,
        "subject": f"Nueva consulta ({data.procedure_type}) — {data.lawyer_name}",
        "html": build_notification_html(data),
    }
    try:
        result = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Resend email sent: {result.get('id') if isinstance(result, dict) else result}")
        return True, None
    except Exception as e:
        logger.exception("Resend send failed")
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
    request_obj = AudienceRequest(**payload.model_dump())

    # Send email (best-effort) before persisting status
    sent, error = await send_notification_email(request_obj)
    request_obj.email_sent = sent
    request_obj.email_error = error

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


# Include the router in the main app
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
