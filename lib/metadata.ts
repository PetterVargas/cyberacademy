import type { Metadata } from 'next';
import { baseUrl, rssAlternateTypes } from './shared';

// Next.js replaces `openGraph`/`twitter` wholesale per route segment instead of
// deep-merging with the parent, so every page must restate its own title and
// description here or it silently falls back to the root layout's.
export function buildPageMetadata(opts: {
  title: string;
  description?: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
}): Metadata {
  const { title, description, path, image, type = 'website', publishedTime, authors } = opts;
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    authors: authors?.map((name) => ({ name })),
    alternates: { canonical: url, types: rssAlternateTypes },
    openGraph: {
      title,
      description,
      url,
      type,
      ...(image ? { images: image } : {}),
      ...(publishedTime ? { publishedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
