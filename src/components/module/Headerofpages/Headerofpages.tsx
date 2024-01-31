import React from "react";
import { Link } from "react-router-dom";

interface HeaderofpagesProps {
  title: string;
  back?: boolean;
  children?: any;
  to?: any;
}
const Headerofpages: React.FC<HeaderofpagesProps> = ({
  title,
  children,
  back,
  to,
}) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className={`l`}>
          {back ? (
            <Link
              className="flex items-center gap-2 text-a_general-80 text-sm"
              to={to}
            >
              <i className="bi bi-arrow-left"></i>
              <span>Back</span>
            </Link>
          ) : null}
          <h2 className="md:text-2xl font-bold">{title}</h2>
        </div>
        <div className={`r flex gap-4`}>
            {children}
        </div>
      </div>
    </>
  );
};

export default Headerofpages;
