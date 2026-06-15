import { cyberusuarioSource, getCyberusuarioPageMarkdownUrl, getLLMText } from '@/lib/source';
import { notFound } from 'next/navigation';

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<'/llms.mdx/cyberusuario/[[...slug]]'>) {
  const { slug } = await params;
  const page = cyberusuarioSource.getPage(slug?.slice(0, -1));
  if (!page) notFound();

  return new Response(await getLLMText(page), {
    headers: {
      'Content-Type': 'text/markdown',
    },
  });
}

export function generateStaticParams() {
  return cyberusuarioSource.getPages().map((page) => ({
    slug: getCyberusuarioPageMarkdownUrl(page).segments,
  }));
}
