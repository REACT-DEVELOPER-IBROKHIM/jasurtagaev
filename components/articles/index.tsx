import { fetchPopularArticles } from "@/helpers/api/articles.request";
import React from "react";
import ArticleCard from "../article-card";
import { IArticle } from "@/types/article";

const Articles = async () => {
  const popularArticles = await fetchPopularArticles();

  return (
    <section
      role="article"
      aria-label="Articles"
      className="w-full h-[600px] py-[50px]"
    >
      <div className="container h-full mx-auto">
        <div className="flex h-full items-center justify-center gap-[24px]">
          {popularArticles.map((article: IArticle) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
