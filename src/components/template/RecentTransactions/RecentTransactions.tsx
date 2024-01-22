export default function RecentTransactions() {
  const recentTransactions = [
    {
      name: "Jessica S.",
      date: "24.05.2020",
      amount: "$124.97",
      status: "Paid",
    },
    {
      name: "Andrew S.",
      date: "23.05.2020",
      amount: "$55.42",
      status: "Pending",
    },
    {
      name: "Kevin S.",
      date: "23.05.2020",
      amount: "$89.90",
      status: "Paid",
    },
    {
      name: "Jack S.",
      date: "22.05.2020",
      amount: "$144.94",
      status: "Pending",
    },
    {
      name: "Arthur S.",
      date: "22.05.2020",
      amount: "$70.52",
      status: "Paid",
    },
  ];
  return (
    <>
      <div className="left p-7 bg-white rounded-lg">
        <h3 className="font-bold">Recent Transactions</h3>
        <table className="w-full">
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
              <tr className="text-center h-11">
                <td className="text-a_general-100 font-medium text-sm">
                  {item.name}
                </td>
                <td className="text-a_general-100 text-sm">{item.date}</td>
                <td className="text-a_general-100 text-sm">{item.amount}</td>
                <td>
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
