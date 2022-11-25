import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import galleries from "../assets/data/galleries.json"
import img1 from "../assets/products/1.jpg";
import img2 from "../assets/products/2.jpg";
import img3 from "../assets/products/3.jpg";
import img4 from "../assets/products/4.jpg";
import img5 from "../assets/products/5.jpg";

const images = (imgName) => {
    let cover = "";
    switch (imgName) {
      case "1":
        cover = img1;
        break;
      case "2":
        cover = img2;
        break;
      case "3":
        cover = img3;
        break;
      case "4":
        cover = img4;
        break;
      case "5":
        cover = img5;
        break; 
    }
  
    return cover;
  };

const Gallery = () => {
  return (
    <>
        <div className='w-full'>
                <Carousel autoPlay interval="5000" transitionTime="5000" infiniteLoop>
                    {galleries.map((gal, idx) => (
                        <div className='' key={idx}>
                            <img src={images(gal.img)} alt="" />
                            {/* <p className="legend">My Photo 1 img{gal.id}</p> */}
                        </div>
                    ))}
                   
                </Carousel>
            </div>
    </>
  )
}

export default Gallery