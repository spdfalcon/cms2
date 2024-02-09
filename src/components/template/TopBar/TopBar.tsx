import React, { useEffect, useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
interface OtherComponentProps {
  isShowHamberMenu: boolean;
  setIsShowHamberMenu: Function;
}
const TopBar: React.FC<OtherComponentProps> = ({
  isShowHamberMenu,
  setIsShowHamberMenu,
}) => {
  const [lang, setLang] = useState({
    flag:
      localStorage.getItem("lang") === "fa"
        ? "/img/topbar/iran.png"
        : "/img/topbar/UK.png",
    name: localStorage.getItem("lang") === "fa" ? "فارسی" : "English",
  });
  const [isShowLangModal, setIsShowLangModal] = useState(false);
  const { t } = useTranslation();
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("dark") === "false") {
      setIsDark(false);
    } else if (localStorage.getItem("dark") === "true") {
      setIsDark(true);
    }
  }, []);
  const darkHandler = () => {
    setIsDark((last) => !last);
    if (!isDark) {
      localStorage.setItem("dark", "true");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("dark", "false");
      document.documentElement.classList.remove("dark");
    }
  };
  const [isShowUserDropDown, setIsShowUserDropDown] = useState(false);
  return (
    <>
      {/* back modal */}
      <div
        onClick={() => setIsShowLangModal(false)}
        className={` absolute  ${
          isShowLangModal ? "block" : "hidden"
        } w-full h-screen bg-a_general-50/0 top-[68px]`}
      ></div>
      {/* back modal */}

      <div className="fixed w-full shadow-md h-[68px] px-3 md:px-7 py-3 bg-white dark:bg-a_general-90  top-0 justify-between items-center z-30 flex">
        <div className="left items-center gap-10 hidden md:flex">
          <img className="" src="/img/topbar/logo.png" alt="Logo" />
          <div className="lg:flex gap-3 items-center hidden">
            <label
              htmlFor="topbarsearch"
              className="bi bi-search text-a_general-70"
            ></label>
            <input
              className="text-sm p-2 outline-none rounded-md"
              placeholder={`${t("search")}...`}
              type="search"
              name=""
              id="topbarsearch"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div
            onClick={() => setIsShowHamberMenu((last: any) => !last)}
            className="cursor-pointer flex flex-col gap-1.5 md:hidden px-2 py-2"
          >
            <span
              className={`block w-5 h-0.5 rounded-full bg-a_primary-100 duration-300 ${
                !isShowHamberMenu ? "" : "rotate-45 translate-y-1"
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 rounded-full bg-a_primary-100 duration-300 ${
                !isShowHamberMenu ? "block" : "hidden"
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 rounded-full bg-a_primary-100 duration-300 ${
                !isShowHamberMenu ? "" : "-rotate-45 -translate-y-1"
              }`}
            ></span>
          </div>
          <div
            onClick={darkHandler}
            className=" size-7 bg-a_general-40 flex justify-center items-center rounded-md hover:bg-a_general-50 duration-300 cursor-pointer"
          >
            {isDark ? (
              <i className="bi bi-moon-stars text-a_primary-100 "></i>
            ) : (
              <i className="bi bi-brightness-high"></i>
            )}
          </div>
        </div>
        <div className="right flex gap-4 items-center">
          <i className="bi bi-chat-left-text text-xl hidden lg:flex dark:text-white"></i>
          <div className="relative hidden lg:flex ">
            <span className="w-[14px] h-[14px] flex justify-center items-center rounded-full bg-blue-700 absolute top-0 -right-1 text-xs text-white ">
              5
            </span>
            <i className="bi bi-bell text-xl dark:text-white "></i>
          </div>
          {/* div header */}
          <div className="relative">
            <div
              onClick={() => {
                setIsShowLangModal((last) => !last)
                setIsShowUserDropDown(false)
              }}
              className=" flex items-center gap-2 cursor-pointer text-a_general-80 dark:text-a_general-40 font-semibold md:w-32"
            >
              <img className="w-10 h-[27px]" src={lang.flag} alt="" />
              <span className="hidden md:flex">{lang.name}</span>
              <i
                className={`duration-300 bi bi-chevron-down ${
                  isShowLangModal ? "rotate-180" : ""
                }`}
              ></i>
            </div>

            <div
              className={`absolute h-44 flex duration-300 ${
                isShowLangModal ? "" : "-translate-y-56 opacity-0 h-0"
              } flex-col gap-4 px-5 py-4 text-sm w-64 top-12 md:left-1/2 rtl:left-24 ltr:left-0 -translate-x-1/2 bg-white dark:bg-a_general-90 rounded-xl`}
            >
              <p className="dark:text-white">Select Language </p>
              <span className="block w-full h-px bg-a_general-50"></span>
              <div
                className={`flex flex-col gap-6 duration-300 ${
                  isShowLangModal ? "translate-y-0" : "-translate-y-56"
                }`}
              >
                <div
                  onClick={() => {
                    setLang({
                      flag: "/img/topbar/UK.png",
                      name: "English",
                    });
                    setIsShowLangModal(false);
                    document.body.dir = "ltr";
                    i18next.changeLanguage("en");
                    localStorage.setItem("lang", "en");
                  }}
                  className="flex items-center justify-between "
                >
                  <div className="flex gap-3 items-center cursor-pointer">
                    <img src={`/img/topbar/UK.png`} alt="" />
                    <span className="dark:text-white">English</span>
                  </div>
                  {lang.name === "English" && (
                    <div>
                      <i className="bi bi-check2"></i>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => {
                    setLang({
                      flag: "/img/topbar/iran.png",
                      name: "فارسی",
                    });
                    setIsShowLangModal(false);
                    document.body.dir = "rtl";
                    i18next.changeLanguage("fa");
                    localStorage.setItem("lang", "fa");
                  }}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-10 h-[27px]"
                      src={`/img/topbar/iran.png`}
                      alt=""
                    />
                    <span className="dark:text-white">فارسی</span>
                  </div>
                  {lang.name === "Iran" && (
                    <div>
                      <i className="bi bi-check2"></i>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* end div header */}
          <div className="relative">
            <div
              onClick={() => {
                setIsShowUserDropDown((last) => !last)
                setIsShowLangModal(false)
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img src="/img/topbar/avatar.png" alt="" />
              <span className="text-a_general-80 dark:text-a_general-40  text-sm hidden md:flex">
                mohammadreza
              </span>
              <i
                className={`bi bi-arrow-down-circle duration-300 ${
                  isShowUserDropDown ? "rotate-180" : ""
                }`}
              ></i>
            </div>
            <div
              className={`duration-300 z-20 absolute px-5 py-3 bg-white rounded-md dark:bg-a_general-90 ltr:right-0 rtl:-right-32 text-nowrap flex flex-col divide-y gap-y-3 *:py-1 shadow-lg ${
                isShowUserDropDown ? "top-14" : "-top-64"
              }`}
            >
              <div onClick={()=>setIsShowUserDropDown(false)} className="cursor-pointer flex text-sm gap-2 items-center">
                <i className="bi bi-person-fill-gear bg-gradient-to-b from-[#4E96FF] to-[#80C9FC] text-transparent bg-clip-text text-xl "></i>
                <span>{t('manageaccount')}</span>
              </div>
              <div onClick={()=>setIsShowUserDropDown(false)} className="cursor-pointer flex text-sm gap-2 items-center ">
                <i className="bi bi-key-fill -rotate-45 bg-gradient-to-b from-[#F97FD9] to-[#FFC1E6] text-transparent bg-clip-text text-xl"></i>
                <span>{t('changepassword')}</span>
              </div>
              <div onClick={()=>setIsShowUserDropDown(false)} className="cursor-pointer flex text-sm gap-2 items-center ">
                <i className="bi bi-repeat bg-gradient-to-b from-[#9E8FFF] to-[#EBCBFF] text-transparent bg-clip-text text-xl"></i>
                <span>{t('activitylog')}</span>
              </div>
              <div onClick={()=>setIsShowUserDropDown(false)} className="cursor-pointer flex text-sm gap-2 items-center ">
                <i className="bi bi-box-arrow-right bg-gradient-to-b from-[#FF8F8F] to-[#FFC1C1] text-transparent bg-clip-text text-xl"></i>
                <span>{t('logout')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div
        onClick={() => {
          setIsShowUserDropDown(false)
          setIsShowLangModal(false)
        }}
        className={`absolute w-full h-full bg-black/0 z-30 ${
          isShowUserDropDown ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default TopBar;
