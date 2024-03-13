import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import apiRequests from "../../../configs/axios/apiRequests";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
export default function Signin() {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const { t } = useTranslation();
  const [isvisiblePass, setIsVisiblePass] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      // check: false,
    },
  });
  //

  useEffect(() => {
    const token = cookies.get("token");
    apiRequests
      .get("/category", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          navigate("/admin/dashboard");
        }
      });
  }, []);
  const formsubmiting = async (data: any) => {
    apiRequests
      .post("/auth/signin", data)
      .then((res) => {
        if (res.status === 201) {
          cookies.set("token", res.data.token);
          navigate("/admin/dashboard");
        }
      })
      .catch(() => {
        toast.error(t("Thepasswordorusernameisincorrect"));
      });
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
                htmlFor="username"
                className="text-xs md:text-xs md:text-sm text-a_general-80 dark:text-a_general-40"
              >
                {t("username")}
              </label>
              <input
                {...register("username", {
                  required: true,
                })}
                className={`border p-2 rounded focus:outline-none text-xs md:text-base ${
                  !watch().username || errors.username
                    ? "border-red-400"
                    : "border-green-400"
                }`}
                placeholder={t("enteryourusername")}
                type="text"
                id="username"
              />
            </div>
            <div className="flex flex-col text-left">
              <label
                htmlFor="password"
                className="md:text-xs  text-xs text-a_general-80 dark:text-a_general-40"
              >
                {t("password")}
              </label>
              <div
                className={`border rounded focus:outline-none text-xs md:text-base flex ${
                  !watch().password || errors.password
                    ? "border-red-400"
                    : "border-green-400"
                }`}
              >
                <input
                  {...register("password", {
                    required: true,
                  })}
                  className={`w-full p-2`}
                  placeholder={t("enterpassword")}
                  type={`${isvisiblePass ? "password" : "text"}`}
                  id="password"
                />
                <div
                  onClick={() => setIsVisiblePass((priv) => !priv)}
                  className="cursor-pointer flex items-center px-2 justify-center bg-a_primary-60"
                >
                  <i
                    className={`${
                      isvisiblePass ? "bi bi-eye-fill" : "bi bi-eye-slash-fill"
                    }`}
                  ></i>
                </div>
              </div>
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
      <ToastContainer></ToastContainer>
    </div>
  );
}
