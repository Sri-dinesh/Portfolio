"use client";

import dynamic from "next/dynamic";

const GithubContributions = dynamic(
  () => import("@/components/github-contributions").then((mod) => mod.GithubContributions),
  { ssr: false }
);

interface GithubCalendarWrapperProps {
  username: string;
}

export function GithubCalendarWrapper({ username }: GithubCalendarWrapperProps) {
  return <GithubContributions username={username} />;
}
