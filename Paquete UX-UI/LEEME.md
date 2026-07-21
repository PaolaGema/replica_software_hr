# LÉEME primero 👋

Este paquete es para maquetar en HTML **4 secciones** del formulario de alta (estilo "el Salar"),
con el mismo formato que el resto del equipo, para después juntarlas.

**Tus secciones:** Cónyuge · Contacto de emergencia · Detalle de garante · Detalle de hijos.

## Qué hay en la carpeta

```
Paquete UX-UI/
├── LEEME.md            ← este archivo
├── CLAUDE.md           ← contexto para Claude (no hace falta que lo leas vos)
├── PROMPT-para-Claude.md   ← el mensaje que le pegás a Claude para arrancar
├── assets/
│   ├── styles.css      ← estilo compartido (NO tocar)
│   └── accordion.js    ← comportamiento del acordeón (NO tocar)
├── secciones/
│   ├── _plantilla-seccion.html            ← plantilla en blanco
│   └── 00-reingreso-colaborador_EJEMPLO.html  ← ejemplo YA resuelto
└── capturas/           ← acá guardás tus capturas de pantalla
    ├── 02-conyuge/
    ├── 03-contacto-de-emergencia/
    ├── 04-detalle-de-garante/
    └── 05-detalle-de-hijos/
```

## Pasos

1. **Descomprimí** esta carpeta en tu compu.
2. Entrá al Salar, **expandí una sección** (ej. Cónyuge) y sacá una **captura** con todos sus campos.
3. Guardá la captura en la subcarpeta que le toca (ej. `capturas/02-conyuge/`).
4. Abrí **Claude Code** dentro de esta carpeta. Como hay un `CLAUDE.md`, Claude ya entiende el contexto.
5. Pegále el mensaje de **`PROMPT-para-Claude.md`** (o simplemente arrastrá la captura y decile
   "maquetá esta sección siguiendo el CLAUDE.md").
6. Claude te crea el archivo, por ejemplo `secciones/02-conyuge.html`.
7. **Abrí ese `.html` en el navegador** (doble clic) y compará con la captura. Si coincide, ✅.
8. Repetí con las otras 3 secciones.

## Al terminar

Mandale de vuelta a la persona del equipo **la carpeta `secciones/` con tus 4 archivos** y **la
carpeta `capturas/`**. Con eso se ensambla el formulario completo.

> ⚠️ **No modifiques `assets/styles.css` ni `assets/accordion.js`** — son compartidos; si los cambiás,
> tu parte se va a ver distinta a la del resto al unir todo.
