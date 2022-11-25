import React from "react"
import { Link } from "react-router-dom";

import Carousel from "../components/Carousel"
import FilterStore from "../components/FilterStore";
import HeaderStore from "../components/HeaderStore";
import NewProduct from "../components/NewProduct";
import ProductRelated from "../components/ProductRelated";

const Store = () => {
  return (
    <>
      <main className="">
        <HeaderStore />
        <Carousel />

        
        <div className="flex w-full mb-9 md:mb-10 p-6">
          <FilterStore />
         <div>
         <div className="flex items-center justify-between -mt-2 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
            <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">
              New Arrivals
            </h3>
          </div>
        
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
           <Link to={"/product"}>
            <div
              className="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product"
              role="button"
              title="Armani Veni Vidi Vici"
            >
              <div className="flex mb-3 md:mb-3.5">
                <span 
                style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%",}}
                >
                  <span 
                //   style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; maxWidth: 100%;"
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11.png&w=384&q=100"
                      style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px",}}
                    />
                  </span>
                  <img
                    alt="Armani Veni Vidi Vici"
                    src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11.png&w=384&q=100"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="bg-gray-300 object-cover rounded-s-md w-full rounded-t-md transition duration-200 ease-in group-hover:rounded-b-none"
                    style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}
                  />
                  <noscript></noscript>
                </span>
              </div>
              <div className="w-full overflow-hidden md:px-2.5 xl:px-4">
                <h2 className="text-heading font-semibold truncate mb-1 text-sm md:text-base">
                  Armani Veni Vidi Vici
                </h2>
                <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                  Fendi began life in 1925 as a fur and leather speciality store
                  in Rome.
                </p>
                <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-s-2 lg:text-lg lg:mt-2.5">
                  <span className="inline-block">$17.99</span>
                  <del className="sm:text-base font-normal text-gray-800">
                    $20.00
                  </del>
                </div>
              </div>
            </div>
            </Link> 
            <Link to={"/product"}>
            <div
              className="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product"
              role="button"
              title="Armani Veni Vidi Vici"
            >
              <div className="flex mb-3 md:mb-3.5">
                <span 
                style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%",}}
                >
                  <span 
                //   style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; maxWidth: 100%;"
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11.png&w=384&q=100"
                      style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px",}}
                    />
                  </span>
                  <img
                    alt="Armani Veni Vidi Vici"
                    src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11.png&w=384&q=100"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="bg-gray-300 object-cover rounded-s-md w-full rounded-t-md transition duration-200 ease-in group-hover:rounded-b-none"
                    style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}
                  />
                  <noscript></noscript>
                </span>
              </div>
              <div className="w-full overflow-hidden md:px-2.5 xl:px-4">
                <h2 className="text-heading font-semibold truncate mb-1 text-sm md:text-base">
                  Armani Veni Vidi Vici
                </h2>
                <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                  Fendi began life in 1925 as a fur and leather speciality store
                  in Rome.
                </p>
                <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-s-2 lg:text-lg lg:mt-2.5">
                  <span className="inline-block">$17.99</span>
                  <del className="sm:text-base font-normal text-gray-800">
                    $20.00
                  </del>
                </div>
              </div>
            </div>
            </Link>
            <Link to={"/product"}>
            <div
              className="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product"
              role="button"
              title="Armani Veni Vidi Vici"
            >
              <div className="flex mb-3 md:mb-3.5">
                <span 
                style={{boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%",}}
                >
                  <span 
                //   style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; maxWidth: 100%;"
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11.png&w=384&q=100"
                      style={{display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px",}}
                    />
                  </span>
                  <img
                    alt="Armani Veni Vidi Vici"
                    src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-11.png&w=384&q=100"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="bg-gray-300 object-cover rounded-s-md w-full rounded-t-md transition duration-200 ease-in group-hover:rounded-b-none"
                    style={{position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%"}}
                  />
                  <noscript></noscript>
                </span>
              </div>
              <div className="w-full overflow-hidden md:px-2.5 xl:px-4">
                <h2 className="text-heading font-semibold truncate mb-1 text-sm md:text-base">
                  Armani Veni Vidi Vici
                </h2>
                <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                  Fendi began life in 1925 as a fur and leather speciality store
                  in Rome.
                </p>
                <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-s-2 lg:text-lg lg:mt-2.5">
                  <span className="inline-block">$17.99</span>
                  <del className="sm:text-base font-normal text-gray-800">
                    $20.00
                  </del>
                </div>
              </div>
            </div>
            </Link>
          </div>
          </div>
          
        </div>
        <NewProduct />
        <ProductRelated />
      </main>
    </>
  );
};

export default Store;
