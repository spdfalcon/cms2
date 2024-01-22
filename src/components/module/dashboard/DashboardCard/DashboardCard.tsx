export default function DashboardCard() {
  return (
    <>
    <div className="bg-white rounded py-7 pr-11 pl-7 mt-6 flex justify-between  gap-12 items-center ">
        <div className="left">
            <p className="text-a_general-100 text-xl font-bold">$10.540</p>
            <p className="text-a_general-80 text-sm">Total Revenue</p>
            <div className="flex gap-2 mt-3 text-a_green-101 text-sm">
            <p>22.45%</p>
            <i className="bi bi-chevron-up"></i>
            </div>
        </div>
        <div className="right ">
            <div className="size-14 bg-a_primary-30 rounded-full flex justify-center items-center text-2xl text-a_primary-100">
            <i className="bi bi-currency-dollar"></i>
            </div>
        </div>
    </div>
    </>
  )
}
