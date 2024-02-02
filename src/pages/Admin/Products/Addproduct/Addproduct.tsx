import Headerofpages from "../../../../components/module/Headerofpages/Headerofpages";
import { useTranslation } from "react-i18next";
import Button from "../../../../components/module/Button/Button";

export default function Addproduct() {
  const {t} = useTranslation()
  return (
    <div className="w-full h-44 py-8 px-10">
      
      <div className="header">
        <Headerofpages to={"/admin/products"} back={true} title={t('addproduct')}>
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
        <div className="l  xl:col-span-8 px-10 py-2 bg-white mt-10 rounded-md">
          <div className="py-10 border-b">
            <h2 className="font-bold">{t('information')}</h2>
            <div className="mt-5 flex flex-col gap-2">
              <p className="text-a_general-80 text-sm">{t('productname')}</p>
              <input
                className="border w-full outline-none px-4 py-2 rounded-md"
                placeholder={t('summertshirt')}
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <p className="text-a_general-80 text-sm">{t('productdescription')}</p>
              <textarea
                className="border w-full outline-none px-4 py-2 rounded-md h-24"
                placeholder={t('productdescription')}
                name=""
                id=""
              />
            </div>
          </div>
          <div className="py-10 border-b">
            <h2 className="font-bold">{t('images')}</h2>
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
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">{t('addfile')}</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {t('ordraganddropfiles')}
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
            <h2 className="font-bold">{t('price')}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
              <div className="mt-5 flex flex-col gap-2">
                <p className="text-a_general-80 text-sm">{t('productprice')}</p>
                <input
                  className="border w-full outline-none px-4 py-2 rounded-md"
                  placeholder={t('enterprice')}
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <p className="text-a_general-80 text-sm">{t('discountprice')}</p>
                <input
                  className="border w-full outline-none px-4 py-2 rounded-md"
                  placeholder={t('priceatdiscount')}
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3 text-a_general-80">
              {/* radio */}
              <div className="">
                <input
                  className="hidden"
                  type="radio"
                  name=""
                  id="radioprice"
                />
                <label
                  className={`flex justify-start px-1 items-center relative w-11  h-6 rounded-full bg-a_general-50`}
                  htmlFor="radioprice"
                >
                  <span className="absolute size-4 rounded-full bg-white "></span>
                </label>
              </div>
              {/* radio */}
              <span className="">{t('addtaxforthisproduct')}</span>
            </div>
            {/* price */}
          </div>

          {/* Different Options */}
          <div className="mt-10 border-b py-5">
            <h2 className="font-bold">{t('differentoptions')}</h2>
            <div className="mt-5 flex items-center gap-3 text-a_general-80">
              {/* radio */}
              <div className="">
                <input
                  className="hidden"
                  type="radio"
                  name=""
                  id="radioprice"
                />
                <label
                  className={`flex justify-end px-1 items-center relative w-11  h-6 rounded-full bg-a_primary-100`}
                  htmlFor="radioprice"
                >
                  <span className="absolute size-4 rounded-full bg-white"></span>
                </label>
              </div>
              {/* radio */}
              <span className="">{t('thisproducthasmultipleoptions')}</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
              <div className="mt-5 flex flex-col gap-2">
                <p className="text-a_general-80 text-sm">{t('size')}</p>
                <div>
                  <select className="w-full h-10 border px-2" name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <p className="text-a_general-80 text-sm">{t('value')}</p>
                <div className="w-full h-10 border px-2 py-1 flex items-center justify-start gap-2">
                  <div className="bg-a_general-50 px-2 gap-3 text-a_general-80 flex justify-between rounded-md ">
                    <span>S</span>
                    <i className="bi bi-x"></i>
                  </div>
                  <div className="bg-a_general-50 px-2 gap-3 text-a_general-80 flex justify-between rounded-md ">
                    <span>M</span>
                    <i className="bi bi-x"></i>
                  </div>
                  <div className="bg-a_general-50 px-2 gap-3 text-a_general-80 flex justify-between rounded-md ">
                    <span>L</span>
                    <i className="bi bi-x"></i>
                  </div>
                  <div className="bg-a_general-50 px-2 gap-3 text-a_general-80 flex justify-between rounded-md ">
                    <span>XL</span>
                    <i className="bi bi-x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Different Options */}
          <button className="text-a_primary-100 mt-5 border-b py-3 w-full text-left">{t('addmore')}</button>

          <div className="py-5 border-b">
            <h2 className="font-bold">{t('shipping')}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
              <div className="mt-5 flex flex-col gap-2">
                <p className="text-a_general-80 text-sm">{t('weight')}</p>
                <input
                  className="border w-full outline-none px-4 py-2 rounded-md"
                  placeholder={t('enterweight')}
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <p className="text-a_general-80 text-sm">{t('country')}</p>
                <div>
                  <select className="w-full h-10 border px-2" name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3 text-a_general-80">
              {/* radio */}
              <div className="">
                <input
                  className="hidden"
                  type="radio"
                  name=""
                  id="radioprice"
                />
                <label
                  className={`flex justify-start px-1 items-center relative w-11  h-6 rounded-full bg-a_general-50`}
                  htmlFor="radioprice"
                >
                  <span className="absolute size-4 rounded-full bg-white "></span>
                </label>
              </div>
              {/* radio */}
              <span className="">{t('thisisdigitalitem')}</span>
            </div>
            {/* price */}
          </div>
        </div>
        

        <div className="r  xl:col-span-4 p-10 mt-10 rounded-md flex flex-col gap-5 *:bg-white *:p-7 *:rounded-md">
          <div className="section1">
            <h3 className="font-bold">{t('categories')}</h3>
            <div className="flex gap-2 mt-3 items-center rounded ">
              <input className="" type="checkbox" name="" id="checkboxCategories1" />
              <label htmlFor="checkboxCategories1">{t('women')}</label>
            </div>
            <div className="flex gap-2 mt-3 items-center rounded ">
              <input className="" type="checkbox" name="" id="checkboxCategories1" />
              <label htmlFor="checkboxCategories1">{t('men')}</label>
            </div>
            <div className="flex gap-2 mt-3 items-center rounded ">
              <input className="" type="checkbox" name="" id="checkboxCategories1" />
              <label htmlFor="checkboxCategories1">{t('tshirt')}</label>
            </div>
            <div className="flex gap-2 mt-3 items-center rounded ">
              <input className="" type="checkbox" name="" id="checkboxCategories1" />
              <label htmlFor="checkboxCategories1">{t('hoodie')}</label>
            </div>
            <div className="flex gap-2 mt-3 items-center rounded ">
              <input className="" type="checkbox" name="" id="checkboxCategories1" />
              <label htmlFor="checkboxCategories1">{t('hoodie')}</label>
            </div>
            <p className="mt-3 text-a_primary-100">{t('createnew')}</p>
          </div>
          <div className="section2 flex flex-col gap-4">
            <h3 className="font-bold">{t('tags')}</h3>
            <div className="flex flex-col gap-2">
              <label className="text-a_general-60" htmlFor="inputTags">{t('addtags')}</label>
              <input className="border px-3 py-2 rounded-md outline-none" placeholder={t('entertagname')} type="text" name="" id="inputTags" />
            </div>
            <div className="flex justify-start gap-3 flex-wrap">
              <div className="px-2 py-1 bg-a_general-50 rounded-md text-a_general-80 flex items-center">
                <p>{t('tshirt')}</p>
                <i className="bi bi-x"></i>
              </div>
              <div className="px-2 py-1 bg-a_general-50 rounded-md text-a_general-80 flex items-center">
                <p>{t('tshirt')}</p>
                <i className="bi bi-x"></i>
              </div>
              <div className="px-2 py-1 bg-a_general-50 rounded-md text-a_general-80 flex items-center">
                <p>{t('tshirt')}</p>
                <i className="bi bi-x"></i>
              </div>
            </div>
          </div>
          <div className="section3 flex flex-col gap-4">
            <h3 className="font-bold">{t('seosettings')}</h3>
            <div className="flex flex-col gap-2">
              <label className="text-a_general-60" htmlFor="inputTags">{t('title')}</label>
              <input className="border px-3 py-2 rounded-md outline-none"  type="text" name="" id="inputTags" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-a_general-60" htmlFor="inputTags">{t('description')}</label>
              <textarea className="border px-3 py-2 rounded-md outline-none" name="" id="inputTags" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
