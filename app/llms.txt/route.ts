import { overviewSource, cyberusuarioSource, allDomainSources } from '@/lib/source';
import { llms } from 'fumadocs-core/source';

export const revalidate = false;

export function GET() {
  const content = [
    llms(overviewSource).index(),
    llms(cyberusuarioSource).index(),
    ...allDomainSources.map((s) => llms(s).index()),
  ].join('\n\n');
  return new Response(content);
}
