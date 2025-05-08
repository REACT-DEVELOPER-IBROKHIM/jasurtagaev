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
    <header className="w-full h-[80px] bg-primary">
      <div className="container h-full w-full mx-auto">
        <div className="h-full w-full flex items-center justify-between relative">
          <select name="lang" className="text-white">
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
              src="/logo.svg"
              alt="Logo Jasur Tagaev Portfolio - Oncologist"
              width={200}
              height={60}
              className="h-[60px]"
            />
          </Link>
          <div>
            <button
              onClick={handleMenuOpen}
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
