import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "12",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "13",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "14",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "15",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "16",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "17",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "18",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export default function ChartLastWeek() {
  return (
    <>
      <div className=" h-96 md:min-h-72 lg:h-[469px]  flex flex-col">
        <div className="flex flex-col gap-4 border-b pb-4 mb-4">
          <p className="font-bold text-a_general-100">Last 7 Days Sales</p>
          <div className="">
            <p className="text-xl font-bold">1,259</p>
            <p className="text-a_general-80 text-sm">Items Sold</p>
          </div>
          <div className="">
            <p className="text-xl font-bold">1,259</p>
            <p className="text-a_general-80 text-sm">Items Sold</p>
          </div>
        </div>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name"></XAxis>
              <YAxis></YAxis>
              <Tooltip></Tooltip>
              <Bar barSize={15} dataKey="uv" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
      </div>
    </>
  );
}
