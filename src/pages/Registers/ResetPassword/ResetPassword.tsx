import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const {t} = useTranslation()
  return (
    <div className="flex h-screen text-center">
      <div className="m-auto bg-white dark:bg-a_general-90 px-[60px] py-9 rounded w-[540px]">
        <form className="">
          <h2 className="text-a_general-100 dark:text-white font-bold dark:text-white rtl:font-iransans-700 md:text-[32px] text-base ">
          {t('passwordreset')}
          </h2>
          <div className="md:mt-5">
            <span className="text-a_general-80 dark:text-a_general-40 text-sm md:text-base">{t('wewillhelpyouresetyourpassword')}</span>
            
          </div>

          <div className="mt-10 flex flex-col gap-6">
            <div className="flex flex-col text-left">
              <label htmlFor="email" className="text-xs md:text-sm text-a_general-80 dark:text-a_general-40">
                {t('email')}
              </label>
              <input
                className="border p-2 rounded focus:outline-none text-xs md:text-base"
                placeholder={t('enteremailaddress')}
                type="text"
                name=""
                id="email"
              />
            </div>
            <div>
              <Link to={'/confirmemail'} className="block p-3 w-full rounded bg-a_primary-100 text-white text-sm md:text-base">
              {t('resetpassword')}
              </Link>
            </div>
           
            <div className="w-full h-px bg-a_general-50"></div>
            <div>
              <p className="text-xs md:text-sm text-a_general-80 dark:text-a_general-40">
              {t('rememberedyourpassword')}
              </p>
            </div>
            <Link
              to={"/"}
              className="flex justify-center gap-2 border rounded py-3"
            >
              <p className="text-a_primary-100 text-sm md:text-base">{t('backtosignin')}</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
