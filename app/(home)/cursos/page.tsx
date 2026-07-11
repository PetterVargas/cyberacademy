import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import { Shield } from 'lucide-react';
import {
  cyberusuarioSource, corSource, cipSource, cifSource, capSource, ccnSource, thpSource, diaSource, adrSource,
} from '@/lib/source';
import { domains } from '@/lib/shared';
import { CursosExplorer, type Course, type DomainGroup } from '@/components/cursos-explorer';

export const metadata: Metadata = {
  title: 'Todos los cursos | CyberAcademy',
  description: 'Explora todos los cursos de CyberAcademy: las rutas de CyberUsuario y los cursos de CyberGuardián clasificados en sus 8 dominios.',
};

type MinimalSource = { getPage: (slug?: string[]) => { url: string; data: { title: string; description?: string } } | undefined };

const domainSourceMap: Record<string, MinimalSource> = {
  cor: corSource,
  cip: cipSource,
  cif: cifSource,
  cap: capSource,
  ccn: ccnSource,
  thp: thpSource,
  dia: diaSource,
  adr: adrSource,
};

function readOrderedCourseSlugs(metaPath: string): string[] {
  const raw = fs.readFileSync(metaPath, 'utf-8');
  const meta = JSON.parse(raw) as { pages?: string[] };
  return (meta.pages ?? []).filter((p) => !p.startsWith('---') && p !== 'index');
}

function buildCourses(source: MinimalSource, slugs: string[]): Course[] {
  return slugs.flatMap((slug) => {
    const page = source.getPage([slug]);
    if (!page) return [];
    return [{
      slug,
      title: page.data.title,
      description: page.data.description ?? '',
      url: page.url,
    }];
  });
}

export default function CursosPage() {
  const contentRoot = path.join(process.cwd(), 'content');

  const cyberusuarioCourses = buildCourses(
    cyberusuarioSource,
    readOrderedCourseSlugs(path.join(contentRoot, 'cyberusuario', 'meta.json')),
  );

  const guardianDomains: DomainGroup[] = domains.map((d) => ({
    slug: d.slug,
    name: d.name,
    title: d.title,
    description: d.description,
    courses: buildCourses(domainSourceMap[d.slug], readOrderedCourseSlugs(path.join(contentRoot, d.slug, 'meta.json'))),
  }));

  const totalCourses = cyberusuarioCourses.length + guardianDomains.reduce((acc, d) => acc + d.courses.length, 0);

  return (
    <main className="grow w-full max-w-(--fd-layout-width) mx-auto px-4 py-16">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fd-primary/30 bg-fd-primary/10 text-fd-primary text-sm font-medium mb-6">
          <Shield className="h-3.5 w-3.5" />
          CyberAcademy · DivisionCero
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          Todos los cursos
        </h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          {totalCourses} cursos entre las rutas de <b>CyberUsuario</b> y los{' '}
          {guardianDomains.reduce((acc, d) => acc + d.courses.length, 0)} cursos de{' '}
          <b>CyberGuardián</b>, clasificados en sus {guardianDomains.length} dominios.
        </p>
      </div>

      <CursosExplorer
        cyberusuario={{
          title: 'CyberUsuario',
          description: 'Rutas de aprendizaje para colaboradores y usuarios finales: hábitos seguros, identidad digital y protección en el día a día.',
          courses: cyberusuarioCourses,
        }}
        domains={guardianDomains}
      />
    </main>
  );
}
