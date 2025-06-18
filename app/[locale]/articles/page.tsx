import Banner from "@/components/banner";
import Header from "@/components/header";
import Main from "@/components/main";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto py-4">
        <Banner
          image={"/banner-images/banner-image-articles.jpg"}
          title="Articles shared by Jasur Tagaev"
          opacity={0.7}
          description="Explore a collection of articles shared by Jasur Tagaev, covering various topics in technology, programming, and personal insights."
        />
      </main>
    </>
  );
};

export default page;
