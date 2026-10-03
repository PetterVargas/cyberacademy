import {
  DocsBody, DocsDescription, DocsPage, DocsTitle,
  MarkdownCopyButton, ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { gitConfig, baseUrl } from '@/lib/shared';
import { getContentFlowNeighbours, allDomainSources, cyberusuarioSource, cyberguardianSource } from '@/lib/source';
import { findDuplicateTitles, getSeoTitleAndDescription } from '@/lib/seo-context';
import { buildPageMetadata } from '@/lib/metadata';
import { JsonLd, courseJsonLd, learningResourceJsonLd, breadcrumbJsonLd } from '@/lib/json-ld';
import { getBreadcrumbItems } from 'fumadocs-core/breadcrumb';
import type { Metadata } from 'next';

type AnySource = {
  getPage: (slug?: string[]) => any;
  generateParams: () => any;
  getPageTree: () => any;
};

let duplicateTitles: Set<string> | undefined;
function getDuplicateTitles() {
  duplicateTitles ??= findDuplicateTitles(
    [cyberusuarioSource, cyberguardianSource, ...allDomainSources].flatMap(
      (source) => source.getPages() as { data: { title: string } }[],
    ),
  );
  return duplicateTitles;
}

function getSeo(source: AnySource, page: any) {
  return getSeoTitleAndDescription(page, source.getPageTree(), getDuplicateTitles());
}

type PageFns = {
  getPageImage: (page: any) => { url: string };
  getPageMarkdownUrl: (page: any) => { url: string; segments: string[] };
};

export async function renderDomainPage(
  source: AnySource,
  fns: PageFns,
  contentSlug: string,
  slug: string[] | undefined,
) {
  const page = source.getPage(slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = fns.getPageMarkdownUrl(page).url;
  const neighbours = getContentFlowNeighbours(page.url);
  const seo = getSeo(source, page);
  const domainRootUrl = source.getPage([])?.url ?? source.getPage()?.url;
  const breadcrumbItems = [
    { name: 'Inicio', url: baseUrl },
    ...getBreadcrumbItems(page.url, source.getPageTree(), {
      includeRoot: { url: domainRootUrl },
      includePage: true,
    }),
  ];

  return (
    <>
      <JsonLd
        data={
          seo.isCourseRoot || !seo.course
            ? courseJsonLd({ name: seo.title, description: seo.description, url: `${baseUrl}${page.url}` })
            : learningResourceJsonLd({
                name: seo.title,
                description: seo.description,
                url: `${baseUrl}${page.url}`,
                courseName: seo.course,
              })
        }
      />
      <JsonLd
        data={breadcrumbJsonLd(
          breadcrumbItems.map((item) => ({ name: String(item.name), url: item.url })),
        )}
      />
      <DocsPage
        toc={page.data.toc}
        full={page.data.full}
        footer={{ items: neighbours }}
      >
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
        <div className="flex flex-row gap-2 items-center border-b pb-6">
          <MarkdownCopyButton markdownUrl={markdownUrl} />
          <ViewOptionsPopover
            markdownUrl={markdownUrl}
            githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/${contentSlug}/${page.path}`}
          />
        </div>
        <DocsBody>
          <MDX components={getMDXComponents({ a: createRelativeLink(source as any, page) })} />
        </DocsBody>
      </DocsPage>
    </>
  );
}

export async function generateDomainMetadata(
  source: AnySource,
  fns: PageFns,
  slug: string[] | undefined,
): Promise<Metadata> {
  const page = source.getPage(slug);
  if (!page) notFound();
  const seo = getSeo(source, page);
  return buildPageMetadata({
    title: seo.title,
    description: seo.description,
    path: page.url,
    image: fns.getPageImage(page).url,
  });
}
