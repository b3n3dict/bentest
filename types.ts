
export type WindowId = 'about' | 'experience' | 'projects' | 'skills' | 'contact' | null;

export interface Project {
  title: string;
  description: string;
  tags: string[];
  tech: string[];
  previewUrl?: string;
  sourceUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  points: string[];
}
