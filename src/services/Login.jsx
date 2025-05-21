//
import React, { useState } from "react";
import image from "../assets/images/image.png";
import { apiUserLogin } from "./Auth";

function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await apiUserLogin(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex border-4 border-[#F5F5F5] w-130 ml-50 mt-20">
      <form onSubmit={handleSubmit}>
        <div className="bg-[#F5F5F5] w-70 p-6 rounded-lg shadow-md">
          <h1 className="text-3xl mb-4">Login</h1>
          {/* 
           {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}  */}

          <div className="mt-4">
            <label className="block mb-2">
              <input
                type="text"
                name="username"
                required
                placeholder="Username"
                minLength="3"
                maxLength="30"
                title="Only letters, numbers or dash"
                className="block w-full p-2 border rounded"
              />
            </label>
          </div>

          <div className="mt-4">
            <label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="block w-full p-2 border rounded"
            />
            </label>
          </div>

          <button
            type="submit"
            className="text-red-400 border-2 border-gray-400 w-full p-2 mt-4"
          >Login</button>
        </div>
      </form>

      <img src={image} alt="Login" className="w-50" />
    </div>
  );
}

export default Login;
