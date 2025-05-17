import React from "react";

const VideoPlayer = () => {
  return (
    <section
      role="video"
      aria-label="Video Player"
      className="w-full h-[700px] py-[50px]"
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
          >
            <source src="/videos/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
