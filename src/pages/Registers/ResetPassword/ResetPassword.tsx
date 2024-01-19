import { Link } from "react-router-dom";

export default function ResetPassword() {
  return (
    <div className="flex h-screen text-center">
      <div className="m-auto bg-white px-[60px] py-9 rounded w-[540px]">
        <form className="">
          <h2 className="text-a_general-100 font-bold text-[32px]">
          Password Reset
          </h2>
          <div className="">
            <span className="text-a_general-80 ">We Will Help You Reset your Password</span>
            
          </div>

          <div className="mt-10 flex flex-col gap-6">
            <div className="flex flex-col text-left">
              <label htmlFor="email" className="text-sm text-a_general-80">
                Email
              </label>
              <input
                className="border p-2 rounded focus:outline-none"
                placeholder="Enter Email Address"
                type="text"
                name=""
                id="email"
              />
            </div>
            <div>
              <button className="p-3 w-full rounded bg-a_primary-100 text-white ">
              Reset Password
              </button>
            </div>
           
            <div className="w-full h-px bg-a_general-50"></div>
            <div>
              <p className="text-sm text-a_general-80">
              Remembered your Password?
              </p>
            </div>
            <Link
              to={"/"}
              className="flex justify-center gap-2 border rounded py-3"
            >
              <p className="text-a_primary-100">Back to Sign In</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
