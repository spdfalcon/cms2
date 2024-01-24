import { Link } from "react-router-dom";

export default function AddCategories() {
  const products = [
    { pic: "/img/dashboard/11.png", title: "Women Striped T-Shirt" },
    { pic: "/img/dashboard/11.png", title: "Women Striped T-Shirt" },
    { pic: "/img/dashboard/11.png", title: "Women Striped T-Shirt" },
    { pic: "/img/dashboard/11.png", title: "Women Striped T-Shirt" },
    { pic: "/img/dashboard/11.png", title: "Women Striped T-Shirt" },
    { pic: "/img/dashboard/11.png", title: "Women Striped T-Shirt" },
    { pic: "/img/dashboard/11.png", title: "Women Striped T-Shirt" },
    { pic: "/img/dashboard/11.png", title: "Women Striped T-Shirt" },
    { pic: "/img/dashboard/11.png", title: "Women Striped T-Shirt" },
    { pic: "/img/dashboard/11.png", title: "Women Striped T-Shirt" },
    { pic: "/img/dashboard/11.png", title: "Women Striped T-Shirt" },
    { pic: "/img/dashboard/11.png", title: "Women Striped T-Shirt" },
  ];
  return (
    <div>
      <div className="px-10 py-9 ">
        <div className="header flex justify-between items-center text-a_general-60">
          <div className="l flex flex-col gap-3">
            <Link to={"/admin/categories"} className="flex gap-2 text-sm">
              <i className="bi bi-arrow-left-short"></i>
              <span>Back</span>
            </Link>
            <h2 className="text-a_general-100 font-bold">Women Clothes</h2>
          </div>
          <div className="r flex items-center gap-3 *:px-6 *:py-2 *:rounded-md">
            <button className="text-a_primary-100 bg-white">Cancel</button>
            <button className="text-white bg-a_primary-100">Save</button>
          </div>
        </div>
        <div className="mt-8 *:rounded-md *:p-7 grid grid-cols-1 xl:grid-cols-12 gap-4">
          <div className="l xl:col-span-8 bg-white">
            <div className="flex gap-2">
              <p className="font-bold">Products</p>
              <span className="text-a_general-60">{products.length}</span>
            </div>
            <div className="mt-5 flex flex-col gap-3">
              {products.map((item) => (
                <div className="rounded-md px-5 py-4 border flex items-center gap-4 justify-between">
                  <div className="left flex items-center gap-2">
                    <i className="bi bi-three-dots-vertical text-a_general-60"></i>
                    <img src="/img/dashboard/11.png" alt="" />
                    <p>Women Striped T-Shirt</p>
                  </div>
                  <div className="flex gap-5">
                    <Link to={""} className="bi bi-pencil"></Link>
                    <Link to={""} className="bi bi-trash"></Link>
                  </div>
                </div>
              ))}
              <Link className="py-3 border flex justify-center text-a_primary-100" to={''}>
              <i className="bi bi-plus-lg"></i>
                <span>Add Pr</span>
              </Link>
            </div>
          </div>
          <div className="r *:bg-white *:p-5 *:rounded-md xl:col-span-4 flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <h3 className="font-bold">Category Visibility</h3>
              <div>
              <div className="flex gap-3">
                <input
                  className="hidden"
                  type="radio"
                  name=""
                  id="radioproduct"
                />
                <label
                  className={`flex justify-end px-1 items-center relative w-11  h-6 rounded-full bg-a_primary-100`}
                  htmlFor="radioproduct"
                >
                  <span className="absolute size-4 rounded-full bg-white "></span>
                </label>
                <span>Visible on site</span>
              </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-bold">Category Info</h3>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-a_general-60" htmlFor="">Name</label>
                <input className="border rounded-md px-2 py-1" type="text" name="" id="" />
              </div>
              <div>
                <label className="flex flex-col gap-2 cursor-pointer" htmlFor="productfile">
                <p className="text-a_general-60">Image</p>
                <div className="border-2 border-dashed h-44 flex justify-center items-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="border px-4 py-1 rounded-md text-a_primary-100">Add File</div>
                    <p className="text-a_general-60">Or drag and drop files</p>
                  </div>
                </div>
                </label>
                <input className="hidden" type="file" name="" id="productfile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
