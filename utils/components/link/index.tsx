import Link from "next/link";
import React from "react";

const LinkElement = (
  props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string },
) => {
  return (
    <Link
      title={`Go to ${props.title}`}
      aria-label={`Go to ${props.title}`}
      role="link"
      className="bg-sky-700 mt-4 inline-block px-[30px] py-[10px] cursor-pointer text-white hover:bg-sky-600"
      {...props}
    >
      {props.children}
    </Link>
  );
};

export default LinkElement;
