import { Outlet } from "react-router-dom";
import SideBar from "../../components/template/SideBar/SideBar";
import TopBar from "../../components/template/TopBar/TopBar";

export default function Admin() {
  return (
    <>
    <div className="">
      <TopBar></TopBar>
      <div className="flex ">
        <SideBar></SideBar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
    </>
  );
}
