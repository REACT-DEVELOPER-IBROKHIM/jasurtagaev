import React from "react";

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      role="button"
      className="bg-sky-700 mt-4 px-[30px] py-[10px] cursor-pointer text-white hover:bg-sky-600"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
