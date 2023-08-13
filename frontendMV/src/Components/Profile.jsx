import "../App.css";
import MaleAva from "../assets/img/male-ava.png";
import AuthService from "../services/auth.service";
import { getCustomerInfo } from "../services/user.service";
import { useEffect, useState } from "react";
import { formatDate } from "../services/util";
import BGIMG from "../assets/img/male-ava.png";
import PopUp from "./PopUp";

const Profile = () => {
  const [customerData, setCustomerData] = useState([]);
  const [buttonEdit, setButtonEdit] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCustomerInfo();
      console.log("Data from API:", data);
      if (data) {
        setCustomerData(data);
      }
    };
    fetchData();
  }, []);
  const openPopup = (event) => {
    setButtonEdit(true);
  };

  const closePopup = () => {
    setButtonEdit(false);
  };
  const divStyle = {
    backgroundImage: `url(${BGIMG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div
        className="h-64 bg-gray-200 lg:h-screen xl:h-screen h-1/2"
        style={divStyle}
      >
        <div className="relative block mt-5 mb-2">
          <img
            alt="profile"
            src={MaleAva}
            className="mx-auto object-cover rounded-full h-44 w-44 bg-gray-800 "
          />
        </div>
        <div className="flex justify-center text-yellow-500 font-bold italic">
          Username: {customerData.username}
        </div>
        <div className="flex justify-center text-yellow-500 font-bold italic">
          ID: {AuthService.getCurrentUser().id}
        </div>
      </div>
      <div className="h-32 rounded-lg lg:col-span-2 h-screen">
        <div className="mb-5 mt-3">
          <h1 className="font-bold">User Information</h1>
        </div>
        <div className="flow-root">
          <dl className="-my-3 divide-y divide-gray-100 text-sm">
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="ml-2 font-medium text-gray-900">First Name</dt>
              <dd className="text-gray-700 sm:col-span-2">
                {customerData.firstName}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="ml-2 font-medium text-gray-900">Last Name</dt>
              <dd className="text-gray-700 sm:col-span-2">
                {customerData.lastName}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="ml-2 font-medium text-gray-900">Date of Birth</dt>
              <dd className="text-gray-700 sm:col-span-2">
                {formatDate(customerData.DOB)}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="ml-2 font-medium text-gray-900">Email</dt>
              <dd className="text-gray-700 sm:col-span-2">
                {customerData.email}
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="ml-2 font-medium text-gray-900">Phone</dt>
              <dd className="text-gray-700 sm:col-span-2">
                {customerData.phone}
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="ml-2 font-medium text-gray-900">Address</dt>
              <dd className="text-gray-700 sm:col-span-2">
                {customerData.address}
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-4">
          <button
            className="mr-2 group relative inline-flex items-center overflow-hidden rounded bg-yellow-500 px-8 py-3 text-white focus:outline-none focus:ring active:bg-yellow-400"
            href="#"
            onClick={() => openPopup(customerData)}
          >
            <span className="absolute -start-full transition-all group-hover:start-4 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:ms-4">
              Edit Profile
            </span>
          </button>

          {/* Base - Left */}

          <a
            className="group relative inline-flex items-center overflow-hidden rounded bg-red-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-red-500"
            href="/download"
          >
            <span className="absolute -end-full transition-all group-hover:end-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:me-4">
              Delete account
            </span>
          </a>
        </div>
        {customerData && (
          <PopUp trigger={buttonEdit} setTrigger={closePopup}></PopUp>
        )}
      </div>
    </div>
  );
};

export default Profile;
