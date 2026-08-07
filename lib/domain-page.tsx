import {
  DocsBody, DocsDescription, DocsPage, DocsTitle,
  MarkdownCopyButton, ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { gitConfig } from '@/lib/shared';
import { getContentFlowNeighbours } from '@/lib/source';
import { buildPageMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

type AnySource = {
  getPage: (slug?: string[]) => any;
  generateParams: () => any;
};

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

  return (
    <DocsPage toc={page.data.toc} full={page.data.full} footer={{ items: neighbours }}>
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
  );
}

export async function generateDomainMetadata(
  source: AnySource,
  fns: PageFns,
  slug: string[] | undefined,
): Promise<Metadata> {
  const page = source.getPage(slug);
  if (!page) notFound();
  return buildPageMetadata({
    title: page.data.title,
    description: page.data.description,
    path: page.url,
    image: fns.getPageImage(page).url,
  });
}
