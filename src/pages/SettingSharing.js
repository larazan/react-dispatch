import React from 'react'

const SettingSharing = () => {
  return (
    <>
       <main className="mt-0 h-auto">
        <div className="container mx-auto">
          <div className="max-w-lg mx-auto my-10 bg-white p-5 rounded shadow-sm">
            <div className="text-center">
              <h4 className="my-3 text-2xl font-bold text-gray-700 dark:text-gray-200">
              Sharing Settings
              </h4>
            </div>
            <div className="m-7">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                id="form"
              >
                <input
                  type="hidden"
                  name="apikey"
                  value="YOUR_ACCESS_KEY_HERE"
                />
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

                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="text-base font-bold text-gray-600 dark:text-gray-400"
                  >
                    Favorite List Settings
                  </label>

                  <div className="flex space-x-1 py-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="mr-1 bg-white shadow2 "
                    />
                    <span className="ml-2 text-sm text-gray-700 pt-1">
                    Share this list publicly?
                    </span>
                  </div>
                 
                </div>
                
                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="text-base font-bold text-gray-600 dark:text-gray-400"
                  >
                    Rated List Settings
                  </label>

                  <div className="flex space-x-1 py-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="mr-1 bg-white shadow2 "
                    />
                    <span className="ml-2 text-sm text-gray-700 pt-1">
                    Share this list publicly?
                    </span>
                  </div>
                 
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="text-base font-bold text-gray-600 dark:text-gray-400"
                  >
                    Watchlist Settings
                  </label>

                  <div className="flex space-x-1 py-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="mr-1 bg-white shadow2 "
                    />
                    <span className="ml-2 text-sm text-gray-700 pt-1">
                    Share this list publicly?
                    </span>
                  </div>

                  <div className="flex space-x-1 py-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="mr-1 bg-white shadow2 "
                    />
                    <span className="ml-2 text-sm text-gray-700 pt-1">
                    Automatically remove items when they're rated?
                    </span>
                  </div>
                 
                </div>
                
            

                <div className="mb-6 flex space-x-2">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-green-600 rounded hover:bg-green-700 focus:bg-green-700 focus:outline-none"
                  >
                    Save
                  </button>
                 
                </div>
                <p
                  className="text-base text-center text-gray-400"
                  id="result"
                ></p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default SettingSharing