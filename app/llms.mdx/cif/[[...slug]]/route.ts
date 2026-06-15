import { cifSource, getCifPageMarkdownUrl, getLLMText } from '@/lib/source';
import { notFound } from 'next/navigation';

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<'/llms.mdx/cif/[[...slug]]'>) {
  const { slug } = await params;
  const page = cifSource.getPage(slug?.slice(0, -1));
  if (!page) notFound();
  return new Response(await getLLMText(page), { headers: { 'Content-Type': 'text/markdown' } });
}

export function generateStaticParams() {
  return cifSource.getPages().map((page) => ({ slug: getCifPageMarkdownUrl(page).segments }));
}
