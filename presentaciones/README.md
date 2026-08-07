# Presentaciones

Proyecto independiente basado en [Slidev](https://sli.dev/), separado del stack de Fumadocs de la raíz del repositorio (no comparte `node_modules` ni workspace).

## Presentaciones disponibles

Las presentaciones se listan en [`decks.json`](./decks.json). Para iniciar el servidor de desarrollo:

```bash
pnpm dev
```

Si hay más de una presentación registrada, `pnpm dev` te muestra un menú para elegir cuál abrir (por número o por slug). Si solo hay una, la abre directo.

También puedes saltarte el menú indicando el slug:

```bash
pnpm dev <slug>
# por ejemplo:
pnpm dev curso-introduccion-a-la-ciberseguridad
```

Cada opción levanta el servidor de desarrollo en <http://localhost:3030> con la presentación elegida.

## Estructura

- `slides/` — solo los `.md` de cada presentación.
- `components/`, `snippets/`, `pages/` — recursos compartidos entre presentaciones, en la raíz de `presentaciones/`. Cada deck los referencia con rutas relativas (`../components/...`, `../snippets/...`, `../pages/...`) y declara `addons: ['.']` en su frontmatter para que Slidev registre `presentaciones/` como raíz adicional (así los componentes de `components/` quedan disponibles como tags globales, p. ej. `<Counter />`).

## Agregar una nueva presentación

1. Crea el archivo `<slug>.md` en `presentaciones/slides/` (usa `slides/curso-introduccion-a-la-ciberseguridad.md` como referencia). Si vas a usar componentes/snippets/páginas compartidas, incluye `addons: ['.']` en el frontmatter.
2. Agrégalo a [`decks.json`](./decks.json) con `slug`, `entry` (ruta relativa desde `presentaciones/`, ej. `slides/<slug>.md`), `title` y `description`.

Con eso ya aparece en el menú de `pnpm dev` y en el índice que genera `pnpm build` — no hace falta tocar `package.json`.

## Build de todas las presentaciones

```bash
pnpm build
```

Genera `dist/` con cada presentación en `dist/<slug>/` y una página `dist/index.html` a modo de índice para elegir cuál mostrar (útil al desplegar en Netlify/Vercel, ya configurados en este proyecto).

## Otros comandos

- `pnpm export` — exporta la presentación por defecto (`slides/slides.md`) a PDF.

Más información en la [documentación de Slidev](https://sli.dev/).
