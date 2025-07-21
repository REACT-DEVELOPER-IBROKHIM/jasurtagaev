"use client";
import React from "react";
import AfterBefore from "../after-before";
import Media from "../media";
import { useTranslations } from "next-intl";

const MediaWrapper = ({ mediaData, afterBefore }: any) => {
  const t = useTranslations("media");

  return (
    <>
      <section id="media" className="scroll-mt-[150px]">
        <h2 className="text-2xl md:text-3xl mb-4">{t("title1")}</h2>
        <Media mediaData={mediaData} isFeatured={false} />
      </section>
      <section id="after-before" className="scroll-mt-[150px]">
        <h2 className="text-2xl md:text-3xl mb-4">{t("title2")}</h2>
        <AfterBefore afterBefore={afterBefore} />
      </section>
    </>
  );
};

export default MediaWrapper;
