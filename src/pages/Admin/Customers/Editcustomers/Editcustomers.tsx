import { useParams } from "react-router-dom"

export default function Editcustomers() {
    const {editcustomers} = useParams()
  return (
    <div>
        {editcustomers}
    </div>
  )
}
