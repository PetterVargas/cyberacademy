import { appName, baseUrl } from './shared';

const logoUrl = `${baseUrl}/android-chrome-512x512.png`;

const sameAs = [
  'https://x.com/divisioncero',
  'https://github.com/PetterVargas',
  'https://linkedin.com/company/divisioncero',
  'https://facebook.com/divisioncerocom',
  'https://instagram.com/divisioncero',
  'https://youtube.com/@divisioncero',
  'https://tiktok.com/@divisioncero',
];

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: appName,
    alternateName: 'DivisionCero',
    url: baseUrl,
    logo: logoUrl,
    sameAs,
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: appName,
    url: baseUrl,
    inLanguage: 'es',
    publisher: { '@type': 'EducationalOrganization', name: appName, url: baseUrl },
  };
}

export function courseJsonLd(opts: { name: string; description?: string; url: string }) {
  const { name, description, url } = opts;
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description: description || name,
    url,
    inLanguage: 'es',
    provider: {
      '@type': 'EducationalOrganization',
      name: appName,
      url: baseUrl,
      sameAs: baseUrl,
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      inLanguage: 'es',
    },
    isAccessibleForFree: true,
  };
}

export function breadcrumbJsonLd(items: { name: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}` } : {}),
    })),
  };
}

export function articleJsonLd(opts: {
  title: string;
  description?: string;
  url: string;
  datePublished: string;
  author?: string;
}) {
  const { title, description, url, datePublished, author } = opts;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    datePublished,
    inLanguage: 'es',
    author: author ? { '@type': 'Person', name: author } : undefined,
    publisher: { '@type': 'EducationalOrganization', name: appName, url: baseUrl, logo: { '@type': 'ImageObject', url: logoUrl } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    // eslint-disable-next-line react/no-danger
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
