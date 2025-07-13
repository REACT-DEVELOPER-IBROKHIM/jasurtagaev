import React from "react";
import ImageWithText from "../image-with-text";
import { IArticle } from "@/types/article";

const Diesease = ({ dieseases }: { dieseases: IArticle[] }) => {
  return (
    <section className="w-full h-auto mb-[100px]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-y-[50px]">
          {dieseases
            .filter((diesease: IArticle) => diesease.isFeatured)
            .map((diesease: IArticle, index: number) => (
              <ImageWithText
                key={diesease.id}
                imagePosition={index % 2 === 0 ? "left" : "right"}
                data={diesease}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Diesease;
