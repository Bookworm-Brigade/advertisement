import React, { useState } from 'react';
import image from "../assets/images/image.png";
import { apiUpdateAdvert } from '../services/advert';

function UpdateUser() {
 const handleSubmit = async(event) => {
    event.preventDefault ();
    
    const formData = new FormData (event.target);
    try{
        const response = await apiUpdateAdvert(formData);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
 };

  return (
    <div className="flex border-4 border-gray-400 w-200 ml-12 mt-10 p-5">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="bg-gray-100 p-5 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-5">Update Details Here</h1>
          
          <label className="input validator flex items-center gap-2">
            <svg className="h-5 w-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="text"
              name="username"
              required
              placeholder="Username"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minLength="3"
              maxLength="30"
              title="Only letters, numbers, or dash"
              className="input input-bordered w-full"
            />
          </label>
          <p className="text-sm text-gray-500">Must be 3 to 30 characters containing only letters, numbers, or dashes.</p>
          
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
            className="input input-bordered w-full mt-4"
          />
          
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            className="input input-bordered w-full mt-4"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            required
            className="input input-bordered w-full mt-4"
          />

          <select
            name="role"
            required
            className="select select-bordered w-full mt-4"
          >
            <option value="" disabled>Choose:</option>
            <option value="Vendor">Vendor</option>
            <option value="User">User</option>
          </select>

          <button type="submit" className="btn btn-primary w-full mt-4">Submit</button>
        </div>
      </form>
      <img src={image} alt="User" className="w-100 ml-5 rounded-lg" />
    </div>
  );
}

export default UpdateUser;