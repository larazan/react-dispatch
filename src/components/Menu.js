import React from 'react'

const Menu = ({ catOpen, catToggle }) => {
    return (
        <>
            <aside
                className={`px-0 transform top-0 left-0 w-full bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
                    catOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <header className="z-10 sticky top-0 px-5 py-3 flex items-center justify-between bg-white border-b">
                    <div className="flex inline-flex space-x-4">
                        <button className="h-8 w-8 md:hidden" onClick={catToggle}>
                            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                    </div>
                    <div className="flex">
                        <img
                            className="h-9"
                            src="https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg"
                            alt="Allbirds"
                        />
                    </div>
                    <div className="flex inline-flex space-x-4">
                        
                        <button className="h-8 w-8">
                            <svg
                            className="h-8 w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                            </svg>
                        </button>
                    </div>
                </header>
                <div>
                    <div className="flex-none">
                        <div className="">
                            <div className="">
                                <div className="flex justify-between px-8 py-4 border-b">
                                    <div className="flex">
                                        <a href="#" className="block text-sm font-semibold text-gray-800 uppercase whitespace-nowrap ">
                                            Men
                                        </a>
                                    </div>
                                    <div className="flex">
                                        <button className="h-5 w-5">
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-between px-8 py-4 border-b">
                                    <div className="flex">
                                        <a href="#" className="block text-sm font-semibold text-gray-800 uppercase whitespace-nowrap ">
                                            Women
                                        </a>
                                    </div>
                                    <div className="flex">
                                        <button className="h-5 w-5">
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                
                                
                                <a href="#" className="block text-sm font-semibold text-gray-800 uppercase whitespace-nowrap px-8 py-4 border-b">
                                    Our Materials
                                </a>
                                <a href="#" className="block text-sm font-semibold text-gray-800 uppercase whitespace-nowrap px-8 py-4 border-b">
                                    Stores
                                </a>
                                <a href="#" className="block text-sm font-light whitespace-nowrap px-8 py-4 border-b">
                                    Account
                                </a>
                                <a href="#" className="block text-sm font-light whitespace-nowrap px-8 py-4 border-b">
                                    Help
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Menu
