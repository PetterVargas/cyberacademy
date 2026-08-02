import { cyberusuarioSource, cyberguardianSource, allDomainSources } from '@/lib/source';
import { llms } from 'fumadocs-core/source';

export const revalidate = false;

export function GET() {
  const content = [
    llms(cyberusuarioSource).index(),
    llms(cyberguardianSource).index(),
    ...allDomainSources.map((s) => llms(s).index()),
  ].join('\n\n');
  return new Response(content);
}
