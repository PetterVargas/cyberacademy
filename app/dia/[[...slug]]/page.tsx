import { diaSource, getDiaPageImage, getDiaPageMarkdownUrl } from '@/lib/source';
import { renderDomainPage, generateDomainMetadata } from '@/lib/domain-page';
import type { Metadata } from 'next';

export default async function Page(props: PageProps<'/dia/[[...slug]]'>) {
  const { slug } = await props.params;
  return renderDomainPage(diaSource, { getPageImage: getDiaPageImage, getPageMarkdownUrl: getDiaPageMarkdownUrl }, 'dia', slug);
}

export async function generateStaticParams() {
  return diaSource.generateParams();
}

export async function generateMetadata(props: PageProps<'/dia/[[...slug]]'>): Promise<Metadata> {
  const { slug } = await props.params;
  return generateDomainMetadata(diaSource, { getPageImage: getDiaPageImage, getPageMarkdownUrl: getDiaPageMarkdownUrl }, slug);
}
