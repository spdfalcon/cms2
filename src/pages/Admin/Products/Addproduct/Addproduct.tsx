import Headerofpages from "../../../../components/module/Headerofpages/Headerofpages";
import { useTranslation } from "react-i18next";
import Button from "../../../../components/module/Button/Button";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { DevTool } from "@hookform/devtools";

export default function Addproduct() {
  const { t } = useTranslation();
  // form
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      desc: "",
      category: "",
      price: "",
      discountPrice: "",
      color: "black",
      hasTax: false,
      sizes: [],
      tags: [],
      images: [],
      count: "",
      isDigital: false,
      weight: "",
      country: "",
    },
  });
  const allValue = getValues();
  const watchValue = watch();
  const [tags, setTags]: any = useState([]);
  const [inputTags, setInputTags] = useState("");
  const formSubmit = (data: any) => {
    const newProduct = {
      name: data.name,
      desc: data.desc,
      category: data.category,
      color: data.color,
      ...(data.weight && { weight: data.weight }),
      ...(data.country && { country: data.country }),
      count: data.count,
      price: data.price,
      ...(data.discountPrice && { discountPrice: data.discountPrice }),
      ...(data.hasTax && { hasTax: data.hasTax }),
      ...(data.isDigital && { isDigital: data.isDigital }),
      tags: data.tags,
      sizes: data.sizes,
      images: [...data.images].map((item) => item.name),
    };
    console.log(newProduct);

    fetch("https://prime.liara.run/api/v1/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    }).then((res) => console.log(res));
  };
  const errorsHandler = () => {
    console.log(errors);
    if (errors.name?.message) {
      toast.error(t("pleaseentertheproductname"));
    } else if (errors.desc?.message) {
      toast.error(t("pleaseentertheproductdescription"));
    } else if (errors.price?.message) {
      toast.error(t("Pleaseenterthepriceoftheproduct"));
    } else if (errors.color?.message) {
      toast.error(t("Pleaseentertheproductcolor"));
    } else if (errors.category?.message) {
      toast.error(t("Pleaseenteracategory"));
    } else if (errors.count?.message) {
      toast.error(t("Pleaseentertheamount"));
    } else if (errors.sizes?.message) {
      toast.error(t("Pleaseenterthesize"));
    }
  };
  useEffect(() => {
    setValue("tags", tags);
  }, [tags]);
  // form
  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)} className="w-full h-44 py-8">
        <div className="header">
          <Headerofpages
            to={"/admin/products"}
            back={true}
            title={t("addproduct")}
          >
            <div className="flex gap-3 flex-col items-end lg:flex-row">
              <Button submitType="reset" type="White" size="sm">
                {t("cancel")}
              </Button>
              <div onClick={errorsHandler}>
                <Button submitType="submit" type="Primary" size="sm">
                  {t("save")}
                </Button>
              </div>
            </div>
          </Headerofpages>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
          <div className="l  xl:col-span-8 px-10 py-2 bg-white dark:bg-a_general-90 mt-10 rounded-md">
            <div className="py-10 border-b">
              <h2 className="font-bold dark:text-white rtl:font-iransans-700 text-sm md:text-base">
                {t("information")}
              </h2>
              <div className="mt-5 flex flex-col gap-2">
                <label
                  htmlFor="addproductproductname"
                  className="text-a_general-80 dark:text-a_general-40 text-xs md:text-sm"
                >
                  {t("productname")}
                </label>

                <input
                  {...register("name", {
                    required: t("pleaseentertheproductname"),
                  })}
                  className={`border w-full outline-none px-4 py-2 rounded-md text-sm md:text-base ${
                    errors.name?.message ? "border-red-400" : ""
                  }`}
                  placeholder={t("summertshirt")}
                  type="text"
                  id="addproductproductname"
                />
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <label
                  htmlFor="addproductproductdescription"
                  className="text-a_general-80 dark:text-a_general-40 text-xs md:text-sm"
                >
                  {t("productdescription")}
                </label>
                <textarea
                  {...register("desc", {
                    required: t("pleaseentertheproductdescription"),
                  })}
                  className={`border w-full outline-none px-4 py-2 rounded-md h-24 text-sm md:text-base ${
                    errors.desc?.message ? "border-red-400" : ""
                  }`}
                  placeholder={t("productdescription")}
                  id="addproductproductdescription"
                />
              </div>
            </div>
            <div className="py-10 border-b">
              <h2 className="font-bold dark:text-white rtl:font-iransans-700 text-sm md:text-base">
                {t("images")}
              </h2>
              <div className="mt-5">
                {/* input file */}
                <div className="file flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className={`flex flex-col items-center justify-center w-full h-64 border-2
                    border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <i className="bi bi-cloud-arrow-up text-4xl mb-4 text-gray-500 dark:text-gray-400"></i>
                      <p className="mb-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">{t("addfile")}</span>
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {t("ordraganddropfiles")}
                      </p>
                    </div>
                    <input
                      {...register("images")}
                      id="dropzone-file"
                      type="file"
                      multiple
                      className="hidden"
                    />
                  </label>
                </div>
                {watchValue.images ? (
                  <div className="grid grid-cols-6 mt-10">
                    {[...allValue.images].map((item: any, index) => (
                      <img
                        key={index}
                        className="h-32"
                        src={URL.createObjectURL(item)}
                        alt={item.name}
                      />
                    ))}
                  </div>
                ) : null}
                {/* input file */}
              </div>
            </div>
            {/* price */}
            <div className="py-5 border-b">
              <h2 className="font-bold dark:text-white rtl:font-iransans-700 text-sm md:text-base">
                {t("price")}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
                <div className="mt-5 flex flex-col gap-2">
                  <label
                    htmlFor="addproductproductprice"
                    className="text-a_general-80 dark:text-a_general-40 text-xs md:text-sm"
                  >
                    {t("productprice")}
                  </label>
                  <input
                    {...register("price", {
                      required: t("Pleaseenterthepriceoftheproduct"),
                      valueAsNumber: true,
                    })}
                    className={`border w-full outline-none px-4 py-2 rounded-md text-sm md:text-base ${
                      errors.price?.message ? "border-red-400" : ""
                    }`}
                    placeholder={t("enterprice")}
                    type="text"
                    id="addproductproductprice"
                  />
                </div>
                <div className="mt-5 flex flex-col gap-2">
                  <label
                    htmlFor="addproductdiscountprice"
                    className="text-a_general-80 dark:text-a_general-40 text-xs md:text-sm "
                  >
                    {t("discountprice")}
                  </label>
                  <input
                    {...register("discountPrice", {
                      valueAsNumber: true,
                    })}
                    className={`border w-full outline-none px-4 py-2 rounded-md`}
                    placeholder={t("priceatdiscount")}
                    type="text"
                    id="addproductdiscountprice"
                  />
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3 text-a_general-80 dark:text-a_general-40">
                {/* radio */}
                <div className="mt-5 flex items-center gap-3 text-a_general-80 dark:text-a_general-40">
                  {/* radio */}
                  <input
                    {...register("hasTax")}
                    className="peer hidden"
                    type="checkbox"
                    id="tax"
                  />
                  <label
                    className="duration-300 shadow-lg cursor-pointer w-12 h-6 bg-a_primary-40 rounded-full flex after:size-5 after:bg-white after:rounded-full items-center after:translate-x-0.5 peer-checked:after:translate-x-[26px] rtl:peer-checked:after:-translate-x-[26px] after:duration-300 peer-checked:bg-a_primary-100"
                    htmlFor="tax"
                  ></label>
                  {/* radio */}
                  <label htmlFor="tax" className="">
                    {t("addtaxforthisproduct")}
                  </label>
                </div>
                {/* radio */}
              </div>
              {/* price */}
            </div>

            {/* Different Options */}
            <div className="mt-10 border-b py-5">
              <h2 className="font-bold dark:text-white rtl:font-iransans-700 text-sm md:text-base">
                {t("differentoptions")}
              </h2>
              <div className="mt-5 flex items-center gap-3 text-a_general-80 dark:text-a_general-40"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
                <div className="mt-5 flex flex-col gap-2">
                  <label
                    htmlFor="value"
                    className="text-a_general-80 dark:text-a_general-40 text-xs md:text-sm"
                  >
                    {t("value")}
                  </label>
                  <div>
                    <input
                      {...register("count", {
                        required: t("Pleaseentertheamount"),
                        valueAsNumber: true,
                      })}
                      className="w-full h-10 border px-2 dark:bg-a_general-60 rounded-md"
                      type="number"
                      min={0}
                      id="value"
                    />
                  </div>
                  <div className="mt-5 flex flex-col gap-2">
                    <label
                      htmlFor="addproductcolor"
                      className="text-a_general-80 dark:text-a_general-40 text-xs md:text-sm"
                    >
                      {t("color")}
                    </label>
                    <input
                      {...register("color", {
                        required: t("Pleaseentertheproductcolor"),
                      })}
                      className={`border w-full outline-none px-4 py-2 rounded-md text-sm md:text-base ${
                        errors.color?.message ? "border-red-400" : ""
                      }`}
                      placeholder={t("enterprice")}
                      type="text"
                      id="addproductcolor"
                    />
                  </div>
                </div>
                <div className="mt-5 flex flex-col gap-2">
                  <p className="text-a_general-80 dark:text-a_general-40 text-xs md:text-sm">
                    {t("size")}
                  </p>
                  <select
                    multiple
                    {...register("sizes", {
                      required: t("Pleaseenterthesize"),
                    })}
                    className="w-full h-20 border px-2 py-1 flex items-center justify-start gap-2 "
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="Xl">Xl</option>
                    <option value="2Xl">2Xl</option>
                    <option value="3Xl">3Xl</option>
                  </select>
                  {watchValue.sizes.map((item, index) => (
                    <div
                      key={index}
                      className=" bg-a_general-50 dark:bg-a_general-80 px-px md:px-2 gap-1 md:gap-3 text-a_general-80 dark:text-a_general-40 flex justify-between rounded-md text-xs md:text-base"
                    >
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Different Options */}
            <button className="text-a_primary-100 mt-5 border-b py-3 w-full text-left">
              {t("addmore")}
            </button>

            <div className="py-5 border-b">
              <h2 className="font-bold dark:text-white rtl:font-iransans-700 text-sm md:text-base">
                {t("shipping")}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
                <div className="mt-5 flex flex-col gap-2">
                  <label
                    htmlFor="addproductweight"
                    className="text-a_general-80 dark:text-a_general-40 text-xs md:text-sm"
                  >
                    {t("weight")} g
                  </label>
                  <input
                    {...register("weight", {
                      valueAsNumber: true,
                    })}
                    className="border w-full outline-none px-4 py-2 rounded-md"
                    placeholder={t("enterweight")}
                    type="number"
                    id="addproductweight"
                  />
                </div>
                <div className="mt-5 flex flex-col gap-2">
                  <label
                    htmlFor="addproductcountry"
                    className="text-a_general-80 dark:text-a_general-40 text-xs md:text-sm"
                  >
                    {t("country")}
                  </label>
                  <div>
                    <input
                      {...register("country")}
                      className="w-full h-10 border px-2 dark:bg-a_general-60"
                      type="text"
                      id="addproductcountry"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3 text-a_general-80 dark:text-a_general-40">
                {/* radio */}
                <input
                  {...register("isDigital")}
                  className="peer hidden"
                  type="checkbox"
                  id="isDigital"
                />
                <label
                  className="duration-300 shadow-lg cursor-pointer w-12 h-6 bg-a_primary-40 rounded-full flex after:size-5 after:bg-white after:rounded-full items-center after:translate-x-0.5 peer-checked:after:translate-x-[26px] rtl:peer-checked:after:-translate-x-[26px] after:duration-300 peer-checked:bg-a_primary-100"
                  htmlFor="isDigital"
                ></label>
                {/* radio */}
                <label htmlFor="isDigital" className="">
                  {t("thisisdigitalitem")}
                </label>
                {/* radio */}
              </div>
              {/* price */}
            </div>
          </div>

          <div className="r  xl:col-span-4 p-10 mt-10 rounded-md flex flex-col gap-5 *:bg-white dark:*:bg-a_general-70  dark:bg-a_general-90  *:p-7 *:rounded-md">
            <div className="section1">
              <h3 className="font-bold dark:text-white rtl:font-iransans-700 text-sm md:text-base">
                {t("categories")}
              </h3>
              <div className="flex gap-2 mt-3 items-center dark:text-white ">
                <input
                  {...register("category", {
                    required: t("Pleaseenteracategory"),
                  })}
                  className=""
                  type="radio"
                  id="checkboxCategorieswomen"
                  value={t("women")}
                />
                <label htmlFor="checkboxCategorieswomen">{t("women")}</label>
              </div>
              <div className="flex gap-2 mt-3 items-center dark:text-white ">
                <input
                  className=""
                  type="radio"
                  {...register("category", {
                    required: t("Pleaseenteracategory"),
                  })}
                  value={t("men")}
                  id="checkboxCategoriesmen"
                />
                <label htmlFor="checkboxCategoriesmen">{t("men")}</label>
              </div>
              <div className="flex gap-2 mt-3 items-center dark:text-white ">
                <input
                  className=""
                  type="radio"
                  {...register("category", {
                    required: t("Pleaseenteracategory"),
                  })}
                  value={t("tshirt")}
                  id="checkboxCategoriestshirt"
                />
                <label htmlFor="checkboxCategoriestshirt">{t("tshirt")}</label>
              </div>
              <div className="flex gap-2 mt-3 items-center dark:text-white ">
                <input
                  className=""
                  type="radio"
                  {...register("category", {
                    required: t("Pleaseenteracategory"),
                  })}
                  value={t("hoodie")}
                  id="checkboxCategorieshoodie"
                />
                <label htmlFor="checkboxCategorieshoodie">{t("hoodie")}</label>
              </div>

              <p className="mt-3 text-a_primary-100">{t("createnew")}</p>
            </div>
            <div className="section2 flex flex-col gap-4">
              <h3 className="font-bold dark:text-white rtl:font-iransans-700 text-sm md:text-base">
                {t("tags")}
              </h3>
              <div className="flex flex-col gap-2">
                <label className="text-a_general-60" htmlFor="inputTags">
                  {t("addtags")}
                </label>
                <input
                  value={inputTags}
                  onChange={(e) => setInputTags(e.target.value)}
                  className="border px-3 py-2 rounded-md outline-none"
                  placeholder={t("entertagname")}
                  type="text"
                  id="inputTags"
                />
                <div
                  onClick={() => {
                    if (inputTags) {
                      setTags((priv: any) => [...priv, inputTags]);
                      setInputTags("");
                    }
                  }}
                >
                  <Button submitType="button" size="sm" type="White">
                    {t("add")}
                  </Button>
                </div>
              </div>
              <div className="flex justify-start gap-3 flex-wrap">
                {tags.map((item: any, index: any) => (
                  <div
                    key={index}
                    className="px-2 py-1 bg-a_general-50 dark:bg-a_general-80 rounded-md text-a_general-80 dark:text-a_general-40 flex items-center"
                  >
                    <p>{item}</p>
                    <i
                      onClick={() => {
                        // setTags((priv:any)=>priv.filter((item:any ,inx:any)=> inx !== index))
                        setTags((priv: any) =>
                          priv.filter(
                            (item: any) => priv.indexOf(item) !== index
                          )
                        );
                      }}
                      className="bi bi-x"
                    ></i>
                  </div>
                ))}
              </div>
            </div>
            <div className="section3 flex flex-col gap-4">
              <h3 className="font-bold dark:text-white rtl:font-iransans-700 text-sm md:text-base">
                {t("seosettings")}
              </h3>
              <div className="flex flex-col gap-2">
                <label className="text-a_general-60" htmlFor="seosettingtitle">
                  {t("title")}
                </label>
                <input
                  className="border px-3 py-2 rounded-md outline-none"
                  type="text"
                  name=""
                  id="seosettingtitle"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-a_general-60"
                  htmlFor="seoswttingdescription"
                >
                  {t("description")}
                </label>
                <textarea
                  className="border px-3 py-2 rounded-md outline-none"
                  name=""
                  id="seoswttingdescription"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer></ToastContainer>
      <DevTool control={control}></DevTool>
    </>
  );
}
