import React, { useState, useEffect } from "react";
import EventService, { getHistoryEvent } from "../services/event.service";
import "../services/event.service";
import { getManageEvent } from "../services/event.service";
import { formatDate } from "../services/util";
import PopUp from "./PopUp";

const EventTabs = () => {
  const [openTab, setOpenTab] = React.useState(2);
  const [eventData, setEventData] = useState([]);
  const [historyData, setHistoryData] = useState([]);

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [type_of_event, setTypeOfEvent] = useState("");
  const [type_of_eventError, setTypeOfEventError] = useState("");

  const [size, setSize] = useState("");
  const [sizeError, setSizeError] = useState("");

  const [place, setPlace] = useState("");
  const [placeError, setPlaceError] = useState("");

  const [deadline, setDeadline] = useState("");
  const [deadlineError, setDeadlineError] = useState("");

  const [budget, setBudget] = useState("");
  const [budgetError, setBudgetError] = useState("");

  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [buttonView, setButtonView] = useState(false);

  const handleEventNameChange = (event) => {
    setNameError("");
    setName(event.target.value);
  };

  const handleEventTypeChange = (event) => {
    setTypeOfEventError("");
    setTypeOfEvent(event.target.value);
  };

  const handleEventSizeChange = (event) => {
    setSizeError("");
    setSize(event.target.value);
  };

  const handleEventPlaceChange = (event) => {
    setPlaceError("");
    setPlace(event.target.value);
  };

  const handleEventDeadlineChange = (event) => {
    setDeadlineError("");
    setDeadline(event.target.value);
  };

  const handleEventDescriptionChange = (event) => {
    setDescriptionError("");
    setDescription(event.target.value);
  };

  const handleEventBudgetChange = (event) => {
    setBudgetError("");
    setBudget(event.target.value);
  };

  const handleSubmitEvent = async (event) => {
    event.preventDefault();
    try {
      const { success, error } = await EventService.createEvent(
        name,
        deadline,
        place,
        type_of_event,
        description,
        size,
        budget
      );

      if (success) {
        console.log("Event proposed successfully:");
        alert("Event proposed successfully!");
        window.location.reload(); // Refresh the page
      } else {
        console.log("Event create failed:", error);
      }
    } catch (error) {
      console.error("An error occurred during event creation:", error);
    }
    if (deadline === "") {
    } else {
      const currentDateTime = new Date();
      const sevenDaysAfterCurrentTime = new Date();
      sevenDaysAfterCurrentTime.setDate(
        sevenDaysAfterCurrentTime.getDate() + 7
      );

      if (
        new Date(deadline) <= currentDateTime ||
        new Date(deadline) <= sevenDaysAfterCurrentTime
      ) {
        setDeadlineError(
          "The event must be booked at least 7 days before it starts"
        );
      }
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await getManageEvent();
      console.log("Data from API:", data);
      if (data) {
        setEventData(data);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchHistory = async () => {
      const data = await getHistoryEvent();
      console.log("History from API:", data);
      if (data) {
        setHistoryData(data);
      }
    };

    fetchHistory();
  }, []);
  const openPopup = (event) => {
    setSelectedEvent(event);
    setButtonView(true);
  };

  const closePopup = () => {
    setSelectedEvent(null);
    setButtonView(false);
  };
  return (
    <nav aria-label="Tabs" className="">
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
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded h-auto">
        <div className="px-4 py-5 flex-auto">
          <div className="tab-content tab-space">
            <div
              className={openTab === 1 ? "block" : "hidden"}
              id="createevent"
            >
              <form
                action="/"
                className="flex w-full space-x-3"
                onSubmit={handleSubmitEvent}
              >
                <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-gray-800 rounded-lg shadow dark:bg-gray-800">
                  <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                    Create event
                  </div>
                  <div className="flex flex-col mb-2 max-w-xl m-auto">
                    <div className=" relative ">
                      {name && (
                        <p className="absolute text-sm text-red-500">
                          {nameError}
                        </p>
                      )}
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Event name"
                        value={name}
                        onChange={handleEventNameChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid max-w-xl grid-cols-2 gap-2 m-auto">
                    <div className="col-span-2 lg:col-span-1">
                      <div className=" relative ">
                        {type_of_event && (
                          <p className="absolute text-sm text-red-500">
                            {type_of_eventError}
                          </p>
                        )}
                        <select
                          className="block w-full py-2 px-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 flex-1"
                          id="type_of_event"
                          name="type_of_event"
                          value={type_of_event}
                          onChange={handleEventTypeChange}
                          required
                        >
                          <option value="">Event type</option>
                          <option value="Social">Social</option>
                          <option value="Community">Community</option>
                          <option value="Educational">Educational</option>
                          <option value="Cultural Event">Cultural Event</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                      <div className=" relative ">
                        {size && (
                          <p className="absolute text-sm text-red-500">
                            {sizeError}
                          </p>
                        )}
                        <select
                          className="block w-full py-2 px-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 flex-1"
                          name="event-size"
                          id="size"
                          value={size}
                          onChange={handleEventSizeChange}
                          required
                        >
                          <option value="">Event size</option>
                          <option value="Small">
                            Small &#40; &lt; 50&#41;
                          </option>
                          <option value="Medium">
                            Medium &#40;50 - 250&#41;
                          </option>
                          <option value="Large">
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
                      {place && (
                        <p className="absolute text-sm text-red-500">
                          {placeError}
                        </p>
                      )}
                      <input
                        type="text"
                        id="event-address"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Address"
                        value={place}
                        onChange={handleEventPlaceChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-2 mb-2 max-w-xl m-auto">
                    <div className=" relative ">
                      <label
                        htmlFor="start-time"
                        className="block text-sm font-medium text-white"
                      >
                        Start
                      </label>
                      <label className="text-gray-700" htmlFor="time">
                        {deadline && (
                          <p className="absolute text-sm text-red-500">
                            {deadlineError}
                          </p>
                        )}
                        <input
                          id="event-time"
                          type="date"
                          className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          value={deadline}
                          onChange={handleEventDeadlineChange}
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col mt-2 mb-2 max-w-xl m-auto">
                    <div className=" relative ">
                      {budget && (
                        <p className="absolute text-sm text-red-500">
                          {budgetError}
                        </p>
                      )}
                      <input
                        type="number"
                        id="budget"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Budget (.000.000 VND)"
                        value={budget}
                        onChange={handleEventBudgetChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-2 mb-2 max-w-xl m-auto">
                    <div className=" relative ">
                      <label className="text-gray-700" htmlFor="name">
                        {description && (
                          <p className="absolute text-sm text-red-500">
                            {descriptionError}
                          </p>
                        )}
                        <textarea
                          className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          id="comment"
                          placeholder="Tell us more about your event"
                          name="addition"
                          rows={5}
                          cols={40}
                          value={description}
                          onChange={handleEventDescriptionChange}
                          required
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
                          {eventData.length > 0 ? (
                            eventData.map((event) => (
                              <tr>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                  <div className="flex items-center">
                                    <div>
                                      <p className="text-gray-900 whitespace-no-wrap">
                                        {event.name}
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {event.type_of_event}
                                  </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {formatDate(event.date_proposed)}
                                  </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                  <span
                                    className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
                                      event.status === "pending"
                                        ? "text-yellow-900"
                                        : "text-green-900"
                                    }`}
                                  >
                                    <span
                                      aria-hidden="true"
                                      className={`absolute inset-0 ${
                                        event.status === "pending"
                                          ? "bg-yellow-200"
                                          : "bg-green-200"
                                      } rounded-full opacity-50`}
                                    ></span>
                                    <span className="relative">
                                      {event.status}
                                    </span>
                                  </span>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                  <button
                                    href="#"
                                    className="inline-block rounded bg-yellow-500 px-4 py-2 text-xs font-medium text-white hover:bg-gray-700"
                                    onClick={() => openPopup(event)}
                                  >
                                    View
                                  </button>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="5">
                                <p className="text-gray-500">
                                  No events available
                                </p>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {selectedEvent && (
                  <PopUp trigger={buttonView} setTrigger={closePopup}>
                    <div>
                      <h1 className="font-bold inline mr-2">Event Details</h1>
                      <span
                        className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
                          selectedEvent.status === "pending"
                            ? "text-yellow-900"
                            : selectedEvent.status === "open"
                            ? "text-green-900"
                            : selectedEvent.status === "closed"
                            ? "text-blue-900"
                            : selectedEvent.status === "rejected"
                            ? "text-red-900"
                            : ""
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`absolute inset-0 ${
                            selectedEvent.status === "pending"
                              ? "bg-yellow-200"
                              : selectedEvent.status === "open"
                              ? "bg-green-200"
                              : selectedEvent.status === "closed"
                              ? "bg-blue-200"
                              : selectedEvent.status === "rejected"
                              ? "bg-red-200"
                              : ""
                          } rounded-full opacity-50`}
                        ></span>
                        <span className="relative">{selectedEvent.status}</span>
                      </span>
                    </div>
                    <p className="font-italic">id: {selectedEvent._id}</p>
                    <br></br>
                    <div className="flow-root">
                      <dl className="-my-3 divide-y divide-gray-100 text-sm">
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Name</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selectedEvent.name}
                          </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Type</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selectedEvent.type_of_event}
                          </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Date</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {formatDate(selectedEvent.deadline)}
                          </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">
                            Proposed date
                          </dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {formatDate(selectedEvent.date_proposed)}
                          </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Address</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selectedEvent.place}
                          </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Size</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selectedEvent.size}
                          </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Budget</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selectedEvent.budget}.000.000 VND
                          </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">
                            Description
                          </dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selectedEvent.description}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </PopUp>
                )}
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
                          {historyData.length > 0 ? (
                            historyData.map((event) => (
                              <tr>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                  <div className="flex items-center">
                                    <div>
                                      <p className="text-gray-900 whitespace-no-wrap">
                                        {event.name}
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {event.type_of_event}
                                  </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {formatDate(event.date_proposed)}
                                  </p>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                  <span
                                    className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
                                      event.status === "closed"
                                        ? "text-blue-900"
                                        : event.status === "rejected"
                                        ? "text-red-900"
                                        : ""
                                    }`}
                                  >
                                    <span
                                      aria-hidden="true"
                                      className={`absolute inset-0 ${
                                        event.status === "closed"
                                          ? "bg-blue-200"
                                          : event.status === "rejected"
                                          ? "bg-red-200"
                                          : ""
                                      } rounded-full opacity-50`}
                                    ></span>
                                    <span className="relative">
                                      {event.status}
                                    </span>
                                  </span>
                                </td>
                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                  <button
                                    href="#"
                                    className="inline-block rounded bg-yellow-500 px-4 py-2 text-xs font-medium text-white hover:bg-gray-700"
                                    onClick={() => openPopup(event)}
                                  >
                                    View
                                  </button>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <p className="text-gray-500">No events available</p>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {selectedEvent && (
                  <PopUp trigger={buttonView} setTrigger={closePopup}>
                    <div>
                      <h1 className="font-bold inline mr-2">Event Details</h1>
                      <span
                        className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
                          selectedEvent.status === "pending"
                            ? "text-yellow-900"
                            : selectedEvent.status === "open"
                            ? "text-green-900"
                            : selectedEvent.status === "closed"
                            ? "text-blue-900"
                            : selectedEvent.status === "rejected"
                            ? "text-red-900"
                            : ""
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`absolute inset-0 ${
                            selectedEvent.status === "pending"
                              ? "bg-yellow-200"
                              : selectedEvent.status === "open"
                              ? "bg-green-200"
                              : selectedEvent.status === "closed"
                              ? "bg-blue-200"
                              : selectedEvent.status === "rejected"
                              ? "bg-red-200"
                              : ""
                          } rounded-full opacity-50`}
                        ></span>
                        <span className="relative">{selectedEvent.status}</span>
                      </span>
                    </div>
                    <p className="font-italic">id: {selectedEvent._id}</p>
                    <br></br>
                    <div className="flow-root">
                      <dl className="-my-3 divide-y divide-gray-100 text-sm">
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Name</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selectedEvent.name}
                          </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Type</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selectedEvent.type_of_event}
                          </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Date</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {formatDate(selectedEvent.deadline)}
                          </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">
                            Proposed date
                          </dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {formatDate(selectedEvent.date_proposed)}
                          </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Address</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selectedEvent.place}
                          </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Size</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selectedEvent.size}
                          </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">Budget</dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selectedEvent.budget}.000.000 VND
                          </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">
                            Description
                          </dt>
                          <dd className="text-gray-700 sm:col-span-2">
                            {selectedEvent.description}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </PopUp>
                )}
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
