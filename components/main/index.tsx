import React from "react";
import Hero from "../hero";
import VideoPlayer from "../video-player";
import Media from "../media";
import Articles from "../articles";
import Diesease from "../dieseas";

const Main = async () => {
  return (
    <main>
      <Hero />
      <VideoPlayer />
      <Articles />
      <Media />
      <Diesease />
    </main>
  );
};

export default Main;
