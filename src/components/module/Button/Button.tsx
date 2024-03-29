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
    submitType?: 'button' | 'submit' | 'reset'  
}
const Button: React.FC<ButtonProps> = ({icon, size, type , children , submitType }) => {
  return (
    <>
      <div className="">
        <button
        type={submitType}
          className={`flex justify-center items-center duration-300 ${children && 'gap-1'} ${
            size === "sm" ? "text-xs md:text-sm" : "text-base"
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
              ? "text-white bg-a_primary-100 hover:text-a_primary-100 hover:bg-white dark:bg-a_general-90"
              : type === "Secondary"
              ? "text-a_primary-100 bg-a_primary-40 hover:text-a_primary-40 hover:bg-a_primary-100"
              : type === "Destructive"
              ? "text-white bg-a_red-101 hover:bg-white dark:bg-a_general-90 hover:text-a_red-101"
              : type === "Destructive Secondary"
              ? "text-a_red-101 bg-a_red-30 hover:text-a_red-30 hover:bg-a_red-101"
              : type === "White"
              ? "bg-white dark:bg-a_general-90 text-a_primary-100 hover:bg-a_primary-100 hover:text-white"
              : null
          } rounded-md border`}
        >
          {icon ? <i className={`${icon} flex justify-center items-center`}></i> : null}
          <p className="text-xs md:text-sm md:text-base">{children}</p>
        </button>
      </div>
    </>
  );
};

export default Button;
