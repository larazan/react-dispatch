import React from 'react'

const Quote = () => {
  return (
    <>
      <div class=" h-72 flex items-center justify-center px-4">
        <div class=" text-center">
          <div class="text-5xl md:text-7xl text-blue-300 leading-5">”</div>
          <div class="font-medium max-w-xl text-white text-lg md:text-2xl italic leading-snug">
            Sepertinya dunia menjadi sangat keras. sampai-sampai perbuatan baik
            disalah artikan menjadi rasa suka.
          </div>
          <div class="mt-3 md:mt-5">
            <span class="font-bold text-sm md:text-base text-[#9cb3c9]">Hong Du-sik</span>
            <span class="text-gray-400 text-sm md:text-base font-medium">
              {" "}
              — Hometown Cha-Cha-cha, 2021
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quote