export interface IArticle {
  id: number;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  image: string;
  href: string;
  date: string;
  linkText: {
    uz: string;
    ru: string;
    en: string;
  };
  elements: any[];
}

export interface IMedia {
  id: number;
  tag: string;
  title: string;
  thumbnail: string;
  isFeatured: boolean;
  link: string;
}

export interface IBannerProps {
  image: string;
  title: string;
  description?: string;
  opacity?: number;
  height?: number;
}
