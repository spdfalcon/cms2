export default function Coupons() {
  const couponsTable = [
    {
      id: 1,
      Name: { up: "Summer discount 10% off", down: "Summer2020" },
      usage: "15 times",
      status: "Active",
      date: "May 5, 2020 - May 15, 2020",
    },
    {
      id: 2,
      Name: { up: "Free shipping on all items", down: "Shipfreetomee15" },
      usage: "42 times",
      status: "Expired",
      date: "May 5, 2020 - May 15, 2020",
    },
    {
      id: 3,
      Name: { up: "Summer discount 10% off", down: "Summer2020" },
      usage: "15 times",
      status: "Active",
      date: "May 5, 2020 - May 15, 2020",
    },
    {
      id: 4,
      Name: { up: "Free shipping on all items", down: "Shipfreetomee15" },
      usage: "42 times",
      status: "Expired",
      date: "May 5, 2020 - May 15, 2020",
    },
  ];
  return (
    <>
      <div className="p-7 flex flex-col">
        <div className="header flex justify-between flex-col items-center md:flex-row gap-y-5">
          <h2 className="font-bold text-2xl">Coupons</h2>
          <button className="bg-a_primary-100 text-white px-6 py-2 rounded-md flex items-center gap-2">
            <i className="bi bi-plus-lg"></i>
            <span>Create Coupon</span>
          </button>
        </div>
        <div className="w-full flex justify-center">
          <div className="bg-white p-7 rounded-md w-52 sm:w-96 mt-10 md:w-[510px] lg:w-[760px] xl:w-full overflow-x-auto">
            <div className="toptable">
              <div className="toptabletop border-b ">
                <ul className="flex gap-5 text-a_general-80 *:py-2">
                  <li className="border-b border-a_primary-100 text-a_primary-100">
                    All Coupons
                  </li>
                  <li>Active Coupons</li>
                  <li>Expired Coupons</li>
                </ul>
              </div>
              <div className="toptabledouwn mt-5 flex justify-between">
                <div className="toptabledouwnleft flex gap-3 items-center">
                  <select
                    className="px-3 py-2 border rounded-md outline-none text-a_general-80"
                    name=""
                    id=""
                  >
                    <option value="1">mohammad</option>
                    <option value="2">amir</option>
                    <option value="3">ali</option>
                  </select>
                  <div className="border overflow-hidden rounded-md flex items-center gap-2 relative">
                    <label
                      htmlFor="searchcoupons"
                      className="bi bi-search absolute left-2 cursor-text text-a_general-80"
                    ></label>
                    <input
                      placeholder="Search ..."
                      className="outline-none w-full h-full px-10 py-2"
                      type="text"
                      name=""
                      id="searchcoupons"
                    />
                  </div>
                </div>
                <div className="toptabledouwnright">
                  <div className="right text-a_primary-100  flex gap-2">
                    <button className="border size-9 flex cursor-pointer justify-center items-center rounded-md hover:bg-a_primary-100 hover:text-white duration-300">
                      <i className="bi bi-pencil"></i>
                    </button>
                    <div className="border size-9 flex cursor-pointer justify-center items-center rounded-md hover:bg-a_primary-100 hover:text-white duration-300">
                      <i className="bi bi-trash"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="table w-full">
              <table className="w-full">
                <thead>
                  <tr className="*:px-6 *:py-3  text-a_general-80 border-b">
                    <th className="text-left">Coupon Name</th>
                    <th className="text-left">Usage</th>
                    <th>Status</th>
                    <th className="text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {couponsTable.map((item) => (
                    <tr key={item.id} className="*:px-6 *:py-3">
                      <td className="">
                        <div className="flex gap-3 flex items-center">
                          <div
                            className={`l size-10 rounded-md ${
                              item.Name.up !== "Free shipping on all items"
                                ? "bg-a_primary-100"
                                : "bg-a_general-70"
                            }  flex justify-center items-center text-white`}
                          >
                            {item.Name.up !== "Free shipping on all items" ? (
                              <i className="bi bi-ticket-perforated"></i>
                            ) : (
                              <i className="bi bi-truck"></i>
                            )}
                          </div>
                          <div className="r text-nowrap">
                            <p className="font-bold">{item.Name.up}</p>
                            <p className="text-a_general-80">
                              {item.Name.down}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-nowrap">{item.usage}</p>
                      </td>
                      <td className="">
                        <p
                          className={`rounded-md py-1  flex justify-center items-center ${
                            item.status === "Active"
                              ? "text-a_green-101 bg-a_green-40"
                              : "text-a_general-80 bg-a_general-40"
                          } `}
                        >
                          {item.status}
                        </p>
                      </td>
                      <td className="text-nowrap">
                        <p>{item.date}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="downtable mt-5">
              <div className="flex down justify-between text-a_general-70">
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
                  <p>5 Results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
