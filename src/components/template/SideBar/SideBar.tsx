import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React from "react";
interface OtherComponentProps {
  isShowHamberMenu: boolean;
  setIsShowHamberMenu: Function;
}
const SideBar: React.FC<OtherComponentProps> = ({
  setIsShowHamberMenu,
}) => {
  const { t } = useTranslation();
  const items = [
    {
      id: 1,
      icon: "bi bi-house-door",
      title: t("dashboard"),
      to: "dashboard",
      notif: 0,
    },
    {
      id: 2,
      icon: "bi bi-list-task",
      title: t("orders"),
      to: "orders",
      notif: 16,
    },
    {
      id: 3,
      icon: "bi bi-ticket-perforated",
      title: t("products"),
      to: "products",
      notif: 0,
    },
    {
      id: 4,
      icon: "bi bi-folder",
      title: t("categories"),
      to: "categories",
      notif: 0,
    },
    {
      id: 5,
      icon: "bi bi-people",
      title: t("customers"),
      to: "customers",
      notif: 0,
    },
    {
      id: 6,
      icon: "bi bi-bar-chart-line",
      title: t("reports"),
      to: "reports",
      notif: 0,
    },
    { id: 7, icon: "bi bi-star", title: t("coupons"), to: "coupons", notif: 0 },
    {
      id: 8,
      icon: "bi bi-chat-left-text",
      title: t("inbox"),
      to: "inbox",
      notif: 0,
    },
    {
      id: 9,
      icon: "bi bi-question-circle",
      title: t("knowledgebase"),
      to: "knowledgebase",
      notif: 0,
    },
    {
      id: 10,
      icon: "bi bi-award",
      title: t("productupdates"),
      to: "productupdates",
      notif: 0,
    },
    {
      id: 11,
      icon: "bi bi-person",
      title: t("personalsettings"),
      to: "personalsettings",
      notif: 0,
    },
    {
      id: 12,
      icon: "bi bi-gear",
      title: t("globalsettings"),
      to: "globalsettings",
      notif: 0,
    },
  ];

  return (
    <div className=" bg-a_general-30 dark:bg-a_general-80 top-[68px] md:p-4 p-1 ltr:border-r rtl:border-l md:mt-[68px]">
      <div className="flex flex-col gap-2">
        {items.slice(0, 8).map((item) => (
          <NavLink
            onClick={() => setIsShowHamberMenu((last: any) => !last)}
            key={item.id}
            className={({ isActive }) =>
              isActive
                ? ` flex items-center justify-between px-5 py-2 gap-4  font-medium text-xs md:text-sm  rounded-md bg-a_primary-100 text-white`
                : "flex justify-between items-center px-5 py-2 gap-4  font-medium text-xs md:text-sm  rounded-md  text-a_general-80 dark:text-a_general-40"
            }
            to={item.to}
          >
            <div className="flex items-center gap-3">
              <i className={`${item.icon} text-xl`}></i>{" "}
              <span className="font-bold dark:text-white rtl:font-iransans-700 flex">{item.title}</span>
            </div>
            {item.notif ? (
              <div className="text-white justify-center items-center w-8 h-5 rounded-full bg-a_general-100 flex">
                {item.notif}
              </div>
            ) : null}
          </NavLink>
        ))}
        <div className="px-5 ">
          <p className="text-a_general-60 text-xs">
            {t("otherinformation")}
          </p>
        </div>
        {items.slice(8, 10).map((item) => (
          <NavLink
            onClick={() => setIsShowHamberMenu((last: any) => !last)}
            key={item.id}
            className={({ isActive }) =>
              isActive
                ? ` flex items-center justify-between px-5 py-2 gap-4  font-medium text-xs md:text-sm  rounded-md bg-a_primary-100 text-white`
                : "flex justify-between items-center px-5 py-2 gap-4  font-medium text-xs md:text-sm  rounded-md  text-a_general-80 dark:text-a_general-40"
            }
            to={item.to}
          >
            <div className="flex items-center gap-3">
              <i className={`${item.icon} text-xl`}></i>{" "}
              <span className="font-bold dark:text-white rtl:font-iransans-700">{item.title}</span>
            </div>
            {item.notif ? (
              <div className="flex text-white justify-center items-center w-8 h-5 rounded-full bg-a_general-100">
                {item.notif}
              </div>
            ) : null}
          </NavLink>
        ))}
        <div className="px-5 ">
          <p className="text-a_general-60 text-xs">
            {t("settings")}
          </p>
        </div>
        {items.slice(10, 12).map((item) => (
          <NavLink
            onClick={() => setIsShowHamberMenu((last: any) => !last)}
            key={item.id}
            className={({ isActive }) =>
              isActive
                ? ` flex items-center justify-between px-5 py-2 gap-4  font-medium text-xs md:text-sm  rounded-md bg-a_primary-100 text-white`
                : "flex justify-between items-center px-5 py-2 gap-4  font-medium text-xs md:text-sm  rounded-md  text-a_general-80 dark:text-a_general-40"
            }
            to={item.to}
          >
            <div className="flex items-center gap-3">
              <i className={`${item.icon} text-xl`}></i>{" "}
              <span className="font-bold dark:text-white rtl:font-iransans-700">{item.title}</span>
            </div>
            {item.notif ? (
              <div className="flex text-white justify-center items-center w-8 h-5 rounded-full bg-a_general-100">
                {item.notif}
              </div>
            ) : null}
          </NavLink>
        ))}
      </div>
    </div>
  );
};


export default SideBar