import React from "react";
import male from "../img/male-ava.png";
import "../style/huhu.css"
import managerData from "../database/manager"
import logout from "../img/image.png"

const Account = ({handleDismiss}) => {
    const handleClick = () => {
        handleDismiss(false);
    }
    return (
        <div>
            <div className="taskDetaill fixed inset-0 z-10">
                <div role="alert" className="rounded-xl border border-gray-100 bg-white p-4 shadow-xl absolute">
                    <div className={`w-[1000px] m-0 p-0 flex items-start gap-4`}>
                        <button className="text-gray-500 transition hover:text-gray-600 absolute top-[0px] right-[-0px]" onClick={handleClick}>
                            <span className="sr-only">Dismiss popup</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="huhu w-[500px] md:w-3/12 md:mx-2">
                            <div className="bg-white p-3 border-t-4 border-blue-600">
                                <div className="image overflow-hidden">
                                    <img className="h-auto w-full mx-auto"
                                         src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                         alt=""/>
                                </div>
                                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{managerData.firstName + " " + managerData.lastName}</h1>
                                <ul
                                    className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                    <li className="flex items-center py-3">
                                        <span>Status</span>
                                        <span className="ml-auto"><span
                                            className="bg-blue-600 py-1 px-2 rounded text-white text-sm">Active</span></span>
                                    </li>
                                    <li className="flex items-center py-3">
                                        <span>Member since</span>
                                        <span className="ml-auto">Nov 07, 2016</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="my-4"></div>
                            <div className="bg-white p-3 hover:shadow">
                                <div className="flex flex-col items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                                    <div>
                                        <img src={male} alt="pic"/>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="bg-white w-[500px] p-3 shadow-sm rounded-sm">
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span className="text-blue-600">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                    </svg>
                                </span>
                                <span className="tracking-wide">About</span>
                            </div>
                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-1 text-sm">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">First Name</div>
                                        <div className="px-4 py-2">{managerData.firstName}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Last Name</div>
                                        <div className="px-4 py-2">{managerData.lastName}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Date of Birth</div>
                                        <div className="px-4 py-2">{managerData.DOB}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Phone Number</div>
                                        <div className="px-4 py-2">{managerData.phone}</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Email.</div>
                                        <div className="px-4 py-2">
                                            <a className="text-blue-800">{managerData.email}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="absolute bottom-4 right-4 cursor-pointer group inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                        >
                              <span className="text-white absolute -start-full transition-all group-hover:start-4">
                                <img
                                    className="h-5 w-5 rtl:rotate-180 text-white"
                                    src={logout}
                                >
                                </img>
                              </span>

                            <span className="text-sm font-medium transition-all group-hover:ms-4">
                                Logout
                              </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;