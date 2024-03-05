import React, { Dispatch, SetStateAction } from "react";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import apiRequests from "../../../configs/axios/apiRequests";
interface Trash {
  id: number;
  setIsShow: Dispatch<SetStateAction<boolean>>;
}
const TrashModal: React.FC<Trash> = ({ setIsShow, id }) => {
  const { t } = useTranslation();
  const TrashHandler = async () => {
    setIsShow(false);
    await apiRequests.delete(`/products/${id}`);
    document.location.reload();
  };
  return (
    <>
      <div className="absolute w-full h-screen top-0 left-0  z-30 flex justify-center items-center">
        <div className="z-10 bg-white  p-7 rounded-md flex flex-col gap-3">
          <p className="font-iransans-700 text-xl dark:text-a_general-100">{t("deleteitems")}</p>
          <p className="dark:text-a_general-100">{t("areyousureyouwanttodeleteselecteditem")}</p>
          <div className="flex justify-end gap-4 mt-4">
            <div onClick={() => setIsShow(false)}>
              <Button type="Destructive" size="sm">
                {t("cancel")}
              </Button>
            </div>
            <div onClick={TrashHandler}>
              <Button type="Destructive Secondary" size="sm">
                {t("delete")}
              </Button>
            </div>
          </div>
        </div>
        <div
          onClick={() => setIsShow(false)}
          className="absolute top-0 left-0 w-full h-full bg-a_general-100/40"
        ></div>
      </div>
    </>
  );
};

export default TrashModal;
