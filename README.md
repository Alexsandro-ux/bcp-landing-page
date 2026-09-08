# Landing Page - Tarjetas de Crédito BCP (A/B Testing & GTM)

Landing page responsiva desarrollada con React y Vite para la selección de tarjetas de crédito BCP. El proyecto incluye un experimento A/B activo para evaluar la conversión de solicitudes y una arquitectura centralizada de eventos mediante Google Tag Manager (GTM).

---

## Experimento A/B: Hipótesis y Mecánica

* **Objetivo:** Evaluar el impacto visual de la propuesta de valor principal en la tasa de clics (CTR) hacia el formulario de solicitud.
* **Variantes:**
  * **Variante A (Control):** Enfoque tradicional basado en beneficios financieros generales.
  * **Variante B (Test):** Enfoque dinámico orientado a beneficios de bienvenida rápidos (puntos/cashback).
* **Persistencia:** La asignación de la variante se calcula aleatoriamente en la primera visita y se almacena en `sessionStorage` para mantener la consistencia durante toda la sesión del usuario.

---

## Arquitectura de Tracking (GTM & dataLayer)

Todos los eventos de analítica se gestionan mediante un módulo centralizado (`src/utils/gtm.js`) que interactúa de manera directa con `window.dataLayer`.

| Evento | Disparador | Parámetros Enviados |
| :--- | :--- | :--- |
| `view_banner` | Carga del Banner Principal | `variant_id` (A o B) |
| `click_cta` | Clic en botones de conversión | `cta_location`, `card_type` |
| `select_card` | Selección de una tarjeta de crédito | `card_name`, `card_category` |
| `submit_form` | Envío exitoso del formulario | `form_id`, `status` |

---

## Tecnologías Utilizadas

* **Framework UI:** React 19 + Vite
* **Compilador:** React Compiler (vía Babel)
* **Estilos:** CSS Modules (Mobile-First)
* **Despliegue:** GitHub Pages (`gh-pages`)

---

## Instalación y Despliegue Local

1. **Clonar el repositorio e instalar dependencias:**
   ```bash
  git clone https://github.com/Alexsandro-ux/bcp-landing-page.git
  cd bcp-landing-page
  npm install