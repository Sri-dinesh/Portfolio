import Header from "../components/Header";
import { BlogCard } from "../components/BlogCard";
import { useMemo } from "react";
import { useSeo } from "../lib/seo";

const blogs = [
  {
    title: "Under the hood of “localhost”",
    description:
      "Localhost isn't just some random word programmers made up—it's a reserved domain name that always points back to your own machine. ",
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
        "Technical writing about web development, React, Node.js, and software engineering.",
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
    title: "Blog | S Sridinesh | React & Full-Stack Development Articles",
    description:
      "Read blog posts by S Sridinesh on React, Node.js, TypeScript, and full-stack development best practices.",
    canonical: "https://sridinesh-portfolio.vercel.app/blog",
    author: "S Sridinesh",
    keywords:
      "React blog, full-stack development articles, Node.js tutorials, TypeScript blog, S Sridinesh blog",
    ogType: "article",
    ogSiteName: "S Sridinesh Portfolio",
    ogLocale: "en_US",
    twitterSite: "@srixdevv",
    twitterCreator: "@srixdevv",
    rssHref: "https://sridinesh-portfolio.vercel.app/rss.xml",
    schema: blogSchema,
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-8">
        <h1 className="text-3xl font-bold mb-8 text-primary-800">
          Things I've written
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </main>
    </div>
  );
}
