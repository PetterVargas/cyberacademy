# videos/

Subproyecto independiente para crear **videos cortos explicativos** usando
[HyperFrames](https://hyperframes.heygen.com) (paquete npm
[`hyperframes`](https://www.npmjs.com/package/hyperframes)), la herramienta
open-source de HeyGen que renderiza video (MP4/WebM) a partir de
composiciones HTML.

Este directorio es un proyecto propio dentro del repo de `presentaciones/`:
tiene su propio `package.json` y su propio `pnpm-workspace.yaml`, por lo que
`pnpm install` aquí **no** toca las dependencias de Slidev en la raíz del
repo, y viceversa.

## Requisitos previos

- **Node.js 22+** (verificar con `node --version`).
- **FFmpeg** en el `PATH` — necesario para codificar el video final:

  ```bash
  sudo apt-get update && sudo apt-get install -y ffmpeg
  ```

- Chrome headless se descarga solo la primera vez que se usa `preview` o
  `render` (vía Puppeteer).

Se puede verificar el entorno completo en cualquier momento con:

```bash
pnpm exec hyperframes doctor
```

## Instalación

```bash
cd videos
pnpm install
```

Esto deja `hyperframes` como `devDependency` de este subproyecto, ejecutable
vía `pnpm exec hyperframes <comando>`.

## Estructura

```
videos/
├── package.json          # subproyecto propio, hyperframes como devDependency
├── pnpm-workspace.yaml    # aísla este directorio como workspace pnpm separado
├── README.md              # este archivo
├── ejemplo-intro/         # composición de ejemplo generada con `hyperframes init`
│   ├── index.html          # composición raíz (timeline principal)
│   ├── renders/            # salida de `hyperframes render` (mp4/webm)
│   ├── hyperframes.json    # config del proyecto (paths de blocks/assets)
│   ├── meta.json           # metadata (id, nombre)
│   ├── package.json        # scripts npm (dev/check/render) vía npx
│   └── CLAUDE.md / AGENTS.md  # guía para agentes IA sobre cómo editar esta composición
└── catalogo-completo/     # TODO el catálogo de HyperFrames instalado localmente
    └── compositions/
        ├── *.html                # 153 blocks (composiciones completas de ejemplo)
        └── components/*.html     # 220 components (piezas para copiar/pegar)
```

Cada video vive en su propia subcarpeta (como `ejemplo-intro/`), creada con
`hyperframes init`. Así cada composición queda autocontenida (su propio
`index.html`, assets y config).

### Catálogo completo local (`catalogo-completo/`)

Para no tener que ejecutar `hyperframes add <efecto>` (con llamada a red)
cada vez que se necesita un efecto, este proyecto tiene **los 372 items del
registro de HyperFrames** (154 blocks + 218 components, 370 instalados con
éxito — ver nota abajo) descargados como archivos `.html` locales en
`catalogo-completo/compositions/`:

- **Blocks** (`compositions/*.html`) — composiciones completas y listas para
  usar/adaptar: intros, lower-thirds, gráficas (`bar-chart-race`,
  `data-chart`), UI mockeada de apps (`chatgpt-exchange`,
  `slack-notification-ad`), transiciones con shaders, efectos de código
  (`code-diff`, `code-morph`, `code-particle-assemble`), mapas, etc.
- **Components** (`compositions/components/*.html`) — piezas reutilizables
  más pequeñas para insertar dentro de una composición propia: captions
  animados (`caption-highlight`, `caption-kinetic-slam`), transiciones
  (`transitions-blur`, `whip-pan`), tipografía cinética (`headline-slam`,
  `text-shimmer`), gráficos de datos, marcos de dispositivo, etc.

Categorías más comunes (por tag): `motion-primitive` (111), `showcase` (58),
`transition` (47), `overlay` (40), `typography` (40), `code` (33),
`video-primitive` (30), `shader` (19), `captions` (17), `data` (15).

**Cómo usar un efecto del catálogo en un video propio:**

1. Busca el efecto por nombre o tag:
   ```bash
   pnpm exec hyperframes catalog --tag transition
   pnpm exec hyperframes catalog --query "contador de dinero"
   ```
2. Ábrelo directo desde `catalogo-completo/compositions/` (o
   `.../components/`) para ver el HTML/CSS/JS de referencia.
3. Cópialo/adáptalo dentro del `index.html` de tu propio proyecto de video —
   o instálalo directo en tu proyecto con
   `pnpm exec hyperframes add <nombre> --dir <tu-proyecto>` (esto también usa
   red la primera vez que el registro no está cacheado, pero con
   `catalogo-completo/` ya tienes el contenido para copiar sin red).

**Cómo actualizar el catálogo local en el futuro:**

El registro de HyperFrames se actualiza en GitHub (nuevos blocks/components,
o cambios a los existentes). No hay un comando único "update all" en el CLI,
así que este proyecto trae un script que reinstala (con `--force`, sobre-
escribiendo) los 372 items actuales:

```bash
cd videos
./scripts/update-catalog.sh
```

Qué hace: vuelve a pedir el listado completo al registro
(`hyperframes catalog --json`) y por cada item corre
`hyperframes add <nombre> --dir catalogo-completo --force`, reportando
cuántos se actualizaron y cuáles fallaron al final.

Para actualizar solo un item puntual:

```bash
pnpm exec hyperframes add <nombre> --dir catalogo-completo --force
```

## Dependencias opcionales (transcripción / voz / música)

`hyperframes doctor` marca tres cosas como faltantes — **no bloquean** los
comandos usados hasta ahora (preview/check/render de una composición sin
audio generado), pero habilitan funciones específicas si se necesitan:

- **whisper-cpp** — motor de transcripción local (voz a texto). Lo usa
  `hyperframes init --video=<archivo>` / `--audio=<archivo>` para generar un
  `transcript.json` con marcas de tiempo por palabra, que a su vez alimenta
  los components de captions (`caption-highlight`, `caption-kinetic-slam`,
  etc.) para subtitular automáticamente metraje propio. Sin esto, hay que
  pasar `--skip-transcribe` al crear el proyecto (sin transcripción
  automática) o escribir el transcript a mano.
- **TTS (Kokoro)** — texto a voz local (`kokoro-onnx`). Genera narración en
  audio a partir de un guion, para videos tipo "faceless explainer" cuando no
  se cuenta con una grabación de voz propia.
- **BGM (MusicGen)** — generación local de música de fondo instrumental a
  partir de un prompt de estilo/mood (modelo MusicGen de Meta, vía
  `transformers`/`torch`), para cuando no se tiene una pista de audio propia
  para el video.

Ninguna de las tres es necesaria para los videos con texto/gráficos
animados (como `ejemplo-intro`) ni para usar los blocks/components del
catálogo. Solo instálalas si vas a generar narración, subtítulos
automáticos de metraje propio, o música de fondo, todo de forma local (sin
depender de la nube de HeyGen):

```bash
pip install kokoro-onnx soundfile                        # TTS
pip install transformers torch soundfile numpy            # BGM
# whisper-cpp: compilar desde fuente, ver hyperframes doctor
```

### Pendiente — instalar cuando aplique

No instaladas todavía (estado al 2026-08-22, confirmar con
`pnpm exec hyperframes doctor`). Checklist para cuando el video a crear lo
requiera:

- [ ] **whisper-cpp** → instalar *antes* de correr
      `hyperframes init --video=... / --audio=...` sobre metraje propio si
      quieres transcripción y captions automáticos (si no, usar
      `--skip-transcribe` y aceptar que no hay auto-captions).
      Build desde fuente: https://github.com/ggml-org/whisper.cpp#building
      (requiere `cmake` y compilador de C).
- [ ] **TTS (Kokoro)** → instalar *antes* de un video sin voz grabada que
      necesite narración generada (p. ej. faceless-explainer).
      `pip install kokoro-onnx soundfile`
- [ ] **BGM (MusicGen)** → instalar *antes* de un video que necesite música
      de fondo generada (sin pista de audio propia).
      `pip install transformers torch soundfile numpy`

Verificar después de instalar cada una:

```bash
pnpm exec hyperframes doctor
```

## Modo de uso

### 1. Crear un nuevo video

Desde `videos/`:

```bash
pnpm exec hyperframes init nombre-del-video --resolution landscape
```

Opciones útiles de `init`:

- `--example=<nombre>` — partir de un ejemplo (`blank`, `warm-grain`,
  `swiss-grid`, etc.) en lugar de una composición vacía.
- `--resolution=<preset>` — `landscape` (1920×1080), `portrait` (1080×1920),
  `square` (1080×1080), o variantes `-4k`.
- `--video=<archivo>` / `--audio=<archivo>` — arrancar a partir de metraje o
  audio propio (con transcripción automática vía Whisper, salvo
  `--skip-transcribe`).
- `--non-interactive` — sin prompts, para uso en agentes/CI.

### 2. Editar la composición

Cada composición es un HTML con elementos temporizados. Reglas clave:

1. Todo elemento con tiempo necesita `data-start`, `data-duration` y
   `data-track-index`.
2. Los elementos temporizados deben tener `class="clip"` (el framework lo usa
   para controlar visibilidad).
3. Las animaciones se definen con GSAP y se registran en
   `window.__timelines`:

   ```js
   window.__timelines = window.__timelines || {};
   window.__timelines["main"] = gsap.timeline({ paused: true });
   ```

4. El video usa `muted` en `<video>` y una pista `<audio>` separada para el
   sonido.
5. Sin lógica no determinística: nada de `Date.now()`, `Math.random()` ni
   `fetch` a red durante el render.

Ejemplo mínimo de un clip de texto animado:

```html
<div
  id="title"
  class="clip"
  data-start="0"
  data-duration="4"
  data-track-index="1"
  style="font-size: 64px; color: #fff; padding: 40px"
>
  Hola mundo
</div>

<script>
  window.__timelines["main"].from(
    "#title",
    { opacity: 0, y: -50, duration: 1 },
    0,
  );
</script>
```

### 3. Previsualizar

Desde la carpeta de la composición (p. ej. `ejemplo-intro/`):

```bash
npm run dev
# o, desde videos/: pnpm exec hyperframes preview
```

Abre un Studio con recarga en vivo en el navegador.

### 4. Validar antes de renderizar

```bash
npm run check
# equivalente a: pnpm exec hyperframes check
```

Corre lint + validación en runtime (Chrome headless) + inspección de layout
en un solo comando. Corregir todos los errores antes de renderizar.

### 5. Renderizar a MP4

```bash
npm run render
# o: pnpm exec hyperframes render
```

El renderer captura cada frame en Chrome headless y lo codifica con FFmpeg a
un MP4 determinista (misma entrada → mismo archivo de salida). El archivo
queda en `<proyecto>/renders/<nombre>_<fecha>.mp4` (p. ej. ya hay uno
generado en `ejemplo-intro/renders/`).

### Configuración de exportación (60 FPS fijo — estándar del proyecto)

Los videos de este directorio son **explicativos cortos tipo grabación de
escritorio** (demos de producto, tutoriales, walkthroughs) pensados para
publicarse en **YouTube y Udemy**. Para ese escenario **siempre se renderiza
a 60 FPS** — es el frame rate que mejor sostiene movimiento de cursor,
scroll y transiciones de UI sin motion judder, y es el estándar que
YouTube/Udemy esperan para contenido de pantalla (a diferencia de un
talking-head o una animación puramente tipográfica, donde 30 FPS alcanza).

**Regla: fijar 60 FPS en la composición, no solo en el comando de render.**
Así ningún render accidental cae a 30 (el default del CLI) por olvidar el
flag `-f/--fps`. Se define una sola vez en el `<html>` raíz de cada
composición:

```html
<html lang="es" data-resolution="landscape" data-fps="60"></html>
```

Con `data-fps="60"` en la composición, `hyperframes render` ya usa 60 FPS
por defecto (el flag `-f 60` solo hace falta si se quiere forzar un valor
distinto puntualmente).

**Comando de render recomendado para este tipo de video:**

```bash
pnpm exec hyperframes render \
  --fps 60 \
  --resolution landscape \
  --quality high \
  --format mp4 \
  --video-frame-format png
```

Por qué cada valor:

- **`--fps 60`** — ver arriba; también sirve como respaldo explícito aunque
  ya esté fijado con `data-fps="60"` en la composición.
- **`--resolution landscape`** (1920×1080 / 1080p) — resolución estándar de
  YouTube y Udemy para contenido de escritorio; buen balance entre nitidez
  de texto/UI y peso de archivo. Solo subir a `landscape-4k` si el detalle
  de pantalla lo justifica (p. ej. capturas de código con fuente pequeña) —
  encoder H.264 + CRF bajo a 4K produce archivos mucho más pesados y no
  aporta si el destino final es YouTube/Udemy, que re-comprimen igual al
  subir.
- **`--quality high`** — para video explicativo con texto, UI y bordes
  definidos (a diferencia de b-roll fotográfico), la compresión agresiva
  se nota primero en el texto. `high` minimiza artefactos de compresión
  antes de que la plataforma vuelva a comprimir en su propio pipeline de
  ingesta.
- **`--format mp4`** — máxima compatibilidad de subida en YouTube y Udemy
  (H.264 + AAC vía `+faststart`), sin pasos extra de conversión.
- **`--video-frame-format png`** — solo relevante si la composición incluye
  metraje de video propio (p. ej. una grabación de pantalla real insertada
  como `<video>` fuente, no solo overlays HTML/CSS animados). Evita
  artefactos JPEG al extraer frames de contenido con colores saturados de
  UI/texto. Si el video es 100% gráficos/texto animados en HTML (como
  `ejemplo-intro`), esta opción no tiene efecto — se puede omitir.

**Ajuste fino opcional de calidad (`--crf`):** si `--quality high` no basta
(por ejemplo, texto pequeño con jpeg-ringing visible), sobreescribir con un
CRF explícito más bajo (más calidad, más peso) usando
`--crf 16` a `--crf 18` — rango típico "visualmente sin pérdida" para
H.264 con `-preset veryfast`/`medium`. `--crf` es mutuamente exclusivo con
`--video-bitrate`; no combinar ambos.

**Para iterar rápido durante edición** (no para la entrega final), usar
`--quality draft` y/o `-f 30` — mucho más rápido de renderizar, sin
comprometer el archivo final que sí debe salir en 60 FPS / `high`.

### Otros comandos útiles

```bash
pnpm exec hyperframes info            # metadata del proyecto
pnpm exec hyperframes compositions    # listar composiciones del proyecto
pnpm exec hyperframes snapshot        # capturar frames clave como PNG
pnpm exec hyperframes benchmark       # comparar velocidad/calidad de render
pnpm exec hyperframes docs <topic>    # docs offline: data-attributes, gsap,
                                       # compositions, rendering, examples,
                                       # troubleshooting
```

## Notas

- Documentación completa: https://hyperframes.heygen.com
- Repositorio: https://github.com/heygen-com/hyperframes
