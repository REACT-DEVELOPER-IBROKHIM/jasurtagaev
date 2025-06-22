import React from "react";
import Hero from "../hero";
import VideoPlayer from "../video-player";
import Media from "../media";
import Articles from "../articles";
import Diesease from "../dieseas";
import Banner from "../banner";
import { fetchMediaData } from "@/helpers/api/media.request";
import { fetchDiseases, fetchPopularArticles } from "@/helpers/api/articles.request";
import ExpandLink from "@/utils/components/expand";

const Main = async () => {
  const mediaData = await fetchMediaData();
  const dieseases = await fetchDiseases();
  const popularArticles = await fetchPopularArticles();


  return (
    <main>
      <Hero />
      <VideoPlayer />
      <Articles articles={popularArticles} />
      <div className="flex justify-center">
        <ExpandLink href="/articles">
          Explore more
        </ExpandLink>
      </div>
      <Media mediaData={mediaData} isFeatured={true} />
      <div className="flex justify-center mb-[50px]">
        <ExpandLink href="/media">
          Explore more
        </ExpandLink>
      </div>
      <Banner
        image={"/banner-images/banner-image-home.jpg"}
        title="Compassionate Care"
        opacity={0.7}
      />
      <Diesease dieseases={dieseases} />
    </main>
  );
};

export default Main;
