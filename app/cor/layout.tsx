import { corSource } from '@/lib/source';
import { DomainDocsLayout } from '@/components/domain-docs-layout';

export default function Layout({ children }: LayoutProps<'/cor'>) {
  return <DomainDocsLayout tree={corSource.getPageTree()}>{children}</DomainDocsLayout>;
}
