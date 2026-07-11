'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight, ArrowDown,
  Building2, ShieldCheck, Cloud, Code,
  RefreshCw, Search, Users, Database,
  Shield, BookOpen,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const roleOffsets = ['', 'sm:-translate-y-3', 'sm:translate-y-3', 'sm:-translate-y-2', 'sm:translate-y-2', 'sm:-translate-y-4'] as const;

// Derivado del contenido real de los cursos: los 8 dominios de CyberGuardianes
// (COR, CIP, CIF, CAP, CCN, THP, DIA, ADR) y los 12 cursos de CyberUsuario.
const roles = [
  // Liderazgo — COR (gobierno, riesgos, cumplimiento) y CCN (continuidad del negocio)
  { name: 'CISO', size: 'lg' },
  { name: 'CSO', size: 'lg' },
  { name: 'CTO', size: 'lg' },
  { name: 'CIO', size: 'lg' },
  { name: 'COO', size: 'lg' },
  { name: 'DPO', size: 'md' },
  { name: 'CPO', size: 'md' },
  { name: 'Risk Manager', size: 'md' },
  { name: 'Compliance Officer', size: 'md' },
  { name: 'Auditor de Ciberseguridad', size: 'md' },
  { name: 'Business Continuity Manager', size: 'md' },

  // Operaciones y respuesta — ADR (SOC, CSIRT, forense, threat intel, red team)
  { name: 'SOC Analyst', size: 'md' },
  { name: 'CSIRT / SIRT', size: 'md' },
  { name: 'SecOps', size: 'md' },
  { name: 'Incident Responder', size: 'md' },
  { name: 'Threat Intelligence Analyst', size: 'md' },
  { name: 'Red Team / Pentester', size: 'md' },
  { name: 'Bug Bounty Hunter', size: 'md' },
  { name: 'Forense Digital', size: 'md' },
  { name: 'Investigador de CiberCrimen', size: 'md' },

  // Ingeniería — CIP (identidad, zero trust), CIF (nube), CAP (appsec, IA)
  { name: 'DevOps', size: 'md' },
  { name: 'DevSecOps', size: 'md' },
  { name: 'Security Engineer', size: 'md' },
  { name: 'Security Architect', size: 'md' },
  { name: 'Cloud Security Engineer', size: 'md' },
  { name: 'Identity & Access Manager', size: 'md' },
  { name: 'Application Security Engineer', size: 'md' },
  { name: 'AI / ML Engineer', size: 'md' },

  // Personas y terceros — THP
  { name: 'HR / People Ops', size: 'md' },
  { name: 'Vendor Risk Manager', size: 'md' },

  // Negocio y usuarios finales — CyberUsuario
  { name: 'Product Manager', size: 'md' },
  { name: 'Líderes de Negocio', size: 'md' },
  { name: 'Marketing / Marca', size: 'md' },
  { name: 'Colaboradores', size: 'md' },
  { name: 'Padres y Cuidadores', size: 'md' },
] as const;

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
  const heroRef      = useRef<HTMLElement>(null);
  const rolesRef     = useRef<HTMLElement>(null);
  const domainsRef   = useRef<HTMLElement>(null);
  const guardianesRef = useRef<HTMLElement>(null);
  const usuariosRef  = useRef<HTMLElement>(null);

  useEffect(() => {
    const heroEl       = heroRef.current;
    const rolesEl      = rolesRef.current;
    const domainsEl    = domainsRef.current;
    const guardianesEl = guardianesRef.current;
    const usuariosEl   = usuariosRef.current;

    if (!heroEl || !rolesEl || !domainsEl || !guardianesEl || !usuariosEl) return;

    // ── Hero ─────────────────────────────────────────────────────────────
    const heroCtx = gsap.context(() => {
      gsap.from('.gsap-hi', {
        y: 22, opacity: 0, duration: 0.7, stagger: 0.13, ease: 'power3.out',
      });
    }, heroEl);

    // ── Roles beneficiados ──────────────────────────────────────────────
    const rolesCtx = gsap.context(() => {
      gsap.from('.roles-header', {
        y: 22, opacity: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: '.roles-header', start: 'top 85%', once: true },
      });
      gsap.utils.toArray<Element>('.role-card').forEach((el, i) => {
        gsap.from(el, {
          scale: 0.85, opacity: 0, duration: 0.55, delay: i * 0.1, ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.roles-grid', start: 'top 85%', once: true,
            onEnter: () => {
              // dispersed floating motion, independent per pill
              gsap.to(el, {
                y: gsap.utils.random(-9, 9),
                x: gsap.utils.random(-6, 6),
                rotation: gsap.utils.random(-2, 2),
                duration: gsap.utils.random(2.6, 4.2),
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: i * 0.12,
              });
            },
          },
        });
      });
      gsap.from('.roles-cta', {
        y: 18, opacity: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: '.roles-cta', start: 'top 90%', once: true },
      });
    }, rolesEl);

    // ── CyberGuardianes — dominios ──────────────────────────────────────
    const domainsCtx = gsap.context(() => {
      gsap.from('.domains-header', {
        y: 22, opacity: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: '.domains-header', start: 'top 85%', once: true },
      });
      gsap.utils.toArray<Element>('.domain-card').forEach((el, i) => {
        gsap.from(el, {
          y: 24, opacity: 0, duration: 0.5, delay: i * 0.06, ease: 'power2.out',
          scrollTrigger: { trigger: '.domains-grid', start: 'top 85%', once: true },
        });
      });
    }, domainsEl);

    // ── CyberGuardianes CTA ───────────────────────────────────────────────
    const guardianesCtx = gsap.context(() => {
      gsap.from('.guardianes-content > *', {
        y: 20, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.guardianes-content', start: 'top 85%', once: true },
      });
    }, guardianesEl);

    // ── CyberUsuarios ─────────────────────────────────────────────────────
    const usuariosCtx = gsap.context(() => {
      gsap.from('.usuarios-content > *', {
        y: 20, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.usuarios-content', start: 'top 85%', once: true },
      });
    }, usuariosEl);

    return () => {
      heroCtx.revert();
      rolesCtx.revert();
      domainsCtx.revert();
      guardianesCtx.revert();
      usuariosCtx.revert();
    };
  }, []);

  return (
    <main className="flex flex-1 flex-col min-h-[calc(100vh-var(--header-height)-var(--footer-height))] font-sans">

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative flex flex-col items-center justify-center py-28 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fd-primary/8 via-transparent to-fd-secondary/8 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fd-primary/5 via-transparent to-transparent pointer-events-none" />

        <svg
          className="absolute inset-0 w-full h-full pointer-events-none text-fd-foreground"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="hero-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.7" fill="currentColor" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="gsap-hi inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fd-primary/30 bg-fd-primary/10 text-fd-primary text-sm font-medium mb-8">
            <Shield className="h-3.5 w-3.5" />
            CyberAcademy · DivisionCero
          </div>

          <h1 className="gsap-hi text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="bg-gradient-to-br from-fd-foreground via-fd-foreground to-fd-muted-foreground bg-clip-text text-transparent">
              Prepárate para
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#4DAE84] to-[#39b298] bg-clip-text text-transparent">
              proteger el mundo
            </span>
          </h1>

          <p className="gsap-hi text-xl text-fd-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Aprende Ciberseguridad con el marco de referencia de DivisionCero.
            Elige tu camino y empieza hoy.
          </p>

          {/* ── Escoge el camino ── */}
          <div className="gsap-hi mb-6">
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

      {/* ── Roles beneficiados ── */}
      <section ref={rolesRef} className="py-20 px-4 bg-fd-muted/40 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="roles-header text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Pensado para tu rol</h2>
            <p className="text-fd-muted-foreground text-lg max-w-2xl mx-auto">
              Sin importar tu especialidad, hay un camino de aprendizaje diseñado para ti.
            </p>
          </div>
        </div>

        <div className="roles-grid w-full flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {roles.map((role, i) => {
            const offset = roleOffsets[i % roleOffsets.length];
            const sizeClasses = role.size === 'lg'
              ? 'text-base sm:text-lg font-semibold px-6 py-3'
              : 'text-sm font-medium px-4 py-2.5';
            return (
              <span
                key={role.name}
                className={`role-card ${offset} inline-flex items-center rounded-full border border-fd-border bg-fd-background text-fd-foreground ${sizeClasses} shadow-sm`}
              >
                {role.name}
              </span>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="roles-cta mt-14 flex justify-center">
            <Link
              href="/que-quieres-aprender-hoy"
              className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-fd-primary/30 bg-fd-primary/5 hover:border-fd-primary/60 hover:bg-fd-primary/10 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Search className="h-5 w-5 text-fd-primary shrink-0" />
              <span className="text-base sm:text-lg font-semibold text-fd-foreground">¿Qué quieres aprender hoy?</span>
              <ArrowRight className="h-4 w-4 text-fd-primary shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CyberGuardianes — 8 dominios ── */}
      <section ref={domainsRef} id="cyberguardianes" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="domains-header text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4DAE84]/30 bg-[#4DAE84]/10 text-[#4DAE84] text-sm font-medium mb-4">
              <Shield className="h-3.5 w-3.5" />
              CyberGuardianes
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Cursos de Ciberseguridad clasificados por dominios</h2>
            <p className="text-fd-muted-foreground text-lg max-w-2xl mx-auto">
              Cada dominio cubre un área crítica. Explora, aprende y aplica los controles en tu organización con diferentes cursos.
            </p>
          </div>

          <div className="domains-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {domainCards.map((domain) => {
              const Icon = domain.icon;
              return (
                <Link
                  key={domain.slug}
                  href={`/${domain.slug}`}
                  className={`domain-card group flex flex-col gap-3 p-6 rounded-xl border bg-gradient-to-br ${domain.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5`}
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
      <section ref={usuariosRef} className="py-20 px-4 bg-fd-muted/40">
        <div className="usuarios-content max-w-5xl mx-auto">
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

      {/* ── CyberGuardianes CTA ── */}
      <section ref={guardianesRef} className="py-20 px-4">
        <div className="guardianes-content max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4DAE84]/30 bg-[#4DAE84]/10 text-[#4DAE84] text-sm font-medium mb-4">
              <Shield className="h-3.5 w-3.5" />
              CyberGuardianes
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">Cursos para responsables de ciberseguridad</h2>
            <p className="text-fd-muted-foreground text-lg max-w-2xl mx-auto">
              Profundiza en los 8 dominios técnicos y de gestión diseñados para quienes protegen la organización.
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="#cyberguardianes"
              className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-[#4DAE84] hover:bg-[#39b298] rounded-xl transition-colors shadow-lg"
            >
              <Shield className="h-5 w-5" />
              Cursos CyberGuardianes
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
