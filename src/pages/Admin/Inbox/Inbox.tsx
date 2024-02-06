import { useState } from "react";
import CheckBox from "../../../components/module/CheckBox/CheckBox";

export default function Inbox() {
  const [isChecked1,setIsChecked1] = useState(false)
  const [isChecked2,setIsChecked2] = useState(false)
  return (
    <>
    <div className="flex flex-col gap-5">
    <CheckBox setIsChecked={setIsChecked1} forid="mohammad"></CheckBox>
    <CheckBox setIsChecked={setIsChecked2} forid="ali"></CheckBox>
    </div>
    </>
  );
}
