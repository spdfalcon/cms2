import React, { useState } from "react";
import EmpityOrder from "../../../components/template/EmpityOrder/EmpityOrder";
import { Link, Outlet, useLocation } from "react-router-dom";

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
  const [allchecked, setAllchecked] = useState(false);
  const location = useLocation();
  console.log(location);

  return (
    <>
      {location.pathname === "/admin/products" ? (
        <>
          <div className="px-10 py-[30px] flex flex-col gap-y-10">
            <div className="">
              {/* s header */}
              <div className="header flex justify-between">
                <h2 className="text-a_general-100 text-2xl font-bold">
                  Product
                </h2>
                <div className="flex gap-4">
                  <button className="px-5 py-2 flex gap-2 items-center bg-white text-a_primary-100 rounded border">
                    <p>Export</p>
                  </button>
                  <Link
                    to={"addproduct"}
                    className="px-5 py-2 flex gap-2 items-center text-white bg-a_primary-100 rounded border"
                  >
                    <i className="bi bi-plus-lg"></i>
                    <p>Add Order</p>
                  </Link>
                </div>
              </div>
            </div>
            {recentTransactions.length ? (
              <div className="bg-white py-8 px-7 rounded-lg">
                <div className="header flex justify-between">
                  <div className="left flex gap-4">
                    <div className="l border w-44 h-9 rounded-md flex justify-between items-center py-2 px-4 text-a_general-60 cursor-pointer">
                      <span>Filter</span>
                      <i className="bi bi-chevron-down"></i>
                    </div>
                    <div className="l border max-w-[350px] h-9 rounded-md flex gap-3 items-center  text-a_general-60 relative overflow-hidden">
                      <label
                        htmlFor="searchorder"
                        className="bi bi-search absolute left-4"
                      ></label>
                      <input
                        placeholder="Search..."
                        className="w-full h-full ps-14 text-a_general-90 outline-none"
                        type="search"
                        name=""
                        id="searchorder"
                      />
                    </div>
                  </div>
                  <div className="right text-a_primary-100  flex gap-2">
                    <button
                      className="border size-9 flex cursor-pointer justify-center items-center rounded-md hover:bg-a_primary-100 hover:text-white duration-300"
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <div className="border size-9 flex cursor-pointer justify-center items-center rounded-md hover:bg-a_primary-100 hover:text-white duration-300">
                      <i className="bi bi-trash"></i>
                    </div>
                  </div>
                </div>
                <div className="tablee p-7 bg-white rounded-lg">
                  <h3 className="font-bold">Recent Transactions</h3>
                  <div className="relative overflow-x-auto">
                  <table className="w-full">
                    <thead className="">
                      <tr className="text-a_general-80 text-sm border-b grid grid-cols-6 gap-4 py-3 ">
                        <th className="">
                          <input
                            onChange={(e) => setAllchecked(e.target.checked)}
                            className="me-2"
                            type="checkbox"
                            name=""
                            id="headerchecked"
                          />
                          <label htmlFor="headerchecked" className="">
                            Product
                          </label>
                        </th>
                        <th>Inventory</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>edit</th>
                      </tr>
                    </thead>
                    <tbody className="flex flex-col mt-5">
                      {recentTransactions.map((item: any) => (
                        <tr
                          key={item.id}
                          className="text-center h-12 grid grid-cols-6 gap-4 items-center"
                        >
                          <td className="text-a_general-100 font-medium text-sm flex items-center gap-2">
                            {allchecked ? (
                              <input
                                className="me-2 "
                                type="checkbox"
                                name=""
                                id={`checkbox${item.id}`}
                                checked
                              />
                            ) : (
                              <input
                                className="me-2 "
                                type="checkbox"
                                name=""
                                id={`checkbox${item.id}`}
                              />
                            )}
                            <img src={item.pic} alt="" />
                            <label htmlFor={`checkbox${item.id}`} className="">
                              {item.Product}
                            </label>
                          </td>
                          <td className="text-a_general-100 text-sm">
                            {item.Inventory}
                          </td>
                          <td className="text-a_general-100 text-sm">
                            {item.Color}
                          </td>
                          <td className="">
                            <span
                              className={`px-4 py-1 rounded-md ${
                                item.paymentstatus === "Paid"
                                  ? "bg-a_green-101/20  text-a_green-101"
                                  : "bg-a_general-80/15 text-a_general-80"
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
                    <p>274 Results</p>
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
