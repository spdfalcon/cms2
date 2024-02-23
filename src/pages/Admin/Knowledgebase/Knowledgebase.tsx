import { useState } from "react";
import TrashModal from "../../../components/module/TrashModal/TrashModal";

export default function Knowledgebase() {
  const [isShow , setIsShow] = useState(false)
  return (
    <div className="">
      <button onClick={()=>setIsShow(true)} className="mt-52 ">clicl</button>
      {
        isShow ? (
          <TrashModal setIsShow={setIsShow} id={1233456}></TrashModal>      
        ) : (
          ''
        ) 
      }
    </div>
  );
}
