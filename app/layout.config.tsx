import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Link from 'fumadocs-core/link';
import { cn } from '@/lib/cn';
import { NavLogo } from '@/components/nav-logo';
import {
  FileTextIcon, LayoutGridIcon,
  Building2Icon, ShieldCheckIcon, CloudIcon, CodeIcon,
  RefreshCwIcon, SearchIcon, UsersIcon, DatabaseIcon,
  UserIcon, PresentationIcon,
} from 'lucide-react';

const signUpUrl = 'https://app.divisioncero.com/auth/sign-up';
const presentacionesUrl = 'https://presentaciones.divisioncero.com/';

// Mirrors fumadocs-ui's `navItemVariants()` output (fumadocs-ui/layouts/home/slots/header) —
// that helper is a "use client" export and can't be called from this server-rendered config.
const navItemMainClass = '[&_svg]:size-4 inline-flex items-center gap-1 p-2 text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground data-[active=true]:text-fd-primary';
const navItemIconClass = '[&_svg]:size-4 inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring hover:bg-fd-accent hover:text-fd-accent-foreground p-1.5 [&_svg]:size-5';

const githubIcon = (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: NavLogo,
  },
  links: [
    {
      type: 'custom',
      secondary: false,
      children: (
        <Link href="/cursos" title="Todos los cursos" className={cn(navItemMainClass, 'text-sm')}>
          Cursos
        </Link>
      ),
    },
    {
      type: 'custom',
      secondary: false,
      children: (
        <Link href="/cyberusuario" title="Cursos de CyberUsuario" className={cn(navItemMainClass, 'text-sm')}>
          CyberUsuario
        </Link>
      ),
    },
    {
      type: 'menu',
      text: 'CyberGuardián',
      items: [
        {
          icon: <Building2Icon />,
          text: 'COR — Coherencia Organizacional',
          description: 'Gobernanza y estructura organizacional',
          url: '/cor',
          menu: { title: 'COR — Coherencia Organizacional' },
        },
        {
          icon: <ShieldCheckIcon />,
          text: 'CIP — Identidad y Puntos Finales',
          description: 'Gestión de identidades y dispositivos',
          url: '/cip',
          menu: { title: 'CIP — Identidad y Puntos Finales' },
        },
        {
          icon: <CloudIcon />,
          text: 'CIF — Infraestructura',
          description: 'Seguridad en infraestructura y redes',
          url: '/cif',
          menu: { title: 'CIF — Infraestructura' },
        },
        {
          icon: <CodeIcon />,
          text: 'CAP — Aplicaciones',
          description: 'Desarrollo seguro y AppSec',
          url: '/cap',
          menu: { title: 'CAP — Aplicaciones' },
        },
        {
          icon: <RefreshCwIcon />,
          text: 'CCN — Continuidad del Negocio',
          description: 'Gestión de cambios y continuidad',
          url: '/ccn',
          menu: { title: 'CCN — Continuidad del Negocio' },
        },
        {
          icon: <SearchIcon />,
          text: 'ADR — Detección y Respuesta',
          description: 'Detección y respuesta a incidentes',
          url: '/adr',
          menu: { title: 'ADR — Detección y Respuesta' },
        },
        {
          icon: <UsersIcon />,
          text: 'THP — Talento Humano',
          description: 'Gestión de personas y proveedores',
          url: '/thp',
          menu: { title: 'THP — Talento Humano' },
        },
        {
          icon: <DatabaseIcon />,
          text: 'DIA — Datos e IA',
          description: 'Protección de datos e inteligencia artificial',
          url: '/dia',
          menu: { title: 'DIA — Datos e IA' },
        },
      ],
    },
    {
      type: 'custom',
      secondary: false,
      children: (
        <Link
          href={presentacionesUrl}
          external
          title="Ver Presentaciones de DivisionCero"
          className={cn(navItemMainClass, 'text-sm')}
        >
          Presentaciones
        </Link>
      ),
    },
    {
      type: 'custom',
      secondary: true,
      children: (
        <Link
          href="https://github.com/PetterVargas/cyberacademy"
          external
          title="Repositorio en GitHub"
          aria-label="Github"
          className={cn(navItemIconClass, '-mx-1 first:ms-0 last:me-0')}
        >
          {githubIcon}
        </Link>
      ),
    },
    {
      type: 'custom',
      secondary: true,
      children: (
        <Link
          href={signUpUrl}
          title="Regístrate y co-crea con DivisionCero"
          className={navItemMainClass}
        >
          <UserIcon />
          <span className="bg-fd-primary hover:bg-fd-primary/90 dark:bg-fd-primary/80 dark:hover:bg-fd-primary text-fd-primary-foreground rounded-md px-3 py-1 font-bold block md:inline-block">Co-creemos</span>
        </Link>
      ),
    },
  ],
};
