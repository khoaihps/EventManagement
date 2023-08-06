import React from "react";

const EventTabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <nav aria-label="Tabs">
      <ul className="flex border-b border-gray-100">
        <li className="flex-1">
          <a
            className="relative block p-4"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }}
            href="#createevent"
          >
            <span
              className={`absolute inset-x-0 -bottom-px h-px w-full
                ${openTab === 1 ? "bg-yellow-500" : "bg-white"}`}
            ></span>

            <div
              className={`flex items-center justify-center gap-4 ${
                openTab === 1 ? "text-yellow-600" : "text-gray-400"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>

              <span className="text-sm font-medium"> Create event </span>
            </div>
          </a>
        </li>

        <li className="flex-1">
          <a
            className="relative block p-4"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }}
            href="#manageevent"
          >
            <span
              className={`absolute inset-x-0 -bottom-px h-px w-full
                ${openTab === 2 ? "bg-yellow-500" : "bg-white"}`}
            ></span>
            <div
              className={`flex items-center justify-center gap-4 ${
                openTab === 2 ? "text-yellow-600" : "text-gray-400"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>

              <span className="text-sm font-medium"> Manage event </span>
            </div>
          </a>
        </li>

        <li className="flex-1">
          <a
            className="relative block p-4"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(3);
            }}
            href="#history"
          >
            <span
              className={`absolute inset-x-0 -bottom-px h-px w-full
                ${openTab === 3 ? "bg-yellow-500" : "bg-white"}`}
            ></span>
            <div
              className={`flex items-center justify-center gap-4 ${
                openTab === 3 ? "text-yellow-600" : "text-gray-400"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>

              <span className="text-sm font-medium"> History </span>
            </div>
          </a>
        </li>

        <li className="flex-1">
          <a
            className="relative block p-4"
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(4);
            }}
            href="#notification"
          >
            <span
              className={`absolute inset-x-0 -bottom-px h-px w-full
                ${openTab === 4 ? "bg-yellow-500" : "bg-white"}`}
            ></span>
            <div
              className={`flex items-center justify-center gap-4 ${
                openTab === 4 ? "text-yellow-600" : "text-gray-400"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>

              <span className="text-sm font-medium"> Notifications </span>
            </div>
          </a>
        </li>
      </ul>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="px-4 py-5 flex-auto">
          <div className="tab-content tab-space">
            <div
              className={openTab === 1 ? "block" : "hidden"}
              id="createevent"
            >
              <form className="flex w-full space-x-3">
                <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-gray-800 rounded-lg shadow dark:bg-gray-800">
                  <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                    Create event
                  </div>
                  <div className="flex flex-col mb-2 max-w-xl m-auto">
                    <div className=" relative ">
                      <input
                        type="text"
                        id="event-name"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Event name"
                      />
                    </div>
                  </div>

                  <div className="grid max-w-xl grid-cols-2 gap-2 m-auto">
                    <div className="col-span-2 lg:col-span-1">
                      <div className=" relative ">
                        <select
                          className="block w-full py-2 px-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 flex-1"
                          name="event-type"
                        >
                          <option value>Event type</option>
                          <option value="concert">Concert</option>
                          <option value="wedding">Wedding</option>
                          <option value="exhibition">Exhibition</option>
                          <option value="academic-event">Academic event</option>
                          <option value="workshop">Workshop</option>
                          <option value="virtual-event">Virtual event</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                      <div className=" relative ">
                        <select
                          className="block w-full py-2 px-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 flex-1"
                          name="event-size"
                        >
                          <option value>Event size</option>
                          <option value="small">
                            Small &#40; &lt; 50&#41;
                          </option>
                          <option value="medium">
                            Medium &#40;50 - 250&#41;
                          </option>
                          <option value="large">
                            Large &#40;250 - 10000&#41;
                          </option>
                          <option value="Mega">
                            Mega &#40; &gt; 10000&#41;
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-2 mb-2 max-w-xl m-auto">
                    <div className=" relative ">
                      <input
                        type="text"
                        id="event-name"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                  <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                    <div className="col-span-2 lg:col-span-1">
                      <div className=" relative ">
                        <label
                          htmlFor="start-time"
                          className="block text-sm font-medium text-white"
                        >
                          Start
                        </label>
                        <label className="text-gray-700" htmlFor="time">
                          <input
                            type="datetime-local"
                            className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                      <div className=" relative ">
                        <label
                          htmlFor="end-time"
                          className="block text-sm font-medium text-white"
                        >
                          End
                        </label>

                        <label className="text-gray-700" htmlFor="time">
                          <input
                            type="datetime-local"
                            className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-2 mb-2 max-w-xl m-auto">
                    <div className=" relative ">
                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-sm font-medium text-white"
                        >
                          Budget
                        </label>
                        <div className="relative mt-1 rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">$</span>
                          </div>
                          <input
                            type="text"
                            name="budget"
                            id="budget"
                            className="block w-full px-4 py-2 pr-12 border-t border-b border-l border-yellow-400 rounded-md focus:ring-yellow-400 focus:border-yellow-400 pl-7 sm:text-sm"
                            placeholder={0.0}
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center">
                            <label htmlFor="currency" className="sr-only">
                              Currency
                            </label>
                            <select
                              id="Currency"
                              name="currency"
                              className="h-full px-4 py-2 pl-2 text-gray-500 bg-transparent border-t border-b border-r border-transparent border-yellow-400 focus:ring-yellow-400 bo focus:border-yellow-400 pr-7 sm:text-sm rounded-r-md"
                            >
                              <option>USD</option>
                              <option>VND</option>
                              <option>EUR</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-2 mb-2 max-w-xl m-auto">
                    <div className=" relative ">
                      <label className="text-gray-700" htmlFor="name">
                        <textarea
                          className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          id="comment"
                          placeholder="Additional information"
                          name="addition"
                          rows={5}
                          cols={40}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col mb-2 max-w-xl m-auto mt-3">
                    <button
                      type="submit"
                      className="py-2 px-4  bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-700 focus:ring-offset-yellow-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className={openTab === 2 ? "block" : "hidden"}
              id="manageevent"
            >
              <div className="container max-w-3xl px-4 mx-auto sm:px-8">
                <div className="py-8">
                  <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                    <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                      <table className="min-w-full leading-normal">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                            >
                              Type
                            </th>
                            <th
                              scope="col"
                              className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                            >
                              Created at
                            </th>
                            <th
                              scope="col"
                              className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                            >
                              status
                            </th>
                            <th
                              scope="col"
                              className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                            ></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <div className="flex items-center">
                                <div>
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    Born Pink
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Concert
                              </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <p className="text-gray-900 whitespace-no-wrap">
                                12/06/2023
                              </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-yellow-900">
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 bg-yellow-200 rounded-full opacity-50"
                                ></span>
                                <span className="relative">pending</span>
                              </span>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <a
                                href="#"
                                className="inline-block rounded bg-yellow-500 px-4 py-2 text-xs font-medium text-white hover:bg-gray-700"
                              >
                                View
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <div className="flex items-center">
                                <div>
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    Rap Viet
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Concert
                              </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <p className="text-gray-900 whitespace-no-wrap">
                                01/10/2023
                              </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 bg-green-200 rounded-full opacity-50"
                                ></span>
                                <span className="relative">active</span>
                              </span>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <a
                                href="#"
                                className="inline-block rounded bg-yellow-500 px-4 py-2 text-xs font-medium text-white hover:bg-gray-700"
                              >
                                View
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <div className="flex items-center">
                                <div>
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    Chào cờ
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Academic event
                              </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <p className="text-gray-900 whitespace-no-wrap">
                                01/10/2023
                              </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 bg-green-200 rounded-full opacity-50"
                                ></span>
                                <span className="relative">active</span>
                              </span>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <a
                                href="#"
                                className="inline-block rounded bg-yellow-500 px-4 py-2 text-xs font-medium text-white hover:bg-gray-700"
                              >
                                View
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <div className="flex items-center">
                                <div>
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    Hello world
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Virtual event
                              </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <p className="text-gray-900 whitespace-no-wrap">
                                23/09/2023
                              </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 bg-green-200 rounded-full opacity-50"
                                ></span>
                                <span className="relative">active</span>
                              </span>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <a
                                href="#"
                                className="inline-block rounded bg-yellow-500 px-4 py-2 text-xs font-medium text-white hover:bg-gray-700"
                              >
                                View
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={openTab === 3 ? "block" : "hidden"} id="history">
              <div className="container max-w-3xl px-4 mx-auto sm:px-8">
                <div className="py-8">
                  <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                    <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                      <table className="min-w-full leading-normal">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                            >
                              Type
                            </th>
                            <th
                              scope="col"
                              className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                            >
                              Created at
                            </th>
                            <th
                              scope="col"
                              className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                            >
                              status
                            </th>
                            <th
                              scope="col"
                              className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                            ></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <div className="flex items-center">
                                <div>
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    Born Pink
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Concert
                              </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <p className="text-gray-900 whitespace-no-wrap">
                                12/06/2023
                              </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-gray-700">
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 bg-gray-200 rounded-full opacity-50"
                                ></span>
                                <span className="relative">finished</span>
                              </span>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <a
                                href="#"
                                className="inline-block rounded bg-yellow-500 px-4 py-2 text-xs font-medium text-white hover:bg-gray-700"
                              >
                                View
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <div className="flex items-center">
                                <div>
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    Rap Viet
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Concert
                              </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <p className="text-gray-900 whitespace-no-wrap">
                                01/10/2023
                              </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-gray-900">
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 bg-gray-200 rounded-full opacity-50"
                                ></span>
                                <span className="relative">finished</span>
                              </span>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <a
                                href="#"
                                className="inline-block rounded bg-yellow-500 px-4 py-2 text-xs font-medium text-white hover:bg-gray-700"
                              >
                                View
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <div className="flex items-center">
                                <div>
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    Chào cờ
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Academic event
                              </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <p className="text-gray-900 whitespace-no-wrap">
                                01/10/2023
                              </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 bg-red-200 rounded-full opacity-50"
                                ></span>
                                <span className="relative">cancelled</span>
                              </span>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <a
                                href="#"
                                className="inline-block rounded bg-yellow-500 px-4 py-2 text-xs font-medium text-white hover:bg-gray-700"
                              >
                                View
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <div className="flex items-center">
                                <div>
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    Hello world
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <p className="text-gray-900 whitespace-no-wrap">
                                Virtual event
                              </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <p className="text-gray-900 whitespace-no-wrap">
                                23/09/2023
                              </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-red-900">
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 bg-red-200 rounded-full opacity-50"
                                ></span>
                                <span className="relative">cancelled</span>
                              </span>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                              <a
                                href="#"
                                className="inline-block rounded bg-yellow-500 px-4 py-2 text-xs font-medium text-white hover:bg-gray-700"
                              >
                                View
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={openTab === 4 ? "block" : "hidden"}
              id="notification"
            >
              <p>
                Efficiently unleash cross-media information without cross-media
                value. Quickly maximize timely deliverables for real-time
                schemas.
                <br />
                <br /> Dramatically maintain clicks-and-mortar solutions without
                functional solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EventTabs;
