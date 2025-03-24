import React, { useState } from "react";
import image from "../assets/images/image.png";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append("username", formData.username);
    data.append("password", formData.password);

    try {
      const response = await fetch("https://advertisement-api-zwzm.onrender.com/users/login", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      if (response.ok) {
        alert("Login successful!");
      } else {
        alert(result.message || "Login failed!");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex border-4 border-[#F5F5F5] w-130 ml-50 mt-20">
      <form onSubmit={handleSubmit}>
        <div className="bg-[#F5F5F5] w-70">
          <h1 className="text-3xl">Login</h1>
          
          <div className="mt-15">
            <label className="input validator">
              <input
                type="text"
                name="username"
                required
                placeholder="Username"
                // pattern="[A-Za-z][A-Za-z0-9\-]*"
                minLength="3"
                maxLength="30"
                title="Only letters, numbers or dash"
                value={formData.username}
                onChange={handleChange}
              />
            </label>
            <p className="validator-hint">
              Must be 3 to 30 characters
              <br />
              containing only letters, numbers or dash
            </p>
          </div>

          <div className="indicator">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="text-red-400 border-2 border-gray-400 w-15 mt-10 ml-15 mb-3 cursor-pointer">
            Login
          </button>
        </div>
      </form>
      <img src={image} alt="Login" className="w-50" />
    </div>
  );
}

export default Login;
