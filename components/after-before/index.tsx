"use client";
import { IAfterBefore } from "@/types/article";
import ExpandLink from "@/utils/components/expand";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { useTranslations } from "use-intl";

const AfterBefore = ({
  afterBefore,
  isFeatured,
}: {
  afterBefore: IAfterBefore[];
  isFeatured?: boolean;
}) => {
  const t = useTranslations("after_before");
  const th = useTranslations("home");
  const pathname = usePathname();
  return (
    <>
      <section className="w-full mb-[50px]">
        <div className="container mx-auto">
          {afterBefore
            .filter((media) =>
              isFeatured ? media.isFeatured === isFeatured : true,
            )
            .map((item) => (
              <div className="flex flex-col md:flex-row" key={item.id}>
                <div className="md:w-1/2 p-4">
                  <h3 className="text-2xl mb-2">{t("before")}</h3>
                  <Image
                    src={item.urls[0]}
                    alt="Before"
                    width={500}
                    height={300}
                    className="w-full h-[400px] object-cover mb-4"
                  />
                </div>
                <div className="md:w-1/2 p-4">
                  <h3 className="text-2xl mb-2">{t("after")}</h3>
                  <Image
                    src={item.urls[1]}
                    alt="After"
                    width={500}
                    height={300}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            ))}
        </div>
      </section>
      {!pathname.includes("media") && (
        <div className="flex justify-center mb-[50px]">
          <ExpandLink href="/media">{th("reusable.explore_more")}</ExpandLink>
        </div>
      )}
    </>
  );
};

export default AfterBefore;
