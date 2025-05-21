import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

function Edit() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    price: "",
    category: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Simulate a submission process
    setTimeout(() => {
      setLoading(false);
      setSuccess("Product added successfully!");
    }, 2000);
  };

  return (
    <div>
      <button
        className="bg-[#F5F5F5] flex items-center text-black px-4 py-2 rounded-md border-2 border-gray-400 font-bold"
        onClick={() => document.getElementById("edit").showModal()}
      >
        <FaEdit/>
        Edit{" "}
      </button>

      <dialog id="edit" className="modal">
        <div className="modal-box flex flex-col bg-gray-200 w-[40vw] px-10 py-5 relative">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("edit").close()}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Edit Product</h3>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="title"
              placeholder="Name"
              className="input w-full"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="input w-full"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <input
              type="file"
              name="image"
              className="input w-full cursor-pointer"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input w-full"
              value={formData.price}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="input w-full"
             defaultValue={formData.category}
              onChange={handleChange}
              required
            />
            <button className="btn w-full" type="submit" disabled={loading}>
              {loading ? "Adding..." : "Submit"}
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Edit;
