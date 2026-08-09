import type { MetadataRoute } from 'next';
import { baseUrl } from '@/lib/shared';
import { cyberusuarioSource, cyberguardianSource, allDomainSources, blog } from '@/lib/source';
import { getLastModified } from '@/lib/git-last-modified';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: buildDate, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/cursos`, lastModified: buildDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/que-quieres-aprender-hoy`, lastModified: buildDate, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: buildDate, changeFrequency: 'weekly', priority: 0.7 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blog.getPages().map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(page.data.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

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
      lastModified: getLastModified(`content/${contentSlug}/${page.path}`) ?? buildDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  );

  return [...staticRoutes, ...blogRoutes, ...docsRoutes];
}
