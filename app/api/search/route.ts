import { cyberusuarioSource, cyberguardianSource, allDomainSources } from '@/lib/source';
import { createSearchAPI } from 'fumadocs-core/search/server';

export const revalidate = false;

const allSources = [cyberusuarioSource, cyberguardianSource, ...allDomainSources];

export const { staticGET: GET } = createSearchAPI('advanced', {
  indexes: allSources.flatMap((source) =>
    source.getPages().map((page) => ({
      id: page.url,
      title: page.data.title,
      description: page.data.description,
      url: page.url,
      structuredData: page.data.structuredData,
    })),
  ),
  language: 'english',
});
