import type { MetadataRoute } from 'next';
import { baseUrl } from '@/lib/shared';
import { cyberusuarioSource, cyberguardianSource, allDomainSources } from '@/lib/source';
import { getLastModified } from '@/lib/git-last-modified';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  // Las páginas estáticas listan contenido, así que su fecha es la del último
  // cambio en `content/` o en su propio archivo, no la del build.
  const latest = (...paths: string[]) =>
    paths
      .map((path) => getLastModified(path))
      .filter((date): date is Date => !!date)
      .sort((a, b) => b.getTime() - a.getTime())[0];

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: latest('app/(home)/page.tsx', 'content'), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/cursos`, lastModified: latest('app/(home)/cursos', 'content'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/que-quieres-aprender-hoy`, lastModified: latest('app/(home)/que-quieres-aprender-hoy'), changeFrequency: 'monthly', priority: 0.6 },
  ];

  const docsSourcesWithSlug = [
    { source: cyberusuarioSource, contentSlug: 'cyberusuario' },
    { source: cyberguardianSource, contentSlug: 'cyberguardian' },
    ...allDomainSources.map((source, i) => ({
      source,
      contentSlug: ['cor', 'cip', 'cif', 'cap', 'ccn', 'thp', 'dia', 'adr'][i],
    })),
  ];
  const docsRoutes: MetadataRoute.Sitemap = docsSourcesWithSlug.flatMap(({ source, contentSlug }) =>
    source.getPages().map((page: { url: string; path: string }) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: getLastModified(`content/${contentSlug}/${page.path}`),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  );

  return [...staticRoutes, ...docsRoutes];
}
