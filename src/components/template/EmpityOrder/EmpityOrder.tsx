export default function EmpityOrder() {
  return (
    <>
      <div className="flex justify-center items-center py-10 bg-white dark:bg-a_general-90 rounded-md">
        <div className="text-center flex flex-col items-center gap-4">
          <img src="/img/order/empity.png" />
          <h2 className="font-bold dark:text-white rtl:font-iransans-700">No Orders Yet</h2>
          <p className="text-a_general-80 dark:text-a_general-40">
            All the upcoming orders from your store will be visible in this
            page. You can add orders by yourself if you sell offline.{" "}
          </p>
          <button className="bg-a_primary-100 px-8 py-2 text-white rounded-md flex items-center justify-center">
            <i className="bi bi-plus-lg"></i>
            <span>Add Order</span>
          </button>
          <a className="text-a_primary-100" href="/">Read More</a>
        </div>
      </div>
    </>
  );
}
