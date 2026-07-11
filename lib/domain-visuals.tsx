import {
  Search, BookOpen,
  Building2, ShieldCheck, Cloud, Code, RefreshCw, Users, Database,
} from 'lucide-react';

export type DomainVisual = {
  icon: typeof Building2;
  color: string;
  iconColor: string;
  badge: string;
};

export const domainVisuals: Record<string, DomainVisual> = {
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

export const cyberusuarioVisual: DomainVisual = {
  icon: BookOpen,
  color: 'from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:border-purple-400/50',
  iconColor: 'text-purple-400',
  badge: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
};

export function courseCountLabel(count: number, noun = 'curso') {
  return count === 1 ? `1 ${noun}` : `${count} ${noun}s`;
}
