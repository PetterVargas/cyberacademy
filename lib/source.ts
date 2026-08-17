import {
  cyberusuarioDocs, cyberguardianDocs,
  corDocs, cipDocs, cifDocs, capDocs, ccnDocs, thpDocs, diaDocs, adrDocs,
} from 'collections/server';
import { loader } from 'fumadocs-core/source';
import { flattenTree } from 'fumadocs-core/page-tree';
import {
  cyberusuarioRoute, cyberusuarioImageRoute, cyberusuarioContentRoute,
} from './shared';

export const cyberusuarioSource = loader({
  baseUrl: cyberusuarioRoute,
  source: cyberusuarioDocs.toFumadocsSource(),
  plugins: [],
});

export const cyberguardianSource = loader({
  baseUrl: '/cyberguardian',
  source: cyberguardianDocs.toFumadocsSource(),
  plugins: [],
});

export const corSource = loader({ baseUrl: '/cor', source: corDocs.toFumadocsSource(), plugins: [] });
export const cipSource = loader({ baseUrl: '/cip', source: cipDocs.toFumadocsSource(), plugins: [] });
export const cifSource = loader({ baseUrl: '/cif', source: cifDocs.toFumadocsSource(), plugins: [] });
export const capSource = loader({ baseUrl: '/cap', source: capDocs.toFumadocsSource(), plugins: [] });
export const ccnSource = loader({ baseUrl: '/ccn', source: ccnDocs.toFumadocsSource(), plugins: [] });
export const thpSource = loader({ baseUrl: '/thp', source: thpDocs.toFumadocsSource(), plugins: [] });
export const diaSource = loader({ baseUrl: '/dia', source: diaDocs.toFumadocsSource(), plugins: [] });
export const adrSource = loader({ baseUrl: '/adr', source: adrDocs.toFumadocsSource(), plugins: [] });

// ─── CyberUsuario ─────────────────────────────────────────────────────────────
export function getCyberusuarioPageImage(page: (typeof cyberusuarioSource)['$inferPage']) {
  const segments = [...page.slugs, 'image.png'];
  return { segments, url: `${cyberusuarioImageRoute}/${segments.join('/')}` };
}
export function getCyberusuarioPageMarkdownUrl(page: (typeof cyberusuarioSource)['$inferPage']) {
  const segments = [...page.slugs, 'content.md'];
  return { segments, url: `${cyberusuarioContentRoute}/${segments.join('/')}` };
}

// ─── Domain helper factory ────────────────────────────────────────────────────
function domainHelpers<T extends { slugs: string[] }>(slug: string) {
  return {
    getPageImage: (page: T) => {
      const segments = [...page.slugs, 'image.png'];
      return { segments, url: `/og/${slug}/${segments.join('/')}` };
    },
    getPageMarkdownUrl: (page: T) => {
      const segments = [...page.slugs, 'content.md'];
      return { segments, url: `/llms.mdx/${slug}/${segments.join('/')}` };
    },
  };
}

const _cor = domainHelpers<(typeof corSource)['$inferPage']>('cor');
export const getCorPageImage = _cor.getPageImage;
export const getCorPageMarkdownUrl = _cor.getPageMarkdownUrl;

const _cip = domainHelpers<(typeof cipSource)['$inferPage']>('cip');
export const getCipPageImage = _cip.getPageImage;
export const getCipPageMarkdownUrl = _cip.getPageMarkdownUrl;

const _cif = domainHelpers<(typeof cifSource)['$inferPage']>('cif');
export const getCifPageImage = _cif.getPageImage;
export const getCifPageMarkdownUrl = _cif.getPageMarkdownUrl;

const _cap = domainHelpers<(typeof capSource)['$inferPage']>('cap');
export const getCapPageImage = _cap.getPageImage;
export const getCapPageMarkdownUrl = _cap.getPageMarkdownUrl;

const _ccn = domainHelpers<(typeof ccnSource)['$inferPage']>('ccn');
export const getCcnPageImage = _ccn.getPageImage;
export const getCcnPageMarkdownUrl = _ccn.getPageMarkdownUrl;

const _thp = domainHelpers<(typeof thpSource)['$inferPage']>('thp');
export const getThpPageImage = _thp.getPageImage;
export const getThpPageMarkdownUrl = _thp.getPageMarkdownUrl;

const _dia = domainHelpers<(typeof diaSource)['$inferPage']>('dia');
export const getDiaPageImage = _dia.getPageImage;
export const getDiaPageMarkdownUrl = _dia.getPageMarkdownUrl;

const _adr = domainHelpers<(typeof adrSource)['$inferPage']>('adr');
export const getAdrPageImage = _adr.getPageImage;
export const getAdrPageMarkdownUrl = _adr.getPageMarkdownUrl;

const _cyberguardian = domainHelpers<(typeof cyberguardianSource)['$inferPage']>('cyberguardian');
export const getCyberguardianPageImage = _cyberguardian.getPageImage;
export const getCyberguardianPageMarkdownUrl = _cyberguardian.getPageMarkdownUrl;

// ─── LLM text ─────────────────────────────────────────────────────────────────
export async function getLLMText(page: {
  data: { getText: (type: 'processed' | 'raw') => Promise<string>; title: string };
  url: string;
}) {
  const processed = await page.data.getText('processed');
  return `# ${page.data.title} (${page.url})\n\n${processed}`;
}

export const allDomainSources = [corSource, cipSource, cifSource, capSource, ccnSource, thpSource, diaSource, adrSource];

// ─── Cross-domain content flow ─────────────────────────────────────────────────
// Orden en el que se navega de forma transparente entre rutas y dominios cuando
// se llega al último (o primer) post de cada uno, replicando el orden del navbar.
const contentFlowSources = [cyberusuarioSource, cyberguardianSource, ...allDomainSources];

let contentFlowCache: ReturnType<typeof flattenTree> | null = null;

function getContentFlow() {
  contentFlowCache ??= contentFlowSources.flatMap((source) => flattenTree(source.getPageTree().children));
  return contentFlowCache;
}

export function getContentFlowNeighbours(url: string) {
  const list = getContentFlow();
  const idx = list.findIndex((item) => item.url === url);
  if (idx === -1) return {};
  return { previous: list[idx - 1], next: list[idx + 1] };
}
