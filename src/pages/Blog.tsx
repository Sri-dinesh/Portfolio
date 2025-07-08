import Header from "../components/Header";
import { BlogCard } from "../components/BlogCard";

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
