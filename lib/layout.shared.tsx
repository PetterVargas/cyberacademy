import type { BaseLayoutProps, LayoutTab } from 'fumadocs-ui/layouts/shared';
import { getSidebarTabs } from 'fumadocs-ui/components/sidebar/tabs';
import { appName, gitConfig, cyberusuarioRoute } from './shared';
import { cyberusuarioSource } from './source';
import * as PageTree from 'fumadocs-core/page-tree';
import {
  ShieldCheck, Shield,
  FileText, BookMarked,
  Building2, Cloud, Code, RefreshCw, Users, Database, Search,
} from 'lucide-react';
import type { ReactNode } from 'react';

export const sectionTabs: LayoutTab[] = [
  {
    title: 'CyberUsuario',
    description: 'Sistema de Gestión',
    icon: <ShieldCheck className="size-4" />,
    url: cyberusuarioRoute,
  },
  {
    title: 'CyberGuardián',
    description: 'Dominios',
    icon: <Shield className="size-4" />,
    url: '/cyberguardian',
  },
];

export const domainTabs: LayoutTab[] = [
  { title: 'COR', description: 'Coherencia Organizacional', icon: <Building2 className="size-4" />, url: '/cor' },
  { title: 'CIP', description: 'Identidad y Puntos Finales', icon: <ShieldCheck className="size-4" />, url: '/cip' },
  { title: 'CIF', description: 'Infraestructura', icon: <Cloud className="size-4" />, url: '/cif' },
  { title: 'CAP', description: 'Aplicaciones', icon: <Code className="size-4" />, url: '/cap' },
  { title: 'CCN', description: 'Continuidad', icon: <RefreshCw className="size-4" />, url: '/ccn' },
  { title: 'THP', description: 'Talento Humano', icon: <Users className="size-4" />, url: '/thp' },
  { title: 'DIA', description: 'Datos e IA', icon: <Database className="size-4" />, url: '/dia' },
  { title: 'ADR', description: 'Detección y Respuesta', icon: <Search className="size-4" />, url: '/adr' },
];

export const allTabs: LayoutTab[] = [...sectionTabs, ...domainTabs];

const cyberusuarioIcons: Record<string, ReactNode> = {
  Políticas: <FileText className="size-4" />,
};

export function getCyberusuarioSubTabs(): LayoutTab[] {
  return getSidebarTabs(cyberusuarioSource.getPageTree(), {
    transform: (option) => ({
      ...option,
      icon: cyberusuarioIcons[String(option.title)] ?? option.icon,
    }),
  });
}

const domainSubIcons: Record<string, ReactNode> = {
  Principal: <FileText className="size-4" />,
  Secundario: <BookMarked className="size-4" />,
};

export function getDomainSubTabs(tree: PageTree.Root): LayoutTab[] {
  return getSidebarTabs(tree, {
    transform: (option) => ({
      ...option,
      icon: domainSubIcons[String(option.title)] ?? option.icon,
    }),
  });
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <svg
            width="24"
            height="24"
            viewBox="0 0 790 790"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo"
          >
            <path
              className="dark:fill-white"
              transform="translate(746,1)"
              d="m0 0 13 2 9 4 6 4 8 9 5 11 1 10v591l-1 17-4 10-8 10-8 5-21 7-69 19-212 58-59 16-5 1h-14l-45-12-62-17-117-32-62-17-58-16-16-5-8-4-8-7-6-10-2-6-1-7-1-233v-97l1-233 1-46 4-11 6-8 7-6 10-5 3-1h12l28 7 44 12 73 20 149 41 47 13 11 2 50-14 47-13 225-62zm-39 92-35 9-65 18-166 46-35 10-14 2-31-8-229-63-47-13h-3l-1 177v336l8 3 47 13 132 37 107 30 17 5 8-1 128-35 135-37 37-10 8-3 1-515z"
              fill="currentColor"
            />
            <path
              className="dark:fill-white"
              transform="translate(149,219)"
              d="m0 0h490l14 7 9 9 6 12 2 15v15l-1 20-1 1h-470v221l12 3 119 33 50 14 17 4 13-4 68-19 119-33 69-19 4 1v57l-3 10-6 9-5 5-7 5-27 8-214 60-9 2h-9l-122-34-82-23-42-12-10-6-7-8-6-12-2-11v-291l2-10 7-14 7-7 10-6z"
              fill="#4DAE84"
            />
          </svg>
          {appName}
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
