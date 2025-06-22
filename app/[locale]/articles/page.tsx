import Articles from "@/components/articles";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import { fetchArticles } from "@/helpers/api/articles.request";
import React from "react";

const ArticlesPage = async () => {
  const articles = await fetchArticles()
  return (
    <>
      <Header />
      <main className="container mx-auto py-4">
        <Banner
          image={"/banner-images/banner-image-articles.jpg"}
          title="Articles shared by Jasur Tagaev"
          opacity={0.7}
          description="Explore a collection of articles shared by Jasur Tagaev, covering various topics in technology, programming, and personal insights."
        />
        <section>
          <h2 className='text-3xl mb-4'>All Articles</h2>
          <Articles articles={articles} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ArticlesPage;
