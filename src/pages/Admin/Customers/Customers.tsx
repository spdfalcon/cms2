import { Link } from "react-router-dom";
import EmpityOrder from "../../../components/template/EmpityOrder/EmpityOrder";
import Headerofpages from "../../../components/module/Headerofpages/Headerofpages";
import Button from "../../../components/module/Button/Button";
import { useTranslation } from "react-i18next";

export default function Customers() {
  const recentTransactions: any = [
    {
      id: 1,
      name: "Jessica S.",
      Location: "96 in stock",
      Orders: "red",
      Spent: "$256",
    },
    {
      id: 2,
      name: "Andrew S.",
      Location: "23.05.2020",
      Orders: "red",
      Spent: "$256",
    },
    {
      id: 3,
      name: "Kevin S.",
      Location: "23.05.2020",
      Orders: "red",
      Spent: "$256",
    },
    {
      id: 4,
      name: "Jack S.",
      Location: "22.05.2020",
      Orders: "red",
      Spent: "$256",
    },
    {
      id: 5,
      name: "Arthur S.",
      Location: "22.05.2020",
      Orders: "red",
      Spent: "$256",
    },
  ];
  const { t } = useTranslation();
  return (
    <div className=" py-[30px] flex flex-col gap-y-10">
      <div className="header">
        <Headerofpages title={t("customers")}>
          <div className="flex flex-col md:flex-row gap-2 items-center justify-center ">
          <Button size="sm" type="White">
            {t("export")}
          </Button>
          <Link to={"addcustomer"}>
            <Button icon="bi bi-plus-lg" size="sm" type="Primary">
              {t("addcustomer")}
            </Button>
          </Link>
          </div>
        </Headerofpages>
      </div>
      {recentTransactions.length ? (
        <div className="bg-white dark:bg-a_general-90 py-8 px-7 rounded-lg grid grid-cols-1 overflow-x-auto">
          <div className="header flex justify-between">
            <div className="left flex gap-4">
              <div className="l border w-44 h-9 rounded-md flex justify-between items-center py-2 px-4 text-a_general-60 cursor-pointer">
                <span>{t('filter')}</span>
                <i className="bi bi-chevron-down"></i>
              </div>
              <div className="l border max-w-[350px] h-9 rounded-md flex gap-3 items-center  text-a_general-60 relative overflow-hidden">
                <label
                  htmlFor="searchorder"
                  className="bi bi-search absolute left-4"
                ></label>
                <input
                  placeholder={`${t('search')}...`}
                  className="w-full h-full ps-14 text-a_general-90 outline-none"
                  type="search"
                  name=""
                  id="searchorder"
                />
              </div>
            </div>
          </div>
          <div className="tablee p-7 bg-white dark:bg-a_general-90 rounded-lg">
            <div className="w-full">
              <table className="w-full">
                <thead className="">
                  <tr className="text-a_general-80 dark:text-a_general-40 text-xs md:text-sm border-b *:px-6 *:text-nowrap *:py-3 ">
                    <th className="text-start">{t("name")}</th>
                    <th className="text-start">{t("location")}</th>
                    <th className="text-start">{t("orders")}</th>
                    <th className="text-start">{t("spent")}</th>
                    <th className="text-center">{t("edit")}</th>
                  </tr>
                </thead>
                <tbody className=" mt-5">
                  {recentTransactions.map((item: any) => (
                    <tr key={item.id} className="*:px-6 *:py-3 *:text-nowrap">
                      <td className="text-a_general-100 dark:text-white font-medium text-xs md:text-sm  flex items-center gap-2">
                        <div className="size-8 flex justify-center items-center uppercase bg-a_general-60 rounded-full font-bold dark:text-white rtl:font-iransans-700 text-white">
                          {item.name[0]}
                        </div>
                        <label htmlFor={`checkbox${item.id}`} className="">
                          {item.name}
                        </label>
                      </td>
                      <td className="text-a_general-100 dark:text-white text-xs md:text-sm">
                        {item.Location}
                      </td>
                      <td className="text-a_general-100 dark:text-white text-xs md:text-sm">
                        {item.Orders}
                      </td>
                      <td className="">
                        <span
                          className={`px-4 py-1 rounded-md ${
                            item.paymentstatus === "Paid"
                              ? "bg-a_green-101/20  text-a_green-101"
                              : "bg-a_general-80/15 text-a_general-80 dark:text-a_general-40"
                          }`}
                        >
                          {item.Spent}
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
          <div className="flex down justify-between items-center gap-2 text-a_general-70">
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
            <div className="r text-nowrap text-xs md:text-base">
              <p>{recentTransactions.length} {t('results')}</p>
            </div>
          </div>
        </div>
      ) : (
        <EmpityOrder></EmpityOrder>
      )}
    </div>
  );
}
