import { Outlet } from "react-router-dom";
import SideBar from "../../components/template/SideBar/SideBar";
import TopBar from "../../components/template/TopBar/TopBar";
import React, { useState } from "react";

const Admin: React.FC = () => {
  const [isShowHamberMenu, setIsShowHamberMenu] = useState(false);

  return (
    <>
      <div className="relative">
        <TopBar
          isShowHamberMenu={isShowHamberMenu}
          setIsShowHamberMenu={setIsShowHamberMenu}
        ></TopBar>
        <div className="flex ">
          <div className="hidden md:flex w-56">
            <div className="fixed">
              <SideBar
                isShowHamberMenu={isShowHamberMenu}
                setIsShowHamberMenu={setIsShowHamberMenu}
              ></SideBar>
            </div>
          </div>
          <div className="flex-1 container px-5 mt-12">
            <Outlet></Outlet>
          </div>
        </div>

        <div
          className={`z-20 mt-[68px] duration-300 absolute top-0 md:hidden  ${
            isShowHamberMenu
              ? "w-48 ltr:left-0 rtl:right-0"
              : "w-0 ltr:-left-52 rtl:-right-52"
          }`}
        >
          <div className="fixed ">
            <SideBar
              isShowHamberMenu={isShowHamberMenu}
              setIsShowHamberMenu={setIsShowHamberMenu}
            ></SideBar>
          </div>
        </div>
        <div
          onClick={() => setIsShowHamberMenu((last: any) => !last)}
          className={`md:hidden z-10  duration-300 absolute top-0 h-full bg-a_general-30/50 dark:bg-a_general-30/20 ${
            isShowHamberMenu ? "w-full" : "w-0"
          }`}
        ></div>
      </div>
    </>
  );
};
export default Admin;
