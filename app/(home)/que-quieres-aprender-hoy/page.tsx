import type { Metadata } from 'next';
import { Sparkles } from 'lucide-react';
import { buildCourseIndex } from '@/lib/course-index';
import { AprendeHoyExplorer } from '@/components/aprende-hoy-explorer';

export const metadata: Metadata = {
  title: '¿Qué quieres aprender hoy? | CyberAcademy',
  description: 'Busca entre todos los cursos, módulos y temas de CyberAcademy — CyberUsuario y CyberGuardián — y llega directo al contenido que necesitas.',
};

export default function QueQuieresAprenderHoyPage() {
  const sections = buildCourseIndex();

  return (
    <main className="grow w-full max-w-(--fd-layout-width) mx-auto px-4 py-16">
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fd-primary/30 bg-fd-primary/10 text-fd-primary text-sm font-medium mb-6">
          <Sparkles className="h-3.5 w-3.5" />
          CyberAcademy · DivisionCero
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          ¿Qué quieres aprender hoy?
        </h1>
        <p className="text-lg text-fd-muted-foreground leading-relaxed">
          Explora todo el catálogo de CyberAcademy o escribe un tema y te llevamos directo
          al curso, módulo o tema específico que buscas.
        </p>
      </div>

      <AprendeHoyExplorer sections={sections} />
    </main>
  );
}
