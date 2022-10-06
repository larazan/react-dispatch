import React from "react";
import { Link } from "react-router-dom";

import products from "../assets/data/products.json";

import a from "../assets/products/a.jpg";
import b from "../assets/products/b.jpg";
import c from "../assets/products/c.jpg";
import d from "../assets/products/d.jpg";
import e from "../assets/products/e.jpg";
import f from "../assets/products/f.jpg";

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
  }

  return cover;
};

const NewProduct = () => {
  return (
    <>
      <div className="min-h-full w-full px-6">
        <div className="flex justify-between items-center mb-2">
          <div className=" ">
            <span className="text-xl font-bold capitalize">new products</span>
          </div>
          <div>
            <Link to={"products"}>
              <div className="flex items-center text-red-600 hover:text-[#fe2c55]">
                <span className="font-bold ">View All</span>
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
  );
};

export default NewProduct;
