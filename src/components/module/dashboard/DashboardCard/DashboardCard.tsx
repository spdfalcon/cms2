import React from "react";

interface DashboardCardprop {
  amount: string;
  title: string;
  Percent: string;
  icon: string;
}
const DashboardCard: React.FC<DashboardCardprop> = ({
  amount,
  title,
  Percent,
  icon,
}) => {
  return (
    <>
      <div className="bg-white dark:bg-a_general-90 rounded py-7 pr-11 pl-7 mt-6 flex justify-between  gap-12 items-center ">
        <div className="left">
          <p className="text-a_general-100 dark:text-white md:text-xl font-bold dark:text-white rtl:font-iransans-700">{amount}</p>
          <p className="text-a_general-80 dark:text-a_general-40 text-xs md:text-sm">{title}</p>
          <div className="flex gap-2 mt-3 text-a_green-101 text-xs md:text-sm">
            <p>{Percent}</p>
            <i className={`${icon}`}></i>
          </div>
        </div>
        <div className="right ">
          <div className="md:size-14 size-10 bg-a_primary-30 rounded-full flex justify-center items-center md:text-2xl text-a_primary-100">
            <i className="bi bi-currency-dollar"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
