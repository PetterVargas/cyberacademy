'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Search, X, ArrowRight, ChevronDown,
} from 'lucide-react';
import { domainVisuals, cyberusuarioVisual, courseCountLabel, type DomainVisual } from '@/lib/domain-visuals';
import type { SectionNode } from '@/lib/course-index';

type ItemType = 'curso' | 'modulo' | 'tema';

type FlatItem = {
  type: ItemType;
  title: string;
  description: string;
  url: string;
  sectionSlug: string;
  breadcrumb: string;
};

const typeLabel: Record<ItemType, string> = {
  curso: 'Curso',
  modulo: 'Módulo',
  tema: 'Tema',
};

const typeOrder: Record<ItemType, number> = { curso: 0, modulo: 1, tema: 2 };

const RESULT_LIMIT = 60;

function normalize(s: string) {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function visualFor(sectionSlug: string): DomainVisual {
  return sectionSlug === 'cyberusuario' ? cyberusuarioVisual : domainVisuals[sectionSlug];
}

function sectionLabelFor(section: SectionNode) {
  return section.slug === 'cyberusuario' ? 'CyberUsuario' : `CyberGuardián · ${section.name}`;
}

function buildFlatItems(sections: SectionNode[]): FlatItem[] {
  const items: FlatItem[] = [];
  for (const section of sections) {
    const sectionLabel = sectionLabelFor(section);
    for (const curso of section.cursos) {
      items.push({
        type: 'curso',
        title: curso.title,
        description: curso.description,
        url: curso.url,
        sectionSlug: section.slug,
        breadcrumb: sectionLabel,
      });
      for (const modulo of curso.modulos) {
        items.push({
          type: 'modulo',
          title: modulo.title,
          description: modulo.description,
          url: modulo.url,
          sectionSlug: section.slug,
          breadcrumb: `${sectionLabel} › ${curso.title}`,
        });
        for (const tema of modulo.temas) {
          items.push({
            type: 'tema',
            title: tema.title,
            description: tema.description,
            url: tema.url,
            sectionSlug: section.slug,
            breadcrumb: `${sectionLabel} › ${curso.title} › ${modulo.title}`,
          });
        }
      }
    }
  }
  return items;
}

function scoreItem(item: FlatItem, nq: string): number {
  const nTitle = normalize(item.title);
  if (nTitle === nq) return 100;
  if (nTitle.startsWith(nq)) return 90;
  if (nTitle.includes(nq)) return 70;
  const nBread = normalize(item.breadcrumb);
  if (nBread.includes(nq)) return 40;
  const nDesc = normalize(item.description);
  if (nDesc.includes(nq)) return 20;
  return -1;
}

export function AprendeHoyExplorer({ sections }: { sections: SectionNode[] }) {
  const [query, setQuery] = useState('');
  const flatItems = useMemo(() => buildFlatItems(sections), [sections]);
  const nq = normalize(query.trim());

  const results = useMemo(() => {
    if (!nq) return [];
    return flatItems
      .map((item) => ({ item, score: scoreItem(item, nq) }))
      .filter((r) => r.score > -1)
      .sort((a, b) => b.score - a.score
        || typeOrder[a.item.type] - typeOrder[b.item.type]
        || a.item.title.localeCompare(b.item.title))
      .map((r) => r.item);
  }, [flatItems, nq]);

  const stats = useMemo(() => {
    let cursos = 0; let modulos = 0; let temas = 0;
    for (const item of flatItems) {
      if (item.type === 'curso') cursos += 1;
      else if (item.type === 'modulo') modulos += 1;
      else temas += 1;
    }
    return { cursos, modulos, temas };
  }, [flatItems]);

  return (
    <div>
      <div className="max-w-2xl mx-auto mb-4">
        <div className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-fd-muted-foreground" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ej. phishing, contraseñas, threat modeling, Zero Trust..."
            className="w-full rounded-2xl border border-fd-border bg-fd-background py-4 pl-14 pr-14 text-base outline-none focus:border-fd-primary/60 focus:ring-4 focus:ring-fd-primary/10 transition-all shadow-sm"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Limpiar búsqueda"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-fd-muted-foreground hover:text-fd-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        <p className="text-center text-sm text-fd-muted-foreground mt-3">
          Busca entre <b>{stats.cursos}</b> cursos, <b>{stats.modulos}</b> módulos y <b>{stats.temas}</b> temas.
        </p>
      </div>

      {nq ? (
        <SearchResults results={results} query={query} />
      ) : (
        <BrowseTree sections={sections} />
      )}
    </div>
  );
}

function SearchResults({ results, query }: { results: FlatItem[]; query: string }) {
  if (results.length === 0) {
    return (
      <div className="text-center py-20 text-fd-muted-foreground">
        No encontramos resultados para &ldquo;{query}&rdquo;. Intenta con otro término.
      </div>
    );
  }

  const shown = results.slice(0, RESULT_LIMIT);

  return (
    <div className="max-w-3xl mx-auto">
      <p className="text-sm text-fd-muted-foreground mb-4">
        {results.length} resultado{results.length === 1 ? '' : 's'}
        {results.length > RESULT_LIMIT ? ` — mostrando los primeros ${RESULT_LIMIT}, afina tu búsqueda para ver más` : ''}
      </p>
      <div className="flex flex-col gap-3">
        {shown.map((item) => {
          const v = visualFor(item.sectionSlug);
          return (
            <Link
              key={item.url}
              href={item.url}
              className={`group flex flex-col gap-1.5 p-4 rounded-xl border bg-gradient-to-br ${v.color} transition-all hover:shadow-md hover:-translate-y-0.5`}
            >
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${v.badge}`}>
                  {typeLabel[item.type]}
                </span>
                <span className="text-xs text-fd-muted-foreground">{item.breadcrumb}</span>
              </div>
              <div className="font-semibold text-fd-foreground leading-snug flex items-center gap-1.5">
                {item.title}
                <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </div>
              {item.description && (
                <p className="text-sm text-fd-muted-foreground line-clamp-2">{item.description}</p>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function BrowseTree({ sections }: { sections: SectionNode[] }) {
  return (
    <div>
      {sections.map((section) => {
        const v = visualFor(section.slug);
        const Icon = v.icon;
        const totalTemas = section.cursos.reduce(
          (acc, c) => acc + c.modulos.reduce((a2, m) => a2 + m.temas.length, 0),
          0,
        );
        return (
          <section key={section.slug} id={section.slug} className="scroll-mt-24 mb-14">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-semibold ${v.badge}`}>
                <Icon className="h-3.5 w-3.5" /> {sectionLabelFor(section)}
                {section.slug !== 'cyberusuario' ? ` — ${section.title}` : ''}
              </div>
              <span className="text-sm text-fd-muted-foreground">
                {courseCountLabel(section.cursos.length)} · {totalTemas} temas
              </span>
            </div>
            <p className="text-fd-muted-foreground mb-5 max-w-2xl">{section.description}</p>

            <div className="flex flex-col gap-3">
              {section.cursos.map((curso) => (
                <details key={curso.url} className={`group rounded-xl border bg-gradient-to-br ${v.color}`}>
                  <summary className="cursor-pointer select-none list-none p-4 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <Link href={curso.url} className="font-semibold text-fd-foreground hover:underline">
                        {curso.title}
                      </Link>
                      <p className="text-sm text-fd-muted-foreground line-clamp-1 mt-0.5">{curso.description}</p>
                    </div>
                    <ChevronDown className="h-4 w-4 shrink-0 text-fd-muted-foreground transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-4 pb-4 flex flex-col gap-2">
                    {curso.modulos.map((modulo) => (
                      <details key={modulo.url} className="group/mod rounded-lg border border-fd-border/60 bg-fd-background/40">
                        <summary className="cursor-pointer select-none list-none p-3 flex items-center justify-between gap-3">
                          <Link href={modulo.url} className="text-sm font-medium text-fd-foreground hover:underline">
                            {modulo.title}
                          </Link>
                          <ChevronDown className="h-3.5 w-3.5 shrink-0 text-fd-muted-foreground transition-transform group-open/mod:rotate-180" />
                        </summary>
                        <ul className="px-3 pb-3 flex flex-col">
                          {modulo.temas.map((tema) => (
                            <li key={tema.url}>
                              <Link
                                href={tema.url}
                                className="block py-1.5 text-sm text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                              >
                                {tema.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
