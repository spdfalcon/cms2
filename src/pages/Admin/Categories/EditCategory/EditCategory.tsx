import { useParams } from "react-router-dom"

export default function EditCategory() {
    const categoryid:any = useParams().editcategory
  return (
    <div>
      {categoryid}
    </div>
  )
}
