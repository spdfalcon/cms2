import { useTranslation } from "react-i18next";
import Button from "../../../components/module/Button/Button";
import Headerofpages from "../../../components/module/Headerofpages/Headerofpages";
import ChartLastWeek from "../../../components/module/dashboard/ChartLastWeek/ChartLastWeek";
import Chartorder from "../../../components/module/dashboard/Chartorder/Chartorder";
import DashboardCard from "../../../components/module/dashboard/DashboardCard/DashboardCard";
import RecentTransactions from "../../../components/template/RecentTransactions/RecentTransactions";
import TopProductsbox from "../../../components/template/TopProductsbox/TopProductsbox";

export default function Dashboard() {
  const {t} = useTranslation()
  const boxrange = [
    {id:1 , amount:'10.540' , title:t('orders'),Percent:'22.45%',icon:'bi bi-chevron-up'},
    {id:2 , amount:'10.540' , title:t('totalrevenue'),Percent:'22.45%',icon:'bi bi-chevron-up'},
    {id:3 , amount:'10.540' , title:t('activesessions'),Percent:'22.45%',icon:'bi bi-chevron-up'},
    {id:4 , amount:'10.540' , title:t('totalsessions'),Percent:'22.45%',icon:'bi bi-chevron-up'},
  ]
  return (
    <>
      <div className="  px-10 py-[30px] flex flex-col gap-y-10">
        {/* s header */}
        <Headerofpages title={t('dashboard')}>
          <Button type="Primary" icon="bi bi-gear" size="md">
            {t('manage')}
          </Button>
        </Headerofpages>
        {/* e header */}
        {/* s dashboard boxs */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 divide-x">
          {boxrange
            ?.map((item) => (
              <DashboardCard Percent={item.Percent} amount={item.amount} icon={item.icon} title={item.title} key={item.id}></DashboardCard>
            ))}
        </div>
        {/* e dashboard boxs */}
        {/* s charts */}
        <div className="grid grid-cols-12 *:col-span-12 *:lg:col-span-6 *:p-7 *:bg-white gap-5 *:rounded-md">
          {/* s chart order over time */}
          <div className=" xl:col-span-9">
            <Chartorder></Chartorder>
          </div>
          {/* s Last 7 Days Sales */}
          <div className=" xl:col-span-3 ">
            <ChartLastWeek></ChartLastWeek>
          </div>
          {/* e Last 7 Days Sales */}
        </div>
        {/* e charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <RecentTransactions></RecentTransactions>
          <TopProductsbox></TopProductsbox>
        </div>
      </div>
    </>
  );
}
