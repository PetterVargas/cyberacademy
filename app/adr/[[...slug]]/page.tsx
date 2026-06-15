import { adrSource, getAdrPageImage, getAdrPageMarkdownUrl } from '@/lib/source';
import { renderDomainPage, generateDomainMetadata } from '@/lib/domain-page';
import type { Metadata } from 'next';

export default async function Page(props: PageProps<'/adr/[[...slug]]'>) {
  const { slug } = await props.params;
  return renderDomainPage(adrSource, { getPageImage: getAdrPageImage, getPageMarkdownUrl: getAdrPageMarkdownUrl }, 'adr', slug);
}

export async function generateStaticParams() {
  return adrSource.generateParams();
}

export async function generateMetadata(props: PageProps<'/adr/[[...slug]]'>): Promise<Metadata> {
  const { slug } = await props.params;
  return generateDomainMetadata(adrSource, { getPageImage: getAdrPageImage, getPageMarkdownUrl: getAdrPageMarkdownUrl }, slug);
}
