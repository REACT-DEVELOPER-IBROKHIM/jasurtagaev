import React from "react";
import { Props } from "./props";
import { HiOutlineX } from "react-icons/hi";
import { NAVBAR_LIST_MOCK } from "@/mocks/component";
import Link from "next/link";
import { useLocale } from "next-intl";
import { INavigationItem } from "@/types/article";

type Locale = "uz" | "ru" | "en" | "kr";

const Nav = ({ menuIsOpen, setMenuOpen }: Props) => {
  const locale = useLocale() as Locale;
  return (
    <div>
      <div
        className={`w-screen h-screen bg-black/50 fixed top-0 left-0 z-2 backdrop-blur-[2px] ${menuIsOpen ? "visible" : "hidden"}`}
        onClick={() => setMenuOpen(false)}
      ></div>
      <div
        className={`w-[400px] h-screen bg-primary fixed top-0 right-0 z-3 ${menuIsOpen ? "translate-x-0" : "translate-x-[440px]"} transition-transform duration-300 ease-in-out`}
      >
        <button
          aria-expanded="false"
          aria-controls="navigation-menu"
          aria-label="Close navigation menu"
          className="text-white text-2xl absolute bg-primary left-[-40px] cursor-pointer w-[40px] h-[40px] flex items-center justify-center"
          onClick={() => setMenuOpen(false)}
        >
          <HiOutlineX />
        </button>
        <nav className="h-full">
          <ul>
            {NAVBAR_LIST_MOCK.map((navitem: INavigationItem) => (
              <li
                key={navitem.id}
                onClick={() => setMenuOpen(false)}
                className="text-white text-xl border-b-[1px] border-b-white text-center uppercase"
              >
                <Link
                  href={navitem.url}
                  title={`Go to ${navitem.label[locale]}`}
                  aria-label={`Go to ${navitem.label[locale]}`}
                  prefetch={true}
                  className="block p-4 hover:bg-primary/50 transition-colors duration-300 ease-in-out"
                >
                  {navitem.label[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
