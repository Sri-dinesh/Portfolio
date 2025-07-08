import { ScrollText } from "lucide-react";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  link: string;
}

export function BlogCard({ title, description, date, link }: BlogCardProps) {
  return (
    <div className="bg-white dark:bg-black border border-gray-100 dark:border-gray-900 p-6">
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
          <ScrollText className="w-4 h-4 text-black dark:text-white" />
        </div>
        <div className="min-w-0 flex-1">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer">
            <h3 className="text-sm font-medium text-black dark:text-white mb-1 hover:underline">
              {title}
            </h3>
          </a>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
            {description}
          </p>
          <p className="text-xs text-black dark:text-white mb-1">{date}</p>
        </div>
      </div>
    </div>
  );
}
