import React from "react";
import vid from "./components/bots.mp4";
import { Link } from "react-router";

const RegisterPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="w-[40%]">
          <h3 className="font-bold text-6xl py-7 text-white">Sign Up </h3>

          <form className="font-bold">
            <fieldset className="fieldset mt-2">
              <legend className="fieldset-legend text-2xl text-white">
                Email
              </legend>
              <input
                type="email"
                className="input w-full h-20 text-black text-xl font-bold bg-white"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="fieldset mt-2">
              <legend className="fieldset-legend text-2xl text-white">
                Role
              </legend>
              <select className="input w-full h-20 text-black text-xl font-bold bg-white cursor-pointer">
                <option className="text-black text-xl font-bold" value="user">
                  User
                </option>
                <option
                  className="text-black text-xl font-bold h-60" value="vendor"
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
                className="input w-full h-20 text-black text-xl font-bold bg-white"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="fieldset mt-2">
              <legend className="fieldset-legend text-2xl text-white">
                Confirm Password
              </legend>
              <input
                type="password"
                className="input w-full h-20 text-black text-xl font-bold bg-white"
                placeholder="Type here"
              />
            </fieldset>
            <Link to="/user">
              <button
                type="submit"
                className="btn mt-10 w-full text-white h-20 text-xl"
              >
                Sign Up{" "}
              </button>
            </Link>
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
