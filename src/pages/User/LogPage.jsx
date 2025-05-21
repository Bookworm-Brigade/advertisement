import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import vid from "./components/bots.mp4";
import { Link } from "react-router";
import { apiUserLogin } from "../../services/Auth";

export const LogPage = () => {
  const navigate = useNavigate(); // Initialize navigation
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
    setLoading(true);

    const data = new FormData();
    data.append("username", formData.username.trim());
    data.append("password", formData.password.trim());

    try {
      const response = await apiUserLogin(data);
      const result = response.data;
      console.log("Server Response:", result);

      if (response.status === 200) {
        localStorage.setItem("token", result.accessToken);
        setSuccess("Login successful!");
        setFormData({ username: "", password: "" });

        // Redirect based on role
        if (result.role === "user") {
          navigate("/user"); // Redirect user to user page
        } else {
          navigate("/admin"); // Default redirect (for other roles)
        }
      } else {
        setError(result.message || "Login failed!");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black px-[5vw]">
      <div className="w-[40vw]">
        <h3 className="font-bold text-6xl py-7 text-white">Welcome Back</h3>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        
        <form onSubmit={handleSubmit} className="font-bold">
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-white text-2xl">
              Username
            </legend>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="input w-full h-20 text-black outline-none text-xl font-bold border-none bg-white"
              placeholder="Type email"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-white text-2xl">
              Password
            </legend>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="input w-full h-20 text-black text-xl outline-none border-none bg-white"
              placeholder="Type password"
            />
          </fieldset>
          
          <button type="submit" className="btn mt-10 w-full  h-20 text-xl">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-center mt-5 text-xl text-white">
          Don't have an account?{" "}
          <Link to="/signup" className="text-orange-600 font-bold">
            Sign Up
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center object-cover">
        <Link to="/">
          <video src={vid} loop autoPlay width="640" height="200" muted></video>
        </Link>
      </div>
    </div>
  );
};

export default LogPage;
