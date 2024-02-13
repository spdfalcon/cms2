import { useState } from "react";
import Pagination from "../../../components/module/Pagination/Pagination";

export default function Inbox() {
  const mohammad = [
    {id:1 , name:'mohammad1'},
    {id:2 , name:'mohammad2'},
    {id:3 , name:'mohammad3'},
    {id:4 , name:'mohammad4'},
    {id:5 , name:'mohammad5'},
    {id:6 , name:'mohammad6'},
    {id:7 , name:'mohammad7'},
    {id:8 , name:'mohammad8'},
    {id:9 , name:'mohammad9'},
    {id:10 , name:'mohammad10'},
    {id:11 , name:'mohammad11'},
    {id:12 , name:'mohammad12'},
    {id:13 , name:'mohammad13'},
    {id:14 , name:'mohammad14'},
    {id:15 , name:'mohammad15'},
    {id:16 , name:'mohammad16'},
  ]
  const [page , setPage] = useState(1)
  const inpage = 5
  return (
    <>
    <div className="mt-20">
      {mohammad.slice((inpage*page)-inpage , inpage*page).map(item=>(
        <p>{item.name}</p>
      ))}
    </div>
      <div>
        <Pagination inpage={inpage} page={page} setPage={setPage} all={mohammad.length}></Pagination>
      </div>
    </>
  );
}
