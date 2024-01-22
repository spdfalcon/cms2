export default function TopProductsbox() {
    const TopProductsbyUnitsSold = [
        {
          id:1,
          name: "Men Grey Hoodie",
          pic: "/img/dashboard/15.png",
          price: "$49.90",
          unitssold: "204",
        },
        {
          id:2,
          name: "Women Striped T-Shirt",
          pic: "/img/dashboard/14.png",
          price: "$34.90",
          unitssold: "154",
        },
        {
          id:3,
          name: "Wome White T-Shirt",
          pic: "/img/dashboard/13.png",
          price: "$40.90",
          unitssold: "97",
        },
        {
          id:4,
          name: "Men White T-Shirt",
          pic: "/img/dashboard/12.png",
          price: "$49.90",
          unitssold: "356",
        },
        {
          id:5,
          name: "Women Red T-Shirt",
          pic: "/img/dashboard/11.png",
          price: "$34.90",
          unitssold: "120",
        },
      ];
  return (
    <div className="left p-7 bg-white rounded-lg overflow-x-auto">
        <h3 className="font-bold">Recent Transactions</h3>
        <table className="w-full min-w-96">
          <thead className="">
            <tr className="text-a_general-80 text-sm border-b grid grid-cols-3 py-3">
              <th>Name</th>
              <th>Price</th>
              <th>Units Sold</th>
            </tr>
          </thead>
          <tbody className="">
            {TopProductsbyUnitsSold.map((item) => (
              <tr key={item.id} className="text-center grid grid-cols-3">
                <td className="text-a_general-100 font-medium text-sm flex gap-5 items-center mt-2 ">
                  <img src={item.pic} alt="" />
                  <span className="w-20">{item.name}</span>
                </td>
                <td className="text-a_general-100 text-sm mt-2">{item.price}</td>
                <td className="text-a_general-100 text-sm mt-2">{item.unitssold}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}
