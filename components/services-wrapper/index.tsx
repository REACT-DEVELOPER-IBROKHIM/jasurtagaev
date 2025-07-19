"use client";
import { IServiceSubType, IServiceType } from "@/types/article";
import { useLocale, useTranslations } from "next-intl";
import ServiceTypeCard from "../service-type-card";
import ServiceCard from "../service-card";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

const ServicesWrapper = ({
  serviceTypesData,
  subservicesData,
  type,
}: {
  serviceTypesData?: IServiceType[];
  subservicesData?: IServiceSubType[];
  type?: string;
}) => {
  const t = useTranslations("services");
  type Locale = "uz" | "ru" | "en" | "kr";
  const locale = useLocale() as Locale;
  const [selectedService, setSelectedService] =
    useState<IServiceSubType | null>(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedService]);

  return subservicesData && subservicesData.length > 0 ? (
    <section>
      <h1 className="text-3xl font-bold mb-6">{t(`${type}_title`)}</h1>
      {subservicesData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subservicesData.map((subservice: any) => (
            <ServiceCard
              key={subservice.id}
              service={subservice}
              setSelectedService={setSelectedService}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No subservices available for this type.
        </p>
      )}
      {selectedService && (
        <div
          onClick={() => setSelectedService(null)}
          className="fixed top-0 right-0 w-screen h-screen z-10 bg-[rgba(0,0,0,0.4)] backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-white  rounded-lg w-full max-w-[1200px] flex flex-col p-4 h-[50%] md:p-8 md:h-[60%] lg:h-[80%]">
            <div className="flex justify-end mb-4">
              <FiX
                onClick={() => setSelectedService(null)}
                className="text-2xl cursor-pointer"
              />
            </div>
            <div
              onClick={(e) => e.stopPropagation()}
              className="overflow-y-auto flex items-start flex-col flex-1"
            >
              {selectedService?.image && (
                <img
                  src={selectedService.image}
                  alt={selectedService.title[locale]}
                  className="w-full h-[350px] object-cover rounded-md mb-4"
                />
              )}
              {selectedService?.type[locale] && (
                <p
                  className={`text-sm inline px-4 capitalize text-gray-700 mb-4 ${selectedService.type.en === "diagnosis" ? "bg-sky-400" : "bg-green-400"} rounded-4xl`}
                >
                  {selectedService.type[locale]}
                </p>
              )}
              {selectedService?.title && (
                <h2 className="text-[18px] md:text-xl font-semibold mb-2">
                  {selectedService.title[locale]}
                </h2>
              )}
              {selectedService?.description && (
                <p className="text-gray-600 pb-4">
                  {selectedService.description[locale]}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  ) : (
    <section className="w-full h-auto my-[50px]">
      <h1 className="text-3xl font-bold">{t("title")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-[50px]">
        {serviceTypesData?.map((serviceType) => (
          <ServiceTypeCard key={serviceType.id} serviceType={serviceType} />
        ))}
      </div>
    </section>
  );
};

export default ServicesWrapper;
