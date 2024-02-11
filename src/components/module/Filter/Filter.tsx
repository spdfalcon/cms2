import React, { Dispatch, SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";
interface filter {
  filter?: {
    id: number;
    name: string;
  }[];
  nameFilter: string;
  setNameFilter: Dispatch<SetStateAction<string>>;
}

const Filter: React.FC<filter> = ({
  filter,
  setNameFilter,
  nameFilter
}) => {
  const {t} = useTranslation()
  const [isShowFilter, setIsShowFilter] = useState(false);
  
  return (
    <>
      <div className=" relative z-10 text-sm md:text-base">
        <div
          onClick={() => setIsShowFilter((last) => !last)}
          className=" cursor-pointer duration-300 bg-white dark:bg-a_general-60 border w-32 px-3 py-1 rounded-md inline-flex gap-2 items-center justify-between"
        >
          <i
            className={`bi bi-chevron-down duration-300 ${
              isShowFilter ? "rotate-180" : "rotate-0"
            }`}
          ></i>
          <button className="">{t(`${nameFilter}`)}</button>
        </div>
        <ul
          className={` duration-300 absolute rtl:right-5 ltr:left-5 top-10 flex flex-col bg-white dark:bg-a_general-60 rounded-md divide-y gap-y-1 *:py-1 overflow-y-hidden ${
            isShowFilter
              ? `border ${
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
              className="cursor-pointer duration-300 hover:bg-a_general-50 px-2"
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
      {
        isShowFilter ? (
          <div onClick={()=>setIsShowFilter(false)} className="absolute bg-black/0 w-full top-0 left-0 h-screen"></div>
        ) : null
      }

    </>
  );
};
export default Filter;
