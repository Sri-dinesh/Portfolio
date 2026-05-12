import type { Metadata } from "next";
import "@/styles/globals.css";
import { SignatureCursor } from "@/components/client/SignatureCursor";
import ScrollToTopButton from "@/components/client/ScrollToTopButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://sridinesh-portfolio.vercel.app"),
  title: "S Sridinesh | Full-Stack Developer | React, Node.js, TypeScript",
  description:
    "S Sridinesh is a full-stack developer in Hyderabad specializing in React, Node.js, and TypeScript. Explore projects, skills, and experience.",
  keywords:
    "S Sridinesh, full-stack developer, React developer, Node.js developer, TypeScript developer, web developer Hyderabad, software engineer portfolio",
  authors: [{ name: "S Sridinesh" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sridinesh-portfolio.vercel.app",
    siteName: "S Sridinesh Portfolio",
    title: "S Sridinesh | Full-Stack Developer",
    description:
      "S Sridinesh is a full-stack developer in Hyderabad specializing in React, Node.js, and TypeScript.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "S Sridinesh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@srixdevv",
    creator: "@srixdevv",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sridinesh-portfolio.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "S Sridinesh",
    url: "https://sridinesh-portfolio.vercel.app/",
    sameAs: [
      "https://github.com/Sri-dinesh",
      "https://linkedin.com/in/sridinesh07",
      "https://x.com/srixdevv",
    ],
    jobTitle: "Full-Stack Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body>
        <div className="min-h-screen bg-obsidian text-alabaster selection:bg-charcoal-light selection:text-white pb-24 relative">
          <div
            className="fixed inset-0 z-0 pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[radial-gradient(#a1a1a6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
          </div>
          <SignatureCursor />
          {children}
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
