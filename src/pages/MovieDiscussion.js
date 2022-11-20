import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

import discussions from "../assets/data/discussions.json";

const MovieDiscussion = () => {
  const statusses = (status) => {
    let color = "";
    switch (status) {
      case "open":
        color = "green";
        break;
      case "closed":
        color = "red";
        break;
      case "pending":
        color = "yellow";
        break;
    }

    return (
      <span
        class={` bg-${color}-200 text-${color}-600 py-1 px-3 rounded-full text-xs capitalize`}
      >
        {status}
      </span>
    );
  };

  return (
    <>
      <div className="w-full lg:w-4/6 mx-auto">
        <div class="overflow-x-auto">
          <div class="min-w-screen bg-white flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
            <div class="w-full py-4 lg:w-5/6 px-4">
              <div className="flex flex-col md:flex-row mb-3 justify-between">
                <span className="text-2xl">Discuss Parasite</span>
                <div className="justify-center items-center text-center">
                  <button className="border border-blue-500 bg-sky-600 hover:bg-sky-700  text-white block rounded-lg font-bold py-2 w-full  px-4 ">
                    <span>New Discussion</span>
                  </button>
                </div>
              </div>
              <div class="bg-white shadow-md rounded my-2 mt-8">
                <table class="min-w-max2 w-full table-auto">
                  <thead>
                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      <th class="py-3 px-6 text-left w-5/12">Subject</th>
                      <th class="py-3 px-6 text-center w-2/12">Users</th>
                      <th class="py-3 px-6 text-center w-1/12">Status</th>
                      <th class="py-3 px-6 text-center w-1/12">Replies</th>
                      <th class="py-3 px-6 text-center w-3/12">Last Reply</th>
                    </tr>
                  </thead>
                  <tbody class="text-gray-600 text-sm font-light w-full overflow-x-auto">
                    {discussions.map((discuss, id) => (
                      <tr
                        class="border-b border-gray-200 hover:bg-gray-100 w-full"
                        key={id}
                      >
                        <td class="py-3 px-3 text-left whitespace-nowrap2 w-5/12">
                          <div class="flex items-center">
                            <div class="mr-2">
                              <Avatar
                                name={discuss.name}
                                size={40}
                                round={true}
                              />
                            </div>
                            <Link to={"/movie/discuss"}>
                            <div className="leading-tight">
                              <span class="font-medium">{discuss.subject}</span>
                            </div>
                            </Link>
                          </div>
                        </td>
                        <td class="py-3 px-6 text-left w-2/12">
                          <div class="flex items-center justify-center">
                            <img
                              class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125"
                              src="https://randomuser.me/api/portraits/men/1.jpg"
                            />
                            <img
                              class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                              src="https://randomuser.me/api/portraits/women/2.jpg"
                            />
                            <img
                              class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125"
                              src="https://randomuser.me/api/portraits/men/3.jpg"
                            />
                          </div>
                        </td>
                        <td class="py-3 px-6 text-center w-1/12">
                          {statusses(discuss.status)}
                        </td>
                        <td class="py-3 px-6 text-center w-1/12">
                          <span>{discuss.reply}</span>
                        </td>
                        <td class="py-3 px-6 text-right w-3/12">
                          <div class="flex flex-col item-center justify-center">
                            <span>{discuss.created_at}</span>
                            <div>
                              by
                              <span className="ml-2 text-blue-300">
                                raze464
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDiscussion;
