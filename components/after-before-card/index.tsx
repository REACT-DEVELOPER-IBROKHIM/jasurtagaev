"use client";
import LinkElement from "@/utils/components/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const AfterBeforeCard = ({ item }: { item: any }) => {
  const t = useTranslations("after_before");
  const th = useTranslations("home");
  const pathname = usePathname();

  return (
    <div key={item.id} className="mb-[30px]">
      <h3 className="text-2xl mb-2">{t("title")}</h3>
      <div className="gap-4 flex flex-col items-center md:flex-row relative">
        <div className="w-full md:w-1/2">
          <Image
            src={item.urls[0]}
            alt="Before"
            width={500}
            height={300}
            className="w-full h-[400px] object-cover"
          />
        </div>
        {!pathname.includes("media") && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <LinkElement
              className="bg-m-button text-white p-4 rounded-xl"
              href="/media/#after-before"
              title={th("reusable.explore_more")}
            >
              {th("reusable.explore_more")}
            </LinkElement>
          </div>
        )}

        <div className="w-full md:w-1/2">
          <h3 className="text-2xl mb-2"></h3>
          <Image
            src={item.urls[1]}
            alt="After"
            width={500}
            height={300}
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AfterBeforeCard;
