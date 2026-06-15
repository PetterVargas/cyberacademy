import { cyberusuarioSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions, allTabs, getCyberusuarioSubTabs } from '@/lib/layout.shared';
import { SubSectionPicker } from '@/components/sub-section-picker';

export default function Layout({ children }: LayoutProps<'/cyberusuario'>) {
  return (
    <DocsLayout
      tree={cyberusuarioSource.getPageTree()}
      tabs={allTabs}
      sidebar={{ banner: <SubSectionPicker tabs={getCyberusuarioSubTabs()} /> }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
