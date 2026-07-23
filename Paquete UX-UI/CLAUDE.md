# Contexto del proyecto — Maquetado del formulario de alta (estilo "el Salar")

> Este archivo le da a Claude todo el contexto necesario para trabajar en este paquete
> **sin** haber estado en la conversación original. Léelo completo antes de actuar.

## 1. Qué estamos haciendo

Estamos diseñando el **Módulo de Planillas, Salarios y Asistencia** de **Souly HR**.
Para eso **replicamos en HTML el formulario de "Alta de Colaborador"** del software
competidor (se llama **"el Salar"**), sección por sección, como maqueta de referencia.

El formulario se repartió entre varias personas (Datos personales e INFORMACIÓN LABORAL por un
lado; Cónyuge, Contacto de emergencia, Detalle de garante y Detalle de hijos por otro), pero
**ese reparto ya se completó y se ensambló**.

## 2. Estado actual: TODO está consolidado en `index.html`

**`index.html` es el único entregable.** Contiene el formulario completo (~2000 líneas) y es
**totalmente autocontenido**: estilos en un `<style>` embebido y comportamiento en un `<script>`
al final. **No enlaza ningún archivo externo.**

Esto significa:

- Para cambiar un estilo, editás el `<style>` de `index.html` (arranca en la línea 17).
- Para cambiar comportamiento, editás el `<script>` de `index.html` (arranca en la línea ~1930).
- Se abre con doble clic. No necesita servidor.

> El flujo anterior de "un archivo HTML por sección dentro de `secciones/`" **quedó obsoleto**.
> La carpeta `secciones/` y sus archivos (plantilla y ejemplo de reingreso) se eliminaron porque
> su contenido ya estaba dentro de `index.html`. **No vuelvas a crear archivos sueltos por sección.**

## 3. La carpeta `assets/` (compartida — NO tocar)

`assets/styles.css` y `assets/accordion.js` **ya no los usa `index.html`** — su contenido está
duplicado inline. Siguen en el repo porque son **compartidos con el resto del equipo**, que puede
estar usándolos en sus propios archivos.

- ❌ **No los edites ni los borres.** Si creés que sobran, preguntale a la persona primero.
- ⚠️ Ojo con la duplicación: `index.html:1933-1951` es una copia de `assets/accordion.js`. Si
  alguna vez hay que arreglar el acordeón, hay que tocar **los dos** lados o unificarlos.

## 4. Estructura del formulario (patrón HTML)

Cada bloque del formulario sigue esta estructura. Respetala al agregar campos:

```html
<div class="section">
  <div class="group-header"><span class="tri">▾</span> INFORMACIÓN PERSONAL <span class="req">(*)</span></div>

  <div class="subsection active">
    <div class="sub-header"><span class="tri">▾</span> Cónyuge</div>
    <div class="sub-body">

      <div class="field-grid">
        <div class="field">
          <label>Nombre completo <span class="req">*</span></label>
          <input type="text">
        </div>
        <div class="field">
          <label>Fecha de nacimiento</label>
          <input type="date">
        </div>
        <div class="field full">
          <label>Observaciones</label>
          <input type="text">
        </div>
      </div>

    </div>
  </div>
</div>
```

### Clases disponibles (usá solo estas)

- `field-grid` → grilla de 2 columnas. Agregá `cols-3` para 3 columnas: `class="field-grid cols-3"`.
- `field` → un campo (label + control). Ponéle `full` si ocupa el ancho completo.
- `field-subtitle` → subtítulo para agrupar campos dentro de una sección.
- `req` → marcador rojo de obligatorio. En el título de sección va `(*)`; junto a un label va `*`.
- `radio-row` → fila de opciones radio/checkbox (ej. `SÍ / NO`).
- `hint` → texto de ayuda gris chico debajo de un campo.
- `tabla-rep` → tabla de filas repetibles. **Envolvela siempre en `<div class="tabla-wrap">`**
  (tiene `overflow-x: auto`, es lo que evita que la tabla rompa el layout en pantallas chicas).
- Controles: `<input type="text|date|number|email">`, `<select>`, `<textarea>`.

### Helpers JS disponibles en `index.html`

- `expandAll(true|false)` → expandir / colapsar todas las subsecciones.
- `agregarFila('idTabla')` / `quitarFila(x)` → filas repetibles en tablas `tabla-rep`.
- `toggleReingreso`, `toggleNombreCompleto`, `toggleDocSecundario`, `toggleAuth` → campos
  condicionales. Si necesitás uno nuevo, seguí ese mismo patrón (un `<div>` con `style="display:none"`
  + una función que lo muestre con `onchange`).

## 5. Fidelidad a las capturas

`capturas/` guarda las capturas del Salar que sirvieron de fuente. Al agregar o corregir campos:

- Maquetá **solo lo que se ve en la captura**. No inventes campos.
- Respetá si el campo es obligatorio (el Salar los marca con `(*)` en rojo).
- Si un campo no se alcanza a leer, dejá `<!-- revisar: ... -->` y avisá.

## 6. Escala visual (no cambiar)

La maqueta imita la densidad del Salar: fuente base **11px**, filas compactas, etiqueta a la
**izquierda** del campo, inputs celestes con borde cyan, fondo `#16305c`. **No cambies la paleta
ni las fuentes** — el objetivo es que sea reconocible como "el Salar".

## 7. Responsive (estado conocido)

Es una maqueta **de escritorio con adaptación defensiva**, no mobile-first. Funciona en tablet;
en celular no es usable. Limitaciones conocidas, por si alguien las reporta como bug:

- `@media (max-width: 860px)` colapsa la grilla a 1 columna y **oculta la sidebar sin reemplazo**
  (no hay menú hamburguesa).
- El breakpoint de `index.html` (860px) **no coincide** con el de `assets/styles.css` (720px).
- Inputs de `height: 20px` → targets táctiles muy chicos para móvil.

Es una decisión deliberada: replica un formulario de escritorio interno. No lo "arregles" sin
consultar.

## 8. Qué NO hacer

- ❌ No edites ni borres `assets/styles.css` ni `assets/accordion.js`.
- ❌ No crees archivos HTML sueltos por sección — todo va en `index.html`.
- ❌ No cambies la paleta ni las fuentes.
- ❌ No inventes campos que no están en las capturas.
