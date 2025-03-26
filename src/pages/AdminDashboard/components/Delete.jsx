import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";


function Delete({ itemId }) {
  const [isFormVisible, setFormVisible] = useState(false);
  
  // Toggle delete confirmation form
  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  // Function to handle delete request with FormData
  const handleDelete = async () => {
    const formData = new FormData();
    formData.append("id", itemId); // Sending item ID

    try {
      const response = await fetch("https://advertisement-api-zwzm.onrender.com/advert/67d92c34cbf1488a3a62384a", {
        method: "POST", // Using POST instead of DELETE for FormData
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        alert("Item deleted successfully!");
        toggleFormVisibility(); // Hide form after deletion
      } else {
        alert("Failed to delete item: " + result.error);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div>
      {/* Button to trigger showing the confirmation form */}
      <button
        onClick={toggleFormVisibility}
        className="bg-[#F5F5F5] flex items-center  text-black px-4 py-2 rounded-md w-23 text-[0.7vw] border-2 border-gray-400 font-bold"
        >
          <MdOutlineDeleteOutline />

        Delete
      </button>

      {/* Confirmation form */}
      {isFormVisible && (
        <form className="h-40 w-80 border-2 border-gray-400 relative">
          {/* Close Icon Button */}
          <button
            type="button"
            onClick={toggleFormVisibility}
            className="absolute top-2 right-2 text-2xl text-gray-500"
          >
            <IoCloseCircleOutline className="hover:bg-red-400" />
          </button>

          <span className="text-red-500 text-xl flex justify-center mt-5">
            <p>Delete permanently?</p>
          </span>

          {/* Confirmation Buttons */}
          <span className="flex justify-center mt-10 gap-5">
            <button
              type="button"
              onClick={handleDelete} // Call delete function
              className="bg-[#F5F5F5] text-red-500 border-2 border-gray-400 w-20 h-10 cursor-pointer font-bold"
            >
              Yes
            </button>
            <button
              type="button"
              onClick={toggleFormVisibility}
              className="bg-[#F5F5F5] text-red-500 border-2 border-gray-400 w-20 h-10 cursor-pointer"
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
