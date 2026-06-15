import { overviewSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions, allTabs, getOverviewSubTabs } from '@/lib/layout.shared';
import { SubSectionPicker } from '@/components/sub-section-picker';

export default function Layout({ children }: LayoutProps<'/overview'>) {
  return (
    <DocsLayout
      tree={overviewSource.getPageTree()}
      tabs={allTabs}
      sidebar={{ banner: <SubSectionPicker tabs={getOverviewSubTabs()} /> }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
