import Banner from "@/components/banner";
import Header from "@/components/header";
import React from "react";
import {
  fetchAfterBeforeData,
  fetchMediaData,
} from "@/helpers/api/media.request";
import Footer from "@/components/footer";
import MediaWrapper from "@/components/media-wrapper";
import useLocalizedMetadata from "@/helpers/generator";
import { Metadata } from "next";
import { galleryPageMetaData } from "@/mocks/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale as "en" | "uz" | "ru" | "kr";

  return useLocalizedMetadata(galleryPageMetaData, locale);
}

const MediaPage = async () => {
  const mediaData = await fetchMediaData();
  const afterBefore = await fetchAfterBeforeData();
  return (
    <>
      <Header />
      <main className="container mx-auto py-4 px-6">
        <Banner
          image={"/banner-images/banner-image-media.JPG"}
          title={{
            uz: "Galareya",
            ru: "Галерея",
            en: "Gallery",
            kr: "Галерея",
          }}
          opacity={0.5}
          description={{
            uz: "Jasur Tagaevnining erishgan natijalari va mediyadagi foydali malumotlarni o'rganing.",
            ru: "Изучите достижения Жасура Тагаева и полезную информацию в медиа.",
            en: "Explore the achievements of Jasur Tagaev and useful information in the media.",
            kr: "Жасур Тагаевнинг эришган натижалари ва медиядаги фойдали маълумотларни ўрганинг.",
          }}
        />
        <MediaWrapper mediaData={mediaData} afterBefore={afterBefore} />
      </main>
      <Footer />
    </>
  );
};

export default MediaPage;
