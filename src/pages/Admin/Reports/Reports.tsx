import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Headerofpages from "../../../components/module/Headerofpages/Headerofpages";
import { useTranslation } from "react-i18next";
import Button from "../../../components/module/Button/Button";

export default function Reports() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const data2 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ];
  const SalesGoal = [
    {
      name: "Group A",
      value: 2400,
    },
    // {
    //   name: "Group B",
    //   value: 4567,
    // },
    // {
    //   name: "Group C",
    //   value: 1398,
    // },
    // {
    //   name: "Group D",
    //   value: 9800,
    // },
    // {
    //   name: "Group E",
    //   value: 3908,
    // },
    // {
    //   name: "Group F",
    //   value: 4800,
    // },
  ];
  const table1 = [
    { id: 1, name: "Lee Henry", Orders: 52, Spent: "$658" },
    { id: 2, name: "Myrtie McBride", Orders: 52, Spent: "$658" },
    { id: 3, name: "Tommy Walker", Orders: 52, Spent: "$658" },
    { id: 4, name: "Lela Cannon", Orders: 52, Spent: "$658" },
    { id: 5, name: "Jimmy Cook", Orders: 52, Spent: "$658" },
  ];
  const data3 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const {t} = useTranslation()
  return (
    <div className="p-7">
      <div className="header">
        <Headerofpages title={t('reports')}>
        <Button type="Primary" icon="bi bi-download" size="sm">{t('export')}</Button>
        </Headerofpages>
      </div>
      <div className="mainReports mt-10 grid grid-cols-1 gap-3">
        <div className="sec1 bg-white p-7 rounded-md overflow-x-auto">
          <div className="min-w-[500px]">
            <h2 className="font-bold">{t('customergrowth')}</h2>
            <div className="mt-5 flex gap-5">
              <div className="flex gap-2 items-center text-a_general-80">
                <div className="size-5 bg-a_general-50"></div>
                <p>{t('returningcustomers')}</p>
              </div>
              <div className="flex gap-2 items-center text-a_general-80">
                <div className="size-5 bg-a_primary-100"></div>
                <p>{t('newcustomers')}</p>
              </div>
            </div>
          </div>
          <div className="h-80 mt-10 min-w-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="pv"
                  fill="#D7DBEC"
                  activeBar={<Rectangle fill="pink" stroke="blue" />}
                  barSize={15}
                />
                <Bar
                  dataKey="uv"
                  fill="#1E5EFF"
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                  barSize={15}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="sec2 bg-white p-7 rounded-md md:divide-x grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 *:px-5 *:items-center *:flex *:flex-col *:gap-1 gap-5">
          <div className="">
            <div>
              <p className="text-a_general-80">{t('existingusers')}</p>
              <p className="font-bold">5.653</p>
            </div>
            <div className="flex gap-3 items-center text-a_green-101">
              <p>22.45%</p>
              <i className="bi bi-chevron-up"></i>
            </div>
          </div>
          <div className="">
            <div>
              <p className="text-a_general-80">{t('newusers')}</p>
              <p className="font-bold">5.653</p>
            </div>
            <div className="flex gap-3 items-center text-a_green-101">
              <p>22.45%</p>
              <i className="bi bi-chevron-up"></i>
            </div>
          </div>
          <div className="">
            <div>
              <p className="text-a_general-80">{t('totalvisits')}</p>
              <p className="font-bold">5.653</p>
            </div>
            <div className="flex gap-3 items-center text-a_green-101">
              <p>22.45%</p>
              <i className="bi bi-chevron-up"></i>
            </div>
          </div>
          <div className="">
            <div>
              <p className="text-a_general-80">{t('uniquevisits')}</p>
              <p className="font-bold">5.653</p>
            </div>
            <div className="flex gap-3 items-center text-a_green-101">
              <p>22.45%</p>
              <i className="bi bi-chevron-up"></i>
            </div>
          </div>
        </div>
        <div className="sec3 grid grid-cols-1 lg:grid-cols-12 *:bg-white *:p-7 *:rounded-md gap-3">
          <div className="sec3left lg:col-span-3">
            <div className="font-bold">
              <p>{t('salesgoal')}</p>
            </div>
            <div className="h-52">
              <ResponsiveContainer>
                <PieChart width={730} height={250}>
                  <Pie
                    data={SalesGoal}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={80}
                    fill="#FFC700"
                    startAngle={90}
                    endAngle={-159}
                  >
                    <Label
                      className="text-3xl font-bold text-a_general-100"
                      value={"75%"}
                      position={"center"}
                    ></Label>
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <span className="text-a_general-80">{t('soldfor')}:</span>
                <span className="font-bold">$15.000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-a_general-80">{t('monthgoal')}:</span>
                <span className="font-bold">$20.000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-a_general-80">{t('left')}:</span>
                <span className="font-bold">$5.000</span>
              </div>
            </div>
          </div>
          <div className="sec3left lg:col-span-3">
            <div className="font-bold">
              <p>{t('conversionrate')}</p>
            </div>
            <div className="h-52">
              <ResponsiveContainer>
                <PieChart width={730} height={250}>
                  <Pie
                    data={SalesGoal}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={80}
                    fill="#1FD286"
                    startAngle={90}
                    endAngle={0}
                  >
                    <Label
                      className="text-3xl font-bold text-a_general-100"
                      value={"25%"}
                      position={"center"}
                    ></Label>
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <span className="text-a_general-80">{t('cart')}:</span>
                <span className="font-bold">35%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-a_general-80">{t('checkout')}:</span>
                <span className="font-bold">29%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-a_general-80">{t('purchase')}:</span>
                <span className="font-bold">25%</span>
              </div>
            </div>
          </div>
          <div className="sec3right lg:col-span-6 flex flex-col justify-between overflow-x-auto">
            <div className="flex flex-col gap-2">
              <p className="font-bold">{t('conversionrate')}</p>
              <div className="flex gap-4">
                <span className="flex gap-2">
                  <span className="text-a_general-80">{t('thismonth')}</span>
                  <span className="font-bold">$48.90</span>
                </span>
                <span className="flex gap-2">
                  <span className="text-a_general-80">{t('previousmonth')}</span>
                  <span className="font-bold">$48.90</span>
                </span>
              </div>
            </div>
            <div className="h-64 min-w-[500px]">
              <ResponsiveContainer>
                <LineChart
                  width={730}
                  height={250}
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line strokeWidth={4} dataKey="pv" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="sec4 grid grid-cols-1 lg:grid-cols-12 gap-3">
          <div className="sec4left lg:col-span-9 bg-white p-7 rounded-md overflow-x-auto">
            <div className="h-80 mt-10 min-w-[500px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="pv"
                    fill="#D7DBEC"
                    activeBar={<Rectangle fill="pink" stroke="blue" />}
                    barSize={15}
                  />
                  <Bar
                    dataKey="uv"
                    fill="#1E5EFF"
                    activeBar={<Rectangle fill="gold" stroke="purple" />}
                    barSize={15}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="sec4right lg:col-span-3 flex flex-col gap-3 gap-y-5 *:bg-white *:rounded-md ">
            <div className="sec4rightup p-7 py-10">
              <div className="flex flex-col gap-4">
                <h2 className="font-bold">{t('visitsbydevice')}</h2>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between">
                    <div className="flex gap-2 text-a_general-80">
                      <i className="bi bi-phone"></i>
                      <span>Mobile</span>
                    </div>
                    <span className="font-bold">62%</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-2 text-a_general-80">
                      <i className="bi bi-phone"></i>
                      <span>Mobile</span>
                    </div>
                    <span className="font-bold">62%</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-2 text-a_general-80">
                      <i className="bi bi-phone"></i>
                      <span>Mobile</span>
                    </div>
                    <span className="font-bold">62%</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-2 text-a_general-80">
                      <i className="bi bi-phone"></i>
                      <span>Mobile</span>
                    </div>
                    <span className="font-bold">62%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="sec4rightdown flex flex-col gap-5 p-7">
              <div className="font-bold">
                <h3>{t('onlinesessions')}</h3>
              </div>
              <div className="">
                <div className="flex gap-2 items-center">
                  <span className="font-bold">128</span>
                  <i className="bi bi-arrow-up text-a_green-80 font-bold"></i>
                </div>
                <p className="text-a_general-80">{t('activeusers')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sec5 grid grid-cols-1 lg:grid-cols-2 gap-3 *:bg-white *:p-7">
          <div className="sec5left">
            <div className="header font-bold">
              <h2>{t('topcustomers')}</h2>
            </div>
            <div className="overflow-x-auto mt-5">
              <table className="w-full">
                <thead>
                  <tr className="*:px-6 *:py-3 text-a_general-80 border-b">
                    <th>{t('name')}</th>
                    <th>{t('orders')}</th>
                    <th>{t('spent')}</th>
                  </tr>
                </thead>
                <tbody>
                  {table1.map((item) => (
                    <>
                      <tr
                        key={item.id}
                        className="*:px-6 *:py-3 border-b text-nowrap text-sm"
                      >
                        <td className="">
                          <div className="flex items-center gap-2 ">
                            <div className="size-10 rounded-full bg-a_primary-100 flex justify-center items-center text-white font-bold">
                              <span>{item.name[0]}</span>
                            </div>
                            <p className="font-medium">{item.name}</p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center">
                            <p>52</p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center">
                            <p>$969.37</p>
                          </div>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="sec5right">
            <div className="header font-bold">
              <h2>{t('topproducts')}</h2>
            </div>
            <div className="overflow-x-auto mt-5">
              <table className="w-full">
                <thead>
                  <tr className="*:px-6 *:py-3 text-a_general-80 border-b">
                    <th>{t('name')}</th>
                    <th>{t('clicks')}</th>
                    <th>{t('unitssold')}</th>
                  </tr>
                </thead>
                <tbody>
                  {table1.map((item) => (
                    <>
                      <tr
                        key={item.id}
                        className="*:px-6 *:py-3 border-b text-nowrap text-sm"
                      >
                        <td className="">
                          <div className="flex items-center gap-2 ">
                            <div className="size-10 flex justify-center items-center text-white font-bold">
                              <img src="/img/dashboard/11.png" alt="" />
                            </div>
                            <p className="font-medium">{item.name}</p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center">
                            <p>52</p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center">
                            <p>$969.37</p>
                          </div>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="sec6 grid grid-cols-1 lg:grid-cols-12 gap-3 *:bg-white *:p-7">
          <div className="sec6left lg:col-span-9">
            <div className="flex justify-between items-center">
              <div className="l">
                <h2 className="font-bold">{t('unitssold')}</h2>
                <div className="flex gap-5 items-center">
                  <span className="text-a_general-80">
                    {t('conversionrate')}
                    <span className="font-bold text-a_general-100">28%</span>
                  </span>
                  <span className="text-a_green-80 bg-a_green-30 px-2 py-1 rounded-md">
                    4% {t('increase')}
                  </span>
                </div>
              </div>
              <div className="r ">
                <label className="text-a_general-80" htmlFor="">
                  Last 7 Days
                </label>
                <select className="" name="" id="">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="h-96 mt-10">
              <ResponsiveContainer>
                <BarChart data={data2}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    barSize={80}
                    className="rounded-2xl"
                    dataKey="pv"
                    fill="#1E5EFF"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="sec6right lg:col-span-3">
            <div className="up font-bold">
              <h2>{t('agedistribution')}</h2>
            </div>
            <div className="min h-56 mt-10">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data3}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#82ca9d"
                    label
                  />
                  <Tooltip></Tooltip>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="down">
              <div className="up flex flex-col gap-3 border-b pb-5">
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center text-a_general-80">
                    <div className="size-5 bg-a_primary-100 rounded-md"></div>
                    <p>0-18 years</p>
                  </div>
                  <p className="font-bold">50%</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center text-a_general-80">
                    <div className="size-5 bg-a_yellow-80 rounded-md"></div>
                    <p>18-30 years</p>
                  </div>
                  <p className="font-bold">30%</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center text-a_general-80">
                    <div className="size-5 bg-a_yellow-101 rounded-md"></div>
                    <p>30-40 years</p>
                  </div>
                  <p className="font-bold">10%</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center text-a_general-80">
                    <div className="size-5 bg-a_green-101 rounded-md"></div>
                    <p>Other</p>
                  </div>
                  <p className="font-bold">10%</p>
                </div>
              </div>
              <div className="down">
              <p className="text-a_primary-100 pt-5">{t('findoutmore')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
