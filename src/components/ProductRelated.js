import React from 'react'
import { Link } from "react-router-dom";

import products from "../assets/data/suggests.json";

import a from "../assets/products/related/a.jpg";
import b from "../assets/products/related/b.jpg";
import c from "../assets/products/related/c.jpg";
import d from "../assets/products/related/d.jpg";
import e from "../assets/products/related/e.jpg";
import f from "../assets/products/related/f.jpg";
import g from "../assets/products/related/g.jpg";
import h from "../assets/products/related/h.jpg";
import i from "../assets/products/related/i.jpg";

const images = (imgName) => {
  let cover = "";
  switch (imgName) {
    case "a":
      cover = a;
      break;
    case "b":
      cover = b;
      break;
    case "c":
      cover = c;
      break;
    case "d":
      cover = d;
      break;
    case "e":
      cover = e;
      break;
    case "f":
      cover = f;
      break;
      case "g":
      cover = g;
      break;
      case "h":
      cover = h;
      break;
      case "i":
      cover = i;
      break;
  }

  return cover;
};

const ProductRelated = () => {
  return (
    <>
      <div className="min-h-full w-full px-6">
        <div className="flex justify-between items-center mb-2">
          <div className=" ">
            <span className="text-xl font-bold capitalize">produk sejenis</span>
          </div>
          <div>
            <Link to={"products"}>
              <div className="flex items-center space-x-2">
                
                  <button className='flex items-center justify-center h-8 w-8 bg-gray-300 hover:bg-gray-400 rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
</svg>
                  </button>
               
                  <button className='flex items-center justify-center h-8 w-8 bg-gray-300 hover:bg-gray-400 rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
</svg>
                  </button>
                
              </div>
            </Link>
          </div>
        </div>
        <div className="py-2 pb-5 overflow-auto">
          <div className="inline-flex space-x-4">
            {products.map((product, id) => (
              <div
                className="relative flex-col justify-center w-52 space-y-2"
                id={id}
              >
                <div className="relative block overflow-hidden bg-white shadow flex rounded">
                  <img
                    src={images(product.image)}
                    alt=""
                    className="relative w-full"
                  />
                  <div className="absolute bottom-0"></div>
                </div>

                <div className="text-center2 pt-2 text-sm font-semibold capitalize">
                  <span>{product.title}</span>
                </div>
                <div className="text-sm text-red-600">
                  <span>{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductRelated