import { Project, TechItem } from '@/types';

export const PERSONAL_INFO = {
  name: "Asare Kofi Aikins",
  role: "Frontend Developer",
  status: "AVAILABLE FOR WORK",
  contact: {
    email: "kofiasareaikins3@gmail.com",
    whatsapp: "233557815752",
    Phone: "+233 204 904 397",
    location: "Accra, Ghana",
  },
  github: "https://github.com/FarO-Stone-100",
  bio: "Passionate Frontend Developer focused on creating clean, responsive, and elegant digital experiences with modern web technologies.",
  dynamicTitles: [
    "Frontend Developer",
    "React Specialist",
    "UI Design Enthusiast",
    "Happy Coding"
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Interactive Developer Portfolio",
    description: "A dark-themed, glassmorphic portfolio showcasing dynamic interactions, guestbook comments, and responsive layouts.",
    longDescription: "Built with Next.js, React, and Tailwind CSS. Features custom animations, interactive project tabs, and dynamic modal overlays.",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    features: ["Fully responsive design", "Glassmorphism UI", "Interactive guestbook component"],
    githubUrl: "https://github.com/FarO-Stone-100",
    image: "/images/profile.jpg"
  }
];

export const TECH_STACK: TechItem[] = [
  { name: "React.js", category: "frontend", icon: "Code2" },
  { name: "TypeScript", category: "language", icon: "FileCode" },
  { name: "Tailwind CSS", category: "frontend", icon: "Palette" },
  { name: "Next.js", category: "frontend", icon: "Globe" },
  { name: "JavaScript", category: "language", icon: "FileJson" },
  { name: "HTML5", category: "frontend", icon: "Layout" },
  { name: "CSS3", category: "frontend", icon: "Paintbrush" }
];