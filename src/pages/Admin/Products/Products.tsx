import EmpityOrder from "../../../components/template/EmpityOrder/EmpityOrder";
import { Link, Outlet, useLocation } from "react-router-dom";
import Headerofpages from "../../../components/module/Headerofpages/Headerofpages";
import { useTranslation } from "react-i18next";
import Button from "../../../components/module/Button/Button";
import Filter from "../../../components/module/Filter/Filter";
import { useEffect, useState } from "react";
import TrashModal from "../../../components/module/TrashModal/TrashModal";

export default function Products() {
  const [isShow, setIsShow] = useState(false);
  const [id , setId]= useState(0)
  const [products, setProducts]: any = useState([]);
  useEffect(() => {
    fetch("https://prime.liara.run/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data.items));
      
  }, [isShow]);

  const location = useLocation();
  const { t } = useTranslation();
  const [orders, setOrders] = useState([...products]);
  useEffect(() => {
    setOrders([...products]);
  }, [products]);
  const [nameFilter, setNameFilter] = useState(t("filter"));
  const filters = [
    { id: 8, name: t("all") },
    { id: 1, name: t("rating") },
    { id: 7, name: t("price") },
  ];
  const filterHandler = (e: any) => {
    switch (e.target.innerHTML) {
      case t("price"): {
        const newOrder = [...products].sort((a, b) => b.price - a.price);
        setOrders(newOrder);
        break;
      }
      case t("rating"): {
        const newOrder = [...products].sort((a, b) => b?.rating - a?.rating);
        setOrders(newOrder);
        break;
      }
      case t("all"): {
        setOrders(products);
        break;
      }
    }
  };

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
                      {t("addproduct")}
                    </Button>
                  </Link>
                </Headerofpages>
              </div>
            </div>
            {orders.length ? (
              <div className="grid grid-cols-1">
                <div className="bg-white dark:bg-a_general-90 py-8 px-7 rounded-lg overflow-x-auto">
                  <div className="header flex justify-between">
                    <div className="left flex gap-4">
                      {/* <div className="l border w-44 h-9 rounded-md flex justify-between items-center py-2 px-4 text-a_general-60 cursor-pointer">
                        <span>{t("filter")}</span>
                        <i className="bi bi-chevron-down"></i>
                      </div> */}
                      <div onClick={filterHandler}>
                        <Filter
                          nameFilter={nameFilter}
                          setNameFilter={setNameFilter}
                          filter={filters}
                        ></Filter>
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
                          {orders?.map((item: any) => (
                            <tr
                              key={item._id}
                              className="*:px-6 *:py-3 *:text-nowrap *:text-start"
                            >
                              <td className="text-a_general-100 dark:text-white font-medium text-xs md:text-sm flex items-center gap-2">
                                <img src={item.images} alt="" />
                                <label
                                  htmlFor={`checkbox${item.id}`}
                                  className=""
                                >
                                  {item.name}
                                </label>
                              </td>
                              <td className=" text-a_general-100 dark:text-white text-xs md:text-sm">
                                <span className="rtl:flex ltr:hidden">
                                  {new Date(item.createdAt).toLocaleDateString(
                                    "fa"
                                  )}
                                </span>
                                <span className="ltr:flex rtl:hidden">
                                  {new Date(
                                    item.createdAt
                                  ).toLocaleDateString()}
                                </span>
                              </td>
                              <td className="text-a_general-100 dark:text-white text-xs md:text-sm">
                                {item.color}
                              </td>
                              <td className="">
                                <span
                                  className={`px-4 py-1 rounded-md ${
                                    item.paymentstatus === "Paid"
                                      ? "bg-a_green-101/20  text-a_green-101"
                                      : "bg-a_general-80/15 text-a_general-80 dark:text-a_general-40"
                                  }`}
                                >
                                  {item.price.toLocaleString()} ريال
                                </span>
                              </td>
                              <td className="">
                                <span className={`px-4 py-1 rounded-md`}>
                                  {item.rating ? item.rating : 0}
                                </span>
                              </td>
                              <td>
                                <div className="right text-a_primary-100  flex gap-2 justify-center">
                                  <Link to={`${item._id}`}>
                                    <Button
                                      type="White"
                                      size="sm"
                                      icon="bi bi-pencil"
                                    ></Button>
                                  </Link>
                                  <div onClick={() => {
                                    setIsShow(true)
                                    setId(item._id)
                                  }}>
                                    <Button
                                      type="White"
                                      size="sm"
                                      icon="bi bi-trash"
                                    ></Button>
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
          {isShow ? (
            <TrashModal setIsShow={setIsShow} id={id}></TrashModal>
          ) : (
            ""
          )}
        </>
      ) : (
        <>
          <Outlet></Outlet>
        </>
      )}
    </>
  );
}
