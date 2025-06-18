import React from "react";
import LinkElement from "@/utils/components/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("home");

  return (
    <section
      id="hero"
      role="banner"
      aria-label="Hero Section"
      className="w-full max-w-[1536px] mx-auto mt-4"
    >
      <div className="relative w-full h-[750px]">
        <Image
          src="/hero.png"
          alt="Hero Image"
          width={1536}
          height={750}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[rgb(5,45,79)] opacity-60"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-[50px]">{t("hero.title")}</h1>
          <h2>{t("hero.content_text")}</h2>
          <LinkElement href="/about">
            {t("reusable.learn_more")}
          </LinkElement>
        </div>
      </div>
    </section>
  );
};

export default Hero;
