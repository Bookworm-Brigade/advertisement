import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import TableList from "./components/TableList";
import { apiAddAdvert, apiAllAdvert } from "../../services/Advert";

const AdminPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    price: "",
    category: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [ads, setAds] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await apiAllAdvert();
        setAds(response.data);
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };
    fetchAds();
  }, []);

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredAds = ads.filter(
    (ad) =>
      ad.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ad.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ad.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) data.append(key, value);
      });

      const response = await apiAddAdvert(data);

      if (response.status === 200 || response.status === 201) {
        setSuccess("Ad added successfully!");
        setFormData({
          title: "",
          description: "",
          image: '', // ✅ Fix: Reset image field
          price: "",
          category: "",
        });
        setFormData((prev) => ({ ...prev, image: null }));
        setAds((prevAds) => [response.data, ...prevAds]);

        document.getElementById("my_modal_3").close(); // Keep modal handling as it is
      } else {
        setError("Failed to add the ad!");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSuccess = (deletedAdId) => {
    setAds((prevAds) => prevAds.filter((ad) => ad.id !== deletedAdId));
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center w-full h-screen">
        <div className="flex justify-between items-center bg-red-600 px-10 py-[2vh] w-full">
          <h1 className="text-white text-xl font-bold">Manage Ads</h1>
          <button
            className="btn px-15 py-5 text-sm font-bold"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Add
          </button>
        </div>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box flex flex-col bg-gray-200 w-[40vw] px-10 py-5 relative">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Add Product</h3>
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
                value={formData.category}
                onChange={handleChange}
                required
              />
              <button className="btn w-full" type="submit" disabled={loading}>
                {loading ? "Adding..." : "Submit"}
              </button>
            </form>
          </div>
        </dialog>

        <div className="flex justify-between px-10 items-center bg-blue-100 w-full py-6">
          <h1 className="text-xl font-bold">Ad List</h1>
          <input
            className="input"
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <div className="flex justify-center flex-wrap gap-4 mt-20 mb-40 w-full px-10">
          {filteredAds.length > 0 ? (
            filteredAds.map((ad) => (
              <TableList key={ad.id} ad={ad} onDeleteSuccess={handleDeleteSuccess} />
            ))
          ) : (
            <p>No ads available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
