import Headerofpages from "../../../../components/module/Headerofpages/Headerofpages";
import Button from "../../../../components/module/Button/Button";
import { useTranslation } from "react-i18next";

export default function Addcustomer() {
  const { t } = useTranslation();
  return (
    <>
      <div className=" py-8">
        <div className="header">
          <Headerofpages
            to={"/admin/customers"}
            back={true}
            title={t("addcustomer")}
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
        <div className="main bg-white dark:bg-a_general-90 p-7 flex flex-col mt-10 rounded-md">
          <div className="sec1 flex flex-col gap-3 border-b pb-10">
            <div className="headersec">
              <h2 className="font-bold dark:text-white rtl:font-iransans-700">{t("customerinformation")}</h2>
              <h3 className="text-a_general-80 dark:text-a_general-40 text-xs md:text-base">
                {t("mostimportantinformationaboutthecustomer")}
              </h3>
            </div>
            <div className="mainsec1 grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-8 ">
              <div className="flex flex-col gap-1">
                <label className="text-xs md:text-base text-a_general-80 dark:text-a_general-40" htmlFor="">
                  {t("firstname")}
                </label>
                <input
                  className="border rounded-md p-1"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs md:text-base text-a_general-80 dark:text-a_general-40" htmlFor="">
                  {t("lastname")}
                </label>
                <input
                  className="border rounded-md p-1"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs md:text-base text-a_general-80 dark:text-a_general-40" htmlFor="">
                  {t("emailaddress")}
                </label>
                <input
                  className="border rounded-md p-1"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs md:text-base text-a_general-80 dark:text-a_general-40" htmlFor="">
                  {t("phonenumber")}
                </label>
                <input
                  className="border rounded-md p-1"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
          <div className="sec2 pb-10 border-b">
            <div className="headersec">
              <h2 className="font-bold dark:text-white rtl:font-iransans-700">{t("customeraddress")}</h2>
              <h3 className="text-a_general-80 dark:text-a_general-40 text-xs md:text-base">
                {t("shippingaddressinformation")}
              </h3>
            </div>
            <div className="mainsec1 grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-8 mt-5">
              <div className="flex flex-col gap-1">
                <label className="text-xs md:text-base text-a_general-80 dark:text-a_general-40" htmlFor="">
                  {t("address")}
                </label>
                <input
                  className="border rounded-md p-1"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs md:text-base text-a_general-80 dark:text-a_general-40" htmlFor="">
                  {t("apartment")}
                </label>
                <input
                  className="border rounded-md p-1"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs md:text-base text-a_general-80 dark:text-a_general-40" htmlFor="">
                  {t("city")}
                </label>
                <input
                  className="border rounded-md p-1"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="grid grid-cols-2 *:flex *:flex-col gap-5 items-center">
                <div className="flex flex-col">
                  <label className="text-xs md:text-base text-a_general-80 dark:text-a_general-40" htmlFor="">
                    {t("country")}
                  </label>
                  <input
                    className="border rounded-md p-1"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <label className="text-xs md:text-base text-a_general-80 dark:text-a_general-40" htmlFor="">
                    {t("postalcode")}
                  </label>
                  <input
                    className="border rounded-md p-1"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs md:text-base text-a_general-80 dark:text-a_general-40" htmlFor="">
                  {t("phone")}
                </label>
                <input
                  className="border rounded-md p-1"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
          <div className="sec3 mt-5">
            <div className="headersec">
              <h2 className="font-bold dark:text-white rtl:font-iransans-700">{t("customernotes")}</h2>
              <h3 className="text-a_general-80 dark:text-a_general-40 text-xs md:text-base">
                {t("addnotesaboutcustomer")}
              </h3>
            </div>
            <div className="mainsec3 flex flex-col mt-5">
              <label className="text-xs md:text-base text-a_general-80 dark:text-a_general-40" htmlFor="">
                {t("notes")}
              </label>
              <textarea
                placeholder={t("addnotesaboutcustomer")}
                className="border p-2 rounded-md"
                name=""
                id=""
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
