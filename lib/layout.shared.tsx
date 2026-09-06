import type { BaseLayoutProps, LayoutTab } from 'fumadocs-ui/layouts/shared';
import { getSidebarTabs } from 'fumadocs-ui/components/sidebar/tabs';
import { NavLogo } from '@/components/nav-logo';
import { gitConfig, cyberusuarioRoute } from './shared';
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
      title: NavLogo,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
