"use client";
import { IBannerProps } from "@/types/article";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

const Banner = (props: IBannerProps) => {
  type Locale = "uz" | "ru" | "en" | "kr";

  const locale = useLocale() as Locale;

  return (
    <section
      role="banner"
      aria-label="Banner section"
      className={`relative w-full flex items-center justify-center text-white mb-[100px] ${props.height ? `h-[500px] lg:h-[700px]` : "h-[400px] lg:h-[600px]"}`}
    >
      <div className="container mx-auto relative w-full h-full flex flex-col items-center justify-center text-center">
        <div
          className="absolute z-2 top-0 left-0 w-full h-full bg-primary opacity-75"
          style={{ opacity: props.opacity || 0.75 }}
        ></div>
        <Image
          className={`w-full h-full`}
          src={props.image}
          alt=""
          layout="fill"
          objectFit="cover"
        />
        <div
          className={`relative z-3 flex flex-col text-center gap-4 p-4 ${props.height && "mb-[-400px]"}`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl">
            {props.title[locale]}
          </h2>
          {props.description && (
            <p className="max-w-[80%] mx-auto text-gray-300">
              {props.description[locale]}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
