"use client";
import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import Nav from "../nav";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuIsOpen, setMenuOpen] = React.useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleChangeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = event.target.value;

    const pathWithoutLocale = pathname.replace(/^\/(uz|ru|en|kr)/, "");

    const newPath = `/${selectedLocale}${pathWithoutLocale}`;

    router.push(newPath);
  };
  return (
    <header
      role="header"
      aria-label="Header section"
      className="w-full h-[100px] bg-primary sticky top-0 z-10"
    >
      <div className="container h-full w-full mx-auto">
        <div className="h-full w-full flex items-center justify-between relative">
          <select
            onChange={handleChangeLanguage}
            role="combobox"
            aria-label="Select Language: Uzbek, Russian, or English"
            name="language select"
            className="text-white"
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
          <Link href="/" aria-label="Go to homepage" title="Go to homepage">
            <Image
              src="/logo.png"
              alt="Logo Jasur Tagaev Portfolio - Oncologist"
              width={256}
              height={81}
              loading="lazy"
            />
          </Link>
          <div>
            <button
              onClick={handleMenuOpen}
              aria-expanded={menuIsOpen}
              aria-controls="navigation-menu"
              className="text-white text-2xl cursor-pointer"
            >
              <HiOutlineMenu />
            </button>
            <Nav menuIsOpen={menuIsOpen} setMenuOpen={setMenuOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
