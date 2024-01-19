import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex h-screen text-center">
      <div className="m-auto bg-white px-[60px] py-9 rounded">
        <form className="">
          <h2 className="text-a_general-100 font-bold text-[32px]">Sign in</h2>
          <div className="text-2xl">
            <span className="text-a_general-80">New to Our Product?</span>{" "}
            <Link className="text-a_primary-100" to={""}>
              Create an Account
            </Link>
          </div>
          <div className="flex flex-col text-left mt-10">
            <label className="text-sm text-a_general-80">Email</label>
            <input className="border p-2 rounded focus:outline-none" placeholder="Enter Email Address" type="text" name="" id="" />
          </div>
        </form>
      </div>
    </div>
  );
}
