import { cyberguardianSource, getCyberguardianPageImage, getCyberguardianPageMarkdownUrl } from '@/lib/source';
import { renderDomainPage, generateDomainMetadata } from '@/lib/domain-page';
import type { Metadata } from 'next';

export default async function Page(props: PageProps<'/cyberguardian/[[...slug]]'>) {
  const { slug } = await props.params;
  return renderDomainPage(cyberguardianSource, { getPageImage: getCyberguardianPageImage, getPageMarkdownUrl: getCyberguardianPageMarkdownUrl }, 'cyberguardian', slug);
}

export async function generateStaticParams() {
  return cyberguardianSource.generateParams();
}

export async function generateMetadata(props: PageProps<'/cyberguardian/[[...slug]]'>): Promise<Metadata> {
  const { slug } = await props.params;
  return generateDomainMetadata(cyberguardianSource, { getPageImage: getCyberguardianPageImage, getPageMarkdownUrl: getCyberguardianPageMarkdownUrl }, slug);
}
