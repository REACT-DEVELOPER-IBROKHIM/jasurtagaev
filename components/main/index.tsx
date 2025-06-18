import React from "react";
import Hero from "../hero";
import VideoPlayer from "../video-player";
import Media from "../media";
import Articles from "../articles";
import Diesease from "../dieseas";
import Banner from "../banner";
import { fetchMediaData } from "@/helpers/api/media.request";

const Main = async () => {
  const mediaData = await fetchMediaData();
  return (
    <main>
      <Hero />
      <VideoPlayer />
      <Articles />
      <Media mediaData={mediaData} />
      <Banner
        image={"/banner-images/banner-image-home.jpg"}
        title="Compassionate Care"
        opacity={0.7}
      />
      <Diesease />
    </main>
  );
};

export default Main;
