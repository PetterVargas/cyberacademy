import { thpSource, getThpPageImage, getThpPageMarkdownUrl } from '@/lib/source';
import { renderDomainPage, generateDomainMetadata } from '@/lib/domain-page';
import type { Metadata } from 'next';

export default async function Page(props: PageProps<'/thp/[[...slug]]'>) {
  const { slug } = await props.params;
  return renderDomainPage(thpSource, { getPageImage: getThpPageImage, getPageMarkdownUrl: getThpPageMarkdownUrl }, 'thp', slug);
}

export async function generateStaticParams() {
  return thpSource.generateParams();
}

export async function generateMetadata(props: PageProps<'/thp/[[...slug]]'>): Promise<Metadata> {
  const { slug } = await props.params;
  return generateDomainMetadata(thpSource, { getPageImage: getThpPageImage, getPageMarkdownUrl: getThpPageMarkdownUrl }, slug);
}
