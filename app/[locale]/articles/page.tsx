import Articles from "@/components/articles";
import BackToTop from "@/components/back-to-top";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { fetchArticles } from "@/helpers/api/articles.request";

const ArticlesPage = async () => {
  const articles = await fetchArticles();
  return (
    <>
      <Header />
      <main className="container mx-auto px-6">
        <Banner
          image={"/banner-images/banner-image-articles.jpg"}
          title={{
            uz: "Maqolalar",
            ru: "Статьи",
            en: "Articles",
            kr: "Мақолалар",
          }}
          opacity={0.75}
          description={{
            en: "Explore a collection of articles shared by Jasur Tagaev",
            uz: "Jasur Tagaev tomonidan baham ko'rilgan maqolalar to'plamini o'rganing",
            ru: "Изучите коллекцию статей, поделившихся Жасуром Тагеевым",
            kr: "Жасур Тагаев томонидан бўлишилган мақолалар тўпламини ўрганинг",
          }}
        />
        <Articles articles={articles} />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default ArticlesPage;
