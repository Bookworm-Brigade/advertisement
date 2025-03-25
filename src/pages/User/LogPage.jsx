import React from "react";
import vid from "./components/bots.mp4";
import { Link } from "react-router";

export const LogPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black px-[5vw]">
      <div className="w-[40vw]">
        <h3 className="font-bold text-6xl py-7 text-white">Welcome Back</h3>

        <form className="font-bold">
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-white text-2xl">
              Email
            </legend>
            <input
              type="email"
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
              className="input w-full h-20 text-black text-xl outline-none border-none bg-white"
              placeholder="Type password"
            />
          </fieldset>
<Link to='/user'> <button
            type="submit"
            className="btn mt-10 w-full text-white h-20 text-xl"
          >
            Sign In{" "}
          </button></Link>
         
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
