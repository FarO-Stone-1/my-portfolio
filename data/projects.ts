export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Staff Payroll System',
    description: 'A desktop application built for managing staff gross pay, overtime calculations, and dynamic deductions.',
    technologies: ['Java', 'Swing', 'MySQL'],
    githubUrl: 'https://github.com/asarekofiaikins',
  },
  {
    id: '2',
    title: 'Developer Portfolio & Showcase',
    description: 'Modern glassmorphism portfolio featuring dynamic tab routing and interactive UI components.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://my-portfolio-vert-one-44.vercel.app',
    githubUrl: 'https://github.com/asarekofiaikins',
  },
  {
    id: '3',
    title: 'Bock Repair Parts Sales - Order Processing',
    description: 'Microsoft Visual Basic desktop application for managing sales orders and inventory.',
    technologies: ['Visual Basic', 'Microsoft Access'],
    liveUrl: 'https://my-portfolio-vert-one-44.vercel.app',
    githubUrl: 'https://github.com/asarekofiaikins',
  },
];