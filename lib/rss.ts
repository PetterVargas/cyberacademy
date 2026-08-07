import { Feed } from 'feed';
import { cyberusuarioSource, cyberguardianSource, allDomainSources } from '@/lib/source';
import { appName, baseUrl } from '@/lib/shared';

export function getRSS() {
  const feed = new Feed({
    title: appName,
    id: baseUrl,
    link: baseUrl,
    language: 'es',
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  });

  const pages = [
    ...cyberusuarioSource.getPages(),
    ...cyberguardianSource.getPages(),
    ...allDomainSources.flatMap((s) => s.getPages()),
  ];

  for (const page of pages) {
    feed.addItem({
      id: page.url,
      title: page.data.title,
      description: page.data.description,
      link: `${baseUrl}${page.url}`,
      date: new Date(),
    });
  }

  return feed.rss2();
}
