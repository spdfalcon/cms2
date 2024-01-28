import { Link } from "react-router-dom";
import EmpityOrder from "../../../components/template/EmpityOrder/EmpityOrder";

export default function Coupons() {
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
  return (
    <>
    <div className="p-7">
      <div className="header flex justify-between">
        <h2 className="font-bold text-2xl">Coupons</h2>
        <button className="bg-a_primary-100 text-white px-6 py-2 rounded-md flex items-center gap-2">
        <i className="bi bi-plus-lg"></i>
          <span>Create Coupon</span>
        </button>
      </div>
      <div className="toptable"></div>
      <div className="table"></div>
      <div className="downtable"></div>
    </div>
    </>
  )
}
