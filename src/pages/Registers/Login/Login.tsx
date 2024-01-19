import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex h-screen text-center">
      <div className="m-auto bg-white px-[60px] py-9 rounded w-[540px]">
        <form className="">
          <h2 className="text-a_general-100 font-bold text-[32px]">Sign in</h2>
          <div className="">
            <span className="text-a_general-80">New to Our Product?</span>{" "}
            <Link className="text-a_primary-100" to={"/signup"}>
              Create an Account
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-6">
            <div className="flex flex-col text-left">
              <label htmlFor="email" className="text-sm text-a_general-80">Email</label>
              <input
                className="border p-2 rounded focus:outline-none"
                placeholder="Enter Email Address"
                type="text"
                name=""
                id="email"
              />
            </div>
            <div className="flex flex-col text-left">
              <label htmlFor="password" className="text-sm text-a_general-80">Password</label>
              <input
                className="border p-2 rounded focus:outline-none"
                placeholder="Enter Password"
                type="text"
                name=""
                id="password"
              />
              <div className="flex mt-4 gap-2">
                <input className="" type="checkbox" name="" id="check" />
                <label className="text-a_general-80" htmlFor="check">
                  Keep me signed in
                </label>
              </div>
            </div>
            <div>
              <Link to={'/admin'} className="block p-3 w-full rounded bg-a_primary-100 text-white ">
                Go To Account
              </Link>
            </div>
            <div className="text-sm">
              <Link className="text-a_primary-100" to={"/resetpassword"}>
                Forgot your password?
              </Link>
            </div>
            <div className="w-full h-px bg-a_general-50"></div>
            <div>
              <p className="text-sm text-a_general-80">Or sign in using:</p>
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
