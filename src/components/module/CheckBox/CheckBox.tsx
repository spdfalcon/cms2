import React, { Dispatch, SetStateAction } from "react";
interface CheckBoxprops {
  forid?: string;
  setIsChecked:Dispatch<SetStateAction<boolean>>
  ischecked?:boolean
}
const CheckBox: React.FC<CheckBoxprops> = ({ forid , setIsChecked , ischecked}) => {
    
  return (
    <>
        <div>
            <input onChange={(e)=>setIsChecked(e.target.checked)} className="peer hidden" type="checkbox" id={forid} />
            <label className="duration-300 shadow-lg cursor-pointer w-12 h-6 bg-a_primary-40 rounded-full flex after:size-5 after:bg-white after:rounded-full items-center after:translate-x-0.5 peer-checked:after:translate-x-[26px] after:duration-300 peer-checked:bg-a_primary-100" htmlFor={forid}></label>
        </div>
    </>
  );
};
export default CheckBox;
