import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../utils/commonFunctions";
import axios from "axios";
import { toast } from 'react-toastify';

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!validatePassword(password)) {
      toast.error(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one special character, and one number"
      );
      return;
    }
    if (!validatePassword(confirmPassword)) {
      toast.error(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one special character, and one number"
      );
      return;
    }
    if (password != confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        "https://nasa-api-assignment-backend.onrender.com/api/users/register",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      if (response.data.success) {
        toast.success("User registered successfully");
        navigate("/login");
      } else {
        toast.error("Failed to register user");
      }
    } catch (error) {
      toast.error("Error registering user:", error);
      alert("An error occurred while registering. Please try again later.");
    }
  };

  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/SolarSystem.mp4" type="video/mp4" />
      </video>
      <div className="absolute w-full h-full flex items-center justify-center z-10">
        <div
          className={`xl:max-w-2xl bg-white w-full p-5 sm:p-8 rounded-md`}
        >
          <h1
            className={`text-center text-xl sm:text-3xl font-semibold text-black
            }`}
          >
            Register now and discover the universe
          </h1>
          <div className="w-full mt-8">
            <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline bg-gray-100 text-black focus:border-black
                  }`}
                  type="text"
                  placeholder="Your first name"
                  required
                />
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black
                  }`}
                  type="text"
                  placeholder="Your last name"
                  required
                />
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black
                }`}
                type="email"
                placeholder="Enter your email"
                required
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black
                }`}
                type="password"
                placeholder="Enter your password"
                required
              />

              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black
                }`}
                type="password"
                placeholder="Confirm your password"
                required
              />
              <button
                className="mt-5 tracking-wide font-semibold bg-[#9933FF] text-gray-100 w-full py-4 rounded-lg hover:bg-[#BF40BF]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                onClick={handleSubmit}
              >
                <svg
                  className="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span className="ml-3">Register</span>
              </button>
              <p className="mt-6 text-xs text-gray-600 text-center">
                Already have an account?{" "}
                <a href="/login">
                  <span className="text-[#9933FF] font-semibold">Login</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
