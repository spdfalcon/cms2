import EmpityOrder from "../../../components/template/EmpityOrder/EmpityOrder";
import Headerofpages from "../../../components/module/Headerofpages/Headerofpages";
import { useTranslation } from "react-i18next";
import Button from "../../../components/module/Button/Button";
import Filter from "../../../components/module/Filter/Filter";
import { useState } from "react";
import Pagination from "../../../components/module/Pagination/Pagination";

export default function Orders() {
  const { t } = useTranslation();
  const recentTransactions: any = [
    {
      id: 1,
      order: "Jessica S.",
      date: "24.05.2020",
      customer: "$124.97",
      paymentstatus: "paid",
      orderstatus: "ready",
      total: 54.9,
    },
    {
      id: 2,
      order: "Andrew S.",
      date: "23.05.2020",
      customer: "$55.42",
      paymentstatus: "pending",
      orderstatus: "ready",
      total: 21.9,
    },
    {
      id: 3,
      order: "Kevin S.",
      date: "23.05.2020",
      customer: "$89.90",
      paymentstatus: "paid",
      orderstatus: "ready",
      total: 89.9,
    },
    {
      id: 4,
      order: "Jack S.",
      date: "22.05.2020",
      customer: "$144.94",
      paymentstatus: "pending",
      orderstatus: "shipped",
      total: 79.9,
    },
    {
      id: 5,
      order: "Arthur S.",
      date: "22.05.2020",
      customer: "$70.52",
      paymentstatus: "paid",
      orderstatus: "received",
      total: 49.9,
    },
  ];
  const [orders, setOrders] = useState([...recentTransactions]);
  const [nameFilter, setNameFilter] = useState(t("filter"));
  const filters = [
    { id: 8, name: t("all") },
    { id: 1, name: t("paid") },
    { id: 2, name: t("pending") },
    { id: 3, name: t("ready") },
    { id: 4, name: t("shipped") },
    { id: 5, name: t("received") },
    { id: 6, name: t("date") },
    { id: 7, name: t("total") },
  ];
  const filterHandler = (e: any) => {
    switch (e.target.innerHTML) {
      case t("paid"): {
        const newOrder = [...recentTransactions].filter(
          (item) => item.paymentstatus === "paid"
        );
        setOrders(newOrder);
        break;
      }
      case t("pending"): {
        const newOrder = [...recentTransactions].filter(
          (item) => item.paymentstatus === "pending"
        );
        setOrders(newOrder);
        break;
      }
      case t("ready"): {
        const newOrder = [...recentTransactions].filter(
          (item) => item.orderstatus === "ready"
        );
        setOrders(newOrder);
        break;
      }
      case t("shipped"): {
        const newOrder = [...recentTransactions].filter(
          (item) => item.orderstatus === "shipped"
        );
        setOrders(newOrder);
        break;
      }
      case t("received"): {
        const newOrder = [...recentTransactions].filter(
          (item) => item.orderstatus === "received"
        );
        setOrders(newOrder);
        break;
      }
      case t("total"): {
        const newOrder = [...recentTransactions].sort(
          (a, b) => b.total - a.total
        );
        setOrders(newOrder);
        break;
      }
      case t("date"): {
        const newOrder = [...recentTransactions].sort(
          (a, b) => b.date - a.date
        );
        setOrders(newOrder);
        break;
      }
      case t("all"): {
        setOrders(recentTransactions);
        break;
      }
    }
  };
  const paginationInPage = 4;
  const [page, setPage] = useState(1);
  return (
    <>
      <div className=" py-[30px] flex flex-col gap-y-10">
        <div className="">
          {/* s header */}
          <div>
            <Headerofpages title={t("orders")}>
              <div className="flex gap-3 flex-col items-end lg:flex-row">
                <Button type="Primary" size="sm">
                  {t("export")}
                </Button>
                <Button type="Primary" icon="bi bi-plus-lg" size="sm">
                  {t("addorder")}
                </Button>
              </div>
            </Headerofpages>
          </div>
        </div>
        {orders.length ? (
          <div className="grid grid-cols-1">
            <div className="bg-white dark:bg-a_general-90 py-8 px-3 md:px-7 rounded-lg">
              <div className="header flex justify-between">
                <div className="left flex gap-4 flex-col md:flex-row">
                  <div onClick={filterHandler}>
                    <Filter
                      nameFilter={nameFilter}
                      setNameFilter={setNameFilter}
                      filter={filters}
                    ></Filter>
                  </div>
                  <div className="l border h-9 rounded-md flex gap-3 items-center  text-a_general-60 relative overflow-hidden">
                    <label
                      htmlFor="searchorder"
                      className="bi bi-search absolute left-4 text-xs md:text-base"
                    ></label>
                    <input
                      placeholder={`${t("search")}...`}
                      className="w-full h-full ltr:ps-14 rtl:ps-2 text-a_general-90 outline-none text-xs md:text-base"
                      type="search"
                      name=""
                      id="searchorder"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="overflow-x-auto">
                  <div className="tablee p-7 bg-white dark:bg-a_general-90 rounded-lg ">
                    <table className="w-full">
                      <thead className="">
                        <tr className="text-a_general-80 dark:text-a_general-40 text-xs md:text-sm border-b *:px-6 *:py-3 *:text-start *:text-nowrap">
                          <th>{t("orders")}</th>
                          <th>{t("date")}</th>
                          <th>{t("customer")}</th>
                          <th>{t("paymentstatus")}</th>
                          <th>{t("orderstatus")}</th>
                          <th>{t("total")}</th>
                        </tr>
                      </thead>
                      <tbody className=" mt-5">
                        {orders
                          .slice(
                            paginationInPage * page - paginationInPage,
                            paginationInPage * page
                          )
                          .map((item: any) => (
                            <tr
                              key={item.id}
                              className="*:px-6 *:py-3 *:text-nowrap"
                            >
                              <td className="text-a_general-100 dark:text-white font-medium text-xs md:text-sm">
                                {item.order}
                              </td>
                              <td className="text-a_general-100 dark:text-white text-xs md:text-sm">
                                {item.date}
                              </td>
                              <td className="text-a_general-100 dark:text-white text-xs md:text-sm">
                                {item.customer}
                              </td>
                              <td className="text-xs md:text-sm">
                                <span
                                  className={`px-4 py-1 rounded-md ${
                                    t(`${item.paymentstatus}`) === t("paid")
                                      ? "bg-a_green-101/20  text-a_green-101"
                                      : "bg-a_general-80/15 text-a_general-80 dark:text-a_general-40"
                                  }`}
                                >
                                  {t(`${item.paymentstatus}`)}
                                </span>
                              </td>
                              <td className="text-xs md:text-sm">
                                <span
                                  className={`px-4 py-1 rounded-md text-white ${
                                    t(`${item.orderstatus}`) === t("ready")
                                      ? "bg-a_yellow-101"
                                      : t(`${item.orderstatus}`) ===
                                        t("shipped")
                                      ? "bg-a_general-80 "
                                      : "bg-a_primary-100"
                                  }`}
                                >
                                  {t(`${item.orderstatus}`)}
                                </span>
                              </td>
                              <td className="text-a_general-100 dark:text-white text-xs md:text-sm">
                                {item.total}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex down justify-between items-center text-a_general-70">
                    <Pagination
                      all={orders.length}
                      inpage={paginationInPage}
                      setPage={setPage}
                      page={page}
                    ></Pagination>
                    <div className="r text-xs md:text-base">
                      <p>274 {t("results")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <EmpityOrder></EmpityOrder>
        )}
      </div>
    </>
  );
}
