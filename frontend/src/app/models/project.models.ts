export interface Project {
  id: number;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl?: string;
}