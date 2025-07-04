import React from "react";

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

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default AboutLayout;
