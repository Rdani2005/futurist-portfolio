export interface Project {
  id: string | number;
  title: string;
  description: string;
  image: string;
  tag: Tags[];
  gitUrl?: string;
  previewUrl?: string;
}

export type Tags = "Mobile" | "Web" | "All";
