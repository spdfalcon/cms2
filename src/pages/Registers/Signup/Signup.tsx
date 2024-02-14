import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
export default function Signup() {
  const { t } = useTranslation();
  const [emailInput, setEmailInput] = useState("");
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/g;
  const [isTrueRegexEmail, setIsTrueRegexEmail] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsTrueRegexEmail(regexEmail.test(emailInput));
  }, [emailInput]);
  const submitHandler = (e: any) => {
    e.preventDefault();
    !emailInput
      ? toast.error(t("pleaseenteryouremail"))
      : !isTrueRegexEmail
      ? toast.error(t("youremailisnotvalid"))
      : fetch("https://lovelcode.iwebdev.ir/API/emailcode", {
          method: "POST",
          body: JSON.stringify({ email: emailInput }),
        }).then((res) => {
          console.log(res.status);
          
          res.status === 200
            ? navigate("/confirmemail")
            : res.status === 500 ? toast.error(t("aservererrorhasoccurred")) : null
        });
  };
  return (
    <div className="flex h-screen text-center">
      <div className="m-auto bg-white dark:bg-a_general-90 px-[60px] py-9 rounded w-[540px]">
        <form onSubmit={submitHandler} className="">
          <h2 className="text-a_general-100 dark:text-white font-bold dark:text-white rtl:font-iransans-700 md:text-[32px] text-base ">
            {t("createanaccount")}
          </h2>
          <div className="md:mt-5">
            <span className="text-a_general-80 dark:text-a_general-40 text-sm md:text-base">
              {t("haveanaccount")}
            </span>
            <Link className="text-a_primary-100 text-sm md:text-base" to={"/"}>
              {t("signin")}
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-6">
            <div className="flex flex-col text-left">
              <label
                htmlFor="email"
                className="text-xs md:text-sm text-a_general-80 dark:text-a_general-40"
              >
                {t("email")}
              </label>
              <input
                className={`border p-2 rounded focus:outline-none text-xs md:text-base ${
                  isTrueRegexEmail
                    ? "ring-2 ring-a_green-90"
                    : "ring-2 ring-a_red-90"
                }`}
                placeholder={t("enteremailaddress")}
                type="text"
                name=""
                id="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
            <div>
              <button
                // to={`${isTrueRegexEmail ? "/confirmemail" : ""}`}

                className="flex justify-center p-3 w-full rounded bg-a_primary-100 text-white text-sm md:text-base"
              >
                {t("createaccount")}
              </button>
            </div>
            <div className="text-xs md:text-sm">
              <p className="text-xs md:text-sm text-a_general-80 dark:text-a_general-40">
                {t("bycreatingaccountyouagreetoour")}
              </p>
              <Link className="text-a_primary-100" to={""}>
                {t("termsofservice")}
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
