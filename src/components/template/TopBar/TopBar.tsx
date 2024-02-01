import { useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
export default function TopBar() {
  const [lang, setLang] = useState({
    flag: localStorage.getItem('lang') ==='fa' ? "/img/topbar/iran.png" : '/img/topbar/UK.png',
    name: localStorage.getItem('lang') ==='fa' ? "فارسی" : 'English',
  });
  const [isShowLangModal, setIsShowLangModal] = useState(false);
  const {t} = useTranslation()
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

      <div className="shadow-md h-[68px] px-7 py-3 bg-white sticky top-0 justify-between items-center z-10 flex">
        <div className="left flex items-center gap-10 ">
          <img className="hidden md:flex" src="/img/topbar/logo.png" alt="Logo" />
          <div className="md:flex gap-3 items-center hidden">
            <label
              htmlFor="search"
              className="bi bi-search text-a_general-70"
            ></label>
            <input
              className="text-sm p-2 outline-none"
              placeholder={`${t('search')}...`}
              type="search"
              name=""
              id="search"
            />
          </div>
        </div>
        <div className="right flex gap-2 items-center">
          <i className="bi bi-chat-left-text text-xl"></i>
          <div className="relative">
            <span className="w-[14px] h-[14px] flex justify-center items-center rounded-full bg-blue-700 absolute top-0 -right-1 text-xs text-white ">
              5
            </span>
            <i className="bi bi-bell text-xl"></i>
          </div>
          {/* div header */}
          <div className="relative">
            <div
              onClick={() => setIsShowLangModal((last) => !last)}
              className=" flex items-center gap-2 cursor-pointer text-a_general-80 font-semibold md:w-32"
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
              } flex-col gap-4 px-5 py-4 text-sm w-64 top-12 left-1/2 -translate-x-1/2 bg-white rounded-xl`}
            >
              <p>Select Language </p>
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
                    i18next.changeLanguage('en')
                    localStorage.setItem('lang' , 'en')
                  }}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex gap-3 items-center">
                    <img src={`/img/topbar/UK.png`} alt="" />
                    <span>English</span>
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
                    i18next.changeLanguage('fa')
                    localStorage.setItem('lang' , 'fa')
                  }}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-10 h-[27px]"
                      src={`/img/topbar/iran.png`}
                      alt=""
                    />
                    <span>فارسی</span>
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
          <div className="flex items-center gap-2">
            <img src="/img/topbar/avatar.png" alt="" />
            <span className="text-a_general-80 hidden md:block text-sm">mohammadreza</span>
          </div>
        </div>
      </div>
    </>
  );
}
