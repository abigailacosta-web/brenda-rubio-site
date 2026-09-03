import os
import uuid

import pytest
import requests
from dotenv import dotenv_values

frontend_env = dotenv_values("/app/frontend/.env")
base_url = os.environ.get("REACT_APP_BACKEND_URL") or frontend_env.get("REACT_APP_BACKEND_URL")
if not base_url:
    raise RuntimeError("REACT_APP_BACKEND_URL is missing")
BASE_URL = base_url.rstrip("/")


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Health / root ---
class TestHealth:
    def test_api_root(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/", timeout=30)
        assert r.status_code in (200, 404), r.text
        if r.status_code == 200:
            assert isinstance(r.json(), dict)


# --- Audience requests (POST/GET) ---
class TestAudienceRequests:
    def test_create_and_persist(self, api_client):
        marker = f"TEST_{uuid.uuid4().hex[:8]}"
        payload = {
            "lawyer_name": f"TEST_Abogado {marker}",
            "email": "test_qa@example.com",
            "phone": "+5491156392309",
            "procedure_type": "Mediación Prejudicial · Accidente de Tránsito",
            "description": f"Descripción de prueba automatizada {marker} para verificar persistencia.",
        }
        r = api_client.post(f"{BASE_URL}/api/audience-requests", json=payload, timeout=60)
        assert r.status_code == 201, r.text
        data = r.json()
        assert isinstance(data.get("id"), str) and data["id"]
        assert data["lawyer_name"] == payload["lawyer_name"]
        assert data["email"] == payload["email"]
        assert data["procedure_type"] == payload["procedure_type"]
        assert data["description"] == payload["description"]
        assert data["matricula"] == ""
        assert isinstance(data["email_sent"], bool)
        assert "created_at" in data

        # verify persistence via list endpoint
        lr = api_client.get(f"{BASE_URL}/api/audience-requests", timeout=60)
        assert lr.status_code == 200, lr.text
        items = lr.json()
        assert isinstance(items, list)
        match = [i for i in items if i["id"] == data["id"]]
        assert len(match) == 1, "created request not persisted"
        assert match[0]["lawyer_name"] == payload["lawyer_name"]
        assert "_id" not in match[0]

    def test_create_with_optional_fields(self, api_client):
        payload = {
            "lawyer_name": "TEST_Optional Fields",
            "matricula": "T99 F999",
            "email": "test_opt@example.com",
            "phone": "1156392309",
            "procedure_type": "Mediación Privada · Siniestro Vial",
            "insurance_company": "TEST Seguros SA",
            "description": "Caso de prueba con campos opcionales completos para validación.",
        }
        r = api_client.post(f"{BASE_URL}/api/audience-requests", json=payload, timeout=60)
        assert r.status_code == 201, r.text
        d = r.json()
        assert d["matricula"] == "T99 F999"
        assert d["insurance_company"] == "TEST Seguros SA"

    @pytest.mark.parametrize(
        "bad_payload",
        [
            {"lawyer_name": "A", "email": "a@b.com", "phone": "1234", "procedure_type": "Otro", "description": "x" * 20},
            {"lawyer_name": "TEST_Nombre", "email": "not-an-email", "phone": "1234", "procedure_type": "Otro", "description": "x" * 20},
            {"lawyer_name": "TEST_Nombre", "email": "a@b.com", "phone": "1", "procedure_type": "Otro", "description": "x" * 20},
            {"lawyer_name": "TEST_Nombre", "email": "a@b.com", "phone": "1234", "procedure_type": "Otro", "description": "short"},
            {"email": "a@b.com", "phone": "1234", "procedure_type": "Otro", "description": "x" * 20},
        ],
    )
    def test_validation_errors(self, api_client, bad_payload):
        r = api_client.post(f"{BASE_URL}/api/audience-requests", json=bad_payload, timeout=30)
        assert r.status_code == 422, r.text
        assert "detail" in r.json()
