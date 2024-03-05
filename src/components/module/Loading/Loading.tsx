export default function Loading() {
  return (
    <div className="relative flex justify-center items-center w-full mt-40 ">
      <div className=" size-12 border-2 border-a_primary-100 animate-spin rounded-md"></div>
      <div className="absolute top-1/2 -translate-y-1/2 text-xl animate-pulse">
        Loading...
      </div>
    </div>
  );
}
