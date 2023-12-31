import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../assets/img/white-logo.png";
import AuthService from "../services/auth.service";
import MaleAva from "../assets/img/male-ava.png";
import { getCustomerInfo } from "../services/user.service";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = AuthService.getCurrentUser();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
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

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
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

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    AuthService.logout(); // Call your logout logic from the AuthService here
    localStorage.removeItem("user");
    navigate("/customer/login"); // Redirect to the login page after logout
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-gray-800 sticky top-0 z-50 w-full">
      <div className={`flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8`}>
        <a className="block text-teal-600" href="/">
          <img src={Logo} style={{ height: 32 }} alt="Logo"></img>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav
            aria-label="Global"
            className={`hidden md:block ${isMenuOpen ? "block" : "hidden"}`}
          >
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-white transition hover:text-gray-500/75"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-gray-500/75"
                  href="/customer/about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-gray-500/75"
                  href="/customer/event"
                >
                  Your Events
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-gray-500/75"
                  href="#contact"
                  onClick={handleContactClick}
                >
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {user ? (
          <a
            className="text-white flex items-center gap-4 mx-auto justify-end transition hover:text-gray-500/75"
            href="/customer/profile"
          >
            Hi, {customerData.username}
          </a>
        ) : (
          <></>
        )}
        <div className="flex items-center gap-4 mx-auto justify-end">
          {user ? (
            <div>
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
                      href="/customer/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Profile
                    </a>
                    <a
                      href="/customer/password"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Change Password
                    </a>
                    <a
                      href="/customer/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Log out
                    </a>
                  </div>
                )}
              </div>
            </div>
          ) : (
            // If the user is null, render the login button
            <div className="sm:flex sm:gap-4">
              <a
                className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                href="/customer/login"
              >
                <span className="absolute rounded-lg inset-0 border border-yellow-500 group-active:border-yellow-500"></span>
                <span className="block border rounded-lg border-yellow-500 bg-yellow-500 px-5 py-2.5 transition-transform active:border-yellow-500 active:bg-yellow-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                  Log in
                </span>
              </a>
            </div>
          )}
          <button
            onClick={toggleMenu}
            className="block rounded bg-transparent p-2.5 text-white transition hover:text-gray-600/75 md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns={"http://www.w3.org/2000/svg"}
              className={`h-5 w-5 ${isMenuOpen ? "hidden" : "block"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              xmlns={"http://www.w3.org/2000/svg"}
              className={`h-5 w-5 ${isMenuOpen ? "block" : "hidden"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Dropdown menu content */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="py-2">
            <li>
              <a className="block text-white px-4 py-2" href="/">
                Home
              </a>
            </li>
            <li>
              <Link to="/customer/about">
                <a className="block text-white px-4 py-2" href="/">
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link to="/customer/event">
                <a className="block text-white px-4 py-2" href="/">
                  Your Events
                </a>
              </Link>
            </li>
            <li>
              <a className="block text-white px-4 py-2" href="/">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
