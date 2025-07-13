import React from "react";
import { Props } from "./types";
import Image from "next/image";
import LinkElement from "@/utils/components/link";
import { useLocale } from "next-intl";
import { translateContent } from "@/helpers/translation/translate-content";

const ImageWithText = ({ data, imagePosition }: Props) => {
  const { image, title, description, linkText, slug } = data;
  const locale = useLocale();

  return (
    <article
      className={`flex-col  md:flex justify-between items-center gap-10 ${imagePosition === "left" ? "flex-row" : "flex-row-reverse"}`}
    >
      <div className="w-full md:w-1/2">
        <Image
          src={image}
          alt={translateContent(title, locale) || "Image"}
          width={500}
          height={500}
          className="w-full !h-[300px] md:!h-[300px] lg:h-[500px] object-cover"
        />
      </div>
      <div className="w-full mt-[30px] md:w-1/2">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">
          {translateContent(title, locale)}
        </h1>
        <p className="text-[15px] sm:text-lg leading-10 text-gray-500">
          {translateContent(description, locale)}
        </p>
        <LinkElement
          type="primary"
          title={`Read more - "${translateContent(title, locale)}"`}
          aria-label={`Read more about ${translateContent(title, locale)}`}
          href={decodeURIComponent(`/articles/${slug}`)}
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

export default ImageWithText;
