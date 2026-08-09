# cover

Sirve una imagen de portada aleatoria para las presentaciones de Slidev en **cover.divisioncero.com**,
tomada de la colección propia de Unsplash:
https://unsplash.com/collections/STX3OtAI8tM/cover-divisioncero

Al pedir `/` redirige (302) a `/{id}.webp`, una imagen elegida al azar entre las procesadas
(1920×1080, webp) de la colección.

## Cómo funciona

- `scripts/fetch.ts` descarga las fotos de la colección de Unsplash usando `UNSPLASH_ACCESS_KEY` y
  `UNSPLASH_COLLECTION_ID`, y guarda un `.md` de créditos por foto.
- `scripts/process.ts` redimensiona/comprime cada foto a 1920×1080 `.webp` y genera `public/index.json`
  con la lista de ids.
- `functions/index.ts` es una Cloudflare Pages Function: elige un id al azar de `public/index.json` y
  redirige a `/{id}.webp`. Las imágenes se sirven directamente como assets estáticos del proyecto.
- `public/` y `downloads/` son generados (están en `.gitignore`, no se commitean) — se regeneran en
  cada deploy.

## Agregar o actualizar fotos

1. Sube tus fotos a la colección de Unsplash de arriba.
2. Haz push a `main` (o el branch de producción configurado en el proyecto de Pages) — Cloudflare
   detecta el commit vía su integración nativa con GitHub y dispara el build automáticamente. No hace
   falta ningún paso local ni GitHub Actions.

## Desarrollo local

```bash
cp .env-example .env
# completa UNSPLASH_ACCESS_KEY con tu key de https://unsplash.com/developers
pnpm install
pnpm dev   # descarga+procesa las fotos y levanta wrangler pages dev
```

## Deploy (Cloudflare Pages — Git integration)

El build y deploy corren en la infraestructura de Cloudflare, disparados por su integración directa con
GitHub (sin GitHub Actions ni tokens de por medio). Configuración del proyecto en el dashboard
(Workers & Pages → Create → Pages → Connect to Git):

| Setting                  | Valor                          |
| ------------------------- | -------------------------------- |
| Repositorio                | este repo                          |
| Root directory               | `cover`                              |
| Build command                  | `pnpm run update`                      |
| Build output directory           | `public`                                 |

`pnpm run update` corre `fetch` + `process` en el propio build de Cloudflare, así que las imágenes se
regeneran en cada deploy. Cloudflare detecta e instala con pnpm automáticamente por el `pnpm-lock.yaml`
committeado, y toma `functions/` (dentro de `cover/`, gracias al Root directory) sin configuración
adicional.

Como el build ya no lo corre GitHub Actions, ambas variables viven en el propio proyecto de Pages,
panel **Build → Variables and secrets**:

| Nombre                    | Tipo               | Valor                         |
| -------------------------- | ------------------- | ------------------------------- |
| `UNSPLASH_ACCESS_KEY`       | Secret                | tu access key de unsplash.com/developers |
| `UNSPLASH_COLLECTION_ID`     | Plaintext                | `STX3OtAI8tM`                              |

No las declares en `wrangler.jsonc`. En pruebas, la sola presencia de la clave
`pages_build_output_dir` en `wrangler.jsonc` activa el modo beta "Wrangler configuration file" en el
build remoto de Cloudflare, y ese modo interfiere de forma poco confiable con qué variables del
dashboard llegan al build (a veces pasaba una, a veces la otra, nunca las dos). Por eso
`cover/wrangler.jsonc` a propósito **no** tiene esa clave — el build output dir ya se pasa explícito
por CLI en los scripts `dev`/`deploy` (`package.json`) y está definido en el dashboard (Build
configuration). Como los Secrets no se pueden commitear de todas formas, todo (plaintext y secret)
debe quedar únicamente en el panel **Build → Variables and secrets** del dashboard.

Opcional pero recomendado: agrega también `NODE_VERSION=22` como variable en el dashboard, para que el
build use la misma versión de Node con la que se probó localmente.

## Dominio custom

Una vez creado el proyecto de Pages (`cover-divisioncero`), agrega el dominio custom en el dashboard de
Cloudflare: Workers & Pages → cover-divisioncero → Custom domains → `cover.divisioncero.com` (requiere
que `divisioncero.com` ya esté como zona en tu cuenta de Cloudflare).

Los créditos y los enlaces de cualquier imagen los puedes ver cambiando `.webp` por
`.md`, por ejemplo `https://cover.divisioncero.com/{id}.webp` → `https://cover.divisioncero.com/{id}.md`.
