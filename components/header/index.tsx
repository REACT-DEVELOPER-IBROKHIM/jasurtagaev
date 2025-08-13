"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import Nav from "../nav";
import { useLocale, useTranslations } from "next-intl";
import LanguageSelector from "../language-selector";

const Header = ({ pinned }: { pinned?: boolean }) => {
  const t = useTranslations("home");
  const [menuIsOpen, setMenuOpen] = React.useState(false);
  const [navbarPinned, setNavbarPinned] = React.useState(false);
  type ILocale = "uz" | "ru" | "en" | "kr";
  const locale = useLocale() as ILocale;

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleScroll = () => {
    setNavbarPinned(window.scrollY > 130);
  };

  useEffect(() => {
    if (!pinned) {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });

  useEffect(() => {
    if (pinned) {
      handleScroll();
    }
  }, []);

  return (
    <header
      aria-label="Header section"
      className={`w-full h-[100px] ${navbarPinned || pinned ? "bg-primary fixed top-0 z-30" : "bg-transparent absolute top-0 z-30"} transition-all duration-300 ease-in-out`}
    >
      <div className="container h-full w-full mx-auto px-10">
        <div className="h-full w-full flex items-center justify-between relative">
          <LanguageSelector />
          <Link
            href={`/${locale}/`}
            aria-label="Go to homepage"
            title="Go to homepage"
          >
            <Image
              src="/logo.png"
              alt="Logo Jasur Tagaev Portfolio - Oncologist"
              width={256}
              height={81}
              className="object-contain w-[150px] h-[40px] md:w-[256px] md:h-[81px] lg:w-[256px] lg:h-[81px]"
              loading="lazy"
            />
          </Link>
          <div>
            <button
              onClick={handleMenuOpen}
              aria-expanded="false"
              aria-controls="navigation-menu"
              aria-label="Open navigation menu"
              className="text-[20px] cursor-pointer flex items-center gap-4 text-white md:text-2xl"
            >
              <HiOutlineMenu />
              <span className="text-[16px] md:text-lg">
                {t("reusable.menu")}
              </span>
            </button>
            <Nav menuIsOpen={menuIsOpen} setMenuOpen={setMenuOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
