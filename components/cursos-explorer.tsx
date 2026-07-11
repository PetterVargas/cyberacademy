'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Search, ArrowRight, BookOpen, X,
  Building2, ShieldCheck, Cloud, Code, RefreshCw, Users, Database,
} from 'lucide-react';

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

const domainVisuals: Record<string, { icon: typeof Building2; color: string; iconColor: string; badge: string }> = {
  cor: {
    icon: Building2,
    color: 'from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-400/50',
    iconColor: 'text-blue-400',
    badge: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
  },
  cip: {
    icon: ShieldCheck,
    color: 'from-fuchsia-500/10 to-fuchsia-600/5 border-fuchsia-500/20 hover:border-fuchsia-400/50',
    iconColor: 'text-fuchsia-400',
    badge: 'border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400',
  },
  cif: {
    icon: Cloud,
    color: 'from-cyan-500/10 to-cyan-600/5 border-cyan-500/20 hover:border-cyan-400/50',
    iconColor: 'text-cyan-400',
    badge: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
  },
  cap: {
    icon: Code,
    color: 'from-emerald-500/10 to-emerald-600/5 border-emerald-500/20 hover:border-emerald-400/50',
    iconColor: 'text-emerald-400',
    badge: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
  },
  ccn: {
    icon: RefreshCw,
    color: 'from-orange-500/10 to-orange-600/5 border-orange-500/20 hover:border-orange-400/50',
    iconColor: 'text-orange-400',
    badge: 'border-orange-500/30 bg-orange-500/10 text-orange-400',
  },
  thp: {
    icon: Users,
    color: 'from-yellow-500/10 to-yellow-600/5 border-yellow-500/20 hover:border-yellow-400/50',
    iconColor: 'text-yellow-400',
    badge: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400',
  },
  dia: {
    icon: Database,
    color: 'from-pink-500/10 to-pink-600/5 border-pink-500/20 hover:border-pink-400/50',
    iconColor: 'text-pink-400',
    badge: 'border-pink-500/30 bg-pink-500/10 text-pink-400',
  },
  adr: {
    icon: Search,
    color: 'from-red-500/10 to-red-600/5 border-red-500/20 hover:border-red-400/50',
    iconColor: 'text-red-400',
    badge: 'border-red-500/30 bg-red-500/10 text-red-400',
  },
};

const cyberusuarioVisual = {
  color: 'from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:border-purple-400/50',
  iconColor: 'text-purple-400',
  badge: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
};

function courseCountLabel(count: number) {
  return count === 1 ? '1 curso' : `${count} cursos`;
}

function CourseCard({ course, color, iconColor }: { course: Course; color: string; iconColor: string }) {
  return (
    <Link
      href={course.url}
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
