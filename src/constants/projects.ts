export interface Project {
  title?: string;
  description?: string;
  language?: string;
  demoLink?: string;
  codeLink?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    title: "SparkCV - AI Resume Builder",
    description:
      "AI resume builder with real-time editing, ATS optimization for job-ready resume in minutes.",
    language: "NextJS, React, PostgreSQl, Tailwind CSS, Stripe",
    demoLink: "https://sparkcv.vercel.app/",
    codeLink: "https://github.com/Sri-dinesh/resume-builder-ai",
    imageUrl: "/images/projects/ai resume builder.webp",
  },
  {
    title: "CogniSketch - AI Drawing Analyzer",
    description:
      "Built an AI calculator that instantly turns doodles into perfect equations with zero delay and 100% accuracy.",
    language: "React, Python, Gemini API, Tailwind CSS",
    demoLink: "https://ai-smartsketch.onrender.com/",
    codeLink: "https://github.com/Sri-dinesh/AI-SmartSketch",
    imageUrl: "/images/projects/calculator.webp",
  },
  {
    title: "RecruitAI - Candidate Intelligence Platform",
    description:
      "A multi-agent candidate intelligence platform that automates technical evaluations, blind screening, and deterministic ATS-ready workflows.",
    language: "Next.js, FastAPI, Python, LangGraph, Supabase",
    demoLink: "https://recruitaiofficial.vercel.app/",
    codeLink: "https://github.com/Sri-dinesh/RecruitAI",
    imageUrl: "/images/projects/recruitai.png",
  },
  {
    title: "FlowSync - AI Traffic Network Simulation",
    description:
      "Real-time 3D traffic simulation and optimization platform powered by Dueling Double Deep Q-Networks (D3QN) and Prioritized Experience Replay.",
    language: "Next.js, Three.js, PyTorch, FastAPI, Supabase",
    demoLink: "https://flowsyncc.vercel.app/",
    codeLink: "https://github.com/Sri-dinesh/FlowSync",
  },
  {
    title: "NEO Earth Tracker - Near Earth Objects",
    description:
      "NEO Tracker is a web application that monitors near-Earth objects using NASA data, providing interactive visualizations, risk assessments, and real-time alerts.",
    language: "React, NASA API, Tailwind CSS",
    demoLink: "https://neo-earth-tracker.vercel.app/",
    codeLink: "https://github.com/Sri-dinesh/NEO-tracker",
    imageUrl: "/images/projects/neo-earth.webp",
  },
  {
    title: "MockingBird - Sarcasm Translator",
    description:
      "MockingBird is a sarcasm translator app that uses Google's Gemini AI to convert regular text into witty, sarcastic responses. Choose your level of savagery and let the mockingbird do its thing",
    language: "React Native, Bun, Gemini API",
    codeLink: "https://github.com/Sri-dinesh/MockingBird",
    imageUrl: "/images/projects/mockingbird.webp",
  },
];
