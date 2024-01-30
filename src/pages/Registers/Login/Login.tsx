import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Login() {
  const {t} = useTranslation()
  return (
    <div className="flex h-screen text-center">
      <div className="m-auto bg-white px-[60px] py-9 rounded w-[540px]">
        <form className="">
          <h2 className="text-a_general-100 font-bold text-[32px]">{t('signin')}</h2>
          <div className="">
            <span className="text-a_general-80">{t('newtoourproduct')}</span>{" "}
            <Link className="text-a_primary-100" to={"/signup"}>
              {t('createanaccount')}
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
              <div className="flex mt-4 gap-2">
                <input className="" type="checkbox" name="" id="check" />
                <label className="text-a_general-80" htmlFor="check">
                  {t('keepmesignedin')}
                </label>
              </div>
            </div>
            <div>
              <Link to={'/admin/dashboard'} className="block p-3 w-full rounded bg-a_primary-100 text-white ">
                {t('signin')}
              </Link>
            </div>
            <div className="text-sm">
              <Link className="text-a_primary-100" to={"/resetpassword"}>
                {t('forgotyourpassword')}
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
  );
}
