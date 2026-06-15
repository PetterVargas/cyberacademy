# CyberAcademy — DivisionCero

Plataforma open-source y práctica para aprender Ciberseguridad en LatAm, construida sobre el **Kudo Framework de Ciberseguridad** de DivisionCero.

## Rutas de aprendizaje

### CyberUsuarios
Cursos orientados a colaboradores y usuarios finales que quieren protegerse en el ciberespacio.

### CyberGuardianes
Cursos para profesionales de Ciberseguridad, organizados en 8 dominios:

| Dominio | Nombre completo | Descripción |
|---------|----------------|-------------|
| **COR** | Coherencia Organizacional | Gobernanza y estructura organizacional |
| **CIP** | Identidad y Puntos Finales | Gestión de identidades y dispositivos |
| **CIF** | Infraestructura | Seguridad en infraestructura y redes |
| **CAP** | Aplicaciones | Desarrollo seguro y AppSec |
| **CCN** | Continuidad del Negocio | Gestión de cambios y continuidad |
| **ADR** | Análisis, Detección y Respuesta | Detección y respuesta a incidentes |
| **THP** | Talento Humano y Proveedores | Gestión de personas y proveedores |
| **DIA** | Datos e Inteligencia Artificial | Protección de datos e IA |

## Stack tecnológico

- **Framework**: Next.js 16 (static export)
- **Contenido**: Fumadocs + MDX
- **Estilos**: Tailwind CSS v4
- **Lenguaje**: TypeScript
- **Paquetes**: pnpm
- **Extras**: KaTeX (matemáticas), Mermaid (diagramas), Twoslash (TypeScript interactivo)

## Desarrollo local

```bash
pnpm install
pnpm dev
```

La app estará disponible en `http://localhost:3000`.

## Comandos disponibles

```bash
pnpm dev           # Servidor de desarrollo
pnpm build         # Build estático en /out
pnpm start         # Sirve el build estático
pnpm types:check   # Verificación de tipos TypeScript
pnpm lint:links    # Validación de enlaces internos
pnpm export:pdf    # Exporta contenido a PDF
```

## Estructura del proyecto

```
content/           # Contenido MDX por dominio
  overview/        # Vista general
  cyberusuario/    # Ruta CyberUsuarios
  cor/ cip/ cif/ cap/ ccn/ adr/ thp/ dia/  # Dominios CyberGuardianes
  blog/            # Artículos del blog
app/               # Rutas Next.js (App Router)
components/        # Componentes React reutilizables
lib/               # Utilidades y configuración compartida
scripts/           # Scripts de lint y exportación PDF
```

## Contribuir

1. Haz fork del repositorio
2. Crea una rama: `git checkout -b feature/mi-contribucion`
3. Realiza tus cambios en `content/` (MDX) o en el código
4. Abre un Pull Request

El contenido vive en archivos `.mdx` dentro de `content/`. No se requiere conocimiento de React para contribuir documentación.

## Licencia

Ver [LICENSE](LICENSE).
