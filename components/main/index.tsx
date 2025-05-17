import React from "react";
import Hero from "../hero";
import ArticleCard from "../article-card";
import { Props } from "../article-card/types";
import { fetchPopularArticles } from "@/helpers/api/articles.request";
import VideoPlayer from "../video-player";

const Main = async () => {
  const popularArticles = await fetchPopularArticles();

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
            {popularArticles.map((article: Props) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
      <VideoPlayer />
    </main>
  );
};

export default Main;
