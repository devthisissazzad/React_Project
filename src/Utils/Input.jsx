import React from "react";

const Input = React.forwardRef(({ type, value, className, ...props }, ref) => {
  return (
    <input
      value={value && value}
      ref={ref}
      type={type || "text"}
      {...props}
      className={` border-none  outline-none w-full rounded-md py-1 px-2 caret-violet-950 selected:text-pink-400 ${className} ${
        type === "checkbox" &&
        "w-5 h-5 appearance accent-pink-950 checked:bg-pink-800 hover:accent-purple-800 duration-300 transition-all checked:shadow-md checked:shadow-violet-900"
      }`}
    />
  );
});

export default Input;
