import { Children } from "react";
import Admin from "../pages/Admin/Admin";
import Categories from "../pages/Admin/Categories/Categories";
import Coupons from "../pages/Admin/Coupons/Coupons";
import Customers from "../pages/Admin/Customers/Customers";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Globalsettings from "../pages/Admin/Globalsettings/Globalsettings";
import Inbox from "../pages/Admin/Inbox/Inbox";
import Knowledgebase from "../pages/Admin/Knowledgebase/Knowledgebase";
import Orders from "../pages/Admin/Orders/Orders";
import Personalsettings from "../pages/Admin/Personalsettings/Personalsettings";
import Products from "../pages/Admin/Products/Products";
import Productupdates from "../pages/Admin/Productupdates/Productupdates";
import Reports from "../pages/Admin/Reports/Reports";
import ConfirmEmail from "../pages/Registers/ConfirmEmail/ConfirmEmail";
import Login from "../pages/Registers/Login/Login";
import ResetPassword from "../pages/Registers/ResetPassword/ResetPassword";
import Signup from "../pages/Registers/Signup/Signup";
import Addproduct from "../pages/Admin/Products/Addproduct/Addproduct";
import Editproduct from "../pages/Admin/Products/Editproduct/Editproduct";

const routes = [
  { path: "/", element: <Login></Login> },
  {
    path: "/admin",
    element: <Admin></Admin>,
    children: [
      { path: "dashboard", element: <Dashboard></Dashboard> },
      { path: "orders", element: <Orders></Orders> },
      {
        path: "products",
        element: <Products></Products>,
        children: [
          { path: "addproduct", element: <Addproduct></Addproduct> },
          { path: ":editproductid", element: <Editproduct></Editproduct> },
        ],
      },
      { path: "categories", element: <Categories></Categories> },
      { path: "customers", element: <Customers></Customers> },
      { path: "reports", element: <Reports></Reports> },
      { path: "coupons", element: <Coupons></Coupons> },
      { path: "inbox", element: <Inbox></Inbox> },
      { path: "knowledgebase", element: <Knowledgebase></Knowledgebase> },
      { path: "productupdates", element: <Productupdates></Productupdates> },
      {
        path: "personalsettings",
        element: <Personalsettings></Personalsettings>,
      },
      { path: "globalsettings", element: <Globalsettings></Globalsettings> },
    ],
  },
  { path: "/signup", element: <Signup></Signup> },
  { path: "/resetpassword", element: <ResetPassword></ResetPassword> },
  { path: "/confirmemail", element: <ConfirmEmail></ConfirmEmail> },
];

export default routes;
