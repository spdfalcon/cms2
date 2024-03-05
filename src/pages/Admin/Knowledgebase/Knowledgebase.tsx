import { useQuery } from "react-query";
import apiRequests from "../../../configs/axios/apiRequests";

export default function Knowledgebase() {
  const {data} = useQuery('Courses' , ()=>apiRequests.get('/products').then(res=>res.data.data.items))
  console.log(data);
  
  return (
    <div className="mt-20">
      <h1>mohammad</h1>
    </div>
  );
}
