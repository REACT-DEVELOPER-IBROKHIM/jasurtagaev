import Banner from "@/components/banner";
import Header from "@/components/header";
import React from "react";

//meta tags

export const metadata = {
  title: "About | Jasur Tagaev",
  description:
    "Learn more about Jasur Tagaev, his journey, and his contributions to the tech community.",
  openGraph: {
    title: "About | Jasur Tagaev",
    description:
      "Learn more about Jasur Tagaev, his journey, and his contributions to the tech community.",
    images: [
      {
        url: "/banner-images/banner-image-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Jasur Tagaev",
      },
    ],
    siteName: "Jasur Tagaev",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Jasur Tagaev",
    description:
      "Learn more about Jasur Tagaev, his journey, and his contributions to the tech community.",
    images: ["/banner-images/banner-image-about.jpg"],
  },
};

const About = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto py-4">
        <Banner
          image={"/banner-images/banner-image-about.jpg"}
          title="Jasur Tagaev"
          description=""
          opacity={0.6}
          height={700}
        />
      </main>
    </>
  );
};

export default About;
