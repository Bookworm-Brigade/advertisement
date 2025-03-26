import axios from "axios";
import { useState, useEffect } from "react";

export default function ModalForm({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Track any error 
  const [success, setSuccess] = useState(null); // Track success message
  
  // Form data states (you may prefer to manage state for each field individually)
  const [formData, setFormData] = useState({
    product_name: "",
    category: "",
    description: "",
    price: "",
    image: null,
  });

  // State to manage form visibility
  const [showForm, setShowForm] = useState(false);

  // Handle changes in form input fields
  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value, // Handle file input
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();v
    setLoading(true);
    setError(null); // Reset any previous error
    setSuccess(null); // Reset success message

    const form = new FormData();
    form.append("product_name", formData.product_name);
    form.append("category", formData.category);
    form.append("description", formData.description);
    form.append("price", formData.price);
    form.append("image", formData.image);

    try {
      // Post form input to backend
      const response = await axios.post(
        "https://advertisement-api-zwzm.onrender.com", // Update the endpoint if needed
        form
      );

      // Handle backend response
      console.log(response);
      setSuccess("Product added successfully!");
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "Failed to add product. Please try again.");
    } finally {
      // Hide loading indicator and close modal
      setLoading(false);
      onClose(); // Close the modal after form submission
    }
  };

  // Clear form data when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        product_name: "",
        category: "",
        description: "",
        price: "",
        image: null,
      });
      setError(null); // Clear any errors
      setSuccess(null); // Clear success message
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col items-center">
      {/* Toggle button to show or hide the form */}
      <button
        onClick={() => setShowForm((prevState) => !prevState)} // Toggle form visibility
        className="bg-[#F5F5F5] text-red-500 px-4 py-2 rounded-lg mb-6 w-23 h-16 border-2 border-gray-400 font-bold"
      >
        {showForm ? "Hide Edit" : "Show Edit"} 
      </button>

      {/* Conditionally render the form based on showForm state */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col h-100 w-180 items-center rounded-2xl border-4 border-gray-300 gap-6 pt-5 mr-100"
        >
            <div className="flex">
          <div className="flex flex-col ">
            <label htmlFor="product_name" className="block pl-15">
              Product Name
            </label>
            <input
              type="text"
              placeholder="Item name"
              required
              name="product_name"
              id="product_name"
              value={formData.product_name}
              onChange={handleChange}
              className="w-60 h-15 border-2 pl-5 rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="category" className="block pl-20">
              Category
            </label>
            <input
              type="text"
              placeholder="Category"
              required
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              className="w-60 h-15 border-2 ml-6 pl-5 rounded-lg"
            />
          </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="description" className="block pl-15">
              Description 
            </label>
            <input
              type="text"
              placeholder="Describe your product"
              required
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="w-60 h-15 border-2 pl-5 rounded-lg"
            />
          </div>

          <div className="flex">
          <div className="flex flex-col">
            <label htmlFor="price" className="block pl-30">
              Price
            </label>
            <input
              type="number"
              placeholder="Set price here"
              required
              name="price"
              id="price"
              value={formData.price}
              onChange={handleChange}
              className="w-60 h-15 border-2 pl-5 ml-10 rounded-lg"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="image" className="block pl-30">
              Image
            </label>
            <input
              type="file"
              accept="image/*"
              required
              name="image"
              id="image"
              onChange={handleChange}
              className="w-60 h-15 border-2 pl-5 pt-2 ml-5 rounded-lg"
              />
          </div>
          </div>
        

          {/* Show success or error messages */}
          {error && <div className="text-red-500">{error}</div>}
          {success && <div className="text-green-500">{success}</div>}

          <button
            disabled={loading}
            className="flex justify-center bg-red-500 h-10 w-40 pt-2 rounded-2xl"
            type="submit"
          >
            {loading ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 animate-[spin_0.8s_linear_infinite] fill-white block mx-auto"
                viewBox="0 0 24 24"
              >
                <path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z" />
              </svg>
            ) : (
              "Update Product"
            )}
          </button>
        </form>
      )}
    </div>
  );
}


