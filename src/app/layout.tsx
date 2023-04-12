import React from 'react';
import cfg, { defaultAuthor } from '@/../martrix-config';

const RootLayout = ({ children }: React.PropsWithChildren<unknown>) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);
export default RootLayout;

export const metadata = {
  applicationName: cfg.title,
  authors: cfg.authors.map(({ name, link }) => ({ name, url: link })),
  category: cfg.category,
  creator: defaultAuthor.name,
  description: cfg.description,
  generator: cfg.title,
  keywords: cfg.keywords,
  metadataBase: new URL(cfg.link),
  openGraph: {
    // don't put image here; instead use @/app/opengraph-image.(svg|png|js|ts|tsx)
    description: cfg.description,
    locale: cfg.language,
    siteName: cfg.title,
    title: cfg.title,
    type: 'website',
    url: '/',
  },
  publisher: defaultAuthor.name,
  robots: {
    follow: false, // don't follow; instead use @/app/sitemap.ts
    googleBot: {
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    index: true,
  },
  title: cfg.title,
  twitter: {
    // don't put image here; instead use @/app/twitter-image.(svg|png|js|ts|tsx)
    card: 'summary_large_image',
    creator: defaultAuthor.twitter,
    description: cfg.description,
    title: cfg.title,
  },
};
