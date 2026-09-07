# PRD — Landing Page Dra. Brenda M. Rubio

## Problema original
Landing page elegante, minimalista y persuasiva para la Dra. Brenda M. Rubio, mediadora independiente en CABA, Argentina. Enfoque: mediación prejudicial obligatoria Civil y Comercial (Ley 26.589), modalidad de audiencias presenciales y a distancia, sistema SIGIM, firma digital oficial. Audiencia principal: abogados; secundaria: particulares. Idioma: Español (Argentina).

## Arquitectura
- Frontend: React + Tailwind + Shadcn (`/app/frontend/src/`), página única `pages/Landing.jsx` con componentes en `components/landing/` (Navbar, Hero, WhyMediation, About, Services, Process, DigitalSystem, ContactForm, Footer, WhatsAppFloat, PrivacyPolicy).
- Datos de contacto centralizados en `/app/frontend/src/config/contact.js` (única fuente de verdad; no hardcodear en componentes).
- Backend: FastAPI + MongoDB (`/app/backend/server.py`). Endpoints: `POST /api/audience-requests`, `GET /api/audience-requests`. Email de notificación vía **integración administrada de email de Emergent** (proxy `https://integrations.emergentagent.com/api/v1/email/send`, header `X-Email-Key` con `EMERGENT_EMAIL_KEY`, `from_name` = `EMAIL_FROM_NAME`). Ya NO se usa la SDK de Resend ni `RESEND_API_KEY`/`SENDER_EMAIL` (cuenta de prueba ajena, limitada). Destinatario fijo: `NOTIFICATION_EMAIL`. Sin reply-to dinámico (playbook G4): el email del consultante va como enlace mailto en el cuerpo. Asunto estático "Nueva consulta desde el sitio web". Compuerta `_assert_safe_email` en cada envío; interpolaciones escapadas con `html.escape()`.
- Reglas de contenido: NO usar "accidentes de tránsito" ni "mediación vial". Usar `className="eyebrow"` / `eyebrow-sm"` para overlines (la clase `.overline` de Tailwind causaba line-through). Dirección oficial: Paraná 426, piso 15, oficina "K", CABA.

## Implementado (histórico)
- Landing completa con todas las secciones, formulario con envío de email (Resend), SEO/a11y en index.html, retrato real, enlaces oficiales SIGIM.
- Pivote de contenido a mediación Civil/Comercial general (8 servicios, proceso en 4 pasos).
- 2026-07: Hero redistribuido según pedido explícito del usuario — Fila 1: texto/botones/credenciales a la izquierda, foto a la derecha. Fila 2: tarjeta azul "Perfil profesional" a ancho completo del contenedor (`md:col-span-12`), contenido horizontal en desktop (nombre+título+"Consultas" en un sector, credenciales en otro), franja dorada con matrícula conservada, sin márgenes negativos. Verificado con capturas en 1440, 1024, 744 y 390 px, incluyendo inicio de la sección siguiente.
- 2026-07: Migración de email a integración administrada de Emergent. Se detectó en prueba real que Resend rechazaba el envío a brendamrubio@gmail.com (modo test solo entrega al dueño de la cuenta: yoabbita@gmail.com). Verificado: `email_sent: true` con IDs de envío en curl y en prueba E2E del formulario (panel "Gracias. Recibí su consulta." + toast). Llegada a la casilla Gmail confirmable solo por la usuaria (revisar spam la primera vez).
- Observación pendiente (NO tocada por pedido del usuario de no modificar textos): el desplegable "Tipo de trámite" del formulario aún incluye la opción "Mediación prejudicial por accidente de tránsito".

## Backlog priorizado
- P1: Correo de dominio profesional para reemplazar `brendamrubio@gmail.com` (diferido por el usuario: "en esta etapa no configurar dominios").
- P2: FAQ para abogados/particulares (conversión).
- P2: Confirmación automática por email al consultante (posible ahora con la integración administrada).
- P2: Vista/panel privado de consultas recibidas (el endpoint GET ya existe).
- P3: Revisar si se mantiene la opción "accidente de tránsito" en el desplegable del formulario (regla de contenido vs. cobertura real de la Ley 26.589).

## Estado
- Sin issues abiertos. Hero pendiente de aprobación visual final del usuario (capturas mostradas).
