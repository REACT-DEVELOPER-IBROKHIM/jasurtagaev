import React from "react";
import LinkElement from "@/utils/components/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("home");
  type ILocale = "uz" | "ru" | "en" | "kr";
  const locale = useLocale() as ILocale;

  return (
    <section
      id="hero"
      role="banner"
      aria-label="Hero Section"
      className="w-full max-w-[1536px] mx-auto"
    >
      <div className="relative w-full h-[750px]">
        <Image
          src="/hero.png"
          alt="Hero Image"
          width={1536}
          height={750}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[rgb(5,45,79)] opacity-75"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-[50px]">{t("hero.title")}</h1>
          <h2>{t("hero.content_text")}</h2>
          <LinkElement
            className="bg-sky-700 text-white px-6 py-3 mt-4 uppercase"
            href={`/${locale}/about`}
            title={"Go to about page"}
            aria-label={"Go to about page"}
          >
            {t("reusable.learn_more")}
            <span className="sr-only absolute border-0 m-[-1px] p-0 w-[1px] h-[1px] overflow-hidden clip-[rect(1px,1px,1px,1px)] clip-path-[inset(50%)] word-break-normal !important">
              Know about Jasur Tagaev - {t("hero.title")}
            </span>
          </LinkElement>
        </div>
      </div>
    </section>
  );
};

export default Hero;
