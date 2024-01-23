import { Link } from "react-router-dom";

export default function Addproduct() {
  return (
    <div className="w-full h-44 py-8 px-10">
      <div className="header">
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
      </div>

      <div className="grid grid-cols-12 gap-5">
        <div className="l col-span-8 px-10 py-2 bg-white mt-10 rounded-md">
          <div className="py-10 border-b">
            <h2 className="font-bold">Information</h2>
            <div className="mt-5 flex flex-col gap-2">
              <p className="text-a_general-80 text-sm">Product Name</p>
              <input
                className="border w-full outline-none px-4 py-2 rounded-md"
                placeholder="Summer T-Shirt"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <p className="text-a_general-80 text-sm">Product Description</p>
              <textarea
                className="border w-full outline-none px-4 py-2 rounded-md h-24"
                placeholder="Product description"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="py-10 border-b">
            <h2 className="font-bold">Images</h2>
            <div className="mt-5 flex flex-col gap-2">
              {/* input file */}
              <div className="file flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
              {/* input file */}
            </div>
          </div>
        </div>
        <div className="r col-span-4 p-10 bg-white mt-10 rounded-md"></div>
      </div>
    </div>
  );
}
