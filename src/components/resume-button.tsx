import React from "react";

interface ResumeButtonProps {
  href: string;
}

export const ResumeButton: React.FC<ResumeButtonProps> = ({ href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button className="resume-button group flex items-center">
        <svg
          className="w-[24px] h-[24px] text-white-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeWidth="1.4"
            d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        Resume
      </button>
    </a>
  );
};
