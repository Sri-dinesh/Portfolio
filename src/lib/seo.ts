import { useEffect } from "react";

type StructuredData = Record<string, unknown>;

interface SeoConfig {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  author?: string;
  ogType?: "website" | "article" | "profile";
  ogSiteName?: string;
  ogLocale?: string;
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
  twitterSite?: string;
  twitterCreator?: string;
  rssHref?: string;
  schema?: StructuredData | StructuredData[];
}

function setMetaByAttribute(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let el = document.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, key);
    document.head.appendChild(el);
  }

  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }

  el.setAttribute("href", href);
}

function replaceManagedSchema(schema?: StructuredData | StructuredData[]) {
  document
    .querySelectorAll(
      'script[type="application/ld+json"][data-seo-managed="true"]',
    )
    .forEach((script) => script.remove());

  if (!schema) return;

  const schemaItems = Array.isArray(schema) ? schema : [schema];
  schemaItems.forEach((entry) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo-managed", "true");
    script.text = JSON.stringify(entry);
    document.head.appendChild(script);
  });
}

export function useSeo({
  title,
  description,
  canonical,
  keywords,
  author = "S Sridinesh",
  ogType = "website",
  ogSiteName = "S Sridinesh Portfolio",
  ogLocale = "en_US",
  ogImage = "https://sridinesh-portfolio.vercel.app/assets/portfolio.webp",
  twitterCard = "summary_large_image",
  twitterSite = "@srixdevv",
  twitterCreator = "@srixdevv",
  rssHref = "https://sridinesh-portfolio.vercel.app/rss.xml",
  schema,
}: SeoConfig) {
  useEffect(() => {
    document.title = title;

    setMetaByAttribute("name", "description", description);
    setMetaByAttribute("name", "author", author);
    if (keywords) {
      setMetaByAttribute("name", "keywords", keywords);
    }

    setMetaByAttribute("property", "og:title", title);
    setMetaByAttribute("property", "og:description", description);
    setMetaByAttribute("property", "og:url", canonical);
    setMetaByAttribute("property", "og:type", ogType);
    setMetaByAttribute("property", "og:image", ogImage);
    setMetaByAttribute("property", "og:site_name", ogSiteName);
    setMetaByAttribute("property", "og:locale", ogLocale);

    setMetaByAttribute("name", "twitter:card", twitterCard);
    setMetaByAttribute("name", "twitter:title", title);
    setMetaByAttribute("name", "twitter:description", description);
    setMetaByAttribute("name", "twitter:image", ogImage);
    setMetaByAttribute("name", "twitter:url", canonical);
    setMetaByAttribute("name", "twitter:site", twitterSite);
    setMetaByAttribute("name", "twitter:creator", twitterCreator);

    setCanonical(canonical);

    let rssLink = document.querySelector<HTMLLinkElement>(
      'link[rel="alternate"][type="application/rss+xml"]',
    );

    if (!rssLink) {
      rssLink = document.createElement("link");
      rssLink.setAttribute("rel", "alternate");
      rssLink.setAttribute("type", "application/rss+xml");
      document.head.appendChild(rssLink);
    }

    rssLink.setAttribute("href", rssHref);
    rssLink.setAttribute("title", "RSS Feed");

    replaceManagedSchema(schema);

    return () => {
      replaceManagedSchema(undefined);
    };
  }, [
    title,
    description,
    canonical,
    keywords,
    ogType,
    ogImage,
    twitterCard,
    schema,
  ]);
}
