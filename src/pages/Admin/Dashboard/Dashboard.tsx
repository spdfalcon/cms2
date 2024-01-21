import DashboardCard from "../../../components/module/DashboardCard/DashboardCard";

export default function Dashboard() {
  return (
    <>
      <div className="px-10 py-[30px] ">
        {/* s header */}
        <div className="header flex justify-between">
          <h2 className="text-a_general-100 text-2xl font-bold">Dashboard</h2>
          <div className="px-5 py-2 flex gap-2 items-center bg-white text-a_primary-100 rounded border">
            <i className="bi bi-gear  "></i>
            <p>Manage</p>
          </div>
        </div>
        {/* e header */}
        {/* s dashboard boxs */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 divide-x">
          {Array(4)
            .fill(0)
            .map((item ,index) => (
              <DashboardCard key={index}></DashboardCard>
            ))}
        </div>
        {/* e dashboard boxs */}

        <div className="grid grid-cols-12 *:col-span-12 *:md:col-span-6">
          {/* s chart order over time */}
          <div className=" xl:col-span-9">mohammad</div>
          {/* s Last 7 Days Sales */}
          <div className=" xl:col-span-3">ali</div>
          {/* e Last 7 Days Sales */}
        </div>
      </div>
    </>
  );
}
