import React from "react";
import Image from "next/image";
import LinkElement from "@/utils/components/link";
import { IArticle } from "@/types/article";
import { translateContent } from "@/helpers/translation/translate-content";
import { useLocale } from "next-intl";

const ArticleCard = ({ article }: { article: IArticle }) => {
  const { title, description, image, href, linkText } = article;
  const locale = useLocale();

  return (
    <article className="flex-1 shadow-2xl bg-white min-w-[300px] max-w-[370px]">
      <Image
        src={image}
        alt={translateContent(title, locale) || "Image"}
        width={300}
        height={200}
        className="w-full h-[300px] object-cover"
        loading="lazy"
      />
      <div className="p-[24px] flex flex-col gap-[16px] items-start">
        <h1 className="text-2xl">{translateContent(title, locale)}</h1>
        <p className="text-gray-500 text-lg">
          {translateContent(description, locale)}
        </p>
        <LinkElement href={href}>
          {translateContent(linkText, locale)}
        </LinkElement>
      </div>
    </article>
  );
};

export default ArticleCard;
