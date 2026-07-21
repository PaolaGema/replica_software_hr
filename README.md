# Réplica del formulario de Alta de Colaborador — "el Salar" (Souly HR)

Maqueta en HTML del formulario **"Alta / Modificar colaborador"** del software competidor **"el Salar"**,
como referencia de diseño para el **Módulo de Planillas, Salarios y Asistencia** de **Souly HR**.

El trabajo está dividido en **dos maquetados paralelos** (no fusionados), cada uno en su carpeta:

## 📁 `Paquete UX-UI/` — Paola (UX/UI)
- Base compartida (`assets/styles.css`, `assets/accordion.js`) + plantilla y ejemplo.
- `index.html`: formulario **completo y autocontenido** (estilos y JS embebidos, escala ~11px).
- Secciones asignadas y capturadas por ella: **Cónyuge, Contacto de emergencia, Detalle de garante,
  Detalle de hijos** (con sus capturas en `capturas/`).
- Incluye además un borrador del resto del formulario (LABORAL, CURRICULUM, INGRESO AL SISTEMA,
  DATOS PERSONALIZADOS, OTROS) armado **sin las capturas detalladas** → a verificar contra capturas reales.

## 📁 `Maquetado HTML/` — Israel
- Mismo look del Salar, con **CSS externo compartido** (`assets/styles.css`, `assets/accordion.js`, ~13px).
- `index.html`: formulario con las secciones **mapeadas campo por campo de capturas reales**:
  - **Reingreso de colaborador**
  - **INFORMACIÓN PERSONAL →** Datos personales
  - **INFORMACIÓN LABORAL →** Datos laborales básicos · Organización · Contrato ·
    Declaración de herederos · Remuneración
- Cada sección también está como archivo suelto en `secciones/` (revisable por separado).
- Incluye la lógica condicional real (SÍ/NO, desplegables que revelan campos, tablas dinámicas).

## 📁 `Capturas por Seccion/` — evidencia (Israel)
Capturas de pantalla del Salar, organizadas por sección, que sirven de fuente para el maquetado
de `Maquetado HTML/`. Ver su `README.md` para el índice de secciones y las obligatorias `(*)`.

---

### Estado / pendientes
- Ambos `index.html` abren con doble clic (no requieren servidor).
- **Pendiente de unificar** en un solo formulario si se decide (hoy van separados a propósito).
- Las secciones de INFORMACIÓN LABORAL / grupos extra del paquete de Paola conviene **contrastarlas
  con las capturas reales** de `Capturas por Seccion/`.
