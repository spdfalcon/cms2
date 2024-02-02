import Headerofpages from "../../../../components/module/Headerofpages/Headerofpages";
import Button from "../../../../components/module/Button/Button";
import { useTranslation } from "react-i18next";

export default function Editcustomers() {
  const customerorder = [
    {
      id: 1,
      order: "#23534D",
      date: "May 25, 3:12 PM",
      orderstatus: "Pending",
      price: 29.74,
    },
    {
      id: 1,
      order: "#23534D",
      date: "May 25, 3:12 PM",
      orderstatus: "Pending",
      price: 29.74,
    },
    {
      id: 1,
      order: "#23534D",
      date: "May 25, 3:12 PM",
      orderstatus: "Completed",
      price: 29.74,
    },
    {
      id: 1,
      order: "#23534D",
      date: "May 25, 3:12 PM",
      orderstatus: "Completed",
      price: 29.74,
    },
    {
      id: 1,
      order: "#23534D",
      date: "May 25, 3:12 PM",
      orderstatus: "Pending",
      price: 29.74,
    },
    {
      id: 1,
      order: "#23534D",
      date: "May 25, 3:12 PM",
      orderstatus: "Completed",
      price: 29.74,
    },
  ];
  const{t} = useTranslation()
  return (
    <div className="px-10 py-8">
      <div className="header">
          <Headerofpages
            to={"/admin/customers"}
            back={true}
            title={t("customerinformation")}
          >
            <div className="flex gap-3 flex-col items-end lg:flex-row">
              <Button type="White" size="sm">
                {t("cancel")}
              </Button>
              <Button type="Primary" size="sm">
                {t("save")}
              </Button>
            </div>
          </Headerofpages>
        </div>
      <div className="main  p-7 mt-10 grid grid-cols-1 gap-5 xl:grid-cols-12 border-b">
        <div className="l lg:col-span-8 *:p-7 *:rounded-md *:bg-white grid grid-cols-1 gap-5">
          <div className="up ">
            <div className="up flex justify-between border-b pb-10">
              <div className="l flex items-center gap-5">
                <div className="l">
                  <div className="size-[72px] rounded-full bg-a_general-60 flex justify-center items-center text-white text-3xl font-bold">
                    L
                  </div>
                </div>
                <div className="r flex flex-col gap-3">
                  <h3 className="font-bold">Lenora Robinson</h3>
                  <div className="text-a_general-60 text-sm">
                    <p>Ireland</p>
                    <p>5 {t('order')}</p>
                    <p>{t('customerfor')} 2 {t('years')}</p>
                  </div>
                </div>
              </div>
              <div className="r *:text-a_yellow-90 flex gap-1">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </div>
            </div>
            <div className="down py-5 flex flex-col gap-4">
              <h3 className="font-bold">{t('customernotes')}</h3>
              <div>
                <label className="text-a_general-60" htmlFor="">
                  {t('notes')}
                </label>
                <textarea
                  placeholder={t('addnotesaboutcustomer')}
                  className="border w-full p-2"
                  name=""
                  id=""
                ></textarea>
              </div>
            </div>
          </div>
          <div className="down overflow-x-auto">
            <table className="w-full">
              <thead className=" text-sm text-a_general-60">
                <tr className="*:text-nowrap *:px-6 *:py-3 border-b-2">
                  <th className="">{t('orders')}</th>
                  <th className="">{t('date')}</th>
                  <th className="">{t('orderstatus')}</th>
                  <th className="">{t('price')}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {customerorder.map((item) => (
                  <tr
                    key={item.id}
                    className="*:px-6 *:py-3 border-b-2 *:text-nowrap"
                  >
                    <td className="font-medium">{item.order}</td>
                    <td>{item.date}</td>
                    <td>
                      <span
                        className={`px-2 py-1 rounded ${
                          item.orderstatus === "Pending"
                            ? "text-a_general-70 bg-a_general-50"
                            : item.orderstatus === "Completed"
                            ? "bg-a_green-40 text-a_green-101"
                            : ""
                        }`}
                      >
                        {item.orderstatus}
                      </span>
                    </td>
                    <td>${item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="r lg:col-span-4 *:p-7 *:bg-white flex flex-col gap-5">
          <div className="top flex flex-col gap-3">
            <div className="sec1 flex justify-between">
              <h2 className="font-bold">{t('overview')}</h2>
              <button className="text-a_primary-100">{t('edit')}</button>
            </div>
            <div className="sec2 flex flex-col gap-1">
              <h4 className="text-sm text-a_general-60">{t('address')}</h4>
              <p className="w-40 text-sm text-a_general-80">
                831 Wilhelmine Glen 40583-2293 South Lelastad Ireland
              </p>
            </div>
            <div className="sec3">
              <h4 className="text-sm text-a_general-60">{t('emailaddress')}</h4>
              <p className="w-40 text-sm text-a_general-80">
                lenora_rob@yahoo.com
              </p>
            </div>
            <div className="sec4 border-b pb-5">
              <h4 className="text-sm text-a_general-60">{t('phone')}</h4>
              <p className="w-40 text-sm text-a_general-80">636-458-4820</p>
            </div>
            <div className="sec5">
              <p className="text-sm text-a_red-101 font-bold">
                {t('deletecustomer')}
              </p>
            </div>
          </div>
          <div className="down flex flex-col gap-4">
            <h3 className="font-bold">{t('tags')}</h3>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-a_general-60" htmlFor="">
                {t('addtags')}
              </label>
              <input
                className="border p-2 rounded-md outline-none"
                placeholder={t('entertagname')}
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <div className="text-sm text-a_general-80 bg-a_general-50 rounded p-1 flex items-center gap-2">
                <span>{t('vipcustomer')}</span>
                <i className="bi bi-x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
