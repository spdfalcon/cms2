import { useTranslation } from "react-i18next";

export default function RecentTransactions() {
  const {t} = useTranslation()
  const recentTransactions = [
    {
      id:1,
      name: "Jessica S.",
      date: "24.05.2020",
      amount: "$124.97",
      status: t('paid'),
    },
    {
      id:2,
      name: "Andrew S.",
      date: "23.05.2020",
      amount: "$55.42",
      status: t('pending'),
    },
    {
      id:3,
      name: "Kevin S.",
      date: "23.05.2020",
      amount: "$89.90",
      status: t('paid'),
    },
    {
      id:4,
      name: "Jack S.",
      date: "22.05.2020",
      amount: "$144.94",
      status: t('pending'),
    },
    {
      id:5,
      name: "Arthur S.",
      date: "22.05.2020",
      amount: "$70.52",
      status: t('paid'),
    },
  ];
  return (
    <>
      <div className="left p-7 bg-white rounded-lg overflow-x-auto">
        <h3 className="font-bold text-sm md:text-base">{t('recenttransactions')}</h3>
        <table className="w-full min-w-96">
          <thead className="">
            <tr className="text-a_general-80 text-xs md:text-sm border-b grid grid-cols-4 py-3 *:text-nowrap">
              <th>{t('name')}</th>
              <th>{t('date')}</th>
              <th>{t('amount')}</th>
              <th>{t('status')}</th>
            </tr>
          </thead>
          <tbody className="flex flex-col gap-5 mt-5">
            {recentTransactions.map((item) => (
              <tr key={item.id} className="grid grid-cols-4  *:text-nowrap text-xs">
                <td className="text-a_general-100 font-medium text-xs md:text-sm">
                  {item.name}
                </td>
                <td className="text-a_general-100 text-xs md:text-sm">{item.date}</td>
                <td className="text-a_general-100 text-xs md:text-sm">{item.amount}</td>
                <td className="">
                  <span
                    className={`px-4 py-1 rounded-md ${
                      item.status === "Paid" || item.status === 'پرداخت شده'
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
