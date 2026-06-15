import { capSource } from '@/lib/source';
import { DomainDocsLayout } from '@/components/domain-docs-layout';

export default function Layout({ children }: LayoutProps<'/cap'>) {
  return <DomainDocsLayout tree={capSource.getPageTree()}>{children}</DomainDocsLayout>;
}
