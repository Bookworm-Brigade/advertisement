import React, { useState } from 'react';
import image from "../assets/images/image.png";

function UpdateUser() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Form Data Submitted:", formData);
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
              value={formData.username}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </label>
          <p className="text-sm text-gray-500">Must be 3 to 30 characters containing only letters, numbers, or dashes.</p>
          
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full mt-4"
          />
          
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            value={formData.password}
            onChange={handleChange}
            className="input input-bordered w-full mt-4"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className="input input-bordered w-full mt-4"
          />

          <select
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
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