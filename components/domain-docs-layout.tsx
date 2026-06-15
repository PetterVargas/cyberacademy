import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions, allTabs, getDomainSubTabs } from '@/lib/layout.shared';
import { SubSectionPicker } from '@/components/sub-section-picker';
import * as PageTree from 'fumadocs-core/page-tree';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  tree: PageTree.Root;
}

export function DomainDocsLayout({ children, tree }: Props) {
  const subTabs = getDomainSubTabs(tree);
  return (
    <DocsLayout
      tree={tree}
      tabs={allTabs}
      sidebar={subTabs.length > 0 ? { banner: <SubSectionPicker tabs={subTabs} /> } : undefined}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
