import { diaSource } from '@/lib/source';
import { DomainDocsLayout } from '@/components/domain-docs-layout';

export default function Layout({ children }: LayoutProps<'/dia'>) {
  return <DomainDocsLayout tree={diaSource.getPageTree()}>{children}</DomainDocsLayout>;
}
