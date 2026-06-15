import { cifSource } from '@/lib/source';
import { DomainDocsLayout } from '@/components/domain-docs-layout';

export default function Layout({ children }: LayoutProps<'/cif'>) {
  return <DomainDocsLayout tree={cifSource.getPageTree()}>{children}</DomainDocsLayout>;
}
