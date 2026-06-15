import Link from 'next/link';
import {
  ArrowRight, ArrowDown,
  Building2, ShieldCheck, Cloud, Code,
  RefreshCw, Search, Users, Database,
  Shield, BookOpen,
} from 'lucide-react';

const domainCards = [
  {
    slug: 'cor',
    name: 'COR',
    title: 'Coherencia Organizacional',
    description: 'Gobernanza y estructura organizacional',
    icon: Building2,
    color: 'from-blue-500/20 to-blue-600/10 border-blue-500/30 hover:border-blue-400/60',
    iconColor: 'text-blue-400',
  },
  {
    slug: 'cip',
    name: 'CIP',
    title: 'Identidad y Puntos Finales',
    description: 'Gestión de identidades y dispositivos',
    icon: ShieldCheck,
    color: 'from-purple-500/20 to-purple-600/10 border-purple-500/30 hover:border-purple-400/60',
    iconColor: 'text-purple-400',
  },
  {
    slug: 'cif',
    name: 'CIF',
    title: 'Infraestructura',
    description: 'Seguridad en infraestructura y redes',
    icon: Cloud,
    color: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 hover:border-cyan-400/60',
    iconColor: 'text-cyan-400',
  },
  {
    slug: 'cap',
    name: 'CAP',
    title: 'Aplicaciones',
    description: 'Desarrollo seguro y AppSec',
    icon: Code,
    color: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 hover:border-emerald-400/60',
    iconColor: 'text-emerald-400',
  },
  {
    slug: 'ccn',
    name: 'CCN',
    title: 'Continuidad del Negocio',
    description: 'Gestión de cambios y continuidad',
    icon: RefreshCw,
    color: 'from-orange-500/20 to-orange-600/10 border-orange-500/30 hover:border-orange-400/60',
    iconColor: 'text-orange-400',
  },
  {
    slug: 'adr',
    name: 'ADR',
    title: 'Detección y Respuesta',
    description: 'Detección y respuesta a incidentes',
    icon: Search,
    color: 'from-red-500/20 to-red-600/10 border-red-500/30 hover:border-red-400/60',
    iconColor: 'text-red-400',
  },
  {
    slug: 'thp',
    name: 'THP',
    title: 'Talento Humano',
    description: 'Gestión de personas y proveedores',
    icon: Users,
    color: 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/30 hover:border-yellow-400/60',
    iconColor: 'text-yellow-400',
  },
  {
    slug: 'dia',
    name: 'DIA',
    title: 'Datos e Inteligencia Artificial',
    description: 'Protección de datos e IA',
    icon: Database,
    color: 'from-pink-500/20 to-pink-600/10 border-pink-500/30 hover:border-pink-400/60',
    iconColor: 'text-pink-400',
  },
] as const;

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col min-h-[calc(100vh-var(--header-height)-var(--footer-height))] font-sans">

      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center justify-center py-28 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fd-primary/8 via-transparent to-fd-secondary/8 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fd-primary/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fd-primary/30 bg-fd-primary/10 text-fd-primary text-sm font-medium mb-8">
            <Shield className="h-3.5 w-3.5" />
            CyberAcademy · DivisionCero
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="bg-gradient-to-br from-fd-foreground via-fd-foreground to-fd-muted-foreground bg-clip-text text-transparent">
              Prepárate para
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#4DAE84] to-[#39b298] bg-clip-text text-transparent">
              proteger el mundo
            </span>
          </h1>

          <p className="text-xl text-fd-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Aprende Ciberseguridad con el marco de referencia de DivisionCero.
            Elige tu camino y empieza hoy.
          </p>

          {/* ── Escoge el camino ── */}
          <div className="mb-6">
            <p className="text-sm font-semibold tracking-widest uppercase text-fd-muted-foreground mb-6">
              Escoge la ruta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cyberusuario"
                className="group relative flex flex-col items-center gap-3 px-10 py-7 rounded-2xl border border-purple-500/40 bg-gradient-to-br from-purple-500/15 to-purple-600/5 hover:border-purple-400/70 hover:from-purple-500/25 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
              >
                <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <BookOpen className="h-7 w-7 text-purple-400" />
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-fd-foreground">CyberUsuarios</div>
                  <div className="text-sm text-fd-muted-foreground mt-1">Protegernos como Usuarios Finales</div>
                </div>
                <ArrowRight className="h-4 w-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#cyberguardianes"
                className="group relative flex flex-col items-center gap-3 px-10 py-7 rounded-2xl border border-[#4DAE84]/40 bg-gradient-to-br from-[#4DAE84]/15 to-[#39b298]/5 hover:border-[#4DAE84]/70 hover:from-[#4DAE84]/25 transition-all duration-300 shadow-lg hover:shadow-[#4DAE84]/20"
              >
                <div className="w-14 h-14 rounded-xl bg-[#4DAE84]/20 flex items-center justify-center">
                  <Shield className="h-7 w-7 text-[#4DAE84]" />
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-fd-foreground">CyberGuardianes</div>
                  <div className="text-sm text-fd-muted-foreground mt-1">Responsables de la Ciberseguridad</div>
                </div>
                <ArrowDown className="h-4 w-4 text-[#4DAE84] group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CyberGuardianes — 8 dominios ── */}
      <section id="cyberguardianes" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4DAE84]/30 bg-[#4DAE84]/10 text-[#4DAE84] text-sm font-medium mb-4">
              <Shield className="h-3.5 w-3.5" />
              CyberGuardianes
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Cursos de Ciberseguridad clasificados por dominios</h2>
            <p className="text-fd-muted-foreground text-lg max-w-2xl mx-auto">
              Cada dominio cubre un área crítica. Explora, aprende y aplica los controles en tu organización con diferentes cursos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {domainCards.map((domain) => {
              const Icon = domain.icon;
              return (
                <Link
                  key={domain.slug}
                  href={`/${domain.slug}`}
                  className={`group flex flex-col gap-3 p-6 rounded-xl border bg-gradient-to-br ${domain.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-fd-background/40 flex items-center justify-center">
                      <Icon className={`h-5 w-5 ${domain.iconColor}`} />
                    </div>
                    <span className="text-xs font-bold tracking-widest text-fd-muted-foreground">{domain.name}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-fd-foreground leading-tight mb-1">{domain.title}</div>
                    <div className="text-xs text-fd-muted-foreground line-clamp-2">{domain.description}</div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-medium text-fd-muted-foreground group-hover:text-fd-foreground transition-colors mt-auto">
                    Explorar <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CyberUsuarios ── */}
      <section className="py-20 px-4 bg-fd-muted/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
              <BookOpen className="h-3.5 w-3.5" />
              CyberUsuarios
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Cursos para colaboradores</h2>
            <p className="text-fd-muted-foreground text-lg max-w-2xl mx-auto">
              Inicia protegiendote como colaborador en el ecosistema del Ciberespacio.
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              href="/cyberusuario"
              className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-fd-primary-foreground bg-fd-primary hover:bg-fd-primary/90 rounded-xl transition-colors shadow-lg"
            >
              <BookOpen className="h-5 w-5" />
              Cursos CyberUsuario
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
