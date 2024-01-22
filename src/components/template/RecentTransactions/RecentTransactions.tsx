export default function RecentTransactions() {
  const recentTransactions = [
    {
      id:1,
      name: "Jessica S.",
      date: "24.05.2020",
      amount: "$124.97",
      status: "Paid",
    },
    {
      id:2,
      name: "Andrew S.",
      date: "23.05.2020",
      amount: "$55.42",
      status: "Pending",
    },
    {
      id:3,
      name: "Kevin S.",
      date: "23.05.2020",
      amount: "$89.90",
      status: "Paid",
    },
    {
      id:4,
      name: "Jack S.",
      date: "22.05.2020",
      amount: "$144.94",
      status: "Pending",
    },
    {
      id:5,
      name: "Arthur S.",
      date: "22.05.2020",
      amount: "$70.52",
      status: "Paid",
    },
  ];
  return (
    <>
      <div className="left p-7 bg-white rounded-lg overflow-x-auto">
        <h3 className="font-bold">Recent Transactions</h3>
        <table className="w-full min-w-96">
          <thead className="">
            <tr className="text-a_general-80 text-sm border-b h-11">
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((item) => (
              <tr key={item.id} className="text-center h-12 ">
                <td className="text-a_general-100 font-medium text-sm">
                  {item.name}
                </td>
                <td className="text-a_general-100 text-sm">{item.date}</td>
                <td className="text-a_general-100 text-sm">{item.amount}</td>
                <td className="">
                  <span
                    className={`px-4 py-1 rounded-md ${
                      item.status === "Paid"
                        ? "bg-a_green-101/20  text-a_green-101"
                        : "bg-a_general-80/15 text-a_general-80"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
