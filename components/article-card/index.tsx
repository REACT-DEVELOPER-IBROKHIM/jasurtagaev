import React from "react";
import { Props } from "./types";
import Image from "next/image";
import LinkElement from "@/utils/components/link";

const ArticleCard = ({ article }: { article: Props }) => {
  const { id, title, description, image, href, linkText } = article;
  return (
    <article className="flex-1 shadow-2xl bg-white">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="w-full h-[300px] object-cover"
        loading="lazy"
      />
      <div className="p-[24px] flex flex-col gap-[16px] items-start">
        <h1 className="text-2xl">{title}</h1>
        <p className="text-gray-500 text-lg">{description}</p>
        <LinkElement href={href}>{linkText}</LinkElement>
      </div>
    </article>
  );
};

export default ArticleCard;
