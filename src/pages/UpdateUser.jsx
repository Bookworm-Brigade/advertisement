import React from 'react'
import image from "../assets/images/image.png"

function UpdateUser() {
  return (
    <div className="flex border-4 border-gray-400 w-230 ml-50 mt-20">
        <form>
        <div className="bg-[#F5F5F5] w-100">
          <span className="text-4xl">
            <h1>Update details here</h1>
          </span>

          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="input"
              required
              placeholder="Username"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minlength="3"
              maxlength="30"
              title="Only letters, numbers or dash"
            />
          </label>
          <p className="validator-hint">
            Must be 3 to 30 characters
            <br />
            containing only letters, numbers or dash
          </p>

          <div className="flex flex-col gap-7">
            <div className="indicator">
              <span className="indicator-item badge">Required</span>
              <input
                type="text"
                placeholder="Your email address"
                className="input input-bordered"
              />
            </div>

            <div className="indicator">
              <span className="indicator-item badge">Required</span>
              <input
                type="text"
                placeholder="Enter your password"
                className="input input-bordered"
              />
            </div>

            <div className="indicator">
              <span className="indicator-item badge">Required</span>
              <input
                type="text"
                placeholder="Confirm your password"
                className="input input-bordered"
              />
            </div>

            <div>
              <select className="select validator" required>
                <option disabled selected value="">
                  Choose:
                </option>
                <option>Vendor</option>
                <option>User</option>
              </select>
              <p className="validator-hint">Required</p>
              <button className="btn text-red-400 border-2 border-gray-400 ml-20" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
        </form>
        <img src={image} alt="" className="w-100"/>
    </div>
  )
}

export default UpdateUser