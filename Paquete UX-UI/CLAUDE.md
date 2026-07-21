# Contexto del proyecto — Maquetado del formulario de alta (estilo "el Salar")

> Este archivo le da a Claude todo el contexto necesario para trabajar en este paquete
> **sin** haber estado en la conversación original. Léelo completo antes de actuar.

## 1. Qué estamos haciendo

Estamos diseñando el **Módulo de Planillas, Salarios y Asistencia** de **Souly HR**.
Para eso estamos **replicando en HTML el formulario de "Alta de Colaborador"** del software
competidor (se llama **"el Salar"**), sección por sección, como maqueta de referencia.

El equipo se dividió el formulario:
- Otra persona maqueta **Datos personales** y todo **INFORMACIÓN LABORAL**.
- **Tú (con quien trabajas ahora) maquetas estas 4 secciones** del grupo INFORMACIÓN PERSONAL:
  1. **Cónyuge**
  2. **Contacto de emergencia**
  3. **Detalle de garante**
  4. **Detalle de hijos**

Al final se juntan todos los HTML en un solo formulario, por eso **el formato debe ser idéntico**.

## 2. Regla de oro: NO modificar la base compartida

- **`assets/styles.css`** y **`assets/accordion.js`** son compartidos con el resto del equipo.
  **NO los edites, NO cambies colores, NO agregues clases nuevas al CSS.** Si algo no se puede
  resolver con las clases existentes, avísale a la persona y que lo consulte — no improvises estilos.
- Usás las clases que ya existen (ver sección 5). El objetivo es que todas las secciones se vean
  iguales al unirlas.

## 3. Flujo de trabajo

1. La persona te pasa una **captura de pantalla** de una sección del Salar (ya expandida, con sus campos).
2. Vos **leés la captura** e identificás cada campo: etiqueta, tipo (texto / desplegable / fecha /
   número / radio / checkbox), si es **obligatorio** (el Salar marca los obligatorios con `(*)` en rojo),
   y las opciones de los desplegables si se ven.
3. Generás **un archivo HTML por sección** dentro de `secciones/`, copiando el patrón del ejemplo.
4. Guardás la captura en la subcarpeta correspondiente de `capturas/`.

**Importante:** maquetá **solo lo que se ve en la captura**. No inventes campos. Si un campo no se
alcanza a leer, dejá un `placeholder` o un comentario `<!-- revisar: ... -->` y avisá.

## 4. Convención de nombres de archivo

Un archivo por sección, en minúsculas, con guiones y numerado según el orden del formulario:

| Sección | Archivo |
|---|---|
| Cónyuge | `secciones/02-conyuge.html` |
| Contacto de emergencia | `secciones/03-contacto-de-emergencia.html` |
| Detalle de garante | `secciones/04-detalle-de-garante.html` |
| Detalle de hijos | `secciones/05-detalle-de-hijos.html` |

Las capturas van en `capturas/02-conyuge/`, `capturas/03-contacto-de-emergencia/`, etc.

## 5. El patrón HTML de una sección (copiar esto)

Cada sección es una página que enlaza el CSS compartido y arma **un grupo con su(s) subsección(es)**.
Estructura base (mirá también `secciones/_plantilla-seccion.html` y el ejemplo resuelto
`secciones/00-reingreso-colaborador_EJEMPLO.html`):

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cónyuge — Maqueta</title>
  <link rel="stylesheet" href="../assets/styles.css">
</head>
<body>
<div class="frame">
  <div class="main standalone">
    <div class="note-source">Sección: <strong>Cónyuge</strong> · Grupo: INFORMACIÓN PERSONAL · Fuente: <code>capturas/02-conyuge/…</code></div>

    <div class="section">
      <div class="group-header"><span class="tri">▾</span> INFORMACIÓN PERSONAL <span class="req">(*)</span></div>

      <div class="subsection active">
        <div class="sub-header"><span class="tri">▾</span> Cónyuge</div>
        <div class="sub-body">

          <div class="field-grid">
            <!-- un bloque .field por cada campo de la captura -->
            <div class="field">
              <label>Nombre completo <span class="req">*</span></label>
              <input type="text">
            </div>
            <div class="field">
              <label>Fecha de nacimiento</label>
              <input type="date">
            </div>
            <div class="field">
              <label>Documento de identidad</label>
              <input type="text">
            </div>
            <div class="field full">
              <label>Observaciones</label>
              <input type="text">
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
<script src="../assets/accordion.js"></script>
</body>
</html>
```

### Clases disponibles (usá solo estas)

- `field-grid` → grilla de 2 columnas para los campos. Agregá `cols-3` para 3 columnas: `class="field-grid cols-3"`.
- `field` → un campo (label + control). Ponéle `full` (`class="field full"`) si ocupa el ancho completo.
- `field-subtitle` → subtítulo para agrupar campos dentro de una sección (ej. "Datos del cónyuge").
- `req` → el marcador rojo de obligatorio. En el título de sección va `(*)`; junto a un label va `*`.
- `radio-row` → fila de opciones tipo radio/checkbox (ej. `SÍ / NO`).
- `hint` → texto de ayuda gris chico debajo de un campo.
- Controles: `<input type="text|date|number|email">`, `<select>`, `<textarea>`.

### Campos condicionales (si aparecen)

Si un campo muestra/oculta otros según su valor (como el radio SÍ/NO del ejemplo de reingreso),
copiá ese patrón: un `<div>` contenedor con `style="display:none"` y una función JS chica **en la
misma página** (no en el archivo compartido) que lo muestre/oculte con `onchange`.

## 6. Cómo revisar tu trabajo

Abrí el archivo `.html` en el navegador (doble clic). Tenés que ver la sección con el mismo look
azul del Salar: encabezado de grupo celeste, subsección con triángulo granate, campos en grilla,
obligatorios con `(*)` rojo. Si se ve así y coincide con la captura, está listo.

## 7. Qué NO hacer

- ❌ No edites `assets/styles.css` ni `assets/accordion.js`.
- ❌ No cambies la paleta ni las fuentes.
- ❌ No inventes campos que no están en la captura.
- ❌ No armes el formulario completo — solo tu(s) sección(es), cada una en su archivo.
