import { z } from 'zod';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { remarkMdxMermaid, rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';
import { remarkBlockId } from 'fumadocs-core/mdx-plugins/remark-block-id';
import { transformerTwoslash } from 'fumadocs-twoslash';
import { defineConfig, defineDocs, defineCollections } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';

const docsConfig = {
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
      extractLinkReferences: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
};

export const cyberusuarioDocs = defineDocs({ dir: 'content/cyberusuario', ...docsConfig });
export const corDocs = defineDocs({ dir: 'content/cor', ...docsConfig });
export const cipDocs = defineDocs({ dir: 'content/cip', ...docsConfig });
export const cifDocs = defineDocs({ dir: 'content/cif', ...docsConfig });
export const capDocs = defineDocs({ dir: 'content/cap', ...docsConfig });
export const ccnDocs = defineDocs({ dir: 'content/ccn', ...docsConfig });
export const thpDocs = defineDocs({ dir: 'content/thp', ...docsConfig });
export const diaDocs = defineDocs({ dir: 'content/dia', ...docsConfig });
export const adrDocs = defineDocs({ dir: 'content/adr', ...docsConfig });

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMath, remarkMdxMermaid, [remarkBlockId, { addDataAttribute: 'feedback' }]],
    rehypePlugins: (v) => [rehypeKatex, ...v],
    rehypeCodeOptions: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash(),
      ],
    },
  },
});

export const blogPosts = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().optional(),
    date: z.union([z.string(), z.date().transform(d => d.toISOString().split('T')[0])]),
  }),
});
