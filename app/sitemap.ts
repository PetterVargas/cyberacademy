import type { MetadataRoute } from 'next';
import { baseUrl } from '@/lib/shared';
import { cyberusuarioSource, cyberguardianSource, allDomainSources, blog } from '@/lib/source';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/cursos`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/que-quieres-aprender-hoy`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.7 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blog.getPages().map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(page.data.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const docsSources = [cyberusuarioSource, cyberguardianSource, ...allDomainSources];
  const docsRoutes: MetadataRoute.Sitemap = docsSources.flatMap((source) =>
    source.getPages().map((page) => ({
      url: `${baseUrl}${page.url}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  );

  return [...staticRoutes, ...blogRoutes, ...docsRoutes];
}
