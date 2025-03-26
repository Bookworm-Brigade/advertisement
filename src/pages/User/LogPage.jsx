import React, { useState } from "react";
import vid from "./components/bots.mp4";
import { Link } from "react-router";
// import loadingPage from "./components/loading.png";
// import errors from "./components/error.png";
import { apiUserLogin } from "../../services/Auth";

export const LogPage = () => {
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
      localStorage.setItem('token', response.data.accessToken);
      const result = await response.data;
      console.log("Server Response:", result); // Debugging

      if (response.status === 200) {
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

  // if (loading)
  //   return (
  //     <div className="w-[100%] h-screen flex items-center justify-center bg-black text-center text-xl">
  //       <img
  //         className="w-[80%] object-contain"
  //         src={loadingPage}
  //         alt="loading"
  //       />
  //     </div>
  //   );
  // if (error)
  //   return (
  //     <div className="w-[100%] h-screen flex flex-col items-center justify-center bg-black text-center text-xl relative">
  //       {" "}
  //       <img className="w-[70%] flex flex-col items-center justify-center object-contain " src={errors} alt={setError} />
  //       <Link to="/" className=" flex items-center justify-center" >
  //         <button className="absolute top-[80vh] bg-red-700 px-6 py-5 font-bold cursor-pointer rounded-4xl">
  //           Go Home
  //         </button>
  //       </Link>
  //     </div>
  //   );

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
            {" "}
            <button
              type="submit"
              className="btn mt-10 w-full text-white h-20 text-xl"
            >
            {loading ? "Logging in..." : "Login"}
            </button>{" "}
        </form>


        <div className="text-center mt-5 text-xl">
          Don't have an account ?{" "}
          <Link to="/signup" className="text-orange-600 font-bold">
            Sign Up
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center object-cover">
        <Link to="/">
          {" "}
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
  );
};
export default LogPage;
