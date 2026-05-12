import type { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

export function generateMetadata(
  title?: string,
  description?: string,
  path?: string
): Metadata {
  const pageTitle = title ? `${title} | S Sridinesh Portfolio` : SITE_CONFIG.title;
  const pageDescription = description || SITE_CONFIG.description;
  const pageUrl = path ? `${SITE_CONFIG.url}${path}` : SITE_CONFIG.url;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      type: 'website',
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: 'S Sridinesh Portfolio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [SITE_CONFIG.ogImage],
      creator: SITE_CONFIG.twitter,
    },
  };
}

export function generateJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_CONFIG.author.name,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.author.email,
    sameAs: Object.values(SITE_CONFIG.social),
    jobTitle: 'Full-Stack Developer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_CONFIG.location.city,
      addressRegion: SITE_CONFIG.location.region,
      addressCountry: SITE_CONFIG.location.country,
    },
  };
}
