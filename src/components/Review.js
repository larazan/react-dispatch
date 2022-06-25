import React from 'react'

const Review = () => {
  return (
    <>
    <div className="py-2 border-b border-gray-300">
              <div className="flex-col pt-4">
                <div>
                  <span className="font-semibold text-xl capitalize">
                    Review
                  </span>
                </div>
                <div className="py-4">
                  <div className="flex items-center justify-center">
                    {" "}
                    <div className="rounded border p-3 shadow-md bg-white">
                      <div className="flex w-full items-center justify-between border-b pb-3">
                        <div className="flex items-center space-x-3">
                          <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
                          <div className="text-lg font-bold text-slate-700">
                            Joe Smith
                          </div>
                        </div>
                        <div className="flex items-center space-x-8">
                          <button className="rounded-2xl border border-green-300 bg-green-100 px-3 py-1 text-xs text-green-500 font-semibold">
                            Completed
                          </button>
                          <div className="flex-col space-y-1 text-xs text-neutral-500 w-32">
                            <span>2 hours ago</span>
                            <div>
                              <span>49 people found this review helpful</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex mt-4 mb-6 space-x-4">
                        <div className="w-2/3">
                          <div className="mb-3 font-bold">
                            Nulla sed leo tempus, feugiat velit vel?
                          </div>
                          <div className="text-sm text-neutral-600">
                            Aliquam a tristique sapien, nec bibendum urna.
                            Maecenas convallis dignissim turpis, non suscipit
                            mauris interdum at. Morbi sed gravida nisl, a
                            pharetra nulla. Etiam tincidunt turpis leo, ut
                            mollis ipsum consectetur quis. Etiam faucibus est
                            risus, ac condimentum mauris consequat nec.
                            Curabitur eget feugiat massa
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="rounded border border-gray-300 shadow">
                            <div className="flex justify-between border-b border-gray-300 bg-sky-300 px-4 py-1.5">
                              <div>
                                <span className="text-sm text-sky-600 font-semibold">
                                  Overall
                                </span>
                              </div>
                              <div>
                                <span className="text-sm text-sky-600 font-semibold">
                                  10
                                </span>
                              </div>
                            </div>
                            <div className="py-2 px-3 bg-white">
                              <div className="flex justify-between">
                                <div>
                                  <span className="text-sm text-neutral-600">
                                    Story
                                  </span>
                                </div>
                                <div>
                                  <span className="text-sm text-neutral-600">
                                    10
                                  </span>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <div>
                                  <span className="text-sm text-neutral-600">
                                    Acting/Cast
                                  </span>
                                </div>
                                <div>
                                  <span className="text-sm text-neutral-600">
                                    10
                                  </span>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <div>
                                  <span className="text-sm text-neutral-600">
                                    Music
                                  </span>
                                </div>
                                <div>
                                  <span className="text-sm text-neutral-600">
                                    10
                                  </span>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <div>
                                  <span className="text-sm text-neutral-600">
                                    Rewatch Value
                                  </span>
                                </div>
                                <div>
                                  <span className="text-sm text-neutral-600">
                                    10
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between text-slate-500">
                          <div className="flex space-x-4 md:space-x-8">
                            <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-1.5 h-5 w-5"
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
                              <span>125</span>
                            </div>
                            <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-1.5 h-5 w-5"
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
                              <span>4</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default Review