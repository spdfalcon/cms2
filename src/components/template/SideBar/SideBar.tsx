import { Link, NavLink } from "react-router-dom";

export default function SideBar() {
  const items = [
    {id:1,icon:'bi bi-house-door' , title:'Dashboard' , to:'dashboard'},
    {id:2,icon:'bi bi-list-task' , title:'Orders' , to:'orders'},
    {id:3,icon:'bi bi-ticket-perforated' , title:'Products' , to:'products'},
    {id:4,icon:'bi bi-folder' , title:'Categories' , to:'categories'},
    {id:5,icon:'bi bi-people' , title:'Customers' , to:'customers'},
    {id:6,icon:'bi bi-bar-chart-line' , title:'Reports' , to:'reports'},
    {id:7,icon:'bi bi-star' , title:'Coupons' , to:'coupons'},
    {id:8,icon:'bi bi-chat-left-text' , title:'Inbox' , to:'inbox'},
  ]
  return (
    <div className="h-screen w-64 bg-a_general-30 top-[68px] p-4">
      <div className="flex flex-col gap-2">
        {
          items.map(item=>(
        <NavLink key={item.id} className={({isActive})=> isActive ? `flex items-center px-5 py-2 gap-4  font-medium text-sm  rounded-md bg-a_primary-100 text-white` : 'flex items-center px-5 py-2 gap-4  font-medium text-sm  rounded-md  text-a_general-80'} to={item.to}>
          <i className={`${item.icon} text-xl`}></i> <span>{item.title}</span>
        </NavLink>
          ))
        }
      </div>
    </div>
  );
}
