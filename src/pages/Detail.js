import React from "react";

import a from "../assets/products/1.jpg";
import Breadcrumb from "../components/Breadcrumb";
import ProductRelated from "../components/ProductRelated";
import ProductReview from "../components/ProductReview";

const Detail = () => {
  return (
    <>
      <main
        className="relative flex-grow"
        style={{ minHeight: "-webkit-fill-available" }}
      >
        <div className="border-t border-gray-300 mb-0"> </div>
        <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
          <section className="container px-5 py-6 mx-auto">
            <Breadcrumb />
            <div className="lg:w-4/5 mx-auto flex flex-wrap2 w-full space-x-2">
              <div className="w-1/2">
                <div className="w-4/5 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <img src={a} alt="" />
                </div>
               <ProductReview />
              </div>
              <div className="w-1/2">
                <div class=" w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 class="text-sm title-font text-gray-500 tracking-widest">
                    BRAND NAME
                  </h2>
                  <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                    The Catcher in the Rye
                  </h1>
                  <div class="flex mb-2">
                    <span class="flex items-center">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 text-red-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 text-red-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 text-red-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 text-red-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 text-red-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <span class="text-gray-600 text-sm ml-3">4 Reviews</span>
                    </span>
                    <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                      <a class="text-gray-500">
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500">
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500">
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                  <div className="mb-2">
                    <span class="title-font font-bold text-2xl text-red-600">
                      $58.00
                    </span>
                  </div>
                  <div className="text-sm">
                    <p class="leading-relaxed">
                      Hanna Hijab Blus Cassey Wanita -100% Produk Original Hanna
                      -Material 100% Katun -Model Size S -Tinggi Badan 174 cm,
                      Lebar Dada 84 cm, Pinggang 61 cm, Panggul 89 cm UKURAN S M
                      L XL 1/2 LINGKAR DADA 47 50 53 56 1/2 LINGKAR BAWAH 61,5
                      64,5 67,5 70,5 PANJANG BADAN 90 90 90 90 PANJANG TANGAN 58
                      58 58 58
                    </p>
                    <br />
                    <p>
                      Catatan :
                      <br />
                      Warna yang terlihat pada foto produk mungkin tidak 100%
                      sama dengan produk aslinya, dikarenakan faktor cahaya pada
                      pengambilan gambar ataupun pada kondisi gadget yang
                      digunakan untuk melihat gambar.
                    </p>
                    <br />
                    <p>
                      Mohon periksa kembali pesanannya karena jika pesanan sudah
                      di proses tidak dapat dibatalkan
                    </p>
                    <br />
                    <p>
                      Jika terdapat kesalahan dalam proses pengiriman (barang
                      yang diorder tidak sesuai atau size tidak sesuai dengan
                      yang pesan dapat dilakukan return barang dengan syarat dan
                      ketentuan berlaku.
                    </p>
                    <br />
                    <p>
                      Diwajibkan membuat video unboxing saat membuka paket
                      karena jika ada kesalahan dalam paket (kurang atau rusak)
                      dan tidak ada video saat unboxing maka tidak bisa klaim
                    </p>
                  </div>
                  <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                    <div class="flex">
                      <span class="mr-3">Warna</span>
                      <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button class="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                    </div>
                  </div>
                  <div class="flex items-center pb-5 border-b-2 border-gray-200 mb-5">
                    <span class="mr-3">Ukuran</span>

                    <div className="flex space-x-3">
                      <div className="flex items-center p-1 w-12 bg-white text-center justify-center border">
                        <span>S</span>
                      </div>
                      <div className="flex items-center p-1 w-12 bg-white text-center justify-center border">
                        <span>M</span>
                      </div>
                      <div className="flex items-center p-1 w-12 bg-white text-center justify-center border">
                        <span>L</span>
                      </div>
                      <div className="flex items-center p-1 w-12 bg-white text-center justify-center border">
                        <span>XL</span>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center w-full">
                    <button class="flex ml-auto2 w-full justify-center text-white bg-red-500 border-0 py-3 px-6 focus:outline-none hover:bg-red-600 rounded">
                      Beli sekarang
                    </button>
                    <button class="rounded-full w-12 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
          </section>
          <section className="w-full px-5 py-6 mx-auto">
          <ProductRelated />
          </section>
        </div>
      </main>
    </>
  );
};

export default Detail;
