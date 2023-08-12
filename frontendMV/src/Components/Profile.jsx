import "../App.css";
import MaleAva from "../assets/img/male-ava.png";
import AuthService from "../services/auth.service";
import { getCustomerInfo } from "../services/user.service";
import { useEffect, useState } from "react";
import { formatDate } from "../services/util";

const Profile = () => {
  const [customerData, setCustomerData] = useState([]);
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

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div className="h-64 bg-gray-200 lg:h-screen">
        <div className="relative block mt-5 mb-2">
          <img
            alt="profile"
            src={MaleAva}
            className="mx-auto object-cover rounded-full h-44 w-44 bg-gray-800 "
          />
        </div>
        <div className="flex justify-center text-gray-800 font-bold italic">
          Username: {customerData.username}
        </div>
        <div className="flex justify-center text-gray-800 font-bold italic">
          ID: {AuthService.getCurrentUser().id}
        </div>
      </div>
      <div className="h-32 rounded-lg lg:col-span-2 lg:h-auto md:h-auto">
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
      </div>
    </div>
  );
};

export default Profile;
