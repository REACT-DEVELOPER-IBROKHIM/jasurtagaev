"use client";
import { truncateText } from "@/helpers/transform";
import { IServiceSubType } from "@/types/article";
import Button from "@/utils/components/button";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const ServiceCard = ({
  service,
  setSelectedService,
}: {
  service: IServiceSubType;
  setSelectedService: (service: IServiceSubType | null) => void;
}) => {
  type ILocale = "uz" | "ru" | "en" | "kr";
  const t = useTranslations("services");

  const locale = useLocale() as ILocale;
  return (
    <article className="bg-white shadow-primary rounded-lg p-4 mb-4">
      <img
        src={service.image}
        alt={service.title[locale]}
        className="w-full h-[300px] object-cover rounded-md mb-4"
      />
      <p
        className={`text-sm inline px-4 capitalize text-gray-700 mb-4 ${service.type[locale] === "diagnosis" ? "bg-sky-400" : "bg-green-400"} rounded-4xl`}
      >
        {service.type[locale]}
      </p>
      <h1 className="text-xl font-semibold my-6 h-[50px]">
        {service.title[locale]}
      </h1>
      <p className="text-gray-600 pb-4">
        {truncateText(service.description[locale], 200)}
      </p>
      <Button
        onClick={() => {
          setSelectedService(service);
        }}
      >
        {t("btn_text")}
      </Button>
    </article>
  );
};

export default ServiceCard;
