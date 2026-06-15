import {
  DocsBody, DocsDescription, DocsPage, DocsTitle,
  MarkdownCopyButton, ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { gitConfig } from '@/lib/shared';
import { Feedback } from '@/components/feedback/client';
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

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
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
      <Feedback
        onSendAction={async (feedback) => {
          'use server';
          console.log(feedback);
          return {};
        }}
      />
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
  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: { images: fns.getPageImage(page).url },
  };
}
