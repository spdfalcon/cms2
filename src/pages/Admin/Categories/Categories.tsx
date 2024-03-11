import { Link } from "react-router-dom";
import Headerofpages from "../../../components/module/Headerofpages/Headerofpages";
import Button from "../../../components/module/Button/Button";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import apiRequests from "../../../configs/axios/apiRequests";
import Cookies from "universal-cookie";
import Loading from "../../../components/module/Loading/Loading";
import Swal from "sweetalert2";
export default function Categories() {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const {
    data: categories,
    isLoading,
    refetch,
  } = useQuery("categories", () =>
    apiRequests
      .get("/category", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        return res.data;
      })
  );
  const { t } = useTranslation();
  return (
    <>
      <div className="py-8">
        {/* header */}
        <div>
          <Headerofpages title={t("categories")}>
            <div
              onClick={() => {
                Swal.fire({
                  title: t("categories"),
                  text: t("enteryourcategoryname"),
                  icon: "question",
                  confirmButtonText: t("ok"),
                  cancelButtonText: t("cancel"),
                  showCancelButton: true,
                  input: "text",
                }).then((res) => {
                  if (res.isConfirmed && res.value) {
                    console.log(res);

                    apiRequests
                      .post(
                        "/category",
                        {
                          name: res.value,
                        },
                        {
                          headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                          },
                        }
                      )
                      .then(() => {
                        refetch();
                        Swal.fire({
                          title: t("addedsuccessfully"),
                          icon: "success",
                        });
                      })
                      .catch(() => {
                        Swal.fire({
                          title: t("aproblemhasarisen"),
                          icon: "error",
                        });
                      });
                  }
                });
              }}
            >
              <Button type="Primary" icon="bi bi-plus-lg" size="md">
                {t("addcategory")}
              </Button>
            </div>
          </Headerofpages>
        </div>
        {/* header */}
        {isLoading ? (
          <Loading></Loading>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-5">
            {categories?.map((item: any) => (
              <div
                key={item.id}
                className=" flex flex-col gap-3 pb-3 bg-white dark:bg-a_general-90 rounded-md overflow-hidden group "
              >
                <div className="relative flex justify-center">
                  <img
                    className=" object-contain"
                    src="/img/category/11.png"
                    alt=""
                  />
                  <Link
                    className="group-hover:bg-a_general-70/40 hidden group-hover:flex w-full h-full justify-center items-center z-50 text-white absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2"
                    to={`${item.id}`}
                  >
                    <span className="px-3 bg-white dark:bg-a_general-90 rounded text-a_primary-100 flex gap-2">
                      <i className="bi bi-pencil"></i>
                      <span>Edit</span>
                    </span>
                  </Link>
                </div>
                <div className="px-3">
                  <p className="font-bold dark:text-white rtl:font-iransans-700">
                    {item.name}
                  </p>
                  <span className="text-a_general-60">
                    {item.products.length} items
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
