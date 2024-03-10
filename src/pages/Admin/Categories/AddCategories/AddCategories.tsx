import { Link } from "react-router-dom";
import Headerofpages from "../../../../components/module/Headerofpages/Headerofpages";
import Button from "../../../../components/module/Button/Button";
import { useTranslation } from "react-i18next";
import CheckBox from "../../../../components/module/CheckBox/CheckBox";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddCategories() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues:{
      name:''
    }
  });
  const [products , setProducts] = useState([
    { id: crypto.randomUUID(), pic: "/img/dashboard/11.png", title: "Women Striped T-Shirt" },
    { id: crypto.randomUUID(), pic: "/img/dashboard/11.png", title: "Women Striped " },
    { id: crypto.randomUUID(), pic: "/img/dashboard/11.png", title: "Women  T-Shirt" },
  ])
  const formSubmit = (data: any) => {
    const newcategory = {
      name:data.name,
      products,
      image:null,
      visibale:ischeckedaddcategoriesvisibleonsite
    }
    
    
    
    
    
  };
  const { t } = useTranslation();
  const [
    ischeckedaddcategoriesvisibleonsite,
    setIscheckedaddcategoriesvisibleonsite,
  ] = useState(false);
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div className=" py-9 ">
        <div className="header">
          <Headerofpages
            to={"/admin/categories"}
            back={true}
            title={t("womenclothes")}
          >
            <div className="flex gap-3 flex-col items-end lg:flex-row">
              <Button type="White" size="sm">
                {t("cancel")}
              </Button>
              <Button type="Primary" size="sm">
                {t("save")}
              </Button>
            </div>
          </Headerofpages>
        </div>
        <div className="mt-8 *:rounded-md *:p-7 grid grid-cols-1 xl:grid-cols-12 gap-4">
          <div className="l xl:col-span-8 bg-white dark:bg-a_general-90">
            <div className="flex gap-2">
              <p className="font-bold dark:text-white rtl:font-iransans-700">
                {t("products")}
              </p>
              <span className="text-a_general-60">{products.length}</span>
            </div>
            <div className="mt-5 flex flex-col gap-3">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="rounded-md px-5 py-4 border flex items-center gap-4 justify-between"
                >
                  <div className="left flex items-center gap-2 text-xs md:text-base">
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
              <Link
                className="py-3 border flex justify-center text-a_primary-100"
                to={""}
              >
                <i className="bi bi-plus-lg"></i>
                <span>{t("addproduct")}</span>
              </Link>
            </div>
          </div>

          <div className="r *:bg-white dark:*:bg-a_general-70 dark:bg-a_general-90 *:p-5 *:rounded-md xl:col-span-4 flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <h3 className="font-bold dark:text-white rtl:font-iransans-700">
                {t("categoryvisibility")}
              </h3>
              <div>
                <div className="flex gap-3">
                  <CheckBox
                    setIsChecked={setIscheckedaddcategoriesvisibleonsite}
                    ischecked={ischeckedaddcategoriesvisibleonsite}
                    forid="addcategoriesvisibleonsite"
                  ></CheckBox>
                  <label
                    htmlFor="addcategoriesvisibleonsite"
                    className="text-xs md:text-base"
                  >
                    {t("visibleonsite")}
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-bold dark:text-white rtl:font-iransans-700">
                  {t("categoryinfo")}
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-a_general-60 text-xs md:text-base"
                  htmlFor=""
                >
                  {t("name")}
                </label>
                <input
                  {...register("name", {
                    required: t("pleaseentertheproductname"),
                  })}
                  className="border rounded-md px-2 py-1"
                  type="text"
                  id=""
                />
              </div>
              <div>
                <label
                  className="flex flex-col gap-2 cursor-pointer"
                  htmlFor="productfile"
                >
                  <p className="text-a_general-60 text-xs md:text-base">
                    {t("images")}
                  </p>
                  <div className="border-2 border-dashed h-44 flex justify-center items-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="border px-4 py-1 rounded-md text-a_primary-100 text-sm md:text-base">
                        {t("addfile")}
                      </div>
                      <p className="text-a_general-60 text-xs md:text-base">
                        {t("ordraganddropfiles")}
                      </p>
                    </div>
                  </div>
                </label>
                <input
                  className="hidden"
                  type="file"
                  name=""
                  id="productfile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
