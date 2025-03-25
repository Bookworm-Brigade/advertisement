import React, { useState } from "react";
import vid from "./components/bots.mp4";
import { Link } from "react-router";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
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
    <div>
      <div className="flex items-center justify-center h-screen pb-2 bg-black">
        <div className="w-[40%]">
          <h3 className="font-bold text-5xl py-7 text-white">Sign Up </h3>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <form onSubmit={handleSubmit} className="font-bold">
            <fieldset className="fieldset mt-2">
              <legend className="fieldset-legend text-2xl text-white">
                Email
              </legend>
              <input
                type="text"
                name="email"
                placeholder="Email"
                required
                minLength="3"
                maxLength="30"
                value={formData.email}
                onChange={handleChange}
                className="input w-full h-15 text-black text-xl font-bold bg-white"
              />
            </fieldset>
            <fieldset className="fieldset mt-2">
              <legend className="fieldset-legend text-2xl text-white">
                Username
              </legend>
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                minLength="3"
                maxLength="30"
                value={formData.username}
                onChange={handleChange}
                className="input w-full h-15 text-black text-xl font-bold bg-white"
              />
            </fieldset>
            <fieldset className="fieldset mt-2">
              <legend className="fieldset-legend text-2xl text-white">
                Role
              </legend>
              <select
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                className="input w-full h-15 text-black text-xl font-bold bg-white cursor-pointer"
              >
                <option value="" disabled>
                  Choose Role
                </option>

                <option className="text-black text-xl font-bold" value="user">
                  User
                </option>
                <option
                  className="text-black text-xl font-bold h-60"
                  value="vendor"
                >
                  Vendor
                </option>
              </select>
            </fieldset>
            <fieldset className="fieldset mt-2">
              <legend className="fieldset-legend text-2xl text-white">
                Password
              </legend>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                value={formData.password}
                onChange={handleChange}
                className="input w-full h-15 text-black text-xl font-bold bg-white"
              />
            </fieldset>
            <fieldset className="fieldset mt-2">
              <legend className="fieldset-legend text-2xl text-white">
                Confirm Password
              </legend>
              <input
                type="password"
                name="confirmPassword"
                className="input w-full h-15 text-black text-xl font-bold bg-white"
                placeholder="Type here"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </fieldset>
            <button
              type="submit"
              className="btn mt-10 w-full text-white h-15 text-xl"
            >
              {" "}
              {loading ? "Registering..." : "Sign Up"}
            </button>
          </form>
          <div className="text-center mt-5 text-xl">
            Already have an account ?{" "}
            <Link to="/log" className="text-orange-600 font-bold">
              Sign In
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center object-cover">
          <Link to="/">
            <video
              src={vid}
              loop
              autoPlay
              width="640"
              height="200"
              muted
            ></video>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
