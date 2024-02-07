import Headerofpages from "../../../../components/module/Headerofpages/Headerofpages";
import { useTranslation } from "react-i18next";
import Button from "../../../../components/module/Button/Button";
import CheckBox from "../../../../components/module/CheckBox/CheckBox";
import { useState } from "react";

export default function Addproduct() {
  const [isaddproductaddtaxforthisproduct , setIsaddproductaddtaxforthisproduct] =useState(false)
  const [isaddproductthisisdigitalitem , setIsaddproductthisisdigitalitem] =useState(false)
  const [isaddproductthisproducthasmultipleoptions , setIsaddproductthisproducthasmultipleoptions] =useState(false)
  const { t } = useTranslation();
  return (
    <div className="w-full h-44 py-8">
      <div className="header">
        <Headerofpages
          to={"/admin/products"}
          back={true}
          title={t("addproduct")}
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
                className="border w-full outline-none px-4 py-2 rounded-md text-sm md:text-base"
                placeholder={t("summertshirt")}
                type="text"
                name=""
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
                className="border w-full outline-none px-4 py-2 rounded-md h-24 text-sm md:text-base"
                placeholder={t("productdescription")}
                name=""
                id="addproductproductdescription"
              />
            </div>
          </div>
          <div className="py-10 border-b">
            <h2 className="font-bold dark:text-white rtl:font-iransans-700 text-sm md:text-base">{t("images")}</h2>
            <div className="mt-5">
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
                    <p className="mb-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">{t("addfile")}</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {t("ordraganddropfiles")}
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
              {/* input file */}
            </div>
          </div>
          {/* price */}
          <div className="py-5 border-b">
            <h2 className="font-bold dark:text-white rtl:font-iransans-700 text-sm md:text-base">{t("price")}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
              <div className="mt-5 flex flex-col gap-2">
                <label
                  htmlFor="addproductproductprice"
                  className="text-a_general-80 dark:text-a_general-40 text-xs md:text-sm"
                >
                  {t("productprice")}
                </label>
                <input
                  className="border w-full outline-none px-4 py-2 rounded-md text-sm md:text-base"
                  placeholder={t("enterprice")}
                  type="text"
                  name=""
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
                  className="border w-full outline-none px-4 py-2 rounded-md"
                  placeholder={t("priceatdiscount")}
                  type="text"
                  name=""
                  id="addproductdiscountprice"
                />
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3 text-a_general-80 dark:text-a_general-40">
              {/* radio */}
              <CheckBox setIsChecked={setIsaddproductaddtaxforthisproduct} forid="addproductaddtaxforthisproduct"></CheckBox>
              {/* radio */}
              <label htmlFor="addproductaddtaxforthisproduct" className="">{t("addtaxforthisproduct")}</label>
            </div>
            {/* price */}
          </div>

          {/* Different Options */}
          <div className="mt-10 border-b py-5">
            <h2 className="font-bold dark:text-white rtl:font-iransans-700 text-sm md:text-base">
              {t("differentoptions")}
            </h2>
            <div className="mt-5 flex items-center gap-3 text-a_general-80 dark:text-a_general-40">
              {/* radio */}
              <CheckBox setIsChecked={setIsaddproductthisproducthasmultipleoptions} forid="addproductthisproducthasmultipleoptions"></CheckBox>
              {/* radio */}
              <label htmlFor="addproductthisproducthasmultipleoptions" className="">{t("thisproducthasmultipleoptions")}</label>
              {/* radio */}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
              <div className="mt-5 flex flex-col gap-2">
                <label
                  htmlFor="addproductsize"
                  className="text-a_general-80 dark:text-a_general-40 text-xs md:text-sm"
                >
                  {t("size")}
                </label>
                <div>
                  <select
                    className="w-full h-10 border px-2 dark:bg-a_general-60 rounded-md"
                    name=""
                    id="addproductsize"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <p className="text-a_general-80 dark:text-a_general-40 text-xs md:text-sm">
                  {t("value")}
                </p>
                <div className="w-full h-10 border px-2 py-1 flex items-center justify-start gap-2 ">
                  <div className="bg-a_general-50 dark:bg-a_general-80 px-px md:px-2 gap-1 md:gap-3 text-a_general-80 dark:text-a_general-40 flex justify-between rounded-md text-xs md:text-base">
                    <span>S</span>
                    <i className="bi bi-x"></i>
                  </div>
                  <div className="bg-a_general-50 dark:bg-a_general-80 px-px md:px-2 gap-1 md:gap-3 text-a_general-80 dark:text-a_general-40 flex justify-between rounded-md text-xs md:text-base">
                    <span>M</span>
                    <i className="bi bi-x"></i>
                  </div>
                  <div className="bg-a_general-50 dark:bg-a_general-80 px-px md:px-2 gap-1 md:gap-3 text-a_general-80 dark:text-a_general-40 flex justify-between rounded-md text-xs md:text-base">
                    <span>L</span>
                    <i className="bi bi-x"></i>
                  </div>
                  <div className="bg-a_general-50 dark:bg-a_general-80 px-px md:px-2 gap-1 md:gap-3 text-a_general-80 dark:text-a_general-40 flex justify-between rounded-md text-xs md:text-base">
                    <span>XL</span>
                    <i className="bi bi-x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Different Options */}
          <button className="text-a_primary-100 mt-5 border-b py-3 w-full text-left">
            {t("addmore")}
          </button>

          <div className="py-5 border-b">
            <h2 className="font-bold dark:text-white rtl:font-iransans-700 text-sm md:text-base">{t("shipping")}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
              <div className="mt-5 flex flex-col gap-2">
                <label
                  htmlFor="addproductweight"
                  className="text-a_general-80 dark:text-a_general-40 text-xs md:text-sm"
                >
                  {t("weight")}
                </label>
                <input
                  className="border w-full outline-none px-4 py-2 rounded-md"
                  placeholder={t("enterweight")}
                  type="text"
                  name=""
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
                  <select
                    className="w-full h-10 border px-2 dark:bg-a_general-60"
                    name=""
                    id="addproductcountry"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3 text-a_general-80 dark:text-a_general-40">
              {/* radio */}
              <CheckBox setIsChecked={setIsaddproductthisisdigitalitem} forid="addproductthisisdigitalitem"></CheckBox>
              {/* radio */}
              <label htmlFor="addproductthisisdigitalitem" className="">{t("thisisdigitalitem")}</label>
              {/* radio */}
              <span className="">{t("thisisdigitalitem")}</span>
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
                className=""
                type="checkbox"
                name=""
                id="checkboxCategories1"
              />
              <label htmlFor="checkboxCategories1">{t("women")}</label>
            </div>
            <div className="flex gap-2 mt-3 items-center dark:text-white ">
              <input
                className=""
                type="checkbox"
                name=""
                id="checkboxCategories1"
              />
              <label htmlFor="checkboxCategories1">{t("men")}</label>
            </div>
            <div className="flex gap-2 mt-3 items-center dark:text-white ">
              <input
                className=""
                type="checkbox"
                name=""
                id="checkboxCategories1"
              />
              <label htmlFor="checkboxCategories1">{t("tshirt")}</label>
            </div>
            <div className="flex gap-2 mt-3 items-center dark:text-white ">
              <input
                className=""
                type="checkbox"
                name=""
                id="checkboxCategories1"
              />
              <label htmlFor="checkboxCategories1">{t("hoodie")}</label>
            </div>
            
            <p className="mt-3 text-a_primary-100">{t("createnew")}</p>
          </div>
          <div className="section2 flex flex-col gap-4">
            <h3 className="font-bold dark:text-white rtl:font-iransans-700 text-sm md:text-base">{t("tags")}</h3>
            <div className="flex flex-col gap-2">
              <label className="text-a_general-60" htmlFor="inputTags">
                {t("addtags")}
              </label>
              <input
                className="border px-3 py-2 rounded-md outline-none"
                placeholder={t("entertagname")}
                type="text"
                name=""
                id="inputTags"
              />
            </div>
            <div className="flex justify-start gap-3 flex-wrap">
              <div className="px-2 py-1 bg-a_general-50 dark:bg-a_general-80 rounded-md text-a_general-80 dark:text-a_general-40 flex items-center">
                <p>{t("tshirt")}</p>
                <i className="bi bi-x"></i>
              </div>
              <div className="px-2 py-1 bg-a_general-50 dark:bg-a_general-80 rounded-md text-a_general-80 dark:text-a_general-40 flex items-center">
                <p>{t("tshirt")}</p>
                <i className="bi bi-x"></i>
              </div>
              <div className="px-2 py-1 bg-a_general-50 dark:bg-a_general-80 rounded-md text-a_general-80 dark:text-a_general-40 flex items-center">
                <p>{t("tshirt")}</p>
                <i className="bi bi-x"></i>
              </div>
            </div>
          </div>
          <div className="section3 flex flex-col gap-4">
            <h3 className="font-bold dark:text-white rtl:font-iransans-700 text-sm md:text-base">
              {t("seosettings")}
            </h3>
            <div className="flex flex-col gap-2">
              <label className="text-a_general-60" htmlFor="inputTags">
                {t("title")}
              </label>
              <input
                className="border px-3 py-2 rounded-md outline-none"
                type="text"
                name=""
                id="inputTags"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-a_general-60" htmlFor="inputTags">
                {t("description")}
              </label>
              <textarea
                className="border px-3 py-2 rounded-md outline-none"
                name=""
                id="inputTags"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
