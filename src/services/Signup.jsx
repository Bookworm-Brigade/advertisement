import React, { useState } from "react";
import image from "../assets/images/image.png";


function Signup() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const data = new FormData();
    data.append("username", formData.username);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("role", formData.role);

    try {
      const response = await fetch('', {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      if (response.ok) {
        alert("Registration successful!");
      } else {
        alert(result.message || "Registration failed!");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex border-4 border-gray-400 w-230 ml-50 mt-20">
      <form onSubmit={handleSubmit}>
        <div className="bg-[#F5F5F5] w-100">
          <h1 className="text-4xl">Register here</h1>

          <label className="input validator">
            <input
              type="text"
              name="username"
              required
              placeholder="Username"
            //   pattern="[A-Za-z][A-Za-z0-9\-]*"
              minLength="3"
              maxLength="30"
              title="Only letters, numbers or dash"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="input input-bordered"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="input input-bordered"
            required
            value={formData.password}
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            className="input input-bordered"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <select
            name="role"
            className="select validator"
            required
            value={formData.role}
            onChange={handleChange}
          >
            <option value="" disabled>
              Choose:
            </option>
            <option value="Vendor">Vendor</option>
            <option value="User">User</option>
          </select>

          <button className="btn text-red-400 border-2 border-gray-400 ml-20" type="submit">
            Submit
          </button>
        </div>
      </form>
      <img src={image} alt="Signup" className="w-100" />
    </div>
  );
}

export default Signup;
