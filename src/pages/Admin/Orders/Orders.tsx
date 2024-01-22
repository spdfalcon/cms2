import { useState } from "react";

export default function Orders() {
  const recentTransactions = [
    {
      id: 1,
      order: "Jessica S.",
      date: "24.05.2020",
      customer: "$124.97",
      paymentstatus: "Paid",
      orderstatus: "ready",
      total: "$49.90",
    },
    {
      id: 2,
      order: "Andrew S.",
      date: "23.05.2020",
      customer: "$55.42",
      paymentstatus: "Pending",
      orderstatus: "ready",
      total: "$49.90",
    },
    {
      id: 3,
      order: "Kevin S.",
      date: "23.05.2020",
      customer: "$89.90",
      paymentstatus: "Paid",
      orderstatus: "ready",
      total: "$49.90",
    },
    {
      id: 4,
      order: "Jack S.",
      date: "22.05.2020",
      customer: "$144.94",
      paymentstatus: "Pending",
      orderstatus: "shipped",
      total: "$49.90",
    },
    {
      id: 5,
      order: "Arthur S.",
      date: "22.05.2020",
      customer: "$70.52",
      paymentstatus: "Paid",
      orderstatus: "received",
      total: "$49.90",
    },
  ];
  const [allchecked, setAllchecked] = useState(false);
  return (
    <>
      <div className="px-10 py-[30px] flex flex-col gap-y-10">
        <div className="">
          {/* s header */}
          <div className="header flex justify-between">
            <h2 className="text-a_general-100 text-2xl font-bold">Orders</h2>
            <div className="flex gap-4">
              <div className="px-5 py-2 flex gap-2 items-center bg-white text-a_primary-100 rounded border">
                <p>Export</p>
              </div>
              <div className="px-5 py-2 flex gap-2 items-center text-white bg-a_primary-100 rounded border">
                <i className="bi bi-plus-lg"></i>
                <p>Add Order</p>
              </div>
            </div>
          </div>
        </div>
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
              <div className="border size-9 flex cursor-pointer justify-center items-center rounded-md hover:bg-a_primary-100 hover:text-white duration-300">
                <i className="bi bi-pencil"></i>
              </div>
              <div className="border size-9 flex cursor-pointer justify-center items-center rounded-md hover:bg-a_primary-100 hover:text-white duration-300">
                <i className="bi bi-trash"></i>
              </div>
            </div>
          </div>
          <div className="tablee p-7 bg-white rounded-lg">
            <h3 className="font-bold">Recent Transactions</h3>
            <table className="w-full">
              <thead className="">
                <tr className="text-a_general-80 text-sm border-b grid grid-cols-6 py-3">
                  <th className="">
                    <input
                      onChange={(e) => setAllchecked(e.target.checked)}
                      className="me-2"
                      type="checkbox"
                      name=""
                      id="headerchecked"
                    />
                    <label htmlFor="headerchecked" className="">Order</label>
                  </th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Payment status</th>
                  <th>Order Status</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody className="flex flex-col mt-5">
                {recentTransactions.map((item) => (
                  <tr
                    key={item.id}
                    className="text-center h-12 grid grid-cols-6"
                  >
                    <td className="text-a_general-100 font-medium text-sm">
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
                      <label htmlFor={`checkbox${item.id}`} className="">{item.order}</label>
                    </td>
                    <td className="text-a_general-100 text-sm">{item.date}</td>
                    <td className="text-a_general-100 text-sm">
                      {item.customer}
                    </td>
                    <td className="">
                      <span
                        className={`px-4 py-1 rounded-md ${
                          item.paymentstatus === "Paid"
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
                          item.orderstatus === "ready"
                            ? "bg-a_yellow-101  "
                            : item.orderstatus === "shipped"
                            ? "bg-a_general-80 "
                            : "bg-a_primary-100"
                        }`}
                      >
                        {item.orderstatus}
                      </span>
                    </td>
                    <td className="text-a_general-100 text-sm">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between text-a_general-70">
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
      </div>
    </>
  );
}
