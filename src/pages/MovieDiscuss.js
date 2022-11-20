import React from "react";
import Avatar from "react-avatar";
import Editor from "../components/Editor";

const MovieDiscuss = () => {
  return (
    <>
      <div className="w-full lg:w-4/6 mx-auto">
        <div class="overflow-x-auto">
          <div class="min-w-screen bg-white flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
            <div class="w-full py-4 lg:w-5/6 px-4">
              <div className="py-2 border-b pb-5 md:pb-8 border-gray-200">
                <div className="flex-col pt-0">
                  <div className="flex flex-col space-y-4">
                    <div className="">
                      <span className="text-lg font-bold capitalize">
                        Discuss Parasite
                      </span>
                    </div>
                    <div className="flex space-x-1 items-center">
                      <div>Discuss</div>
                      <div><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
</svg></div>
                      <div>Movie</div>
                      <div>→</div>
                      <div>Parasite</div>
                      <div>→</div>
                      <div>General</div>
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="flex flex-col items-center2 justify-center2 space-y-6">
                      {" "}
                      <div className="relative rounded  shadow-md bg-white">
                        <div className="flex w-full p-2 md:p-3 items-center justify-between border-b pb-3 bg-gray-200">
                          <div className="flex items-center space-x-3">
                            <Avatar
                              name="Selena gomes"
                              size={"42"}
                              round={true}
                            />
                            <div className="flex flex-col leading-tight">
                              <div className="text-sm md:text-lg leading-tight font-semibold">
                                Why didn't Drogon kill Jon?
                              </div>
                              <div className="text-sm">
                                <span>
                                  posted by{" "}
                                  <span className="text-blue-400">
                                    Strawberry Shortcake
                                  </span>
                                </span>{" "}
                                <span>on Mei 29, 2019 at 5:38 PM</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-8">
                            <button className="rounded-2xl border border-green-300 bg-[#5cd68d] px-2 md:px-3 py-1 text-xs text-white font-semibold">
                              Open
                            </button>
                          </div>
                        </div>

                        <div className="flex  mb-10">
                          <div className="w-full p-2 md:p-3">
                            <div className="text-md leading-tight">
                              Normally, Drogon would kill anyone who'd seek to
                              harm his "mother", let alone someone who actually
                              killed her. Why didn't he kill Jon?
                            </div>
                          </div>
                        </div>

                        <div className="absolute bottom-2 left-3">
                          <div className="flex items-center justify-between  text-sm">
                            <div className="flex space-x-4 md:space-x-8">
                              <div className="flex cursor-pointer items-center transition hover:text-[#9cb3c9]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="mr-1.5 h-4 w-4 md:h-5 md:w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                  />
                                </svg>
                                <span className="text-xs md:text-sm">Quote</span>
                              </div>
                              <div className="flex cursor-pointer items-center transition hover:text-[#9cb3c9]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="mr-1.5 h-4 w-4 md:h-5 md:w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                  />
                                </svg>
                                <span className="text-xs md:text-sm">Like</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="absolute bottom-2 right-3">
                          <div className="flex items-center justify-between  text-sm">
                            <div className="flex space-x-4 md:space-x-8">
                              <div className="flex cursor-pointer items-center transition hover:text-[#9cb3c9]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="mr-1.5 h-4 w-4 md:h-5 md:w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="text-xs md:text-sm">
                                  balas
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative rounded  shadow-md bg-white">
                        <div className="flex w-full px-2 py-2 md:px-3 md:py-2 items-center justify-between border-b pb-2 md:pb-3 bg-white">
                          <div className="flex items-center ml-2">
                            <span className="text-sm text-gray-400">
                              Halaman 1 dari 4
                            </span>
                          </div>
                          <div className="flex items-center2 space-x-8">
                            <div className="flex px-1">
                              <button className="text-xs text-white px-2 py-1 rounded-full bg-blue-600 flex items-center mr-1.5 md:mr-2.5">
                                1
                              </button>
                              <button className=" text-xs mr-1.5 md:mr-2.5 flex items-center">
                                2
                              </button>
                              <button className="text-xs mr-1.5 md:mr-2.5 flex items-center">
                                3
                              </button>
                              <button className="text-xs mr-1.5 md:mr-2.5 flex items-center">
                                4
                              </button>
                              <button className="text-xs mr-1.5 md:mr-2.5 flex items-center">
                                5
                              </button>
                              <button className="text-xs  flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative rounded  shadow-md bg-white">
                        <div className="flex w-full p-2 md:p-3 items-center justify-between border-b pb-3 bg-gray-200">
                          <div className="flex items-center space-x-3">
                            <Avatar
                              name="bratface"
                              size={"42"}
                              round={true}
                            />
                            <div className="flex flex-col leading-tight">
                              <div className="text-sm md:text-lg leading-tight font-semibold">
                              Reply by bratface
                              </div>
                              <div className="text-sm">
                                <span>on Mei 29, 2019 at 5:38 PM</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex  mb-10">
                          <div className="w-full p-2 md:p-3">
                            <div className="p-2 border-l-4 border-blue-400 bg-gray-100 mb-3">
                              <div className="flex flex-col space-y-3">
                                <div>
                                  <span className="text-blue-500 font-semibold">@Strawberry Shortcake</span>
                                  <span>{" "}said:</span>
                                </div>
                                <div className="leading-tight">
                                Normally, Drogon would kill anyone who'd seek to harm his "mother", let alone someone who actually killed her. Why didn't he kill Jon?
                                </div>
                              </div>
                            </div>
                            <div className="text-md leading-tight">
                            This is only my opinion, but he didn't kill Jon because he realized that what he did was for the best. That is why he destroyed the 'Iron Throne', he knew that was the cause of her death. Just my opinion. There are thousands of people out there that would disagree with me.
                            </div>
                          </div>
                        </div>

                        <div className="absolute bottom-2 left-3">
                          <div className="flex items-center justify-between  text-sm">
                            <div className="flex space-x-4 md:space-x-8">
                              <div className="flex cursor-pointer items-center transition hover:text-[#9cb3c9]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="mr-1.5 h-4 w-4 md:h-5 md:w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                  />
                                </svg>
                                <span className="text-xs md:text-sm">Quote</span>
                              </div>
                              <div className="flex cursor-pointer items-center transition hover:text-[#9cb3c9]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="mr-1.5 h-4 w-4 md:h-5 md:w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                  />
                                </svg>
                                <span className="text-xs md:text-sm">4</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="absolute bottom-2 right-3">
                          <div className="flex items-center justify-between  text-sm">
                            <div className="flex space-x-4 md:space-x-8">
                              <div className="flex cursor-pointer items-center transition hover:text-[#9cb3c9]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="mr-1.5 h-4 w-4 md:h-5 md:w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="text-xs md:text-sm">
                                  balas
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative rounded  shadow-md bg-white">
                        <div className="flex w-full p-2 md:p-3 items-center justify-between border-b pb-3 bg-gray-200">
                          <div className="flex items-center space-x-3">
                            <Avatar
                              name="Philippe LeMarchand"
                              size={"42"}
                              round={true}
                            />
                            <div className="flex flex-col leading-tight">
                              <div className="text-sm md:text-lg leading-tight font-semibold">
                              Reply by Philippe LeMarchand
 
                              </div>
                              <div className="text-sm">
                                <span>on Mei 29, 2019 at 5:38 PM</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex ">
                          <div className="w-full p-2 md:p-3">
                            <div className="p-2 border-l-4 border-blue-400 bg-gray-100 mb-3">
                              <div className="flex flex-col space-y-3">
                                <div>
                                  <span className="text-blue-500 font-semibold">@Strawberry Shortcake</span>
                                  <span>{" "}said:</span>
                                </div>
                                <div className="leading-tight">
                                Normally, Drogon would kill anyone who'd seek to harm his "mother", let alone someone who actually killed her. Why didn't he kill Jon?
                                </div>
                              </div>
                            </div>
                            <div className="text-md leading-tight">
                            I think dragons are quite smart, but that they never really get to express it due to their loyalty to their master overshadowing it. Now that his master was gone, he finally got to make a decision of his own.
                            </div>
                          </div>
                        </div>

                        <div className="w-full p-2 md:px-3 md:py-2">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex space-x-4 md:space-x-8">
                              <div className="flex cursor-pointer items-center transition hover:text-[#9cb3c9]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="mr-1.5 h-4 w-4 md:h-5 md:w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                  />
                                </svg>
                                <span className="text-xs md:text-sm">Quote</span>
                              </div>
                              <div className="flex cursor-pointer items-center transition hover:text-[#9cb3c9]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="mr-1.5 h-4 w-4 md:h-5 md:w-5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                  />
                                </svg>
                                <span className="text-xs md:text-sm">4</span>
                              </div>
                            </div>
                            <div className="flex space-x-4 md:space-x-8">
                              <div className="flex cursor-pointer items-center transition hover:text-[#9cb3c9]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="mr-1.5 h-4 w-4 md:h-5 md:w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="text-xs md:text-sm">
                                  balas
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="w-full p-2 md:px-3 bg-gray-100">
                          <div className="flex items-center space-x-1">
                            <div>
                            <span className="text-sm text-blue-600">Lihat 5 balasan</span>
                            </div>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
                            </div>
                          </div>
                          
                        </div>

                      </div>

                      <Editor />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDiscuss;
