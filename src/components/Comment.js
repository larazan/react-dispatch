import React from 'react'

const Comment = () => {
  return (
    <>
    <div className="py-2 border-b-2 border-[#1f364d]">
              <div className="flex-col pt-4">
                <div>
                  <span className="font-semibold text-xl text-[#9cb3c9] capitalize">
                    Comments
                  </span>
                </div>
                <div className="py-4">
                  <div class="antialiased p-3 mx-auto max-w-screen-sm bg-transparent">
                    <div class="space-y-4 py-4 ml-2">
                      <div class="flex">
                        <div class="flex-shrink-0 mr-0">
                          <img
                            class="mt-2 border rounded-full w-8 h-8 sm:w-10 sm:h-10"
                            src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                            alt=""
                          />
                        </div>
                        <div class="flex-1 px-4 py-2 sm:px-4 sm:py-2 leading-relaxed">
                          <strong className='text-[#5aa3ed]'>Sarah</strong>{" "}
                          <span class="text-xs text-gray-400">3:34 PM</span>
                          <p class="text-sm text-[#9cb3c9]">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua.
                          </p>
                          <div class="mt-4 flex items-center">
                            <div class="flex -space-x-2 mr-2">
                              <img
                                class="rounded-full w-6 h-6 border border-white"
                                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                                alt=""
                              />
                              <img
                                class="rounded-full w-6 h-6 border border-white"
                                src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                                alt=""
                              />
                            </div>
                            <div class="text-sm text-gray-500 font-semibold">
                              5 Replies
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="flex">
                        <div class="flex-shrink-0 mr-0">
                          <img
                            class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                            src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                            alt=""
                          />
                        </div>
                        <div class="flex-1 px-4 py-2 sm:px-4 sm:py-2 leading-relaxed">
                          <strong>Sarah</strong>{" "}
                          <span class="text-xs text-gray-400">3:34 PM</span>
                          <p class="text-sm">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua.
                          </p>
                          <div class="mt-4 flex items-center">
                            <div class="flex -space-x-2 mr-2">
                              <img
                                class="rounded-full w-6 h-6 border border-white"
                                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                                alt=""
                              />
                              <img
                                class="rounded-full w-6 h-6 border border-white"
                                src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                                alt=""
                              />
                            </div>
                            <div class="text-sm text-gray-500 font-semibold">
                              5 Replies
                            </div>
                          </div>
                          <div class="py-6">
                            <form class="bg-white p-0 w-full ">
                              <textarea
                                name="message"
                                placeholder="Type something..."
                                class=" focus:outline-none  w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"
                              ></textarea>
                              <footer class="flex justify-end mt-1 space-x-1">
                                <button class="flex items-center py-2 px-4 rounded text-sm bg-[#007ac9] text-white shadow">
                                  Submit
                                </button>
                                <button class="flex items-center py-2 px-4 rounded text-sm bg-[#e5e5e5]">
                                  Cancel
                                </button>
                              </footer>
                            </form>
                          </div>
                        </div>
                      </div>

                      <div class="flex">
                        <div class="flex-shrink-0 mr-0">
                          <img
                            class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                            src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                            alt=""
                          />
                        </div>
                        <div class="flex-1 px-4 py-2 sm:px-4 sm:py-2 leading-relaxed">
                          <strong>Sarah</strong>{" "}
                          <span class="text-xs text-gray-400">3:34 PM</span>
                          <p class="text-sm">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua.
                          </p>
                          <h4 class="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">
                            Replies
                          </h4>
                          <div class="space-y-4">
                            <div class="flex">
                              <div class="flex-shrink-0 mr-0">
                                <img
                                  class="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                                  src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                  alt=""
                                />
                              </div>
                              <div class="flex-1 bg-white px-4 py-2 sm:px-4 sm:py-2 leading-relaxed">
                                <strong>Sarah</strong>{" "}
                                <span class="text-xs text-gray-400">
                                  3:34 PM
                                </span>
                                <p class="text-xs sm:text-sm">
                                  Lorem ipsum dolor sit amet, consetetur
                                  sadipscing elitr, sed diam nonumy eirmod
                                  tempor invidunt ut labore et dolore magna
                                  aliquyam erat, sed diam voluptua.
                                </p>
                              </div>
                            </div>
                            <div class="flex">
                              <div class="flex-shrink-0 mr-3">
                                <img
                                  class="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                                  src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                  alt=""
                                />
                              </div>
                              <div class="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                <strong>Sarah</strong>{" "}
                                <span class="text-xs text-gray-400">
                                  3:34 PM
                                </span>
                                <p class="text-xs sm:text-sm">
                                  Lorem ipsum dolor sit amet, consetetur
                                  sadipscing elitr, sed diam nonumy eirmod
                                  tempor invidunt ut labore et dolore magna
                                  aliquyam erat, sed diam voluptua.
                                </p>
                              </div>
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

export default Comment