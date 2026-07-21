# Mapeo — Formulario de Alta de Colaborador (el Salar)

**Origen:** menú **COLABORADORES → (alta / registro)** del Salar.
**Objetivo:** capturar sección por sección para mapear TODOS los campos que el Salar considera necesarios para dar de alta a un colaborador, y contrastarlos contra el modelo de datos de Souly ("1 persona → N vínculos → una sola verdad").
**Referencia general:** `foto general .png` (vista del formulario completo colapsado).

> `(*)` = sección marcada como **obligatoria** en el formulario del Salar.

## Estructura

El formulario está organizado en acordeón, en dos grandes grupos + una pregunta inicial:

| Carpeta | Sección | Obligatoria |
|---|---|---|
| `00-reingreso-colaborador/` | Reingreso de colaborador (¿retirado y previamente registrado en el grupo? SÍ/NO) | — |
| **`01-informacion-personal/`** | **INFORMACIÓN PERSONAL** | **(*)** |
| `01-informacion-personal/01-datos-personales/` | Datos personales | (*) |
| `01-informacion-personal/02-conyuge/` | Cónyuge | — |
| `01-informacion-personal/03-contacto-de-emergencia/` | Contacto de emergencia | — |
| `01-informacion-personal/04-detalle-de-garante/` | Detalle de garante | — |
| `01-informacion-personal/05-detalle-de-hijos/` | Detalle de hijos | — |
| **`02-informacion-laboral/`** | **INFORMACIÓN LABORAL** | **(*)** |
| `02-informacion-laboral/01-datos-laborales-basicos/` | Datos laborales básicos | (*) |
| `02-informacion-laboral/02-organizacion/` | Organización | (*) |
| `02-informacion-laboral/03-contrato/` | Contrato | (*) |
| `02-informacion-laboral/04-declaracion-de-herederos/` | Declaración de herederos | — |
| `02-informacion-laboral/05-remuneracion/` | Remuneración | (*) |
| `02-informacion-laboral/06-bonos/` | Bonos | — |
| `02-informacion-laboral/07-contabilidad/` | Contabilidad | (*) |
| `02-informacion-laboral/08-afp/` | AFP | (*) |
| `02-informacion-laboral/09-caja-de-salud/` | Caja de salud | — |
| `02-informacion-laboral/10-rc-iva/` | RC-IVA | (*) |
| `02-informacion-laboral/11-pagos/` | Pagos | (*) |
| `02-informacion-laboral/12-discapacidad/` | Discapacidad | — |
| `02-informacion-laboral/13-uniforme/` | Uniforme | — |
| `02-informacion-laboral/14-vacaciones-y-permisos/` | Vacaciones y permisos | — |
| `02-informacion-laboral/15-vacaciones-adicionales/` | Vacaciones adicionales | — |
| `02-informacion-laboral/16-asistencias/` | Asistencias | (*) |
| `02-informacion-laboral/17-familiares/` | Familiares | — |

## Cómo usar estas carpetas

1. Expandí cada subsección en el Salar y sacá la captura de sus campos.
2. Guardá la captura dentro de la subcarpeta correspondiente (podés nombrarla `01.png`, `02.png`… si una sección necesita varias tomas).
3. Opcional: en cada subcarpeta se puede agregar un `campos.md` listando los campos visibles (nombre del campo · tipo · obligatorio · opciones del desplegable · notas).

## Grupos de nivel superior (confirmado en captura 11 de Datos personales)

Además de INFORMACIÓN PERSONAL e INFORMACIÓN LABORAL, el formulario tiene estos grupos (corresponden a UX/UI):
`CURRICULUM` · `INGRESO AL SISTEMA` · `DATOS PERSONA…` (confirmar nombre) · `OTROS`.

## Pendiente / a confirmar

- [ ] Confirmar el nombre completo del grupo **"DATOS PERSONA…"** (¿Datos personalizados?).
- [ ] Capturar el escenario **"¿Nacionalidad boliviana? = NO"** de Datos personales (aún no visto; puede no agregar campos).
- [ ] Lista exhaustiva de **Ciudad o localidad** (todos los municipios) si se requiere fidelidad total.
- [ ] Confirmar el orden real (el Salar podría reordenar según la modalidad de contrato elegida).
