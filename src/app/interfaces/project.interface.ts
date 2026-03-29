export interface Project {
  title: string;
  type: 'Personal' | 'Academic' | 'Professional';
  description: string;
  shortDescription: string;
  imageUrl: string | null;
  projectUrl: string | null;
  githubUrl: string | null;
  tags: string[];
}

export interface ProjectPreview {
  title: string;
  shortDescription: string;
  imageUrl: string | null;
}