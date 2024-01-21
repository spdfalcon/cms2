import {NavLink } from "react-router-dom";

export default function SideBar() {
  const items = [
    {
      id: 1,
      icon: "bi bi-house-door",
      title: "Dashboard",
      to: "dashboard",
      notif: 0,
    },
    {
      id: 2,
      icon: "bi bi-list-task",
      title: "Orders",
      to: "orders",
      notif: 16,
    },
    {
      id: 3,
      icon: "bi bi-ticket-perforated",
      title: "Products",
      to: "products",
      notif: 0,
    },
    {
      id: 4,
      icon: "bi bi-folder",
      title: "Categories",
      to: "categories",
      notif: 0,
    },
    {
      id: 5,
      icon: "bi bi-people",
      title: "Customers",
      to: "customers",
      notif: 0,
    },
    {
      id: 6,
      icon: "bi bi-bar-chart-line",
      title: "Reports",
      to: "reports",
      notif: 0,
    },
    { id: 7, icon: "bi bi-star", title: "Coupons", to: "coupons", notif: 0 },
    {
      id: 8,
      icon: "bi bi-chat-left-text",
      title: "Inbox",
      to: "inbox",
      notif: 0,
    },
  ];
  return (
    <div className="h-screen w-64 bg-a_general-30 top-[68px] p-4">
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <NavLink
            key={item.id}
            className={({ isActive }) =>
              isActive
                ? ` flex items-center justify-between px-5 py-2 gap-4  font-medium text-sm  rounded-md bg-a_primary-100 text-white`
                : "flex justify-between items-center px-5 py-2 gap-4  font-medium text-sm  rounded-md  text-a_general-80"
            }
            to={item.to}
          >
            <div className="flex items-center gap-3">
              <i className={`${item.icon} text-xl`}></i>{" "}
              <span>{item.title}</span>
            </div>
            {item.notif ? (
              <div className="flex text-white justify-center items-center w-8 h-5 rounded-full bg-a_general-100">
                {item.notif}
              </div>
            ) : null}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
