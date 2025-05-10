import React from "react";
import Hero from "../hero";
import { ARTICLES_MOCK } from "@/mocks/article";
import ArticleCard from "../article-card";
import { Props } from "../article-card/types";

const Main = () => {
  return (
    <main>
      <Hero />
      <section
        role="article"
        aria-label="Articles"
        className="w-full h-[600px] py-[50px]"
      >
        <div className="container h-full mx-auto">
          <div className="flex h-full items-center justify-center gap-[24px]">
            {ARTICLES_MOCK.map((article: Props) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
