export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'language' | 'tool';
  icon: string;
}