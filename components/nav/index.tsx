import React, { useEffect } from "react";
import { Props } from "./props";
import { HiOutlineX } from "react-icons/hi";
import { NAVBAR_LIST_MOCK } from "@/mocks/component";
import Link from "next/link";
import { useLocale } from "next-intl";
import { INavigationItem } from "@/types/article";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import "./style.css";

type Locale = "uz" | "ru" | "en" | "kr";

const Nav = ({ menuIsOpen, setMenuOpen }: Props) => {
  const locale = useLocale() as Locale;

  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuIsOpen]);
  return (
    <div>
      <div
        className={`w-screen h-screen bg-black/50 fixed top-0 left-0 z-2 backdrop-blur-[2px] ${menuIsOpen ? "visible" : "hidden"}`}
        onClick={() => setMenuOpen(false)}
      ></div>
      <div
        className={`w-[370px] h-screen bg-dark-primary fixed top-0 right-0 z-3 ${menuIsOpen ? "translate-x-0" : "translate-x-[410px]"} transition-transform duration-300 ease-in-out`}
      >
        <button
          aria-expanded="false"
          aria-controls="navigation-menu"
          aria-label="Close navigation menu"
          className="text-white text-2xl absolute bg-dark-primary left-[-40px] cursor-pointer w-[40px] h-[40px] flex items-center justify-center"
          onClick={() => setMenuOpen(false)}
        >
          <HiOutlineX />
        </button>
        <nav className="h-full">
          <ul>
            {NAVBAR_LIST_MOCK.map((navitem: INavigationItem) => (
              <div key={navitem.id} className="list-item">
                <li
                  onClick={
                    navitem.children
                      ? (e) => e.stopPropagation()
                      : () => setMenuOpen(false)
                  }
                  className="text-white text-xl border-b-[1px] border-b-gray-600 text-center uppercase"
                >
                  <Link
                    href={navitem.url}
                    title={`Go to ${navitem.label[locale]}`}
                    aria-label={`Go to ${navitem.label[locale]}`}
                    prefetch={true}
                    className="block p-4 hover:bg-primary/50 transition-colors duration-300 ease-in-out"
                  >
                    {navitem.label[locale]}
                    {navitem.children && (
                      <>
                        <MdKeyboardArrowDown className="inline text-3xl ml-2 mt-[-5px] to-bottom" />
                        <MdKeyboardArrowUp className="hidden text-3xl ml-2 mt-[-5px] to-top" />
                      </>
                    )}
                  </Link>
                </li>
                {navitem.children && (
                  <div className="sub-list">
                    <ul>
                      {navitem.children.map((child) => (
                        <li
                          onClick={() => setMenuOpen(false)}
                          key={child.id}
                          className="text-white bg-sub-nav text-lg border-b-[1px] border-b-gray-600 text-center uppercase"
                        >
                          <Link
                            href={child.url}
                            title={`Go to ${child.label[locale]}`}
                            aria-label={`Go to ${child.label[locale]}`}
                            prefetch={true}
                            className="block p-4 hover:bg-primary/50 transition-colors duration-300 ease-in-out"
                          >
                            {child.label[locale]}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
