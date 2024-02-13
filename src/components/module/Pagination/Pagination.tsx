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
  return (
    <div className="">
      <div className="flex items-center gap-1 md:gap-2">
        <i
          onClick={() => {
            if (page !== 1) {
              setPage((priv) => priv - 1);
            }
          }}
          className="bi bi-chevron-right hover:bg-a_primary-100 duration-300 hover:text-white dark:hover:text-white bg-white size-5 md:size-7 cursor-pointer text-xs md:text-base rounded-md flex justify-center items-center dark:text-a_general-90 ltr:rotate-180"
        ></i>
        <ul className="flex gap-1 md:gap-2">
          {Array(Math.ceil(all / inpage))
            .fill(0)
            .map((item, index) => (
              <>
              <div className="hidden">{item}</div>
                <li
                  onClick={() => setPage(index + 1)}
                  className={`hover:bg-a_primary-100 duration-300 hover:text-white dark:hover:text-white bg-white size-5 md:size-7 cursor-pointer text-xs md:text-base rounded-md flex justify-center items-center dark:text-a_general-90 ${
                    page === index + 1 && "bg-a_primary-70 text-white"
                  }`}
                  key={index}
                >
                  {index + 1}
                </li>
              </>
            ))}
        </ul>
        <i
          onClick={() => {
            if (page !== Math.ceil(all / inpage)) {
              setPage((priv) => priv + 1);
            }
          }}
          className="bi bi-chevron-left hover:bg-a_primary-100 duration-300 hover:text-white dark:hover:text-white bg-white size-5 md:size-7 cursor-pointer text-xs md:text-base rounded-md flex justify-center items-center dark:text-a_general-90 ltr:rotate-180"
        ></i>
      </div>
    </div>
  );
};

export default Pagination;
