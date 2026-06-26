"use client";

import { GitHubCalendar } from "react-github-calendar";
import { Github } from "lucide-react";

interface GithubContributionsProps {
  username: string;
}

export function GithubContributions({ username }: GithubContributionsProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 group">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors duration-300">
            <Github className="w-5 h-5 text-emerald-400" />
          </div>
          <h2 className="text-xl font-semibold text-alabaster tracking-tight">
            GitHub Contributions
          </h2>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-mono text-white/30 hover:text-emerald-400 transition-colors sm:self-center"
        >
          <span>github.com/{username}</span>
        </a>
      </div>

      <div className="w-full p-6 sm:p-8 bg-white/[0.02] border border-white/5 rounded-2xl overflow-x-auto">
        <div className="min-w-max md:w-full flex justify-center text-alabaster text-sm">
          <GitHubCalendar
            username={username}
            labels={{
              totalCount: "{{count}} contributions in the last year",
            }}
            theme={{
              light: ["#1f1f22", "#064e3b", "#047857", "#10b981", "#34d399"],
              dark: ["#1f1f22", "#064e3b", "#047857", "#10b981", "#34d399"],
            }}
            blockSize={15}
            blockMargin={4}
          />
        </div>
      </div>
    </div>
  );
}
