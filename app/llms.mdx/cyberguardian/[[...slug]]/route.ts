import { cyberguardianSource, getCyberguardianPageMarkdownUrl, getLLMText } from '@/lib/source';
import { notFound } from 'next/navigation';

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<'/llms.mdx/cyberguardian/[[...slug]]'>) {
  const { slug } = await params;
  const page = cyberguardianSource.getPage(slug?.slice(0, -1));
  if (!page) notFound();
  return new Response(await getLLMText(page), { headers: { 'Content-Type': 'text/markdown' } });
}

export function generateStaticParams() {
  return cyberguardianSource.getPages().map((page) => ({ slug: getCyberguardianPageMarkdownUrl(page).segments }));
}
