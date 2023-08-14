import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../services/user.service";

const ChangePass = () => {
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { success, error } = await changePassword(oldPassword, newPassword);
      if (success) {
        navigate("/");
        setPwdError("");
      } else {
        // Change failed
        console.log("Failed:", error);
        setPwdError(error);
      }
    } catch (error) {
      console.error("An error occurred during changing password:", error);
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mb-16">
      <div className="mx-auto max-w-lg ">
        <form
          action=""
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          onSubmit={handleSubmit}
        >
          <p className="text-center text-lg font-medium">
            Change your password
          </p>

          <div className="">
            <label htmlFor="password" className="sr-only">
              Old Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter old password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
                required
              />

              <span
                className="absolute inset-y-0 end-0 grid place-content-center px-4"
                onClick={handleTogglePassword}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {showPassword ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  )}
                </svg>
              </span>
              {pwdError && (
                <p className="absolute text-sm text-red-500">{pwdError}</p>
              )}
            </div>
          </div>

          <div className="">
            <label htmlFor="password" className="sr-only">
              New Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter new password"
                value={newPassword}
                onChange={handleNewPasswordChange}
                required
              />

              <span
                className="absolute inset-y-0 end-0 grid place-content-center px-4"
                onClick={handleTogglePassword}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {showPassword ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  )}
                </svg>
              </span>
              {pwdError && (
                <p className="absolute text-sm text-red-500">{pwdError}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-yellow-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-black hover:text-yellow-500 focus:outline-none focus:ring active:text-yellow-400"
          >
            Change password
          </button>
        </form>
      </div>
    </div>
  );
};
export default ChangePass;
