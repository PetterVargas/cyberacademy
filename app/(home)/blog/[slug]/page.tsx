import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { blog } from '@/lib/source';
import { buildPageMetadata } from '@/lib/metadata';
import { baseUrl } from '@/lib/shared';
import { JsonLd, articleJsonLd, breadcrumbJsonLd } from '@/lib/json-ld';
import { ViewOptions } from '@/components/page-actions';

const owner = 'PetterVargas';
const repo = 'cyberacademy';

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);

  if (!page) notFound();
  const Mdx = page.data.body;

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: page.data.title,
          description: page.data.description,
          url: `${baseUrl}${page.url}`,
          datePublished: new Date(page.data.date).toISOString(),
          author: page.data.author,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Inicio', url: baseUrl },
          { name: 'Blog', url: '/blog' },
          { name: page.data.title, url: page.url },
        ])}
      />
      <div className="w-full max-w-(--fd-layout-width) mx-auto px-4 flex flex-col items-center py-12">
        <h1 className="mb-2 text-center text-3xl font-bold">{page.data.title}</h1>
        <p className="mb-2 text-center text-fd-muted-foreground">{page.data.description}</p>
        <div className="flex flex-row gap-2 items-center border-b mb-6 pb-4">
          <ViewOptions
            markdownUrl={`/api/mdx${page.url}`}
            githubUrl={`https://github.com/${owner}/${repo}/blob/main/content/blog/${page.path}`}
          />
        </div>
        <div className="flex flex-col items-center gap-1 text-sm">
          <span className="text-fd-muted-foreground">
            By {page.data.author} &middot; {new Date(page.data.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
        </div>
      </div>
      <article className="w-full max-w-(--fd-layout-width) mx-auto px-4 flex flex-col py-8">
        <div className="prose mx-auto min-w-0">
          <InlineTOC items={page.data.toc} />
          <Mdx components={defaultMdxComponents} />
        </div>
      </article>
    </>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  if (!page) notFound();

  return buildPageMetadata({
    title: page.data.title,
    description: page.data.description,
    path: page.url,
    type: 'article',
    publishedTime: new Date(page.data.date).toISOString(),
    authors: page.data.author ? [page.data.author] : undefined,
  });
}
