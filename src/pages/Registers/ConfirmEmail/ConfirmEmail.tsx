import { Link } from "react-router-dom";

export default function ConfirmEmail() {
  return (
    <div className="flex h-screen text-center">
      <div className="m-auto bg-white px-[60px] py-9 rounded w-[540px]">
        <form className="">
          <h2 className="text-a_general-100 font-bold text-[32px]">
            Confirm Email
          </h2>
          <div className="">
            <span className="text-a_general-80 ">
              Check Your Email and Enter Confirmation Code
            </span>
          </div>
          <div className="mt-10 flex flex-col gap-6">
            <div className="flex flex-col text-left">
              <label htmlFor="email" className="text-sm text-a_general-80">
                Confirmation Code
              </label>
              <input
                className="border p-2 rounded focus:outline-none"
                placeholder="Enter Code"
                type="text"
                name=""
                id="email"
              />
            </div>
            <div>
              <button className="p-3 w-full rounded bg-a_primary-100 text-white">
                Confirm Email
              </button>
            </div>
            <div className="w-full h-px bg-a_general-50"></div>
            <div>
              <p className="text-sm text-a_general-80">
                Haven’t received your code?
              </p>
            </div>
            <Link
              to={"/"}
              className="flex justify-center gap-2 border rounded py-3"
            >
              <p className="text-a_primary-100">Resend Code</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
