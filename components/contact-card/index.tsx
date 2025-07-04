import LinkElement from "@/utils/components/link";
import { useTranslations } from "next-intl";
import React from "react";

const ContactCard = () => {
  const t = useTranslations("contact");
  return (
    <div className="container mx-auto">
      <section
        aria-label="Contact Card"
        className="w-full py-8 bg-gray-100 flex justify-between px-[100px] items-center my-[100px]"
      >
        <h3 className="text-3xl italic">{t("title")}</h3>
        <LinkElement
          href="tel:+998991662220"
          className="bg-sky-700 inline-block px-[30px] py-[10px] cursor-pointer text-white hover:bg-sky-600"
        >
          {t("contact")}
        </LinkElement>
      </section>
    </div>
  );
};

export default ContactCard;
