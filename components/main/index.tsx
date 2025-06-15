import React from "react";
import Hero from "../hero";
import VideoPlayer from "../video-player";
import Media from "../media";
import Articles from "../articles";
import Diesease from "../dieseas";
import Banner from "../banner";

const Main = async () => {
  return (
    <main>
      <Hero />
      <VideoPlayer />
      <Articles />
      <Media />
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
