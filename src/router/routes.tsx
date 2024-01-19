import Admin from "../pages/Admin/Admin"
import Login from "../pages/Login/Login"

const routes = [
    {path:"/" , element:<Login></Login>},
    {path:"/admin" , element:<Admin></Admin>},
]

export default routes