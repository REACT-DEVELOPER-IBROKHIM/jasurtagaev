"use client";
import ImageWithText from "../image-with-text";
import { IArticle } from "@/types/article";
import { usePathname } from "next/navigation";
import ExpandLink from "@/utils/components/expand";
import { useTranslations } from "next-intl";

const Diesease = ({ dieseases }: { dieseases: IArticle[] }) => {
  const pathname = usePathname();
  const t = useTranslations("home");
  return (
    <section className="w-full h-auto mb-[100px]">
      <div className="container mx-auto">
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
      {!pathname.includes("articles") && (
        <div className="flex justify-center">
          <ExpandLink href="/articles">{t("reusable.explore_more")}</ExpandLink>
        </div>
      )}
    </section>
  );
};

export default Diesease;
