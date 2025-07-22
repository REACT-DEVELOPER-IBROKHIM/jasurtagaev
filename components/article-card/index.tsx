import React from "react";
import Image from "next/image";
import LinkElement from "@/utils/components/link";
import { IArticle } from "@/types/article";
import { translateContent } from "@/helpers/translation/translate-content";
import { useLocale } from "next-intl";
import { truncateText } from "@/helpers/transform";

const ArticleCard = ({ article }: { article: IArticle }) => {
  const { title, description, image, slug, linkText } = article;
  const locale = useLocale();

  return (
    <article className="flex-1 shadow-2xl bg-white">
      <Image
        src={image}
        alt={translateContent(title, locale) || "Image"}
        width={300}
        height={200}
        className="w-full h-[300px] object-cover"
        loading="lazy"
      />
      <div className="p-[24px] flex flex-col gap-[16px] items-start">
        <h1 className="text-2xl min-h-[70px]">
          {translateContent(title, locale)}
        </h1>
        <p className="text-gray-500 text-lg">
          {truncateText(translateContent(description, locale), 110)}
        </p>
        <LinkElement
          title={`Read more - "${translateContent(title, locale)}"`}
          aria-label={`Read more about ${translateContent(title, locale)}`}
          href={decodeURIComponent(`/${locale}/articles/${slug}`)}
        >
          {translateContent(linkText, locale)}
          <span className="sr-only absolute border-0 m-[-1px] p-0 w-[1px] h-[1px] overflow-hidden clip-[rect(1px,1px,1px,1px)] clip-path-[inset(50%)] word-break-normal !important">
            {translateContent(title, locale)}
          </span>
        </LinkElement>
      </div>
    </article>
  );
};

export default ArticleCard;
