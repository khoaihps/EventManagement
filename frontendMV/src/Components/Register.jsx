import React, { useState, useRef } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api";
import BgImg from "../assets/img/carousel1.png";

const Register = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [passwordConfimation, setPasswordConfirmation] = useState("");
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [address, setAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [DOB, setDoB] = useState("");
  const navigate = useNavigate();
  let err = "";

  const handleUsernameChange = (event) => {
    setUsernameError("");
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordError("");
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleDoBChange = (event) => {
    setDoB(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailError("");
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhoneError("");
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePasswordConfirmation = (event) => {
    setPasswordConfirmation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { success, error } = await register(
        firstName,
        lastName,
        username,
        password,
        DOB,
        email,
        phone,
        address
      );

      if (success) {
        console.log("Regiter successfully:");
        navigate("/login/customer");
      } else {
        // Register failed
        console.log("Regiter failed:", error);
        err = error;
        // navigate('/register/customer')
      }
    } catch (error) {
      console.error("An error occurred during register:", error);
    }

    // check username
    if (username !== "") {
      //other conditions
      if (err === "Username already exists.") {
        setUsernameError(err);
      }
    } else {
      setUsernameError("Username required");
    }

    //check email
    if (email !== "") {
      //other conditions
      if (err === "Email already exists.") {
        setEmailError(err);
      }
    } else {
      setEmailError("Email required");
    }

    //check phone
    if (phone !== "") {
      //other conditions
      if (err === "Phone already exists.") {
        setPhoneError(err);
      }
    } else {
      setPhoneError("Phone required");
    }

    //check password
    if (password !== "") {
      //other conditions
    } else {
      setPasswordError("Password required");
    }

    //check password confirmation
    if (passwordConfimation !== password) {
      setPasswordConfirmationError("Password not matched");
    }
  };

  return (
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-0">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

          <p className="mt-4 text-gray-500">
            Please fill in this form to create your account!
          </p>
        </div>

        <form
          action="#"
          className="mt-8 grid grid-cols-6 gap-6"
          onSubmit={handleSubmit}
        >
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="FirstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>

            <input
              type="text"
              id="FirstName"
              name="first_name"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="LastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>

            <input
              type="text"
              id="LastName"
              name="last_name"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div className="col-span-6">
            <label
              htmlFor="Username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
              <span className="text-red-500 required-dot">*</span>
            </label>

            <input
              type="text"
              id="username"
              name="username"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              value={username}
              onChange={handleUsernameChange}
            />
            {usernameError && (
              <p className="absolute text-sm text-red-500">{usernameError}</p>
            )}
          </div>
          <div className="col-span-6">
            <label
              htmlFor="DoB"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>

            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              value={DOB}
              onChange={handleDoBChange}
            />
          </div>
          <div className="col-span-6">
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
              <span className="text-red-500 required-dot">*</span>
            </label>

            <input
              type="email"
              id="Email"
              name="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && (
              <p className="absolute text-sm text-red-500">{emailError}</p>
            )}
          </div>
          <div className="col-span-6">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
              <span className="text-red-500 required-dot">*</span>
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              value={phone}
              onChange={handlePhoneChange}
            />
            {phoneError && (
              <p className="absolute text-sm text-red-500">{phoneError}</p>
            )}
          </div>
          <div className="col-span-6">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>

            <input
              type="text"
              id="address"
              name="address"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              value={address}
              onChange={handleAddressChange}
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
              <span className="text-red-500 required-dot">*</span>
            </label>

            <input
              type="password"
              id="Password"
              name="password"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <p className="absolute text-sm text-red-500">{passwordError}</p>
            )}
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="PasswordConfirmation"
              className="block text-sm font-medium text-gray-700"
            >
              Password Confirmation
              <span className="text-red-500 required-dot">*</span>
            </label>

            <input
              type="password"
              id="PasswordConfirmation"
              name="password_confirmation"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              value={passwordConfimation}
              onChange={handlePasswordConfirmation}
            />
            {passwordConfirmationError && (
              <p className="absolute text-sm text-red-500">
                {passwordConfirmationError}
              </p>
            )}
          </div>

          <div className="col-span-6">
            <label htmlFor="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
              />

              <span className="text-sm text-gray-700">
                I want to receive emails about events, product updates and
                company announcements.
              </span>
            </label>
          </div>

          <div className="col-span-6">
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our
              <a href="#" className="text-gray-700 underline">
                terms and conditions
              </a>
              and
              <a href="#" className="text-gray-700 underline">
                privacy policy
              </a>
              .
            </p>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            {/* <Link to="/login/customer"> */}
            <button
              type="submit"
              className="inline-block shrink-0 rounded-md border border-yellow-600 bg-yellow-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-black hover:text-yellow-500 focus:outline-none focus:ring active:text-yellow-400"
            >
              Create an account
            </button>
            {/* </Link> */}

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <Link to="/login/customer">
                <a href="#" className="text-gray-700 underline">
                  Log in
                </a>
                .
              </Link>
            </p>
          </div>
        </form>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="Welcome"
          src={BgImg}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Register;
