export type ImageWithTextData = {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
  date: string;
  linkText: string;
  elements: any[];
};

export type Props = {
  data: ImageWithTextData;
  imagePosition?: "left" | "right";
};
