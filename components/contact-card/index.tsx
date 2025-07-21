import LinkElement from "@/utils/components/link";
import { useTranslations } from "next-intl";
import React from "react";

const ContactCard = () => {
  const t = useTranslations("contact");
  return (
    <div className="container mx-auto">
      <section
        aria-label="Contact Card"
        className="w-full py-8 bg-gray-100 flex justify-center px-[30px] gap-4 items-center my-[40px] flex-wrap md:justify-between md:px-[100px] md:my-[50px]"
      >
        <h3 className="text-xl lg:text-3xl italic">{t("title")}</h3>
        <LinkElement
          href="tel:+998991662220"
          className="bg-m-button inline-block px-[30px] py-[10px] cursor-pointer text-white transition-colors duration-300"
        >
          {t("contact")}
        </LinkElement>
      </section>
    </div>
  );
};

export default ContactCard;
