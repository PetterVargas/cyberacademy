import { thpSource } from '@/lib/source';
import { DomainDocsLayout } from '@/components/domain-docs-layout';

export default function Layout({ children }: LayoutProps<'/thp'>) {
  return <DomainDocsLayout tree={thpSource.getPageTree()}>{children}</DomainDocsLayout>;
}
