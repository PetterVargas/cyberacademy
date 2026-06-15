import { ccnSource, getCcnPageImage, getCcnPageMarkdownUrl } from '@/lib/source';
import { renderDomainPage, generateDomainMetadata } from '@/lib/domain-page';
import type { Metadata } from 'next';

export default async function Page(props: PageProps<'/ccn/[[...slug]]'>) {
  const { slug } = await props.params;
  return renderDomainPage(ccnSource, { getPageImage: getCcnPageImage, getPageMarkdownUrl: getCcnPageMarkdownUrl }, 'ccn', slug);
}

export async function generateStaticParams() {
  return ccnSource.generateParams();
}

export async function generateMetadata(props: PageProps<'/ccn/[[...slug]]'>): Promise<Metadata> {
  const { slug } = await props.params;
  return generateDomainMetadata(ccnSource, { getPageImage: getCcnPageImage, getPageMarkdownUrl: getCcnPageMarkdownUrl }, slug);
}
