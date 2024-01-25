import { useState } from "react";
import { Link } from "react-router-dom";
import EmpityOrder from "../../../components/template/EmpityOrder/EmpityOrder";

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
  const [allchecked, setAllchecked] = useState(false);
  return (
    <div className="px-10 py-[30px] flex flex-col gap-y-10">
      <div className="">
        {/* s header */}
        <div className="header flex justify-between">
          <h2 className="text-a_general-100 text-2xl font-bold">Customers</h2>
          <div className="flex gap-4">
            <button className="px-5 py-2 flex gap-2 items-center bg-white text-a_primary-100 rounded border">
              <p>Export</p>
            </button>
            <Link
              to={"addcustomer"}
              className="px-5 py-2 flex gap-2 items-center text-white bg-a_primary-100 rounded border"
            >
              <i className="bi bi-plus-lg"></i>
              <p>Add Customer</p>
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
              <button className="border size-9 flex cursor-pointer justify-center items-center rounded-md hover:bg-a_primary-100 hover:text-white duration-300">
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
                  <tr className="text-a_general-80 text-sm border-b grid grid-cols-5 gap-4 py-3 ">
                    <th className="">
                      <input
                        onChange={(e) => setAllchecked(e.target.checked)}
                        className="me-2"
                        type="checkbox"
                        name=""
                        id="headerchecked"
                      />
                      <label htmlFor="headerchecked" className="">
                      Name
                      </label>
                    </th>
                    <th>Location</th>
                    <th>Orders</th>
                    <th>Spent</th>
                    <th>edit</th>
                  </tr>
                </thead>
                <tbody className="flex flex-col mt-5">
                  {recentTransactions.map((item: any) => (
                    <tr
                      key={item.id}
                      className="text-center h-12 grid grid-cols-5 gap-4 items-center"
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
                        <div className="size-8 flex justify-center items-center uppercase bg-a_general-60 rounded-full font-bold text-white">{item.name[0]}</div>
                        <label htmlFor={`checkbox${item.id}`} className="">
                          {item.name}
                        </label>
                      </td>
                      <td className="text-a_general-100 text-sm">
                        {item.Location}
                      </td>
                      <td className="text-a_general-100 text-sm">
                        {item.Orders}
                      </td>
                      <td className="">
                        <span
                          className={`px-4 py-1 rounded-md ${
                            item.paymentstatus === "Paid"
                              ? "bg-a_green-101/20  text-a_green-101"
                              : "bg-a_general-80/15 text-a_general-80"
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
              <p>{recentTransactions.length} Results</p>
            </div>
          </div>
        </div>
      ) : (
        <EmpityOrder></EmpityOrder>
      )}
    </div>
  );
}
