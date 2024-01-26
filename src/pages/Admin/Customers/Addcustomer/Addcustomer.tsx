import { Link } from "react-router-dom";

export default function Addcustomer() {
  return (
    <>
      <div className="px-10 py-8">
        <div className="header flex items-center justify-between">
          <div className="r">
            <Link className="text-a_general-60 flex gap-2 text-sm" to={""}>
              <i className="bi bi-arrow-left"></i>
              <span>Back</span>
            </Link>
            <p className="font-bold">Add Customer</p>
          </div>
          <div className="l flex gap-2">
            <button className="px-6 py-1 bg-white text-a_primary-100 rounded-md border">
              Cancel
            </button>
            <button className="px-6 py-1 bg-a_primary-100 text-white rounded-md border">
              Save
            </button>
          </div>
        </div>
        <div className="main bg-white p-7 flex flex-col mt-10 rounded-md">
          <div className="sec1 flex flex-col gap-3 border-b pb-10">
            <div className="headersec">
              <h2 className="font-bold">Customer Information</h2>
              <h3 className="text-a_general-80">
                Most important information about the customer
              </h3>
            </div>
            <div className="mainsec1 grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-8 ">
              <div className="flex flex-col gap-1">
                <label className="text-a_general-80" htmlFor="">
                  First Name
                </label>
                <input
                  className="border rounded-md p-1"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-a_general-80" htmlFor="">
                  Last Name
                </label>
                <input
                  className="border rounded-md p-1"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-a_general-80" htmlFor="">
                  Email Address
                </label>
                <input
                  className="border rounded-md p-1"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-a_general-80" htmlFor="">
                  Phone Number
                </label>
                <input
                  className="border rounded-md p-1"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
          <div className="sec2 pb-10 border-b">
            <div className="headersec">
              <h2 className="font-bold">Customer Address</h2>
              <h3 className="text-a_general-80">
                Shipping address information
              </h3>
            </div>
            <div className="mainsec1 grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-8 mt-5">
              <div className="flex flex-col gap-1">
                <label className="text-a_general-80" htmlFor="">
                Address
                </label>
                <input
                  className="border rounded-md p-1"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-a_general-80" htmlFor="">
                Apartment
                </label>
                <input
                  className="border rounded-md p-1"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-a_general-80" htmlFor="">
                City
                </label>
                <input
                  className="border rounded-md p-1"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="grid grid-cols-2 *:flex *:flex-col gap-5 items-center">
                <div className="flex flex-col">
                  <label className="text-a_general-80" htmlFor="">
                  Country
                  </label>
                  <input
                    className="border rounded-md p-1"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <label className="text-a_general-80" htmlFor="">
                  Postal Code
                  </label>
                  <input
                    className="border rounded-md p-1"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-a_general-80" htmlFor="">
                Phone
                </label>
                <input
                  className="border rounded-md p-1"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
          <div className="sec3 mt-5">
            <div className="headersec">
              <h2 className="font-bold">Customer Notes</h2>
              <h3 className="text-a_general-80">
              Add notes about customer
              </h3>
            </div>
            <div className="mainsec3 flex flex-col mt-5">
              <label className="text-a_general-80" htmlFor="">
              Notes
              </label>
              <textarea placeholder="Add notes about custom" className="border p-2 rounded-md" name="" id=""></textarea>
            </div>
          </div>
        </div>
        <div className="footer flex justify-end py-5">
          <div className="l flex gap-2">
            <button className="px-6 py-1 bg-white text-a_primary-100 rounded-md border">
              Cancel
            </button>
            <button className="px-6 py-1 bg-a_primary-100 text-white rounded-md border">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
