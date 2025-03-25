// 
import React, { useState } from "react";
import image from "../assets/images/image.png";
import { apiUserLogin } from "./Auth";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true); // Start loading

    const data = new FormData();
    data.append("username", formData.username.trim());
    data.append("password", formData.password.trim());

    try {
      const response = await apiUserLogin(data) 
      const result = await response.json();
      console.log("Server Response:", result); // Debugging

      if (response.ok) {
        setSuccess("Login successful!");
        setFormData({ username: "", password: "" }); // Reset form
      } else {
        setError(result.message || "Login failed!");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex border-4 border-[#F5F5F5] w-130 ml-50 mt-20">
      <form onSubmit={handleSubmit}>
        <div className="bg-[#F5F5F5] w-70 p-6 rounded-lg shadow-md">
          <h1 className="text-3xl mb-4">Login</h1>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}

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
                value={formData.username}
                onChange={handleChange}
                className="block w-full p-2 border rounded"
              />
            </label>
          </div>

          <div className="mt-4">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              value={formData.password}
              onChange={handleChange}
              className="block w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="text-red-400 border-2 border-gray-400 w-full p-2 mt-4"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>

      <img src={image} alt="Login" className="w-50" />
    </div>
  );
}

export default Login;
