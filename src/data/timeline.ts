export interface TimelineItem {
  id: string;
  type: "education" | "experience";
  title: string;
  organization: string;
  period: string;
  description: string;
  tags?: string[];
}

export const timelineData: TimelineItem[] = [
  {
    id: "edu-1",
    type: "education",
    title: "Bachelor of Technology",
    organization: "Vardhaman College of Engineering",
    period: "2025 - 2028",
    description: "Current CGPA: 8.8",
    tags: ["Engineering", "Computer Science"]
  },
  {
    id: "exp-3",
    type: "experience",
    title: "UI/UX Designer",
    organization: "Nousverse LLP",
    period: "May 2024 - Nov 2024",
    description: "Designed cross-platform UI/UX solutions, improving engagement by 18%, navigation by 30%, and feedback speed by 25% using Figma and user research.",
    tags: ["Figma", "UI/UX", "User Design"]
  },
  {
    id: "exp-1",
    type: "experience",
    title: "Project Intern",
    organization: "ACTS CDAC HYDERABAD",
    period: "May 2024 - June 2024",
    description: "Contributed to the ISEA portal by developing responsive UI components, ensuring functionality, security, and cross-browser compatibility.",
    tags: ["React", "Security", "UI Development"]
  },
  {
    id: "edu-2",
    type: "education",
    title: "Diploma in Computer Science Engineering",
    organization: "T.R.R. College of Technology",
    period: "2022 - 2025",
    description: "CGPA: 8.8",
    tags: ["Diploma", "Computer Science"]
  }
];
