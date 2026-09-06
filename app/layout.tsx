import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Provider } from '@/components/provider';
import { appName, baseUrl, rssAlternateTypes } from '@/lib/shared';
import { JsonLd, organizationJsonLd, websiteJsonLd } from '@/lib/json-ld';
import type { ReactNode } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import './global.css';
import 'katex/dist/katex.css';

const title = 'DivisionCero - Simplificando juntos la Ciberseguridad de LatAm';
const description = 'Aprende Ciberseguridad gratis en español con el Kudo Framework de DivisionCero: cursos para CyberUsuarios y CyberGuardianes cubriendo identidad, infraestructura, aplicaciones, datos e IA, y respuesta a incidentes.';
const keywords = [
  'ciberseguridad',
  'ciberseguridad en español',
  'cursos de ciberseguridad',
  'ciberseguridad LatAm',
  'CyberAcademy',
  'DivisionCero',
  'Kudo Framework',
  'CyberUsuario',
  'CyberGuardian',
  'seguridad de la información',
  'seguridad informática',
  'phishing',
  'seguridad de identidad',
  'seguridad de infraestructura',
  'seguridad de aplicaciones',
  'continuidad del negocio',
  'respuesta a incidentes',
  'seguridad de datos e inteligencia artificial',
  'cursos gratis de ciberseguridad',
];

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: title,
    template: `%s | ${appName}`,
  },
  description,
  keywords,
  authors: [{ name: 'Peter Vargas', url: 'https://petervargas.com' }],
  creator: 'Peter Vargas',
  publisher: 'divisioncero.com',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    siteName: appName,
    url: baseUrl,
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: {
      url: '/apple-touch-icon.png',
      type: 'image/png',
    },
    other: [
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        url: '/mstile-150x150.png',
        sizes: '150x150',
        type: 'image/png',
      },
    ],
  },
  alternates: {
    canonical: baseUrl,
    types: rssAlternateTypes,
  },
};

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html:
          `.fd-feedback-container ::highlight(fd-feedback-text){background-color:var(--color-fd-primary);color:var(--color-fd-primary-foreground);}`
        }} />
      </head>
      <body className={inter.className}>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <Provider>
          {children}
        </Provider>
        <GoogleAnalytics gaId="G-SGPVDMK8ED" />
      </body>
    </html>
  );
}

