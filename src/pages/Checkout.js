import React from "react";

const Checkout = () => {
  return (
    <>
      <div className="flex justify-center my-6 h-screen">
        <div className="flex flex-row space-x-4 w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-11/12 lg:w-4/5">
          <div className="flex w-1/2">
          <div className="m-3">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              id="form"
            >
              <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE" />
              <input
                type="hidden"
                name="subject"
                value="New Submission from Web3Forms"
              />
              <input
                type="checkbox"
                name="botcheck"
                id=""
                style={{ display: "none" }}
              />

              
              <div className="mb-6 flex space-x-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-xs font-bold text-gray-600 dark:text-gray-400"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John"
                    required
                    className="w-full text-sm px-3 py-2 placeholder-gray-300 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-100 focus:border-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-xs font-bold text-gray-600 dark:text-gray-400"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" Doe"
                    required
                    className="w-full text-sm px-3 py-2 placeholder-gray-300 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-100 focus:border-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-xs font-bold text-gray-600 dark:text-gray-400"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  required
                  className="w-full text-sm px-3 py-2 placeholder-gray-300 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-100 focus:border-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="text-xs font-bold text-gray-600 dark:text-gray-400"
                >
                  Short Bio
                </label>
                <input
                  type="text"
                  name="bio"
                  id="bio"
                  placeholder=""
                  required
                  className="w-full text-sm px-3 py-2 placeholder-gray-300 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-100 focus:border-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="text-xs font-bold text-gray-600 dark:text-gray-400"
                >
                  Website <span className="text-xs font-extralight">(e.g. Portfolio, Facebook, Dribbble, …)</span>
                </label>
                <input
                  type="text"
                  name="web"
                  id="web"
                  placeholder=""
                  required
                  className="w-full text-sm px-3 py-2 placeholder-gray-300 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-100 focus:border-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="text-xs font-bold text-gray-600 dark:text-gray-400"
                >
                  Instagram username
                </label>
                <input
                  type="text"
                  name="insta"
                  id="insta"
                  placeholder=""
                  required
                  className="w-full text-sm px-3 py-2 placeholder-gray-300 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-100 focus:border-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="text-sm font-bold text-gray-600 dark:text-gray-400"
                >
                  Billing Information
                </label>
                <div className="py-2">
                  <input type="checkbox" name="" id="" className="mr-1 bg-white shadow " />
                  <span className="ml-2 text-sm text-gray-700 pt-1">Same as shipping information</span>
                </div>
              </div>
              
              <div className="mb-6 flex space-x-2">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-green-600 rounded hover:bg-green-700 focus:bg-green-700 focus:outline-none"
                >
                  Update Profile
                </button>
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-gray-300 rounded hover:bg-gray-400 focus:bg-gray-400 focus:outline-none"
                >
                  Cancel
                </button>
              </div>
              <p
                className="text-base text-center text-gray-400"
                id="result"
              ></p>
            </form>
          </div>
          </div>
          <div className="flex w-1/2 ">
            <div className="w-full">
              <div>
                <span className="capitalize font-semibold">Order summary</span>
              </div>
              <div className="flex flex-col space-y-2 mt-4">
                <div className="flex flex-col space-y-2">
                  {/*  */}
                  <div className="flex justify-between pb-4 pt-2 border-b border-gray-200">
                    <div className="flex w-3/5 space-x-2">
                      <div className="h-14 w-14 bg-green-200">

                      </div>
                      <div className="flex flex-col">
                          <span className="font-semibold capitalize text-sm">micro backpack</span>
                          <span className="text-xs">brand</span>
                          <span className="text-xs">L</span>
                      </div>
                    </div>
                    <div className="flex w-2/3 justify-end">
                      <span className="font-semibold text-sm">Rp. 30.000</span>
                    </div>
                  </div>
                  <div className="flex justify-between pb-4 pt-2 border-b border-gray-200">
                    <div className="flex w-3/5 space-x-2">
                      <div className="h-14 w-14 bg-green-200">

                      </div>
                      <div className="flex flex-col">
                          <span className="font-semibold capitalize text-sm">micro backpack</span>
                          <span className="text-xs">brand</span>
                          <span className="text-xs">L</span>
                      </div>
                    </div>
                    <div className="flex w-2/3 justify-end">
                      <span className="font-semibold text-sm">Rp. 30.000</span>
                    </div>
                  </div>
                  {/*  */}
                </div>
                <div className="flex flex-col space-y-1 pb-2 border-b border-gray-200">
                  <div className="flex justify-between py-1">
                    <div className="flex w-1/2">
                    <span className=" text-sm">Subtotal</span>
                    </div>
                    <div className="flex w-1/2 justify-end">
                    <span className=" text-sm">Rp. 30.000</span>
                    </div>
                  </div>
                  <div className="flex justify-between py-1">
                    <div className="flex w-1/2">
                    <span className=" text-sm">Shipping</span>
                    </div>
                    <div className="flex w-1/2 justify-end">
                    <span className=" text-sm">Rp. 30.000</span>
                    </div>
                  </div>
                  <div className="flex justify-between py-1">
                    <div className="flex w-1/2">
                    <span className=" text-sm">Taxes</span>
                    </div>
                    <div className="flex w-1/2 justify-end">
                    <span className=" text-sm">Rp. 30.000</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-1 pb-2">
                  <div className="flex justify-between py-1">
                    <div className="flex w-1/2">
                    <span className="font-semibold text-md">Total</span>
                    </div>
                    <div className="flex w-1/2 justify-end">
                    <span className="font-semibold text-md">Rp. 30.000</span>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
