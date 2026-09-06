'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Search, ArrowRight, BookOpen, X,
} from 'lucide-react';
import { domainVisuals, cyberusuarioVisual, courseCountLabel } from '@/lib/domain-visuals';

export type Course = {
  slug: string;
  title: string;
  description: string;
  url: string;
};

export type DomainGroup = {
  slug: string;
  name: string;
  title: string;
  description: string;
  courses: Course[];
};

export type CyberusuarioGroup = {
  title: string;
  description: string;
  courses: Course[];
};

interface Props {
  cyberusuario: CyberusuarioGroup;
  domains: DomainGroup[];
}

function CourseCard({ course, color, iconColor }: { course: Course; color: string; iconColor: string }) {
  return (
    <Link
      href={course.url}
      title={course.title}
      className={`group flex flex-col gap-3 p-5 rounded-xl border bg-gradient-to-br ${color} transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5`}
    >
      <div className="font-semibold text-fd-foreground leading-snug">{course.title}</div>
      <p className="text-sm text-fd-muted-foreground line-clamp-3 flex-1">{course.description}</p>
      <div className={`flex items-center gap-1 text-xs font-medium ${iconColor} group-hover:gap-2 transition-all mt-auto`}>
        Ver curso <ArrowRight className="h-3 w-3" />
      </div>
    </Link>
  );
}

export function CursosExplorer({ cyberusuario, domains }: Props) {
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const matches = (c: Course) => !q || c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q);

  const filteredCyberusuario = useMemo(() => cyberusuario.courses.filter(matches), [cyberusuario.courses, q]);
  const filteredDomains = useMemo(
    () => domains.map((d) => ({ ...d, courses: d.courses.filter(matches) })),
    [domains, q],
  );

  const totalMatches = filteredCyberusuario.length + filteredDomains.reduce((acc, d) => acc + d.courses.length, 0);

  return (
    <div>
      {/* ── Search + quick nav ── */}
      <div className="mb-12 flex flex-col gap-6">
        <div className="relative max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-fd-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar un curso por nombre o tema..."
            className="w-full rounded-xl border border-fd-border bg-fd-background py-3 pl-11 pr-11 text-sm outline-none focus:border-fd-primary/60 focus:ring-2 focus:ring-fd-primary/20 transition-all"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Limpiar búsqueda"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-fd-muted-foreground hover:text-fd-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href="#cyberusuario"
            title="Ir a cursos de CyberUsuario"
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${cyberusuarioVisual.badge}`}
          >
            <BookOpen className="h-3 w-3" /> CyberUsuario
          </a>
          {domains.map((d) => {
            const v = domainVisuals[d.slug];
            const Icon = v.icon;
            return (
              <a
                key={d.slug}
                href={`#${d.slug}`}
                title={`Ir a cursos de ${d.name}`}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${v.badge}`}
              >
                <Icon className="h-3 w-3" /> {d.name}
              </a>
            );
          })}
        </div>
      </div>

      {totalMatches === 0 && (
        <div className="text-center py-20 text-fd-muted-foreground">
          <p className="mb-4">No encontramos cursos que coincidan con &ldquo;{query}&rdquo;.</p>
          <button
            type="button"
            onClick={() => setQuery('')}
            className="text-sm font-medium text-fd-primary hover:underline"
          >
            Limpiar búsqueda
          </button>
        </div>
      )}

      {/* ── CyberUsuario ── */}
      {filteredCyberusuario.length > 0 && (
        <section id="cyberusuario" className="scroll-mt-24 mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-semibold ${cyberusuarioVisual.badge}`}>
              <BookOpen className="h-3.5 w-3.5" /> CyberUsuario
            </div>
            <span className="text-sm text-fd-muted-foreground">{courseCountLabel(filteredCyberusuario.length)}</span>
          </div>
          <p className="text-fd-muted-foreground mb-6 max-w-2xl">{cyberusuario.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCyberusuario.map((course) => (
              <CourseCard
                key={course.slug}
                course={course}
                color={cyberusuarioVisual.color}
                iconColor={cyberusuarioVisual.iconColor}
              />
            ))}
          </div>
        </section>
      )}

      {/* ── CyberGuardián — por dominio ── */}
      {filteredDomains.map((d) => {
        if (d.courses.length === 0) return null;
        const v = domainVisuals[d.slug];
        const Icon = v.icon;
        return (
          <section key={d.slug} id={d.slug} className="scroll-mt-24 mb-16">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-semibold ${v.badge}`}>
                <Icon className="h-3.5 w-3.5" /> {d.name} — {d.title}
              </div>
              <span className="text-sm text-fd-muted-foreground">{courseCountLabel(d.courses.length)}</span>
            </div>
            <p className="text-fd-muted-foreground mb-6 max-w-2xl">{d.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {d.courses.map((course) => (
                <CourseCard key={course.slug} course={course} color={v.color} iconColor={v.iconColor} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
