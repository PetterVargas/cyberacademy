import { overviewSource, cyberusuarioSource, allDomainSources, getLLMText } from '@/lib/source';

export const revalidate = false;

export async function GET() {
  const pages = [
    ...overviewSource.getPages(),
    ...cyberusuarioSource.getPages(),
    ...allDomainSources.flatMap((s) => s.getPages()),
  ];
  const scanned = await Promise.all(pages.map(getLLMText));
  return new Response(scanned.join('\n\n'));
}
