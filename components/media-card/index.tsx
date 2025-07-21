"use client";
import { IMedia } from "@/types/article";
import Button from "@/utils/components/button";
import { useLocale, useTranslations } from "next-intl";

const MediaCard = ({
  media,
  setSelectedMedia,
}: {
  media: IMedia;
  setSelectedMedia: (media: IMedia) => void;
}) => {
  const t = useTranslations("home");
  type Locale = "uz" | "ru" | "en" | "kr";
  const locale = useLocale() as Locale;
  return (
    <div
      key={media.id}
      className="flex-1 bg-gradient-to-r from-white/60 to-[#082D4F]/70 bg-[#1e73be] text-white text-center"
    >
      {
        <img
          className="w-full h-[200px] lg:h-[300px] object-cover"
          width={"100%"}
          height={"400px"}
          src={media.thumbnail}
          alt=""
        />
      }
      <div className="p-2 lg:p-4 py-10">
        <p className="text-xl mb-4 lg:text-2xl lg:mb-8">{media.tag[locale]}</p>
        <h2 className="text-[16px] lg:text-[18px] mb-4 min-h-[60px] h-[70px]">
          {media.title[locale]}
        </h2>
        <Button
          onClick={() => {
            setSelectedMedia(media);
          }}
          className="bg-m-button mt-4 px-[30px] py-[10px] cursor-pointer border-1 border-white rounded-[5px] transition-colors duration-300"
        >
          {t("reusable.watch")}
        </Button>
      </div>
    </div>
  );
};

export default MediaCard;
