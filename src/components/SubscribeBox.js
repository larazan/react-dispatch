import React from "react";

const SubscribeBox = () => {
  return (
    <>
      <div class="px-5 sm:px-8 md:px-16 2xl:px-24 flex flex-col xl:flex-row justify-center xl:justify-between items-center rounded-lg bg-gray-200 py-10 md:py-14 lg:py-16">
        <div class="-mt-1.5 lg:-mt-2 xl:-mt-0.5 text-center xl:text-start mb-7 md:mb-8 lg:mb-9 xl:mb-0">
          <h3 class="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold mb-2 md:mb-2.5 lg:mb-3 xl:mb-3.5">
            Get Expert Tips In Your Inbox{" "}
          </h3>
          <p class="text-body text-xs md:text-sm leading-6 md:leading-7">
            Subscribe to our newsletter and stay updated.
          </p>
        </div>
        <form class="flex-shrink-0 w-full sm:w-96 md:w-[545px]" novalidate="">
          <div class="flex flex-col sm:flex-row items-start justify-end">
            <div class="w-full">
              <input
                id="subscription_email"
                name="subscription_email"
                type="email"
                placeholder="Write your email here"
                class="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 px-4 lg:px-7 h-12 lg:h-14 text-center sm:text-start bg-white"
                autocomplete="off"
                spellcheck="false"
                aria-invalid="false"
              />
            </div>
            <button
              data-variant="flat"
              class="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart mt-3 sm:mt-0 w-full sm:w-auto sm:ms-2 md:h-full flex-shrink-0"
            >
              <span class="lg:py-0.5"> Subscribe </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SubscribeBox;
