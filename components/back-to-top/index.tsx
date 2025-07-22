"use client";
import { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const BackToTop = () => {
  const [isBackToTopVisible, setBackToTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBackToTopVisible(window.scrollY > 130);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isBackToTopVisible ? (
    <button
      className="bg-dark-primary cursor-pointer p-2 z-20 rounded-lg fixed bottom-[100px] right-[50px]"
      onClick={() => window.scrollTo(0, 0)}
    >
      <MdKeyboardArrowUp className="text-white text-3xl" />
    </button>
  ) : null;
};

export default BackToTop;
