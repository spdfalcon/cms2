import React from "react";
interface ButtonProps {
  icon?: string;
  size?: "sm" | "md" | "lg";
  type:
    | "Primary"
    | "Secondary"
    | "Destructive"
    | "Destructive Secondary"
    | "White";
    children?:any
}
const Button: React.FC<ButtonProps> = ({icon, size, type , children }) => {
  return (
    <>
      <div className="">
        <button
          className={` flex justify-center items-center gap-1 duration-300 ${
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
            size === "sm" && icon && children
              ? "px-4 py-[6px]"
              : size === "md" && icon && children
              ? "px-5 py-2"
              : size === "lg" && icon && children
              ? "px-5 py-3"
              : null
          } ${
            size === "sm" && !children
              ? "p-[6px] size-9"
              : size === "md" && !children
              ? "p-2 size-10"
              : size === "lg" && !children
              ? "p-3 size-12"
              : null
          } ${
            type === "Primary"
              ? "text-white bg-a_primary-100 hover:text-a_primary-100 hover:bg-white"
              : type === "Secondary"
              ? "text-a_primary-100 bg-a_primary-40 hover:text-a_primary-40 hover:bg-a_primary-100"
              : type === "Destructive"
              ? "text-white bg-a_red-101 hover:bg-white hover:text-a_red-101"
              : type === "Destructive Secondary"
              ? "text-a_red-101 bg-a_red-30 hover:text-a_red-30 hover:bg-a_red-101"
              : type === "White"
              ? "bg-white text-a_primary-100 hover:bg-a_primary-100 hover:text-white"
              : null
          } rounded-md border`}
        >
          {icon ? <i className={`${icon}`}></i> : null}
          <p>{children}</p>
        </button>
      </div>
    </>
  );
};

export default Button;
