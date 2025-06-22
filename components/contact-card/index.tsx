import LinkElement from "@/utils/components/link";
import React from "react";

const ContactCard = () => {
  return (
    <section
      aria-label="Contact Card"
      className="w-full py-8 bg-gray-100 flex justify-between px-[100px] items-center my-[100px]"
    >
      <h3 className="text-3xl italic">Biz bilan bog'lanmoqchimisiz?</h3>
      <LinkElement
        href="tel:+998901234567"
        className="bg-sky-700 inline-block px-[30px] py-[10px] cursor-pointer text-white hover:bg-sky-600"
      >
        Bog'lanish
      </LinkElement>
    </section>
  );
};

export default ContactCard;
