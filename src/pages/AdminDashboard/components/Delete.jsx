import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

function Delete() {
  // State to track visibility of the confirmation form
  const [isFormVisible, setFormVisible] = useState(false);

  // Function to toggle form visibility
  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div>
      {/* Button to trigger showing the confirmation form */}
      <button
        onClick={toggleFormVisibility}
        className="btn w-23 h-15 text-red-500 bg-[#F5F5F5] ml-10 border-2
         border-gray-400 cursor-pointer"
      >
        Delete
      </button>

      {/* Confirmation form that appears when isFormVisible is true */}
      {isFormVisible && (
        <form className="h-40 w-80 border-2 border-gray-400 relative">
          {/* Close Icon Button */}
          <button
            type="button"
            onClick={toggleFormVisibility}
            className="absolute top-2 right-2 text-2xl text-gray-500"
          >
            <span >
            <IoCloseCircleOutline className="hover:bg-red-400"/>
            </span>
          </button>

          <span className="text-red-500 text-xl flex justify-center mt-5">
            <p>Delete permanently?</p>
          </span>
          <span className="flex justify-center mt-10 gap-15">
            <button
              type="button" // You can change this to 'submit' if needed
              className="bg-[#F5F5F5] text-red-500 border-2
               border-gray-400 w-20 h-10 
              cursor-pointer font-bold"
            >
              Yes
            </button>
            <button
              type="button" // You can change this to 'submit' if needed
              onClick={toggleFormVisibility} // Close the form when 'No' is clicked
              className="bg-[#F5F5F5] text-red-500 border-2 border-gray-400 w-20 
              h-10 cursor-pointer"
            >
              No
            </button>
          </span>
        </form>
      )}
    </div>
  );
}

export default Delete;
