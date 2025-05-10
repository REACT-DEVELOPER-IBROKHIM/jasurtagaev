"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import Nav from "../nav";

const Header = () => {
  const [menuIsOpen, setMenuOpen] = React.useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  return (
    <header
      role="header"
      aria-label="Header section"
      className="w-full h-[80px] bg-primary"
    >
      <div className="container h-full w-full mx-auto">
        <div className="h-full w-full flex items-center justify-between relative">
          <select
            role="combobox"
            aria-label="Select Language: Uzbek, Russian, or English"
            name="language select"
            className="text-white"
          >
            <option className="text-black" value="uz">
              Uzbek
            </option>
            <option className="text-black" value="ru">
              Russian
            </option>
            <option className="text-black" value="en">
              English
            </option>
          </select>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo Jasur Tagaev Portfolio - Oncologist"
              width={200}
              height={60}
              loading="lazy"
              className="h-[60px]"
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
