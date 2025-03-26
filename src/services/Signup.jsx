import React, { useState } from "react";
import image from "../assets/images/image.png";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Store errors
  const [success, setSuccess] = useState(null); // Store success message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset errors
    setSuccess(null); // Reset success message
    setLoading(true); // Start loading

    // Password validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    // Request payload
    const requestData = {
      username: formData.username.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
      confirmPassword: formData.confirmPassword.trim(),
      role: formData.role,
    };

    console.log("Sending request data:", requestData); // Debug request payload

    try {
      const response = await fetch(
        "https://advertisement-api-zwzm.onrender.com/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      const result = await response.json();

      console.log("Server response:", result); // Debug response

      if (response.ok) {
        setSuccess("Registration successful!");
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          role: "",
        }); // Reset form
      } else {
        setError(result.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Fetch error:", error); // Debug network errors
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex border-4 border-gray-400 w-230 ml-50 mt-20">
      <form onSubmit={handleSubmit}>
        <div className="bg-[#F5F5F5] w-100 p-6 rounded-lg shadow-md">
          <h1 className="text-4xl mb-4">Register Here</h1>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}

          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            minLength="3"
            maxLength="30"
            value={formData.username}
            onChange={handleChange}
            className="block w-full p-2 mb-2 border rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
            value={formData.email}
            onChange={handleChange}
            className="block w-full p-2 mb-2 border rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            value={formData.password}
            onChange={handleChange}
            className="block w-full p-2 mb-2 border rounded"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className="block w-full p-2 mb-2 border rounded"
          />

          <select
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
            className="block w-full p-2 mb-4 border rounded"
          >
            <option value="" disabled>
              Choose Role
            </option>
            <option value="vendor">vendor</option>
            <option value="user">user</option>
            {/* <option value="admin">admin</option> */}
          </select>

          <button
            type="submit"
            className="btn text-red-400 border-2 border-gray-400 w-full p-2"
            disabled={loading}
          >
            {loading ? "Registering..." : "Submit"}
          </button>
        </div>
      </form>

      <img src={image} alt="Signup" className="w-100" />
    </div>
  );
}

export default Signup;
