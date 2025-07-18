import React from "react";

const VideoPlayer = () => {
  return (
    <section
      aria-label="Video Player"
      className="w-full md:py-[30px] lg:h-[900px] pt-[36px]"
    >
      <div className="container h-full mx-auto">
        <div className="flex h-full items-center justify-center">
          <video
            className="w-full h-full object-cover object-top"
            src="/videos/intro.mp4"
            preload="metadata"
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
