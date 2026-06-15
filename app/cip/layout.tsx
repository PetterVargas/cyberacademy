import { cipSource } from '@/lib/source';
import { DomainDocsLayout } from '@/components/domain-docs-layout';

export default function Layout({ children }: LayoutProps<'/cip'>) {
  return <DomainDocsLayout tree={cipSource.getPageTree()}>{children}</DomainDocsLayout>;
}
