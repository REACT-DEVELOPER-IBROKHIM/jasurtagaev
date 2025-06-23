import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <video
        src="./videos/loading.mp4"
        autoPlay
        loop
        muted
        className="w-[500px] object-contain"
      />
    </div>
  );
};

export default Loading;
