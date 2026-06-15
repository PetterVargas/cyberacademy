import { adrSource } from '@/lib/source';
import { DomainDocsLayout } from '@/components/domain-docs-layout';

export default function Layout({ children }: LayoutProps<'/adr'>) {
  return <DomainDocsLayout tree={adrSource.getPageTree()}>{children}</DomainDocsLayout>;
}
