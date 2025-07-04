import React from "react";
import ArticleCard from "../article-card";
import { IArticle } from "@/types/article";
import ExpandLink from "@/utils/components/expand";
import { useTranslations } from "next-intl";

const Articles = ({ articles }: { articles: IArticle[] }) => {
  const t = useTranslations("home");
  return (
    <>
      <section
        role="article"
        aria-label="Articles"
        className="w-full py-[50px]"
      >
        <div className="container h-full mx-auto">
          <div className="flex h-full items-center flex-wrap justify-between gap-[24px]">
            {articles.map((article: IArticle) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <ExpandLink href="/articles">{t("reusable.explore_more")}</ExpandLink>
      </div>
    </>
  );
};

export default Articles;
