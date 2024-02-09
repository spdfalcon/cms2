import { useState } from "react";
import Filter from "../../../components/module/Filter/Filter";

export default function Inbox() {
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [nameFilter , setNameFilter] = useState('')
  const filters12 = [
    { id: 1, name: "ali1"},
    { id: 2, name: "ali2" },
    { id: 5, name: "ali5" },
  ];
  return (
    <>
      <div>
        <Filter
          setIsShowFilter={setIsShowFilter}
          isShowFilter={isShowFilter}
          filter={filters12}
          nameFilter={nameFilter}
          setNameFilter={setNameFilter}
        ></Filter>
      </div>
      <div className=" relative">
      {isShowFilter ? (
        <div
          onClick={() => setIsShowFilter(false)}
          className="w-full h-screen top-0 absolute bg-red-400/0 "
        ></div>
      ) : null}
      </div>
    </>
  );
}
