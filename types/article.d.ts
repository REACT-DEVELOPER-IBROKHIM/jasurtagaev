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
  slug: string;
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
  tag: {
    uz: string;
    ru: string;
    en: string;
    kr: string;
  };
  title: {
    uz: string;
    ru: string;
    en: string;
    kr: string;
  };
  thumbnail: string;
  isFeatured: boolean;
  link: string;
}

export interface IBannerProps {
  image: string;
  title: {
    uz: string;
    ru: string;
    en: string;
    kr: string; // Optional for Korean
  };
  description?: {
    uz: string;
    ru: string;
    en: string;
    kr: string; // Optional for Korean
  };
  opacity?: number;
  height?: number;
}

export interface INavigationItem {
  id: string | number;
  label: {
    uz: string;
    ru: string;
    en: string;
    kr?: string; // Optional for Korean
  };
  url: string;
}

export interface IAfterBefore {
  id: number;
  urls: string[];
  isFeatured: boolean;
}
