import { Link } from "react-router-dom";

export default function Addproduct() {
  return (
    <div className="w-full h-44 py-8 px-10">
      <Link className="text-a_general-80" to={"/admin/products"}>
        <i className="bi bi-arrow-left"></i>
        <span>Back</span>
      </Link>
      <div className="header flex justify-between">
        <h2 className="text-a_general-100 text-2xl font-bold">Add Product</h2>
        <div className="flex gap-4">
          <button className="px-5 py-2 flex gap-2 items-center bg-white text-a_primary-100 rounded border">
            <p>cancel</p>
          </button>
          <button className="px-5 py-2 flex gap-2 items-center text-white bg-a_primary-100 rounded border">
            <p>Save</p>
          </button>
        </div>
      </div>
      <div className="p-10 bg-white mt-10 rounded-md">

      </div>
    </div>
  );
}
