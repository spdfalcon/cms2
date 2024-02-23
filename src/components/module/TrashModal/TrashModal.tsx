import React, { Dispatch, SetStateAction } from "react";
import Button from "../Button/Button";
interface Trash {
  id: number;
  setIsShow: Dispatch<SetStateAction<boolean>>;
}
const TrashModal: React.FC<Trash> = ({ setIsShow, id }) => {
  const TrashHandler = () => {
    setIsShow(false);
    fetch(`https://prime.liara.run/api/v1/products/${id}`, {
      method: "DELETE",
    }).then(res=>console.log(res)
    )
  };
  return (
    <>
      <div className="absolute w-full h-screen top-0 left-0  z-30 flex justify-center items-center">
        <div className="z-10 bg-white p-7 rounded-md flex flex-col gap-3">
          <p className="font-iransans-700 text-xl">Delete Items</p>
          <p className="">Are you sure you want to delete 4 selected items?</p>
          <div className="flex justify-end gap-4 mt-4">
            <div onClick={() => setIsShow(false)}>
              <Button type="Destructive" size="sm">
                Cancel
              </Button>
            </div>
            <div onClick={TrashHandler}>
              <Button type="Destructive Secondary" size="sm">
                Delete
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
