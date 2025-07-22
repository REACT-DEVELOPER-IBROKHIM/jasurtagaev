import Banner from "@/components/banner";
import Header from "@/components/header";
import React from "react";
import {
  fetchAfterBeforeData,
  fetchMediaData,
} from "@/helpers/api/media.request";
import Footer from "@/components/footer";
import MediaWrapper from "@/components/media-wrapper";
import ContactCard from "@/components/contact-card";
import BackToTop from "@/components/back-to-top";

const MediaPage = async () => {
  const mediaData = await fetchMediaData();
  const afterBefore = await fetchAfterBeforeData();
  return (
    <>
      <Header />
      <main className="container mx-auto px-6">
        <Banner
          image={"/banner-images/banner-image-media.JPG"}
          title={{
            uz: "Galereya",
            ru: "Галерея",
            en: "Gallery",
            kr: "Галерея",
          }}
          opacity={0.75}
          description={{
            uz: "Jasur Tagaevning erishgan natijalari va mediyadagi foydali ma'lumotlarni o'rganing.",
            ru: "Изучите достижения Жасура Тагаева и полезную информацию в медиа.",
            en: "Explore the achievements of Jasur Tagaev and useful information in the media.",
            kr: "Жасур Тагаевнинг эришган натижалари ва медиядаги фойдали маълумотларни ўрганинг.",
          }}
        />
        <MediaWrapper mediaData={mediaData} afterBefore={afterBefore} />
        <ContactCard />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default MediaPage;
