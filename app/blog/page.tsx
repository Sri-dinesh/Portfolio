import Header from '@/components/client/Header';
import { generateMetadata as generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata(
  "Blog",
  "Read articles about web development, React, and full-stack development.",
  "/blog"
);

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Coming Soon</h1>
            <p className="text-pearl">Check back soon for more content.</p>
          </div>
        </div>
      </main>
    </>
  );
}
