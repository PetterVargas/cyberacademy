import { cyberusuarioSource, getCyberusuarioPageImage, getCyberusuarioPageMarkdownUrl } from '@/lib/source';
import { renderDomainPage, generateDomainMetadata } from '@/lib/domain-page';
import type { Metadata } from 'next';

export default async function Page(props: PageProps<'/cyberusuario/[[...slug]]'>) {
  const { slug } = await props.params;
  return renderDomainPage(
    cyberusuarioSource,
    { getPageImage: getCyberusuarioPageImage, getPageMarkdownUrl: getCyberusuarioPageMarkdownUrl },
    'cyberusuario',
    slug,
  );
}

export async function generateStaticParams() {
  return cyberusuarioSource.generateParams();
}

export async function generateMetadata(props: PageProps<'/cyberusuario/[[...slug]]'>): Promise<Metadata> {
  const { slug } = await props.params;
  return generateDomainMetadata(
    cyberusuarioSource,
    { getPageImage: getCyberusuarioPageImage, getPageMarkdownUrl: getCyberusuarioPageMarkdownUrl },
    slug,
  );
}
