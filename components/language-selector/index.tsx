'use client'
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

const LanguageSelector = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleChangeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = event.target.value;

    const pathWithoutLocale = pathname.replace(/^\/(uz|ru|en|kr)/, "");

    const newPath = `/${selectedLocale}${pathWithoutLocale}`;

    router.push(newPath);
  };

  return (
    <select
      onChange={handleChangeLanguage}
      aria-label="Select Language: Uzbek, Russian, or English"
      aria-haspopup="listbox"
      aria-controls="language-options"
      aria-autocomplete="list"
      id="language-select"
      aria-expanded="false"
      aria-owns="language-options"
      name="language select"
      className="text-[14px] text-white"
      defaultValue={pathname.split("/")[1] || "en"}
    >
      <option className="text-black" value="uz">
        O'zbek
      </option>
      <option className="text-black" value="kr">
        Ўзбек
      </option>
      <option className="text-black" value="ru">
        Русский
      </option>
      <option className="text-black" value="en">
        English
      </option>
    </select>
  );
};

export default LanguageSelector;
