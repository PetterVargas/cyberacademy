export const appName = 'CyberAcademy';

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://cyberacademy.divisioncero.com';

// Next.js replaces the whole `alternates` object per route segment rather than
// deep-merging it, so any page that sets its own `alternates.canonical` must
// re-spread this to keep the RSS autodiscovery link from the root layout.
export const rssAlternateTypes = {
  'application/rss+xml': [{ title: appName, url: `${baseUrl}/rss.xml` }],
};

export const cyberusuarioRoute = '/cyberusuario';
export const cyberusuarioImageRoute = '/og/cyberusuario';
export const cyberusuarioContentRoute = '/llms.mdx/cyberusuario';

export const gitConfig = {
  user: 'PetterVargas',
  repo: 'cyberacademy',
  branch: 'main',
};

export const domains = [
  { slug: 'cor', name: 'COR', title: 'Coherencia Organizacional', description: 'Gobernanza y estructura organizacional' },
  { slug: 'cip', name: 'CIP', title: 'Ciberseguridad en Identidad y Puntos Finales', description: 'Gestión de identidades y dispositivos' },
  { slug: 'cif', name: 'CIF', title: 'Ciberseguridad en Infraestructura', description: 'Seguridad en infraestructura y redes' },
  { slug: 'cap', name: 'CAP', title: 'Ciberseguridad en Aplicaciones', description: 'Desarrollo seguro y AppSec' },
  { slug: 'ccn', name: 'CCN', title: 'Continuidad y Cambios del Negocio', description: 'Gestión de cambios y continuidad' },
  { slug: 'thp', name: 'THP', title: 'Ciberseguridad en Talento Humano y Proveedores', description: 'Gestión de personas y proveedores' },
  { slug: 'dia', name: 'DIA', title: 'Ciberseguridad en Datos e Inteligencia Artificial', description: 'Protección de datos e inteligencia artificial' },
  { slug: 'adr', name: 'ADR', title: 'Análisis, Detección y Respuesta de Ciberseguridad', description: 'Detección y respuesta a incidentes' },
] as const;
