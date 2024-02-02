import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
const data = [
  {
    name: "1",
    LastMon: 4000,
    ThisMon: 2400,
    amt: 2400,
  },
  {
    name: "5",
    LastMon: 3000,
    ThisMon: 1398,
    amt: 2210,
  },
  {
    name: "10",
    LastMon: 2000,
    ThisMon: 9800,
    amt: 2290,
  },
  {
    name: "15",
    LastMon: 2780,
    ThisMon: 3908,
    amt: 2000,
  },
  {
    name: "20",
    LastMon: 1890,
    ThisMon: 4800,
    amt: 2181,
  },
  {
    name: "25",
    LastMon: 2390,
    ThisMon: 3800,
    amt: 2500,
  },
  {
    name: "30",
    LastMon: 3490,
    ThisMon: 4300,
    amt: 2100,
  },
];
export default function Chartorder() {
  return (
    <div className="h-64 md:min-h-72 lg:h-[469px] flex">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          className=""
          height={400}
          width={1500}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="LoloMlatmone" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorThisMon" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis tick={{ fontSize: 14 }} tickMargin={document.body.dir === 'rtl' ? 10 : 0} dataKey="name" />
          <YAxis tick={{ fontSize: 14 }} tickMargin={document.body.dir === 'rtl' ? 40 : 0}/>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="LastMon"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#LoloMlatmone)"
          />
          <Area
            type="monotone"
            dataKey="ThisMon"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorThisMon)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
