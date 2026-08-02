import { cyberguardianSource } from '@/lib/source';
import { DomainDocsLayout } from '@/components/domain-docs-layout';

export default function Layout({ children }: LayoutProps<'/cyberguardian'>) {
  return <DomainDocsLayout tree={cyberguardianSource.getPageTree()}>{children}</DomainDocsLayout>;
}
