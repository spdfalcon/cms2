import React, { Dispatch, SetStateAction } from "react";
interface paginationprop {
  page?: number;
  setPage: Dispatch<SetStateAction<number>>;
  all: number;
  inpage: number;
}
const Pagination: React.FC<paginationprop> = ({
  page,
  setPage,
  all,
  inpage,
}) => {
  return Math.ceil(all / inpage) === 1 ? null : (
    <div className="">
      <div className="flex items-center gap-1 md:gap-2">
        {page === 1 ? null : (
          <i
            onClick={() => {
              if (page !== 1) {
                setPage((priv) => priv - 1);
              }
            }}
            className="bi bi-chevron-right hover:bg-a_primary-100 duration-300 hover:text-white dark:hover:text-white bg-white size-5 md:size-7 cursor-pointer text-xs md:text-base rounded-md flex justify-center items-center dark:text-a_general-90 ltr:rotate-180 border"
          ></i>
        )}
        <ul className="flex gap-1 md:gap-2">
          {Array(Math.ceil(all / inpage))
            .fill(0)
            .map((item, index) => (
              <div key={index}>
                <div className="hidden">{item}</div>
                <li
                  onClick={() => setPage(index + 1)}
                  className={`hover:bg-a_primary-100 duration-300 hover:text-white dark:hover:text-white border size-5 md:size-7 cursor-pointer text-xs md:text-base rounded-md flex justify-center items-center dark:text-a_general-50 ${
                    page === index + 1 && "bg-a_primary-70 text-white"
                  }`}
                >
                  {index + 1}
                </li>
              </div>
            ))}
        </ul>
        {page === Math.ceil(all / inpage) ? null : (
          <i
            onClick={() => {
              if (page !== Math.ceil(all / inpage)) {
                setPage((priv) => priv + 1);
              }
            }}
            className="bi bi-chevron-left hover:bg-a_primary-100 duration-300 hover:text-white dark:hover:text-white bg-white size-5 md:size-7 cursor-pointer text-xs md:text-base rounded-md flex justify-center items-center dark:text-a_general-90 ltr:rotate-180 border"
          ></i>
        )}
      </div>
    </div>
  );
};

export default Pagination;
