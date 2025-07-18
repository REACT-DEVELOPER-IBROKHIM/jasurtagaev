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
      aria-label="Header section"
      className="w-full h-[100px] bg-primary sticky top-0 z-10"
    >
      <div className="container h-full w-full mx-auto px-6">
        <div className="h-full w-full flex items-center justify-between relative">
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
              className="object-contain w-[180px] h-[60px] md:w-[256px] md:h-[81px] lg:w-[256px] lg:h-[81px]"
              loading="lazy"
            />
          </Link>
          <div>
            <button
              onClick={handleMenuOpen}
              aria-expanded="false"
              aria-controls="navigation-menu"
              aria-label="Open navigation menu"
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
