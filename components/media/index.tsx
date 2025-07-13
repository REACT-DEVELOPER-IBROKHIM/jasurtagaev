"use client";
import { IMedia } from "@/types/article";
import MediaCard from "../media-card";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import ExpandLink from "@/utils/components/expand";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const Media = ({
  mediaData,
  isFeatured,
}: {
  mediaData: IMedia[];
  isFeatured: boolean;
}) => {
  const t = useTranslations("home");
  const [selectedMedia, setSelectedMedia] = useState<IMedia | null>(null);
  type Locale = "uz" | "ru" | "en" | "kr";
  const locale = useLocale() as Locale;

  const pathname = usePathname();

  return (
    <>
      <section className="w-full flex my-[50px]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mediaData
              .filter((media) =>
                isFeatured ? media.isFeatured === isFeatured : true,
              )
              .map((media: IMedia) => (
                <MediaCard
                  key={media.id}
                  media={media}
                  setSelectedMedia={setSelectedMedia}
                />
              ))}
          </div>
        </div>

        {selectedMedia && (
          <div className="fixed top-0 right-0 w-screen h-screen z-10 bg-[rgba(0,0,0,0.4)] backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg w-full max-w-[1200px] h-[80%] overflow-y-auto flex flex-col">
              <div className="flex justify-end mb-4">
                <FiX
                  onClick={() => setSelectedMedia(null)}
                  className="text-2xl cursor-pointer"
                />
              </div>
              {selectedMedia?.tag && (
                <p className="text-sm text-gray-600 mb-4">
                  {selectedMedia.tag[locale]}
                </p>
              )}
              {selectedMedia?.title && (
                <h2 className="text-xl font-semibold mb-2">
                  {selectedMedia.title[locale]}
                </h2>
              )}
              <iframe
                loading="lazy"
                width={"100%"}
                className="mb-4 flex-1"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                src={`${selectedMedia?.link}?rel=0`}
              ></iframe>
            </div>
          </div>
        )}
      </section>
      {!pathname.includes("media") && (
        <div className="flex justify-center mb-[50px]">
          <ExpandLink href="/media">{t("reusable.explore_more")}</ExpandLink>
        </div>
      )}
    </>
  );
};

export default Media;
