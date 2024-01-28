import React from "react";
interface ButtonProps {
  title?: string | number;
  bg?: string;
  icon?: string;
  color?: string;
  hovercolor?: string;
  hoverbg?: string;
  size?: "sm" | "md" | "lg";
}
const Button: React.FC<ButtonProps> = ({
  title,
  bg,
  icon,
  color,
  hovercolor,
  hoverbg,
  size,
}) => {
  return (
    <>
      <div className="">
        <button
          className={`${bg} flex justify-center items-center gap-1 duration-300 ${color} ${hoverbg} ${hovercolor} ${
            size === "sm" ? "text-sm" : "text-base"
          } ${
            size === "sm" && !icon
              ? "px-5 py-2"
              : size === "md" && !icon
              ? "px-6 py-2"
              : size === "lg" && !icon
              ? "px-6 py-3"
              : null
          } ${
            size === "sm" && icon && title
              ? "px-4 py-[6px]"
              : size === "md" && icon && title
              ? "px-5 py-2"
              : size === "lg" && icon && title
              ? "px-5 py-3"
              : null
          } ${
            size === "sm" && !title
              ? "p-[6px] size-9"
              : size === "md" && !title
              ? "p-2 size-10"
              : size === "lg" && !title
              ? "p-3 size-12"
              : null
          } ${bg === 'bg-white' || hoverbg==='hover:bg-white' ? 'border' :null}  rounded-md`}
        >
          {icon ? <i className={`${icon}`}></i> : null}
          <p>{title}</p>
        </button>
      </div>
    </>
  );
};

export default Button;
