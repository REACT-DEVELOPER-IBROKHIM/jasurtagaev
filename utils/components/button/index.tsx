import React from "react";

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      role="button"
      className="bg-m-button mt-4 px-[30px] py-[10px] cursor-pointer text-white transition-colors duration-300"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
