import React, { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { apiDeleteAdvert } from "../../../services/advert";

function Delete({ adId, onDeleteSuccess }) {
  const [confirming, setConfirming] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!adId) {
      console.error("Error: adId is undefined!");
      return;
    }

    setLoading(true);
    try {
      await apiDeleteAdvert(adId);
      onDeleteSuccess(adId); // Remove the ad from UI after successful deletion
      setConfirming(false);
    } catch (error) {
      console.error("Error deleting ad:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        className="bg-[#F5F5F5] flex items-center text-black px-4 py-2 rounded-md border-2 border-gray-400 font-bold"
        onClick={() => setConfirming(true)}
      >
        <MdOutlineDeleteOutline />
        Delete
      </button>

      {confirming && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-lg font-bold">Confirm Deletion</h3>
            <p>Are you sure you want to delete this ad?</p>
            <div className="flex justify-end gap-4 mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={handleDelete}
                disabled={loading}
              >
                {loading ? "Deleting..." : "Confirm"}
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded-md"
                onClick={() => setConfirming(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Delete;
