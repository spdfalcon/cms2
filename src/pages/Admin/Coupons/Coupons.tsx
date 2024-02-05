import { Link } from "react-router-dom";
import Button from "../../../components/module/Button/Button";
import Headerofpages from "../../../components/module/Headerofpages/Headerofpages";
import { useTranslation } from "react-i18next";

export default function Coupons() {
  const { t } = useTranslation();
  const couponsTable = [
    {
      id: 1,
      Name: { up: `${t("summerdiscount")}10% ${t("off")}`, down: "Summer2020" },
      usage: "15 times",
      status: t("active"),
      date: "May 5, 2020 - May 15, 2020",
    },
    {
      id: 2,
      Name: { up: t("freeshippingonallitems"), down: "Shipfreetomee15" },
      usage: "42 times",
      status: t("expired"),
      date: "May 5, 2020 - May 15, 2020",
    },
    {
      id: 3,
      Name: { up: `${t("summerdiscount")}10% ${t("off")}`, down: "Summer2020" },
      usage: "15 times",
      status: t("active"),
      date: "May 5, 2020 - May 15, 2020",
    },
    {
      id: 4,
      Name: { up: t("freeshippingonallitems"), down: "Shipfreetomee15" },
      usage: "42 times",
      status: t("expired"),
      date: "May 5, 2020 - May 15, 2020",
    },
  ];
  return (
    <>
      <div className="p-7 flex flex-col">
        <div className="header">
          <Headerofpages title={t("coupons")}>
            <Link to={'Createcoupon'}>
              <Button type="Primary" icon="bi bi-plus-lg" size="md">
                {t("createcoupon")}
              </Button>
            </Link>
          </Headerofpages>
        </div>
        <div className="w-full flex justify-center">
          <div className="bg-white dark:bg-a_general-90 p-7 rounded-md w-52 sm:w-96 mt-10 md:w-[510px] lg:w-[760px] xl:w-full overflow-x-auto">
            <div className="toptable">
              <div className="toptabletop border-b ">
                <ul className="flex gap-5 text-a_general-80 dark:text-a_general-40 *:py-2">
                  <li className="border-b border-a_primary-100 text-a_primary-100">
                    {t("allcoupons")}
                  </li>
                  <li>{t("activecoupons")}</li>
                  <li>{t("expiredcoupons")}</li>
                </ul>
              </div>
              <div className="toptabledouwn mt-5 flex justify-between">
                <div className="toptabledouwnleft flex gap-3 items-center">
                  <select
                    className="px-3 py-2 border rounded-md outline-none text-a_general-80 dark:text-a_general-40"
                    name=""
                    id=""
                  >
                    <option value="1">mohammad</option>
                    <option value="2">amir</option>
                    <option value="3">ali</option>
                  </select>
                  <div className="border overflow-hidden rounded-md flex items-center gap-2 relative">
                    <label
                      htmlFor="searchcoupons"
                      className="bi bi-search absolute left-2 cursor-text text-a_general-80 dark:text-a_general-40"
                    ></label>
                    <input
                      placeholder={`${t("search")}...`}
                      className="outline-none w-full h-full px-10 py-2"
                      type="text"
                      name=""
                      id="searchcoupons"
                    />
                  </div>
                </div>
                <div className="toptabledouwnright">
                  <div className="right text-a_primary-100  flex gap-2">
                    <Button type="White" size="sm" icon="bi bi-pencil"></Button>
                    <Button type="White" size="sm" icon="bi bi-trash"></Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="table w-full">
              <table className="w-full">
                <thead>
                  <tr className="*:px-6 *:py-3  text-a_general-80 dark:text-a_general-40 border-b">
                    <th className="text-left rtl:text-right">
                      {t("couponname")}
                    </th>
                    <th className="text-left rtl:text-right">{t("usage")}</th>
                    <th>{t("status")}</th>
                    <th className="text-left rtl:text-right">{t("date")}</th>
                  </tr>
                </thead>
                <tbody>
                  {couponsTable.map((item) => (
                    <tr key={item.id} className="*:px-6 *:py-3">
                      <td className="">
                        <div className="flex gap-3 flex items-center">
                          <div
                            className={`l size-10 rounded-md ${
                              item.Name.up !== t("freeshippingonallitems")
                                ? "bg-a_primary-100"
                                : "bg-a_general-70"
                            }  flex justify-center items-center text-white`}
                          >
                            {item.Name.up !== t("freeshippingonallitems") ? (
                              <i className="bi bi-ticket-perforated"></i>
                            ) : (
                              <i className="bi bi-truck"></i>
                            )}
                          </div>
                          <div className="r text-nowrap">
                            <p className="font-bold dark:text-white rtl:font-iransans-700">{item.Name.up}</p>
                            <p className="text-a_general-80 dark:text-a_general-40">
                              {item.Name.down}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-nowrap">{item.usage}</p>
                      </td>
                      <td className="">
                        <p
                          className={`rounded-md py-1  flex justify-center items-center ${
                            item.status === t("active")
                              ? "text-a_green-101 bg-a_green-40"
                              : "text-a_general-80 dark:text-a_general-40 bg-a_general-40"
                          } `}
                        >
                          {item.status}
                        </p>
                      </td>
                      <td className="text-nowrap">
                        <p>{item.date}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="downtable mt-5">
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
                  <p>5 {t("results")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
