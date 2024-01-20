import { useState } from "react";

export default function TopBar() {
  const [lang, setLang] = useState({
    flag: "/img/topbar/UK.png",
    name: "English",
  });
  const [isShowLangModal, setIsShowLangModal] = useState(false);
  return (
    <>
    {/* back modal */}
    <div onClick={()=>setIsShowLangModal(false)} className={`absolute ${isShowLangModal ? 'block' : 'hidden'} w-full h-screen bg-a_general-50/0 top-[68px]`}></div>
    {/* back modal */}

      <div className="h-[68px] px-7 py-3 bg-white sticky top-0 flex justify-between items-center z-10">
        <div className="left flex items-center gap-10">
          <img src="/img/topbar/logo.png" alt="Logo" />
          <div className="flex gap-3 items-center">
            <label
              htmlFor="search"
              className="bi bi-search text-a_general-70"
            ></label>
            <input
              className="text-sm p-2 outline-none"
              placeholder="Search..."
              type="search"
              name=""
              id="search"
            />
          </div>
        </div>
        <div className="right flex gap-5 items-center">
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
              className=" flex items-center gap-2 cursor-pointer text-a_general-80 font-semibold w-32"
            >
              <img className="w-10 h-[27px]" src={lang.flag} alt="" />
              <span>{lang.name}</span>
              <i className="bi bi-chevron-down"></i>
            </div>

            <div
              className={`absolute h-44 flex duration-300 ${
                isShowLangModal ? "" : "h-0 opacity-0"
              } flex-col gap-4 px-5 py-4 text-sm w-64 top-12 left-1/2 -translate-x-1/2 bg-white rounded-xl`}
            >
              <p>Select Language </p>
              <span className="block w-full h-px bg-a_general-50"></span>
              <div className={`flex flex-col gap-6 duration-300 ${isShowLangModal ? 'translate-y-0' : '-translate-y-48'}`}>
                <div
                  onClick={() => {
                    setLang({
                      flag: "/img/topbar/UK.png",
                      name: "English",
                    });
                    setIsShowLangModal(false);
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
                      name: "Iran",
                    });
                    setIsShowLangModal(false);
                  }}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex gap-3 items-center">
                    <img
                      className="w-10 h-[27px]"
                      src={`/img/topbar/iran.png`}
                      alt=""
                    />
                    <span>Iran</span>
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
            <span className="text-a_general-80">mohammadreza</span>
          </div>
        </div>
      </div>
    </>
  );
}
