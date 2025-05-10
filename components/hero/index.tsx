import React from "react";
import LinkElement from "@/utils/components/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      role="banner"
      aria-label="Hero Section"
      className="w-full max-w-[1536px] mx-auto mt-4"
    >
      <div className="relative w-full h-[750px]">
        <Image
          src="/hero.png"
          alt="Hero Image"
          width={1536}
          height={750}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[rgb(5,45,79)] opacity-60"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-[50px]">Dr. Jasur Tagaev</h1>
          <h2>Melanoma and Skin Cancer Institute</h2>
          <LinkElement href="/learn-more">Learn More</LinkElement>
        </div>
      </div>
    </section>
  );
};

export default Hero;
