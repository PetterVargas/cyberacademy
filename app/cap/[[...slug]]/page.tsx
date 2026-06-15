import { capSource, getCapPageImage, getCapPageMarkdownUrl } from '@/lib/source';
import { renderDomainPage, generateDomainMetadata } from '@/lib/domain-page';
import type { Metadata } from 'next';

export default async function Page(props: PageProps<'/cap/[[...slug]]'>) {
  const { slug } = await props.params;
  return renderDomainPage(capSource, { getPageImage: getCapPageImage, getPageMarkdownUrl: getCapPageMarkdownUrl }, 'cap', slug);
}

export async function generateStaticParams() {
  return capSource.generateParams();
}

export async function generateMetadata(props: PageProps<'/cap/[[...slug]]'>): Promise<Metadata> {
  const { slug } = await props.params;
  return generateDomainMetadata(capSource, { getPageImage: getCapPageImage, getPageMarkdownUrl: getCapPageMarkdownUrl }, slug);
}
