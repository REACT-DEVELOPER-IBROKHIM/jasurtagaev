import { IServiceType } from "@/types/article";
import LinkElement from "@/utils/components/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const ServiceTypeCard = ({ serviceType }: { serviceType: IServiceType }) => {
  type ILocale = "uz" | "ru" | "en" | "kr";

  const locale = useLocale() as ILocale;
  const t = useTranslations("services");
  return (
    <article className="bg-white shadow-primary rounded-lg p-6 mb-4">
      <Image
        src={serviceType.image}
        alt={serviceType.title[locale]}
        width={500}
        height={350}
        className="w-full h-[350px] object-cover rounded-md mb-4"
      />
      <p
        className={`text-sm inline px-4 capitalize text-gray-700 mb-4 ${serviceType.type.en === "diagnosis" ? "bg-sky-400" : "bg-green-400"} rounded-4xl`}
      >
        {serviceType.type[locale]}
      </p>
      <h3 className="text-xl font-semibold my-6">
        {serviceType.title[locale]}
      </h3>
      <p className="text-gray-600">{serviceType.description[locale]}</p>
      <LinkElement
        href={`/${locale}/services/${serviceType.slug}?type=${serviceType.type.en}`}
        className="mt-4 inline-block bg-sky-700 text-white p-4 hover:bg-sky-800 transition-colors duration-300"
      >
        {t("btn_text")}
      </LinkElement>
    </article>
  );
};

export default ServiceTypeCard;
