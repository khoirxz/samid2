export interface EXPERIENCEPROPS {
  node: Node;
}

export interface Node {
  id: string;
  thumbnail: Thumbnail[];
  tiktok: string;
  title: string;
  years: string;
  youtube: string;
  description: string;
  link: string;
}

export interface Thumbnail {
  id: string;
  src: string;
  title: string;
}
