import { fetchDiseases } from "@/helpers/api/articles.request";
import React from "react";
import ImageWithText from "../image-with-text";
import { IArticle } from "@/types/article";

const Diesease = async () => {
  const dieseases = await fetchDiseases();

  return (
    <section className="w-full h-auto mb-[100px]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[50px]">
          {dieseases.map((diesease: IArticle, index: number) => (
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
