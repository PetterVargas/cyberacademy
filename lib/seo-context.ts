import { appName } from './shared';

type TreeNode = {
  type: string;
  name?: unknown;
  url?: string;
  index?: { url: string };
  children?: TreeNode[];
};

// Títulos que se repiten en todos los cursos/módulos (Overview, Diagrama del
// curso, ...). Para buscadores se les agrega el nombre del módulo o curso.
const GENERIC_TITLES = new Set([
  'Overview',
  'Diagrama del curso',
  '¿Qué aprendimos?',
  'Evaluación y Certificación',
]);

const MIN_DESCRIPTION_LENGTH = 100;

/**
 * Nombres de las carpetas (curso, módulo...) que contienen la página, de la más
 * externa a la más interna. A diferencia de `getBreadcrumbItems` de fumadocs,
 * conserva las carpetas `root` y la carpeta de la que la página es índice.
 */
export function getFolderTrail(nodes: TreeNode[], url: string): string[] | null {
  for (const node of nodes) {
    if (node.type === 'page' && node.url === url) return [];
    if (node.type !== 'folder') continue;
    const name = String(node.name ?? '');
    if (node.index?.url === url) return [name];
    const sub = getFolderTrail(node.children ?? [], url);
    if (sub) return [name, ...sub];
  }
  return null;
}

function stripCoursePrefix(name: string) {
  return name.replace(/^Curso de /, '');
}

/**
 * Título y descripción para metadata/JSON-LD. El título visible de la página no
 * cambia; solo se agrega contexto (módulo/curso) donde el título por sí solo
 * es genérico o la descripción es demasiado corta para un snippet.
 */
export function getSeoTitleAndDescription(
  page: { url: string; slugs: string[]; data: { title: string; description?: string } },
  tree: { children: TreeNode[] },
  duplicateTitles: Set<string>,
) {
  const { title } = page.data;
  const description = page.data.description ?? '';
  const trail = (getFolderTrail(tree.children, page.url) ?? []).filter(Boolean);
  const course = trail[0];
  const section = trail.length > 1 ? trail[trail.length - 1] : undefined;

  let seoTitle = title;
  if (title === 'Overview' && section && course) {
    seoTitle = `${section} · ${stripCoursePrefix(course)}`;
  } else if ((GENERIC_TITLES.has(title) || duplicateTitles.has(title)) && course && title !== course) {
    const separator = /[?!]$/.test(title) ? ' —' : ':';
    seoTitle = `${title}${separator} ${stripCoursePrefix(course)}`;
  }

  let seoDescription = description;
  if (description.length < MIN_DESCRIPTION_LENGTH) {
    const base = description.replace(/[.\s]+$/, '');
    if (!course) {
      seoDescription = `${base}. Cursos de ciberseguridad online en ${appName}.`;
    } else if (base.includes(course) || title === course) {
      seoDescription = title === course ? `${base}. ${course} en ${appName}.` : `${base} en ${appName}.`;
    } else {
      const context = section ? `${section} · ${course}` : course;
      seoDescription = `${base}. ${context} en ${appName}.`;
    }
  }

  // El índice del curso es la única página con un solo slug (/<dominio>/<curso>).
  const isCourseRoot = page.slugs.length === 1;

  return { title: seoTitle, description: seoDescription, isCourseRoot, course };
}

/** Títulos que aparecen más de una vez en las páginas recibidas. */
export function findDuplicateTitles(pages: { data: { title: string } }[]) {
  const counts = new Map<string, number>();
  for (const p of pages) counts.set(p.data.title, (counts.get(p.data.title) ?? 0) + 1);
  return new Set([...counts].filter(([, n]) => n > 1).map(([t]) => t));
}
