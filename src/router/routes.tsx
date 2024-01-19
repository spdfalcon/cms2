import Admin from "../pages/Admin/Admin"
import ConfirmEmail from "../pages/Registers/ConfirmEmail/ConfirmEmail"
import Login from "../pages/Registers/Login/Login"
import ResetPassword from "../pages/Registers/ResetPassword/ResetPassword"
import Signup from "../pages/Registers/Signup/Signup"

const routes = [
    {path:"/" , element:<Login></Login>},
    {path:"/admin" , element:<Admin></Admin>},
    {path:"/signup" , element:<Signup></Signup>},
    {path:"/resetpassword" , element:<ResetPassword></ResetPassword>},
    {path:"/confirmemail" , element:<ConfirmEmail></ConfirmEmail>},

]

export default routes