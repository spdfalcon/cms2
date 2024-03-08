import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import apiRequests from "../../../configs/axios/apiRequests";

export default function Signin() {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      // check: false,
    },
  });
  //

  const formsubmiting = async (data: any) => {
    console.log(data);
    apiRequests
      .post("/auth/signin", data)
      .then((res) => console.log(res.data.token));
  };
  return (
    <div className="flex h-screen text-center">
      <div className="m-auto bg-white dark:bg-a_general-90 px-[60px] py-9 rounded w-[540px]">
        <form onSubmit={handleSubmit(formsubmiting)} className="">
          <h2 className="text-a_general-100 dark:text-white font-bold dark:text-white rtl:font-iransans-700 md:md:text-[32px] text-base ">
            {t("signin")}
          </h2>
          <div className="md:mt-5">
            <span className="text-a_general-80 dark:text-a_general-40 text-xs md:text-sm md:text-base">
              {t("newtoourproduct")}
            </span>{" "}
            <Link className="text-a_primary-100 text-xs" to={"/signup"}>
              {t("createanaccount")}
            </Link>
          </div>

          <div className=" mt-5 md:mt-10 flex flex-col md:gap-6 gap-3">
            <div className="flex flex-col text-left">
              <label
                htmlFor="email"
                className="text-xs md:text-xs md:text-sm text-a_general-80 dark:text-a_general-40"
              >
                {t("email")}
              </label>
              <input
                {...register("username", {
                  required: true,
                })}
                className={`border p-2 rounded focus:outline-none text-xs md:text-base ${
                  errors.username ? "border-red-400" : "border-green-400"
                }`}
                placeholder={t("enteremailaddress")}
                type="text"
                id="email"
              />
            </div>
            <div className="flex flex-col text-left">
              <label
                htmlFor="password"
                className="md:text-xs  text-xs text-a_general-80 dark:text-a_general-40"
              >
                {t("password")}
              </label>
              <input
                {...register("password")}
                className="border p-2 rounded focus:outline-none text-xs md:text-base"
                placeholder={t("enterpassword")}
                type="text"
                id="password"
              />
              {/* <div className="flex mt-4 gap-2">
                <input
                  {...register("check")}
                  className=""
                  type="checkbox"
                  id="check"
                />
                <label
                  className="text-a_general-80 dark:text-a_general-40 text-xs md:text-base"
                  htmlFor="check"
                >
                  {t("keepmesignedin")}
                </label>
              </div> */}
            </div>
            <div>
              <button
                // type="submit"
                className="block p-3 w-full rounded bg-a_primary-100 text-white text-xs md:text-sm"
              >
                {t("signin")}
              </button>
            </div>
            <div className="text-xs md:text-sm">
              <Link className="text-a_primary-100" to={"/resetpassword"}>
                {t("forgotyourpassword")}
              </Link>
            </div>
            <div className="w-full h-px bg-a_general-50"></div>
            <div>
              <p className="text-xs md:text-sm text-a_general-80 dark:text-a_general-40">
                {t("orsigninusing")}
              </p>
            </div>
            <Link
              to={""}
              className="flex justify-center gap-2 border rounded py-3"
            >
              <img src="/img/media/Google.png" alt="" />
              <p className="text-a_primary-100 text-sm md:text-base">
                Continue with Google
              </p>
            </Link>
            <Link
              to={""}
              className="flex justify-center gap-2 border rounded py-3"
            >
              <img src="/img/media/Facebook.png" alt="" />
              <p className="text-a_primary-100 text-sm md:text-base">
                Continue with Google
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
