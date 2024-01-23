import { useParams } from "react-router-dom"

export default function Editproduct() {
  const productid:any = useParams().editproductid
  
  return (
    <div>
      {productid}
    </div>
  )
}
