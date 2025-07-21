import Link from "next/link";
import React from "react";

const LinkElement = (props: any & { href: string }) => {
  return (
    <Link
      title={`Go to ${props.title}`}
      aria-label={`Go to ${props.title}`}
      role="link"
      className="bg-m-button mt-4 inline-block px-[30px] py-[10px] cursor-pointer text-white transition-colors duration-300"
      {...props}
    >
      {props.children}
    </Link>
  );
};

export default LinkElement;
