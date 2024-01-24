import React from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  const categories = [
    { id: 1, pic: "/img/dashboard/11.png", title: "Men Clothes", count: "24" },
    { id: 2, pic: "/img/dashboard/11.png", title: "Men Clothes", count: "24" },
    { id: 3, pic: "/img/dashboard/11.png", title: "Men Clothes", count: "24" },
    { id: 4, pic: "/img/dashboard/11.png", title: "Men Clothes", count: "24" },
    { id: 5, pic: "/img/dashboard/11.png", title: "Men Clothes", count: "24" },
    { id: 6, pic: "/img/dashboard/11.png", title: "Men Clothes", count: "24" },
    { id: 6, pic: "/img/dashboard/11.png", title: "Men Clothes", count: "24" },
    { id: 6, pic: "/img/dashboard/11.png", title: "Men Clothes", count: "24" },
    { id: 6, pic: "/img/dashboard/11.png", title: "Men Clothes", count: "24" },
  ];
  return (
    <div className="py-8 px-10">
      {/* header */}
      <div className="header flex justify-between items-center">
        <h2 className="font-bold">Categories</h2>
        <Link
          className="flex items-center bg-a_primary-100 px-3 py-1 rounded-md text-white"
          to={"/admin/categories/addcategory"}
        >
          <i className="bi bi-plus"></i>
          <p>Add category</p>
        </Link>
      </div>
      {/* header */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-5">
        {categories.map((item) => (
          <div
            key={item.id}
            className=" flex flex-col gap-3 pb-3 bg-white rounded-md overflow-hidden group "
          >
            <div className="relative flex justify-center">
              <img
                className="z-20 object-contain"
                src="/img/category/11.png"
                alt=""

              />
              <Link className="group-hover:bg-a_general-70/40 hidden group-hover:flex w-full h-full justify-center items-center z-50 text-white absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2" to={`${item.id}`}>
                
                <span className="px-3 bg-white rounded text-a_primary-100">Edit</span>
              </Link>
            </div>
            <div className="px-3">
              <p className="font-bold">Men Clothes</p>
              <span className="text-a_general-60">24 items</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
