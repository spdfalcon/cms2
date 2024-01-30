import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Signup() {
  const {t} = useTranslation()
  return (
    <div className="flex h-screen text-center">
      <div className="m-auto bg-white px-[60px] py-9 rounded w-[540px]">
        <form className="">
          <h2 className="text-a_general-100 font-bold text-[32px]">{t('createanaccount')}</h2>
          <div className="">
            <span className="text-a_general-80 ">{t('haveanaccount')}</span>
            <Link className="text-a_primary-100" to={"/"}>
            {t('signin')}
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-6">
            <div className="flex flex-col text-left">
              <label htmlFor="email" className="text-sm text-a_general-80">{t('email')}</label>
              <input
                className="border p-2 rounded focus:outline-none"
                placeholder={t('enteremailaddress')}
                type="text"
                name=""
                id="email"
              />
            </div>
            <div className="flex flex-col text-left">
              <label htmlFor="password" className="text-sm text-a_general-80">{t('password')}</label>
              <input
                className="border p-2 rounded focus:outline-none"
                placeholder={t('enterpassword')}
                type="text"
                name=""
                id="password"
              />
              
            </div>
            <div>
              <button className="p-3 w-full rounded bg-a_primary-100 text-white ">
                {t('createaccount')}
              </button>
            </div>
            <div className="text-sm">
              <p className="text-sm text-a_general-80">{t('bycreatingaccountyouagreetoour')}</p>
              <Link className="text-a_primary-100" to={""}>
              {t('termsofservice')}
              </Link>
            </div>
            <div className="w-full h-px bg-a_general-50"></div>
            <div>
              <p className="text-sm text-a_general-80">{t('orsigninusing')}</p>
            </div>
            <Link
              to={""}
              className="flex justify-center gap-2 border rounded py-3"
            >
              <img src="/img/media/Google.png" alt="" />
              <p className="text-a_primary-100">Continue with Google</p>
            </Link>
            <Link
              to={""}
              className="flex justify-center gap-2 border rounded py-3"
            >
              <img src="/img/media/Facebook.png" alt="" />
              <p className="text-a_primary-100">Continue with Google</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
