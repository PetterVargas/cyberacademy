export const appName = 'CyberAcademy';

export const cyberusuarioRoute = '/cyberusuario';
export const cyberusuarioImageRoute = '/og/cyberusuario';
export const cyberusuarioContentRoute = '/llms.mdx/cyberusuario';

export const gitConfig = {
  user: 'PetterVargas',
  repo: 'divisioncero-cyberacademy',
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
