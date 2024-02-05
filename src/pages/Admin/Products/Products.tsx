import EmpityOrder from "../../../components/template/EmpityOrder/EmpityOrder";
import { Link, Outlet, useLocation } from "react-router-dom";
import Headerofpages from "../../../components/module/Headerofpages/Headerofpages";
import { useTranslation } from "react-i18next";
import Button from "../../../components/module/Button/Button";

export default function Products() {
  const recentTransactions: any = [
    {
      id: 1,
      pic: "/img/dashboard/11.png",
      Product: "Jessica S.",
      Inventory: "96 in stock",
      Color: "red",
      Price: "$256",
      Rating: "5.0 (32 Votes)",
      total: "$49.90",
    },
    {
      id: 2,
      pic: "/img/dashboard/12.png",
      Product: "Andrew S.",
      Inventory: "23.05.2020",
      Color: "red",
      Price: "$256",
      Rating: "5.0 (32 Votes)",
      total: "$49.90",
    },
    {
      id: 3,
      pic: "/img/dashboard/13.png",
      Product: "Kevin S.",
      Inventory: "23.05.2020",
      Color: "red",
      Price: "$256",
      Rating: "5.0 (32 Votes)",
      total: "$49.90",
    },
    {
      id: 4,
      pic: "/img/dashboard/14.png",
      Product: "Jack S.",
      Inventory: "22.05.2020",
      Color: "red",
      Price: "$256",
      Rating: "5.0 (32 Votes)",
      total: "$49.90",
    },
    {
      id: 5,
      pic: "/img/dashboard/15.png",
      Product: "Arthur S.",
      Inventory: "22.05.2020",
      Color: "red",
      Price: "$256",
      Rating: "5.0 (32 Votes)",
      total: "$49.90",
    },
  ];
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <>
      {location.pathname === "/admin/products" ? (
        <>
          <div className=" py-[30px] flex flex-col gap-y-10">
            <div className="">
              <div className="header">
                <Headerofpages title={t("products")}>
                  <Button size="sm" type="White">
                    {t("export")}
                  </Button>
                  <Link to={"addproduct"}>
                    <Button icon="bi bi-plus-lg" size="sm" type="Primary">
                      {t("addorder")}
                    </Button>
                  </Link>
                </Headerofpages>
              </div>
            </div>
            {recentTransactions.length ? (
              <div className="grid grid-cols-1">
                <div className="bg-white dark:bg-a_general-90 py-8 px-7 rounded-lg overflow-x-auto">
                  <div className="header flex justify-between">
                    <div className="left flex gap-4">
                      <div className="l border w-44 h-9 rounded-md flex justify-between items-center py-2 px-4 text-a_general-60 cursor-pointer">
                        <span>{t("filter")}</span>
                        <i className="bi bi-chevron-down"></i>
                      </div>
                      <div className="l border max-w-[350px] h-9 rounded-md flex gap-3 items-center  text-a_general-60 relative overflow-hidden">
                        <label
                          htmlFor="searchorder"
                          className="bi bi-search absolute left-4"
                        ></label>
                        <input
                          placeholder={`${t("search")}...`}
                          className="w-full h-full ps-14 text-a_general-90 outline-none"
                          type="search"
                          name=""
                          id="searchorder"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tablee p-7 bg-white dark:bg-a_general-90 rounded-lg">
                    <div className="relative">
                      <table className="w-full">
                        <thead className="">
                          <tr className="text-a_general-80 dark:text-a_general-40 text-xs md:text-sm border-b *:px-6 *:py-3 *:text-nowrap *:text-start">
                            <th>{t("products")}</th>
                            <th>{t("inventory")}</th>
                            <th>{t("color")}</th>
                            <th>{t("price")}</th>
                            <th>{t("rating")}</th>
                            <th>{t("edit")}</th>
                          </tr>
                        </thead>
                        <tbody className="mt-5">
                          {recentTransactions.map((item: any) => (
                            <tr
                              key={item.id}
                              className="*:px-6 *:py-3 *:text-nowrap *:text-start"
                            >
                              <td className="text-a_general-100 dark:text-white font-medium text-xs md:text-sm flex items-center gap-2">
                                <img src={item.pic} alt="" />
                                <label
                                  htmlFor={`checkbox${item.id}`}
                                  className=""
                                >
                                  {item.Product}
                                </label>
                              </td>
                              <td className="text-a_general-100 dark:text-white text-xs md:text-sm">
                                {item.Inventory}
                              </td>
                              <td className="text-a_general-100 dark:text-white text-xs md:text-sm">
                                {item.Color}
                              </td>
                              <td className="">
                                <span
                                  className={`px-4 py-1 rounded-md ${
                                    item.paymentstatus === "Paid"
                                      ? "bg-a_green-101/20  text-a_green-101"
                                      : "bg-a_general-80/15 text-a_general-80 dark:text-a_general-40"
                                  }`}
                                >
                                  {item.Price}
                                </span>
                              </td>
                              <td className="">
                                <span className={`px-4 py-1 rounded-md`}>
                                  {item.Rating}
                                </span>
                              </td>
                              <td>
                                <div className="right text-a_primary-100  flex gap-2 justify-center">
                                  <Link
                                    to={`${item.id}`}
                                    className="border size-9 flex cursor-pointer justify-center items-center rounded-md hover:bg-a_primary-100 hover:text-white duration-300"
                                  >
                                    <i className="bi bi-pencil"></i>
                                  </Link>
                                  <div className="border size-9 flex cursor-pointer justify-center items-center rounded-md hover:bg-a_primary-100 hover:text-white duration-300">
                                    <i className="bi bi-trash"></i>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="flex down justify-between text-a_general-70">
                    <div className="l flex gap-2 items-center">
                      <i className="bi bi-arrow-left cursor-pointer"></i>
                      <ul className="flex *:flex *:justify-center *:items-center gap-2 *:size-7 *:rounded *:cursor-pointer">
                        <li>1</li>
                        <li className="bg-a_primary-30">2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                      </ul>
                      <i className="bi bi-arrow-right cursor-pointer"></i>
                    </div>
                    <div className="r">
                      <p>274 {t("results")}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <EmpityOrder></EmpityOrder>
            )}
          </div>
        </>
      ) : (
        <>
          <Outlet></Outlet>
        </>
      )}
    </>
  );
}
