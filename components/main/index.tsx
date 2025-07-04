import React from "react";
import Hero from "../hero";
import VideoPlayer from "../video-player";
import Media from "../media";
import Articles from "../articles";
import Diesease from "../dieseas";
import Banner from "../banner";
import {
  fetchAfterBeforeData,
  fetchMediaData,
} from "@/helpers/api/media.request";
import {
  fetchDiseases,
  fetchPopularArticles,
} from "@/helpers/api/articles.request";
import AfterBefore from "../after-before";

const Main = async () => {
  const mediaData = await fetchMediaData();
  const dieseases = await fetchDiseases();
  const popularArticles = await fetchPopularArticles();
  const afterBefore = await fetchAfterBeforeData();

  return (
    <main>
      <Hero />
      <VideoPlayer />
      <Articles articles={popularArticles} />
      <Media mediaData={mediaData} isFeatured={true} />
      <AfterBefore afterBefore={afterBefore} isFeatured={true} />
      <Banner
        image={"/banner-images/banner-image-home.jpg"}
        title={{
          uz: "Sog'liqni saqlash uchun mehr",
          ru: "Заботливый уход",
          en: "Compassionate care",
          kr: "Соғлиқни сақлаш учун меҳр",
        }}
        opacity={0.7}
      />
      <Diesease dieseases={dieseases} />
    </main>
  );
};

export default Main;
