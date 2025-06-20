export interface IArticle {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
  date: string;
  linkText: string;
  elements: any[];
}

export interface IMedia {
  id: number;
  tag: string;
  title: string;
  thumbnail: string;
  link: string;
}

export interface IBannerProps {
  image: string;
  title: string;
  description?: string;
  opacity?: number;
  height?: number;
}
