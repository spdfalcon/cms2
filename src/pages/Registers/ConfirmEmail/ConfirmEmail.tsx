import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ConfirmEmail() {
  const {t} = useTranslation()
  return (
    <div className="flex h-screen text-center">
      <div className="m-auto bg-white px-[60px] py-9 rounded w-[540px]">
        <form className="">
          <h2 className="text-a_general-100 font-bold md:text-[32px] text-base ">
            {t('confirmemail')}
          </h2>
          <div className="mt-3">
            <span className="text-a_general-80 ">
            {t('checkyouremailandenterconfirmationcode')}
            </span>
          </div>
          <div className="mt-10 flex flex-col gap-6">
            <div className="flex flex-col text-left">
              <label htmlFor="email" className="text-xs md:text-sm text-a_general-80">
                {t('confirmationcode')}
              </label>
              <input
                className="border p-2 rounded focus:outline-none"
                placeholder={t('entercode')}
                type="text"
                name=""
                id="email"
              />
            </div>
            <div>
              <button className="p-3 w-full rounded bg-a_primary-100 text-white">
              {t('confirmemail')}
              </button>
            </div>
            <div className="w-full h-px bg-a_general-50"></div>
            <div>
              <p className="text-xs md:text-sm text-a_general-80">
                {t('haventreceivedyourcode')}
              </p>
            </div>
            <Link
              to={"/"}
              className="flex justify-center gap-2 border rounded py-3"
            >
              <p className="text-a_primary-100">{t('resendcode')}</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
