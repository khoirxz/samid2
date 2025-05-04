export interface EXPERIENCEPROPS {
  node: Node;
}

export interface Node {
  id: string;
  thumbnail: Thumbnail[];
  title: string;
  years: string;
  description: string;
  youtube: string | null;
  instagram: string | null;
  tiktok: string | null;
  link: string | null;
}

export interface Thumbnail {
  id: string;
  src: string;
  title: string;
}
