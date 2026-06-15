import { cipSource, getCipPageImage, getCipPageMarkdownUrl } from '@/lib/source';
import { renderDomainPage, generateDomainMetadata } from '@/lib/domain-page';
import type { Metadata } from 'next';

export default async function Page(props: PageProps<'/cip/[[...slug]]'>) {
  const { slug } = await props.params;
  return renderDomainPage(cipSource, { getPageImage: getCipPageImage, getPageMarkdownUrl: getCipPageMarkdownUrl }, 'cip', slug);
}

export async function generateStaticParams() {
  return cipSource.generateParams();
}

export async function generateMetadata(props: PageProps<'/cip/[[...slug]]'>): Promise<Metadata> {
  const { slug } = await props.params;
  return generateDomainMetadata(cipSource, { getPageImage: getCipPageImage, getPageMarkdownUrl: getCipPageMarkdownUrl }, slug);
}
