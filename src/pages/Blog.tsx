import Header from "../components/Header";
import { BlogCard } from "../components/BlogCard";
import { useMemo } from "react";
import { useSeo } from "../lib/seo";
import { SignatureCursor } from "../components/SignatureCursor";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "Under the hood of “localhost”",
    description:
      "Localhost isn't just some random word programmers made up - it's a reserved domain name that always points back to your own machine. ",
    date: "Mar 29, 2025",
    link: "https://medium.com/@sridineshS/under-the-hood-of-localhost-33c290bd2029",
  },
];

export default function Blog() {
  const blogSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "S Sridinesh Blog",
      url: "https://sridinesh-portfolio.vercel.app/blog",
      description:
        "Technical writing about web development, React, Node.js, and software engineering by S Sridinesh.",
      author: {
        "@type": "Person",
        name: "S Sridinesh",
      },
      blogPost: blogs.map((blog) => ({
        "@type": "BlogPosting",
        headline: blog.title,
        datePublished: "2025-03-29",
        url: blog.link,
        description: blog.description,
        author: {
          "@type": "Person",
          name: "S Sridinesh",
        },
      })),
    }),
    [],
  );

  useSeo({
    title: "Blog | S Sridinesh | Full-Stack Development Insights",
    description:
      "Explore technical articles on React, Node.js, TypeScript, and software engineering by S Sridinesh. Insights into building scalable web applications.",
    canonical: "https://sridinesh-portfolio.vercel.app/blog",
    author: "S Sridinesh",
    keywords:
      "React blog, full-stack development, Node.js tutorials, TypeScript, web development articles, S Sridinesh, software engineering blog",
    ogType: "article",
    ogSiteName: "S Sridinesh Portfolio",
    ogLocale: "en_US",
    twitterSite: "@srixdevv",
    twitterCreator: "@srixdevv",
    rssHref: "https://sridinesh-portfolio.vercel.app/rss.xml",
    schema: blogSchema,
  });

  return (
    <div className="min-h-screen bg-obsidian text-alabaster selection:bg-charcoal-light selection:text-white pb-24 relative overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(#a1a1a6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
      </div>

      <SignatureCursor />
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 sm:pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Things I've written
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {blogs.map((blog, idx) => (
            <BlogCard
              key={idx}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              link={blog.link}
            />
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center py-24">
            <p className="text-white/30 italic">More articles coming soon...</p>
          </div>
        )}
      </main>

      <ScrollToTopButton />
    </div>
  );
}
