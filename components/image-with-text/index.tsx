import React from "react";
import { Props } from "./types";
import Image from "next/image";
import LinkElement from "@/utils/components/link";

const ImageWithText = ({ data, imagePosition }: Props) => {
  const { image, title, description } = data;

  return (
    <article
      className={`flex justify-between items-center gap-10 ${imagePosition === "left" ? "flex-row" : "flex-row-reverse"}`}
    >
      <div className="w-1/2">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="w-full h-[500px] object-cover"
        />
      </div>
      <div className="w-1/2">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p className="text-lg leading-10 text-gray-500">{description}</p>
        <LinkElement type="primary" href={data.href}>
          {data.linkText}
        </LinkElement>
      </div>
    </article>
  );
};

export default ImageWithText;
