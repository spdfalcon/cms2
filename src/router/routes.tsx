import Admin from "../pages/Admin/Admin";
import Categories from "../pages/Admin/Categories/Categories";
import Coupons from "../pages/Admin/Coupons/Coupons";
import Customers from "../pages/Admin/Customers/Customers";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Inbox from "../pages/Admin/Inbox/Inbox";
import Orders from "../pages/Admin/Orders/Orders";
import Products from "../pages/Admin/Products/Products";
import Reports from "../pages/Admin/Reports/Reports";
import ConfirmEmail from "../pages/Registers/ConfirmEmail/ConfirmEmail";
import Login from "../pages/Registers/Login/Login";
import ResetPassword from "../pages/Registers/ResetPassword/ResetPassword";
import Signup from "../pages/Registers/Signup/Signup";

const routes = [
  { path: "/", element: <Login></Login> },
  {
    path: "/admin",
    element: <Admin></Admin>,
    children: [
      { path: "dashboard", element: <Dashboard></Dashboard> },
      { path: "orders", element: <Orders></Orders> },
      { path: "products", element: <Products></Products> },
      { path: "categories", element: <Categories></Categories> },
      { path: "customers", element: <Customers></Customers> },
      { path: "reports", element: <Reports></Reports> },
      { path: "coupons", element: <Coupons></Coupons> },
      { path: "inbox", element: <Inbox></Inbox> },
    ],
  },
  { path: "/signup", element: <Signup></Signup> },
  { path: "/resetpassword", element: <ResetPassword></ResetPassword> },
  { path: "/confirmemail", element: <ConfirmEmail></ConfirmEmail> },
];

export default routes;
