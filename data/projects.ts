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
    imageUrl: "/assets/ai resume builder.webp",
  },
  {
    title: "CogniSketch - AI Drawing Analyzer",
    description:
      "Built an AI calculator that instantly turns doodles into perfect equations with zero delay and 100% accuracy.",
    language: "React, Python, Gemini API, Tailwind CSS",
    demoLink: "https://ai-smartsketch.onrender.com/",
    codeLink: "https://github.com/Sri-dinesh/AI-SmartSketch",
    imageUrl: "/assets/calculator.webp",
  },
  {
    title: "Twyned - Social Media App",
    description:
      "A social media platform that allows users to connect, share content, and engage with each other.",
    language: "NextJS, React, PostgreSQL, Tailwind CSS",
    demoLink: "https://twyned.vercel.app/",
    codeLink: "https://github.com/Sri-dinesh/Twyned-nextjs",
    imageUrl: "/assets/twynedNextjs.webp",
  },
  {
    title: "Convo - Chat Application",
    description:
      "A real-time chat application that allows users to communicate seamlessly with friends and family.",
    language: "React, Express.js, Node.js, Socket.io, MongoDB",
    demoLink: "https://convo-chat-app-m853.onrender.com/",
    codeLink: "https://github.com/Sri-dinesh/Convo-Chat-App",
    imageUrl: "/assets/application-demo.webp",
  },
  {
    title: "NEO Earth Tracker - Near Earth Objects",
    description:
      "NEO Tracker is a web application that monitors near-Earth objects using NASA data, providing interactive visualizations, risk assessments, and real-time alerts.",
    language: "React, NASA API, Tailwind CSS",
    demoLink: "https://neo-earth-tracker.vercel.app/",
    codeLink: "https://github.com/Sri-dinesh/NEO-tracker",
    imageUrl: "/assets/neo-earth.webp",
  },
  {
    title: "MockingBird - Sarcasm Translator",
    description:
      "MockingBird is a sarcasm translator app that uses Google's Gemini AI to convert regular text into witty, sarcastic responses. Choose your level of savagery and let the mockingbird do its thing",
    language: "React Native, Bun, Gemini API",
    codeLink: "https://github.com/Sri-dinesh/MockingBird",
    imageUrl: "/assets/mockingbird.webp",
  },
];
