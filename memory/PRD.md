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
- 2026-07 (sobre sitio publicado www.brendarubio.com.ar): 12 cambios puntuales aplicados y verificados (test_reports/iteration_3.json, 100% frontend): (1) H1 Hero "Mediación prejudicial." sin "obligatoria"; (2) menú desktop y mobile con enlaces en recuadros visibles (paleta navy/ivory), CTA dorado intacto; (3) nuevo campo opcional `preferred_date` (input date) "Fecha preferida para la audiencia" + nota de sujeción a confirmación, en frontend, modelos backend y fila del email; (4) footer con texto exacto de domicilio y "Audiencias presenciales y por herramientas virtuales" (modality en contact.js); eliminado "100% virtual por Zoom"; (5) dirección enlazada a Google Maps (mapsUrl en contact.js) en footer y sidebar de contacto, pestaña nueva; (6) bloque "Marco normativo" en footer con Ley 26.589 y Decreto 1467/2011 (infoleg, pestaña nueva); (7) línea del perfil reemplazada por "Mediadora · Registro Nacional de Conciliadores en las Relaciones de Consumo (Ley 26.993)"; (8) texto paso 02 Proceso (bono MEPRE); (9) "Acuerdo o cierre" con acta de cierre de instancia, sin vía judicial; (10) sub-bloque "Gestión digital de la mediación prejudicial" eliminado de la sección SIGIM (el resto de SIGIM intacto, sin hueco); (11) recuadro azul de Proceso = "Resolución del conflicto" (acta MEPRE, art. 30), botón intacto; (12) bloque "Consultas / Todo el país" eliminado de la tarjeta del Hero.
- Observaciones de QA (decisión del usuario, no aplicadas por alcance estricto): chip del Hero aún dice "Registro Nacional de Mediación"; paso 03 del Proceso aún menciona "Zoom" (no de forma exclusiva). El deploy iniciado antes de estos cambios NO los incluye: hace falta republicar.

## Backlog priorizado
- P0: Republicar para que los 12 cambios lleguen a www.brendarubio.com.ar (el deploy en curso era anterior a los cambios).
- P1: El usuario ya dispone del correo profesional contacto@brendarubio.com.ar (mencionado en sus reglas) — pendiente mostrarlo en el sitio y como destinatario de notificaciones cuando él lo pida (regla 4: no tocarlo sin pedido expreso).
- P2: Confirmación automática por email al consultante (posible con la integración administrada).
- P2: Vista/panel privado de consultas recibidas (el endpoint GET ya existe).
- P3: Alinear chip "Registro Nacional de Mediación" del Hero y mención a "Zoom" en paso 03 del Proceso (observaciones de QA, requieren luz verde del usuario).
- P3: Revisar si se mantiene la opción "accidente de tránsito" en el desplegable del formulario.

## Estado
- Sin issues abiertos. Hero pendiente de aprobación visual final del usuario (capturas mostradas).
