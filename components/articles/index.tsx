import React from "react";
import ArticleCard from "../article-card";
import { IArticle } from "@/types/article";

const Articles = ({ articles }: { articles: IArticle[] }) => {

  return (
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
  );
};

export default Articles;
