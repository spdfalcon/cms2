import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import generatedatecustom from "../../../../../hooks/generateDate";
import { useTranslation } from "react-i18next";
export default function ChartLastWeek() {
  const {t} = useTranslation()
  const data = [
    {
      name: generatedatecustom(6),
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: generatedatecustom(5),
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: generatedatecustom(4),
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: generatedatecustom(3),
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: generatedatecustom(2),
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: generatedatecustom(1),
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: generatedatecustom(0),
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
      <div className=" h-96 md:min-h-72 lg:h-[469px]  flex flex-col">
        <div className="flex flex-col gap-4 border-b pb-4 mb-4">
          <p className="font-bold dark:text-white rtl:font-iransans-700 text-sm text-a_general-100 dark:text-white">{t('last7dayssales')}</p>
          <div className="">
            <p className="md:text-xl font-bold dark:text-white rtl:font-iransans-700 text-sm">1,259</p>
            <p className="text-a_general-80 dark:text-a_general-40 text-xs md:text-sm">{t('itemssold')}</p>
          </div>
          <div className="">
            <p className="md:text-xl font-bold dark:text-white rtl:font-iransans-700 text-sm">1,259</p>
            <p className="text-a_general-80 dark:text-a_general-40 text-xs md:text-sm">{t('revenue')}</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart  data={data}>
            <XAxis tick={{ fontSize: 14 }} tickMargin={document.body.dir === 'rtl' ? 10 : 0} dataKey="name"></XAxis>
            <YAxis tick={{ fontSize: 14 }} tickMargin={document.body.dir === 'rtl' ? 40 : 0} ></YAxis>
            <Tooltip></Tooltip>
            <Bar barSize={15} dataKey="uv" fill="#1FD286" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
