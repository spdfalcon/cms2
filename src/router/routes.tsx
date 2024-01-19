import Admin from "../pages/Admin/Admin"
import Login from "../pages/Login/Login"
import Signup from "../pages/Signup/Signup"

const routes = [
    {path:"/" , element:<Login></Login>},
    {path:"/admin" , element:<Admin></Admin>},
    {path:"/signup" , element:<Signup></Signup>},

]

export default routes