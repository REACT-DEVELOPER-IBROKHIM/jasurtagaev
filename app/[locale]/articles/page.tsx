import Articles from "@/components/articles";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { fetchArticles } from "@/helpers/api/articles.request";

const ArticlesPage = async () => {
  const articles = await fetchArticles();
  return (
    <>
      <Header />
      <main className="container mx-auto py-4 px-6">
        <Banner
          image={"/banner-images/banner-image-articles.jpg"}
          title={{
            uz: "Jasur Tagaev tomonidan tavsiya etilgan maqolalar",
            ru: "Статьи, рекомендованные Жасуром Тагаевым",
            en: "Articles shared by Jasur Tagaev",
            kr: "Жасур Тагаев томонидан тавсия этилган мақолалар",
          }}
          opacity={0.7}
          description={{
            en: "Explore a collection of articles shared by Jasur Tagaev, covering various topics in technology, programming, and personal insights.",
            uz: "Jasur Tagaev tomonidan baham ko'rilgan maqolalar to'plamini o'rganing, texnologiya, dasturlash va shaxsiy fikrlar bo'yicha turli mavzularni qamrab oladi.",
            ru: "Изучите коллекцию статей, поделившихся Жасуром Тагеевым, охватывающих различные темы в области технологий, программирования и личных взглядов.",
            kr: "Жасур Тагаев томонидан бўлишилган мақолалар тўпламини ўрганинг, технология, дастурлаш ва шахсий фикрлар бўйича турли мавзуларни қамраб олади.",
          }}
        />
        <Articles articles={articles} />
      </main>
      <Footer />
    </>
  );
};

export default ArticlesPage;
