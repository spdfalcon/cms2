import EmpityOrder from "../../../components/template/EmpityOrder/EmpityOrder";
import { Link, Outlet, useLocation } from "react-router-dom";
import Headerofpages from "../../../components/module/Headerofpages/Headerofpages";
import { useTranslation } from "react-i18next";
import Button from "../../../components/module/Button/Button";
import Filter from "../../../components/module/Filter/Filter";
import { useEffect, useState } from "react";
import TrashModal from "../../../components/module/TrashModal/TrashModal";
import apiRequests from "../../../configs/axios/apiRequests";
import { useQuery } from "react-query";
import Loading from "../../../components/module/Loading/Loading";
import Pagination from "../../../components/module/Pagination/Pagination";
import Cookies from "universal-cookie";

export default function Products() {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const paginationInPage = 4;
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    if (products) {
      const neworder = [...products].filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      if (searchInput) {
        setPage(1);
        setOrders(neworder);
      } else {
        setOrders(products);
      }
    }
  }, [searchInput]);
  const [isShow, setIsShow] = useState(false);
  const [id, setId] = useState(0);
  const { data: products, isLoading , refetch  } = useQuery("Products", () =>
    apiRequests
      .get("/product", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
      // ,{
      //   refetchInterval:2000
      // }
  )
  
  const location = useLocation();
  const { t } = useTranslation();
  const [orders, setOrders]: any = useState([]);
  useEffect(() => {
    if (products) {
      setOrders([...products]);
    }
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
            {!isLoading ? (
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
                          value={searchInput}
                          onChange={(e) => {
                            setSearchInput(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {orders.length ? (
                    <>
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
                              {orders
                                .slice(
                                  paginationInPage * page - paginationInPage,
                                  paginationInPage * page
                                )
                                ?.map((item: any) => (
                                  <tr
                                    key={item.id}
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
                                        {new Date(
                                          item.createdAt
                                        ).toLocaleDateString("fa")}
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
                                        <Link to={`${item.id}`}>
                                          <Button
                                            type="White"
                                            size="sm"
                                            icon="bi bi-pencil"
                                          ></Button>
                                        </Link>
                                        <div
                                          onClick={() => {
                                            setIsShow(true);
                                            setId(item.id);
                                          }}
                                        >
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
                        <Pagination
                          all={orders.length}
                          inpage={paginationInPage}
                          setPage={setPage}
                          page={page}
                        ></Pagination>
                        <div className="r">
                          <p>
                            {orders.length} {t("results")}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <EmpityOrder to={"addproduct"}></EmpityOrder>
                  )}
                </div>
              </div>
            ) : (
              <Loading></Loading>
            )}
          </div>
          {isShow ? (
            <TrashModal setIsShow={setIsShow} id={id} refetch={refetch}></TrashModal>
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
