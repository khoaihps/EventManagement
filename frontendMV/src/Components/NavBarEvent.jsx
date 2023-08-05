import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Logo from "../assets/img/white-logo.png";
import MaleAva from "../assets/img/male-ava.png";

const NavBarEvent = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gray-800 sticky top-0 z-50 w-full">
      <div
        className={`flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8`}
      >
        <a className="block text-teal-600" href="/">
          <img src={Logo} style={{ height: 32 }} alt="Logo"></img>
        </a>
        <div className="flex flex-1 items-center justify-end md:justify-end">
          <button
            onClick={handleBackClick}
            className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
            style={{ marginRight: "10px" }}
          >
            <span className="absolute rounded-lg inset-0 border border-yellow-500 group-active:border-yellow-500"></span>
            <span className="block border rounded-lg border-yellow-500 bg-yellow-500 px-5 py-2.5 transition-transform active:border-yellow-500 active:bg-yellow-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
              Back
            </span>
          </button>
        </div>
        <div className="relative" ref={dropdownRef}>
          <div
            className="h-10 w-10 rounded-full bg-gray-500 cursor-pointer"
            onClick={handleProfileClick}
          >
            <img
              src={MaleAva}
              alt="Profile"
              className="h-full w-full rounded-full"
            />
          </div>
          {showDropdown && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
              <a
                href="/my-profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                My Profile
              </a>
              <a
                href="/logout"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Log out
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBarEvent;
