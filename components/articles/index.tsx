"use client";
import ArticleCard from "../article-card";
import { IArticle } from "@/types/article";
import ExpandLink from "@/utils/components/expand";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const Articles = ({ articles }: { articles: IArticle[] }) => {
  const t = useTranslations("home");
  const t2 = useTranslations("articles");
  const pathname = usePathname();

  return (
    <>
      <h2 className="text-3xl mb-4">{t2("title")}</h2>
      <section
        role="article"
        aria-label="Articles"
        className="w-full py-[50px]"
      >
        <div className="container h-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-full items-center gap-[24px]">
            {articles.map((article: IArticle) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
      {!pathname.includes("articles") && (
        <div className="flex justify-center">
          <ExpandLink href="/articles">{t("reusable.explore_more")}</ExpandLink>
        </div>
      )}
    </>
  );
};

export default Articles;
