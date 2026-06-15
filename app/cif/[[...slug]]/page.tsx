import { cifSource, getCifPageImage, getCifPageMarkdownUrl } from '@/lib/source';
import { renderDomainPage, generateDomainMetadata } from '@/lib/domain-page';
import type { Metadata } from 'next';

export default async function Page(props: PageProps<'/cif/[[...slug]]'>) {
  const { slug } = await props.params;
  return renderDomainPage(cifSource, { getPageImage: getCifPageImage, getPageMarkdownUrl: getCifPageMarkdownUrl }, 'cif', slug);
}

export async function generateStaticParams() {
  return cifSource.generateParams();
}

export async function generateMetadata(props: PageProps<'/cif/[[...slug]]'>): Promise<Metadata> {
  const { slug } = await props.params;
  return generateDomainMetadata(cifSource, { getPageImage: getCifPageImage, getPageMarkdownUrl: getCifPageMarkdownUrl }, slug);
}
