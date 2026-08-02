import { type FileObject, printErrors, scanURLs, validateFiles } from 'next-validate-link';
import { cyberusuarioSource, cyberguardianSource, allDomainSources } from '@/lib/source';
import { domains } from '@/lib/shared';

async function checkLinks() {
  const allCyberusuarioPages = cyberusuarioSource.getPages();
  const allCyberguardianPages = cyberguardianSource.getPages();

  const domainPopulate = Object.fromEntries(
    domains.map((d, i) => [
      `${d.slug}/[[...slug]]`,
      allDomainSources[i].getPages().map((page) => ({
        value: { slug: page.slugs },
        hashes: page.data.toc.map((item) => item.url.slice(1)),
      })),
    ]),
  );

  const scanned = await scanURLs({
    preset: 'next',
    populate: {
      'cyberusuario/[[...slug]]': allCyberusuarioPages.map((page) => ({
        value: { slug: page.slugs },
        hashes: page.data.toc.map((item) => item.url.slice(1)),
      })),
      'cyberguardian/[[...slug]]': allCyberguardianPages.map((page) => ({
        value: { slug: page.slugs },
        hashes: page.data.toc.map((item) => item.url.slice(1)),
      })),
      ...domainPopulate,
    },
  });

  const files = await Promise.all([
    ...allCyberusuarioPages.map(toFileObject),
    ...allCyberguardianPages.map(toFileObject),
    ...allDomainSources.flatMap((s) => s.getPages().map(toFileObject)),
  ]);

  printErrors(
    await validateFiles(files, {
      scanned,
      markdown: { components: { Card: { attributes: ['href'] } } },
      checkRelativePaths: 'as-url',
    }),
    true,
  );
}

async function toFileObject(page: any): Promise<FileObject> {
  return {
    path: page.absolutePath,
    content: await page.data.getText('raw'),
    url: page.url,
    data: page.data,
  };
}

void checkLinks();
