import Headerofpages from "../../../../components/module/Headerofpages/Headerofpages";
import Button from "../../../../components/module/Button/Button";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import apiRequests from "../../../../configs/axios/apiRequests";
import getCookies from "../../../../configs/cookies/getcookise";

export default function Addcustomer() {
  const { t } = useTranslation();
  const { handleSubmit, register } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      username: "",
      password: "",
      home_phone_number: "",
      address: "",
      city: "",
      country: "",
      postal_code: "",
      note: "",
      roles: [],
    },
  });

  const token = getCookies();
  const formSubmit = (data: any) => {
    console.log(data);
    apiRequests
      .post("/user", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res.data));
  };
  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)} className=" py-8">
        <div className="header">
          <Headerofpages
            to={"/admin/customers"}
            back={true}
            title={t("addcustomer")}
          >
            <div className="flex gap-3 flex-col items-end lg:flex-row">
              <Button submitType="reset" type="White" size="sm">
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
              <h2 className="font-bold dark:text-white rtl:font-iransans-700">
                {t("customerinformation")}
              </h2>
              <h3 className="text-a_general-80 dark:text-a_general-40 text-xs md:text-base">
                {t("mostimportantinformationaboutthecustomer")}
              </h3>
            </div>
            <div className="mainsec1 grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-8 ">
              <div className="flex flex-col gap-1">
                <label
                  className="text-xs md:text-base text-a_general-80 dark:text-a_general-40"
                  htmlFor=""
                >
                  {t("firstname")}
                </label>
                <input
                  {...register("first_name", {
                    required: "required",
                  })}
                  className="border rounded-md p-1"
                  type="text"
                  id=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="text-xs md:text-base text-a_general-80 dark:text-a_general-40"
                  htmlFor=""
                >
                  {t("lastname")}
                </label>
                <input
                  {...register("last_name", {
                    required: "required",
                  })}
                  className="border rounded-md p-1"
                  type="text"
                  id=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="text-xs md:text-base text-a_general-80 dark:text-a_general-40"
                  htmlFor=""
                >
                  {t("emailaddress")}
                </label>
                <input
                  {...register("email", {
                    required: "required",
                  })}
                  className="border rounded-md p-1"
                  type="text"
                  id=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="text-xs md:text-base text-a_general-80 dark:text-a_general-40"
                  htmlFor=""
                >
                  {t("phonenumber")}
                </label>
                <input
                  {...register("phone_number", {
                    required: "required",
                  })}
                  className="border rounded-md p-1"
                  type="text"
                  id=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="text-xs md:text-base text-a_general-80 dark:text-a_general-40"
                  htmlFor=""
                >
                  {t("username")}
                </label>
                <input
                  {...register("username", {
                    required: "required",
                  })}
                  className="border rounded-md p-1"
                  type="text"
                  id=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="text-xs md:text-base text-a_general-80 dark:text-a_general-40"
                  htmlFor=""
                >
                  {t("password")}
                </label>
                <input
                  {...register("password", {
                    required: "required",
                  })}
                  className="border rounded-md p-1"
                  type="text"
                  id=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="text-xs md:text-base text-a_general-80 dark:text-a_general-40"
                  htmlFor=""
                >
                  {t("homephonenumber")}
                </label>
                <input
                  {...register("home_phone_number", {
                    required: "required",
                  })}
                  className="border rounded-md p-1"
                  type="text"
                  id=""
                />
              </div>
            </div>
          </div>
          <div className="sec2 pb-10 border-b">
            <div className="headersec">
              <h2 className="font-bold dark:text-white rtl:font-iransans-700">
                {t("customeraddress")}
              </h2>
              <h3 className="text-a_general-80 dark:text-a_general-40 text-xs md:text-base">
                {t("shippingaddressinformation")}
              </h3>
            </div>
            <div className="mainsec1 grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-8 mt-5">
              <div className="flex flex-col gap-1">
                <label
                  className="text-xs md:text-base text-a_general-80 dark:text-a_general-40"
                  htmlFor=""
                >
                  {t("address")}
                </label>
                <input
                  {...register("address", {
                    required: "required",
                  })}
                  className="border rounded-md p-1"
                  type="text"
                  id=""
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  className="text-xs md:text-base text-a_general-80 dark:text-a_general-40"
                  htmlFor=""
                >
                  {t("city")}
                </label>
                <input
                  {...register("city", {
                    required: "required",
                  })}
                  className="border rounded-md p-1"
                  type="text"
                  id=""
                />
              </div>
              <div className="grid grid-cols-2 *:flex *:flex-col gap-5 items-center">
                <div className="flex flex-col">
                  <label
                    className="text-xs md:text-base text-a_general-80 dark:text-a_general-40"
                    htmlFor=""
                  >
                    {t("country")}
                  </label>
                  <input
                    {...register("country", {
                      required: "required",
                    })}
                    className="border rounded-md p-1"
                    type="text"
                    id=""
                  />
                </div>
                <div>
                  <label
                    className="text-xs md:text-base text-a_general-80 dark:text-a_general-40"
                    htmlFor=""
                  >
                    {t("postalcode")}
                  </label>
                  <input
                    {...register("postal_code", {
                      required: "required",
                    })}
                    className="border rounded-md p-1"
                    type="text"
                    id=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="sec3 mt-5">
            <div className="headersec">
              <h2 className="font-bold dark:text-white rtl:font-iransans-700">
                {t("customernotes")}
              </h2>
              <h3 className="text-a_general-80 dark:text-a_general-40 text-xs md:text-base">
                {t("addnotesaboutcustomer")}
              </h3>
            </div>
            <div className="mainsec3 flex flex-col mt-5">
              <label
                className="text-xs md:text-base text-a_general-80 dark:text-a_general-40"
                htmlFor=""
              >
                {t("notes")}
              </label>
              <textarea
                {...register("note", {
                  required: "required",
                })}
                placeholder={t("addnotesaboutcustomer")}
                className="border p-2 rounded-md"
                id=""
              ></textarea>
            </div>
          </div>
          <div className="roles mt-10 ">
            <h3 className="font-bold dark:text-white rtl:font-iransans-700 text-sm md:text-base">
              {t("roles")}
            </h3>

            <div className="flex gap-2 mt-3 items-center dark:text-white ">
              <input
                {...register("roles", {
                  required: t("Pleaseenteracategory"),
                })}
                className=""
                type="checkbox"
                id={"ADMIN"}
                value={"ADMIN"}
              />
              <label htmlFor={"ADMIN"}>{t("admin")}</label>
            </div>
            <div className="flex gap-2 mt-3 items-center dark:text-white ">
              <input
                {...register("roles", {
                  required: t("Pleaseenteracategory"),
                })}
                className=""
                type="checkbox"
                id={"DEFAULT"}
                value={"DEFAULT"}
              />
              <label htmlFor={"DEFAULT"}>{t("default")}</label>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
