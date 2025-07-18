import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="loader"></div>
      <Image
        src="/loader-logo.png"
        alt="Loading"
        width={150}
        height={150}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default Loading;
