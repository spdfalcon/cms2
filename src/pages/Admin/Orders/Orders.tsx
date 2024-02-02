import EmpityOrder from "../../../components/template/EmpityOrder/EmpityOrder";
import Headerofpages from "../../../components/module/Headerofpages/Headerofpages";
import { useTranslation } from "react-i18next";
import Button from "../../../components/module/Button/Button";

export default function Orders() {
  const { t } = useTranslation();
  const recentTransactions: any = [
    {
      id: 1,
      order: "Jessica S.",
      date: "24.05.2020",
      customer: "$124.97",
      paymentstatus: t('paid'),
      orderstatus: t('ready'),
      total: "$49.90",
    },
    {
      id: 2,
      order: "Andrew S.",
      date: "23.05.2020",
      customer: "$55.42",
      paymentstatus: t('pending'),
      orderstatus: t('ready'),
      total: "$49.90",
    },
    {
      id: 3,
      order: "Kevin S.",
      date: "23.05.2020",
      customer: "$89.90",
      paymentstatus: t('paid'),
      orderstatus: t('ready'),
      total: "$49.90",
    },
    {
      id: 4,
      order: "Jack S.",
      date: "22.05.2020",
      customer: "$144.94",
      paymentstatus: t('pending'),
      orderstatus: t('shipped'),
      total: "$49.90",
    },
    {
      id: 5,
      order: "Arthur S.",
      date: "22.05.2020",
      customer: "$70.52",
      paymentstatus: t('paid'),
      orderstatus: t('received'),
      total: "$49.90",
    },
  ];
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
        {recentTransactions.length ? (
          <div className="bg-white py-8 px-7 rounded-lg">
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
                    className="w-full h-full ltr:ps-14 rtl:ps-2 text-a_general-90 outline-none"
                    type="search"
                    name=""
                    id="searchorder"
                  />
                </div>
              </div>
              <div className="right text-a_primary-100  flex gap-2">
                <div className="border size-9 flex cursor-pointer justify-center items-center rounded-md hover:bg-a_primary-100 hover:text-white duration-300">
                  <i className="bi bi-pencil"></i>
                </div>
                <div className="border size-9 flex cursor-pointer justify-center items-center rounded-md hover:bg-a_primary-100 hover:text-white duration-300">
                  <i className="bi bi-trash"></i>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto w-72 sm:w-[450px] md:w-[500px] lg:w-[700px] xl:w-full">
              <div className="tablee p-7 bg-white rounded-lg ">
                <table className="w-full">
                  <thead className="">
                    <tr className="text-a_general-80 text-sm border-b *:px-6 *:py-3 *:text-start *:text-nowrap">
                      <th>{t("orders")}</th>
                      <th>{t("date")}</th>
                      <th>{t("customer")}</th>
                      <th>{t("paymentstatus")}</th>
                      <th>{t("orderstatus")}</th>
                      <th>{t("total")}</th>
                    </tr>
                  </thead>
                  <tbody className=" mt-5">
                    {recentTransactions.map((item: any) => (
                      <tr key={item.id} className="*:px-6 *:py-3 *:text-nowrap">
                        <td className="text-a_general-100 font-medium text-sm">
                          {item.order}
                        </td>
                        <td className="text-a_general-100 text-sm">
                          {item.date}
                        </td>
                        <td className="text-a_general-100 text-sm">
                          {item.customer}
                        </td>
                        <td className="">
                          <span
                            className={`px-4 py-1 rounded-md ${
                              item.paymentstatus === "Paid" || item.paymentstatus === 'پرداخت شده'
                                ? "bg-a_green-101/20  text-a_green-101"
                                : "bg-a_general-80/15 text-a_general-80"
                            }`}
                          >
                            {item.paymentstatus}
                          </span>
                        </td>
                        <td className="">
                          <span
                            className={`px-4 py-1 rounded-md text-white ${
                              item.orderstatus === "ready" || item.orderstatus === 'آماده'
                                ? "bg-a_yellow-101"
                                : item.orderstatus === "shipped" || item.orderstatus === 'حمل می شود'
                                ? "bg-a_general-80 "
                                : "bg-a_primary-100"
                            }`}
                          >
                            {item.orderstatus}
                          </span>
                        </td>
                        <td className="text-a_general-100 text-sm">
                          {item.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                  <p>274 {t('results')}</p>
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
