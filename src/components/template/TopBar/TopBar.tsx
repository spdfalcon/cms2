export default function TopBar() {
  return (
    <div className="h-[68px] px-7 py-3 bg-white sticky top-0 flex justify-between items-center">
      <div className="left flex items-center gap-10">
        <img src="/img/topbar/logo.png" alt="Logo" />
        <div className="flex gap-3 items-center">
          <label
            htmlFor="search"
            className="bi bi-search text-a_general-70"
          ></label>
          <input
            className="text-sm p-2 outline-none"
            placeholder="Search..."
            type="search"
            name=""
            id="search"
          />
        </div>
      </div>
      <div className="right flex gap-5 items-center">
        <i className="bi bi-chat-left-text text-xl"></i>
        <div className="relative">
          <span className="w-[14px] h-[14px] flex justify-center items-center rounded-full bg-blue-700 absolute top-0 -right-1 text-xs text-white ">
            5
          </span>
          <i className="bi bi-bell text-xl"></i>
        </div>
        <div className="flex items-center gap-2">
            <img src="/img/topbar/avatar.png" alt="" />
            <span className="text-a_general-80">mohammadreza</span>
        </div>
      </div>
    </div>
  );
}
