import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex h-screen text-center">
      <div className="m-auto bg-white px-[60px] py-9 rounded w-[540px]">
        <form className="">
          <h2 className="text-a_general-100 font-bold text-[32px]">Create an Account</h2>
          <div className="">
            <span className="text-a_general-80 ">Have an Account?</span>
            <Link className="text-a_primary-100" to={"/"}>
            Sign In
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
                placeholder="Create Password"
                type="text"
                name=""
                id="password"
              />
              
            </div>
            <div>
              <button className="p-3 w-full rounded bg-a_primary-100 text-white ">
                Create Account
              </button>
            </div>
            <div className="text-sm">
              <p className="text-sm text-a_general-80">By creating account, you agree to our</p>
              <Link className="text-a_primary-100" to={""}>
              Terms of Service
              </Link>
            </div>
            <div className="w-full h-px bg-a_general-50"></div>
            <div>
              <p className="text-sm text-a_general-80">Or create an account using:</p>
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
