import { ccnSource } from '@/lib/source';
import { DomainDocsLayout } from '@/components/domain-docs-layout';

export default function Layout({ children }: LayoutProps<'/ccn'>) {
  return <DomainDocsLayout tree={ccnSource.getPageTree()}>{children}</DomainDocsLayout>;
}
