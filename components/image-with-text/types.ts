export type ImageWithTextData = {
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
};

export type Props = {
  data: ImageWithTextData;
  imagePosition?: "left" | "right";
};
