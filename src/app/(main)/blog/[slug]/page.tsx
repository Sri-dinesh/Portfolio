import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Navbar from '@/components/navbar';
import { blogs } from '@/constants/blogs';
import { generateMetadata as generateSeoMetadata } from "@/config/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return generateSeoMetadata("Blog Not Found", "The requested blog post could not be found.");

  return generateSeoMetadata(
    blog.title,
    blog.description,
    `/blog/${slug}`
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    image: blog.imageUrl,
    datePublished: new Date(blog.date).toISOString(),
    author: {
      "@type": "Person",
      name: "S Sridinesh",
      url: "https://sridinesh-portfolio.vercel.app/",
    },
    publisher: {
      "@type": "Person",
      name: "S Sridinesh",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sridinesh-portfolio.vercel.app/blog/${slug}`,
    },
  };

  return (
    <>
      <Navbar />
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogJsonLd),
          }}
        />
      </head>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative z-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          back to blogs
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-8 text-white/40 text-[13px] font-medium uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {blog.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              4 min read
            </div>
            <a
              href={blog.mediumLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              medium
            </a>
          </div>
        </header>

        <article className="prose prose-invert prose-pearl max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-16 mb-8 text-white tracking-tight" {...props} />,
              h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-14 mb-6 text-white tracking-tight" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-10 mb-4 text-white tracking-tight" {...props} />,
              p: ({ node, ...props }) => <p className="text-white/70 leading-[1.8] mb-8 text-lg whitespace-pre-wrap" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc list-outside mb-8 space-y-4 text-white/70 text-lg ml-6" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal list-outside mb-8 space-y-4 text-white/70 text-lg ml-6" {...props} />,
              li: ({ node, ...props }) => <li className="pl-2" {...props} />,
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <div className="my-10 rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0e]">
                    <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                      <span className="text-[11px] font-medium text-white/30 uppercase tracking-widest">{match[1]}</span>
                    </div>
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      customStyle={{
                        margin: 0,
                        padding: '1.5rem',
                        backgroundColor: 'transparent',
                        fontSize: '14px',
                        lineHeight: '1.6',
                      }}
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono text-white/90" {...props}>
                    {children}
                  </code>
                );
              },
              blockquote: ({ node, ...props }) => (
                <blockquote className="border-l-2 border-white/20 pl-8 my-12 italic text-white/50 text-xl leading-relaxed" {...props} />
              ),
              hr: () => <hr className="border-white/5 my-16" />,
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </article>

        <footer className="mt-32 pt-12 border-t border-white/5">
          <div className="flex flex-col items-center text-center gap-8">
            <p className="text-white/30 text-sm tracking-wide">
              Thanks for reading. If you found this helpful, consider sharing.
            </p>
            <a
              href={blog.mediumLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.03] text-white/70 border border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20 transition-all duration-500 font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Read on Medium
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
