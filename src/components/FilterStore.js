import React from 'react'

const FilterStore = () => {
    const categories = [
        `Women's Running Shoes`,
        `Everyday Sneakers`,
        `Slip-Ons`,
        `High Tops`,
        `Boat Shoes`,
        `Flats`,
        `Weather Repellent Shoes`,
    ];
    
    const options = [
        "Running",
        "Wet Weather",
        "Everyday",
        "Cool Weather",
        "Warm Weather",
    ];

    const sizes = [
        "L",
        "M",
        "S",
        "XL",
    ]
    
    const hue = [
        {
          name: "Grey",
          color: "#8c8c8c",
        },
        {
          name: "Green",
          color: "#69715e",
        },
        {
          name: "White",
          color: "#f5f4f0",
        },
        {
          name: "Blue",
          color: "#49607c",
        },
        {
          name: "Black",
          color: "#3b3b3b",
        },
        {
          name: "Red",
          color: "#b14754",
        },
        {
          name: "Pink",
          color: "#dfabb5",
        },
        {
          name: "Brown",
          color: "#bd9474",
        },
        {
          name: "Yellow",
          color: "#ead99a",
        },
    ];

    return (
      <>
        <div className="w-1/4 max-w-md flex-none px-4 hidden md:block">
            <div className=" mt-0">
                <div>
                    
                    <h1 className="text-lg font-bold text-gray-900 md:text-xl">
                        Women's Shoes
                    </h1>
                </div>
                <div>
                    <div className="">
                        {categories.map((category) => (
                            <a
                                href="#"
                                key={category}
                                className="block text-sm  whitespace-nowrap py-2"
                            >
                                {category}
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="mt-4">
                        <div className="font-semibold text-base">
                            <p>Filter By:</p>
                        </div>
                        <div className="border-t mt-4"></div>
                        <div>
                            <div className="mt-4 font-semibold text-base uppercase">
                                <p>Material</p>
                            </div>
                            <div className="mt-2">
                                <div className="py-1">
                                    <input type="checkbox" className="" />
                                    <span className="text-xs px-2">Soft & Cozy Wool</span>
                                </div>
                                <div className="py-1">
                                    <input type="checkbox" className="" />
                                    <span className="text-xs px-2">Light & Breezy Tree</span>
                                </div>
                            </div>
                            <div className="border-t mt-4"></div>
                            <div className="mt-4 font-semibold text-base uppercase">
                                <p>Ukuran</p>
                            </div>
                            <div className="mt-2">
                            {sizes.map((size) => (
                                <div className="py-1">
                                    <input type="checkbox" className="" />
                                    <span className="text-xs px-2">{size}</span>
                                </div>
                            ))}
                               
                            </div>
                            <div className="border-t mt-4"></div>
                            <div className="mt-4 font-semibold text-base uppercase">
                                <p>Best For</p>
                            </div>
                            <div className="mt-2">
                                {options.map((option) => (
                                    <div className="py-1">
                                        <input type="checkbox" className="" />
                                        <span className="text-xs px-2">{option}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="border-t mt-4"></div>
                        <div>
                            <div className="mt-4 font-semibold text-base uppercase">
                                <p>Warna</p>
                            </div>
                            <div className="flex mt-3">
                                <div>
                                    {hue.map((color) => (
                                        <div className="flex py-1.5">
                                            <button className="h-6 w-6 flex flex-col border border-gray-300 rounded-full overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 focus:outline-none">
                                                <span className="h-full w-full flex flex-col transform">
                                                    <span
                                                        className="h-6 w-6"
                                                        style={{ backgroundColor: color.color }}
                                                    ></span>
                                                </span>
                                            </button>
                                            <span className="flex text-xs px-2 items-center">
                                                {color.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
}

export default FilterStore
