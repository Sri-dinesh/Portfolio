import Navbar from "@/components/navbar";
import { BlogCard } from "@/components/blog-card";
import { blogs } from "@/constants/blogs";
import { generateMetadata as generateSeoMetadata } from "@/config/seo";

export const metadata = generateSeoMetadata(
  "Blog",
  "Read articles about web development, React, and full-stack development.",
  "/blog",
);

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-pearl/60 text-lg max-w-2xl">
            Things I&apos;ve written...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              slug={blog.slug}
              mediumLink={blog.mediumLink}
            />
          ))}
        </div>
      </main>
    </>
  );
}
