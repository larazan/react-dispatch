import React from 'react'

const SettingDelete = () => {
  return (
    <>
       <main className='mt-0 h-auto'>
      <div className="container mx-auto">
        <div className="max-w-lg mx-auto my-10 bg-white p-5 rounded shadow-sm">
          <div className="text-center">
            <h4 className="my-3 text-2xl font-bold text-gray-700 dark:text-gray-200">
              Delete Account
            </h4>
            
          </div>
          <div className="m-7">
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

              <div className="mb-2">
                <label
                  htmlFor="phone"
                  className="text-base font-bold text-gray-600 dark:text-gray-400"
                >
                  Delete your account <span className='text-sm'>(You can't undo this!)</span>
                </label>
                <div className="py-2">
                  
                  <span>You've just entered the danger zone! If you would like to continue and remove your account, you can do so by entering your password below and confirming the prompts.</span>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="text-xs font-bold text-gray-600 dark:text-gray-400"
                >
                  Password 
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                  required
                  className="w-full text-sm px-3 py-2 placeholder-gray-300 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-100 focus:border-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"                />
              </div>
              
              <div className="mb-6 flex space-x-2">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-green-600 rounded hover:bg-green-700 focus:bg-green-700 focus:outline-none"
                >
                  Delete Account
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

export default SettingDelete