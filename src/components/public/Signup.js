import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
   const [state, setState] = useState({
      fullName: "",
      email: "",
      phone: "",
      currentPassword: "",
      confirmPassword: "",
   });

   const [errors, setErrors] = useState({
      fullName: "",
      email: "",
      phone: "",
      currentPassword: "",
      confirmPassword: "",
   });

   const handleChange = (event) => {
      setState({ ...state, [event.target.id]: event.target.value });
      setErrors({ ...errors, [event.target.id]: "" });
   };

   const validate = () => {
      let hasErrors = false;

      if (!state.fullName) {
         setErrors({ ...errors, fullName: "Full Name is required" });
         hasErrors = true;
      }
      if (!state.email) {
         setErrors({ ...errors, email: "Email is required" });
         hasErrors = true;
      }
      if (!state.phone) {
         setErrors({ ...errors, phone: "Phone is required" });
         hasErrors = true;
      }
      if (!state.currentPassword) {
         setErrors({ ...errors, currentPassword: "Password is required" });
         hasErrors = true;
      }
      if (!state.confirmPassword) {
         setErrors({
            ...errors,
            confirmPassword: "Confirm Password is required",
         });
         hasErrors = true;
      }
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      const hasErr = validate();
      if (!hasErr) {
         console.log("Full Name:", state.fullName);
         console.log("Email:", state.email);
         console.log("Phone:", state.phone);
         console.log("Current Password:", state.currentPassword);
         console.log("Confirm Password:", state.confirmPassword);
         setState({
            fullName: "",
            email: "",
            phone: "",
            currentPassword: "",
            confirmPassword: "",
         });
      }
   };

   return (
      <form className="bg-blue-50 shadow-md rounded-r-lg px-8 pt-6 pb-8" onSubmit={handleSubmit}>
         <samp className="flex justify-center items-center w-full mb-4 font-bold text-lg uppercase">
            Signup
         </samp>
         <div className="mb-1">
            <div className="flex justify-between items-center">
               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                  Full Name
               </label>
               {errors.fullName && (
                  <samp className="text-red-500 text-xs italic">{errors.fullName}</samp>
               )}
            </div>
            <input
               className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="fullName"
               type="text"
               placeholder="Enter your full name"
               value={state.fullName}
               onChange={handleChange}
            />
         </div>
         <div className="mb-1">
            <div className="flex justify-between items-center">
               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Phone
               </label>
               {errors.phone && <samp className="text-red-500 text-xs italic">{errors.phone}</samp>}
            </div>
            <input
               className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="phone"
               type="text"
               placeholder="Enter your phone number"
               value={state.phone}
               onChange={handleChange}
            />
         </div>
         <div className="mb-1">
            <div className="flex justify-between items-center">
               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
               </label>
               {errors.email && <samp className="text-red-500 text-xs italic">{errors.email}</samp>}
            </div>
            <input
               className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="email"
               type="text"
               placeholder="Enter your email"
               value={state.email}
               onChange={handleChange}
            />
         </div>
         <div className="mb-1">
            <div className="flex justify-between items-center">
               <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="currentPassword"
               >
                  Password
               </label>
               {errors.currentPassword && (
                  <samp className="text-red-500 text-xs italic">{errors.currentPassword}</samp>
               )}
            </div>
            <input
               className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
               id="currentPassword"
               type="current-password"
               placeholder="******************"
               value={state.currentPassword}
               onChange={handleChange}
            />
         </div>
         <div className="mb-1">
            <div className="flex justify-between items-center">
               <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="confirmPassword"
               >
                  Conform Password
               </label>
               {errors.confirmPassword && (
                  <samp className="text-red-500 text-xs italic">{errors.confirmPassword}</samp>
               )}
            </div>

            <input
               className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 mb-4 leading-tight focus:outline-none focus:shadow-outline"
               id="confirmPassword"
               type="confirm-password"
               placeholder="******************"
               value={state.confirmPassword}
               onChange={handleChange}
            />
         </div>
         <div className="flex items-center justify-center flex-col w-full">
            <button
               className="bg-blue-500 text-white py-3 font-bold w-full text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
               type="submit"
            >
               Signup
            </button>
            <div className="flex justify-end items-end mt-4 w-full">
               <samp className="font-bold text-sm">Already have an account?&nbsp;</samp>
               <Link
                  to="/login"
                  className="font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer"
               >
                  Login
               </Link>
            </div>
         </div>
      </form>
   );
}
