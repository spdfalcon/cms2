import React, { Dispatch, SetStateAction } from "react";
interface filter {
  setIsShowFilter: Dispatch<SetStateAction<boolean>>;
  isShowFilter?: boolean;
  filter?: {
    id: number;
    name: string;
  }[];
  nameFilter: string;
  setNameFilter: Dispatch<SetStateAction<string>>;
}

const Filter: React.FC<filter> = ({
  setIsShowFilter,
  isShowFilter,
  filter,
  setNameFilter,
}) => {
  return (
    <>
      <div className="mt-10 relative z-10 text-sm md:text-base">
        <div
          onClick={() => setIsShowFilter((last) => !last)}
          className=" cursor-pointer duration-300 bg-white dark:bg-a_general-60 border w-32 px-3 py-1 rounded-md inline-flex gap-2 items-center justify-between"
        >
          <i
            className={`bi bi-chevron-down duration-300 ${
              isShowFilter ? "rotate-180" : "rotate-0"
            }`}
          ></i>
          <button className="">filter</button>
        </div>
        <ul
          className={`duration-300 absolute rtl:right-5 ltr:left-5 top-10 flex flex-col bg-white dark:bg-a_general-60 rounded-md divide-y gap-y-1 px-2 *:py-1 overflow-y-hidden ${
            isShowFilter
              ? `${
                  filter?.length === 3
                    ? "h-32"
                    : filter?.length === 4
                    ? "h-40"
                    : filter?.length === 5
                    ? "h-48"
                    : filter?.length === 6
                    ? "h-56"
                    : filter?.length === 7
                    ? "h-64"
                    : ""
                }`
              : "h-0"
          }`}
        >
          {filter?.map((item) => (
            <li
              className="cursor-pointer duration-300"
              onClick={() => {
                setIsShowFilter(false);
                setNameFilter(item.name);
              }}
              key={item.id}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Filter;
