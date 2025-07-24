import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; // Ensure correct import
import Nav from "./components/Nav";
import { apiSingleAdvert } from "../../services/advert";
import loadingPage from "./components/loading.png";


export const AdDetail = () => {
  const { id } = useParams();
  const [ad, setAd] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getAd = async () => {
      try {
        const response = await apiSingleAdvert(id);
        setAd(response.data.advert);
      } catch (err) {
        setError("Failed to load ad details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getAd();
  }, [id]); // Re-fetch when `id` changes

  if (loading) return  <div className="w-[100%] h-screen flex items-center justify-center bg-black text-center text-xl">
     <img
   className="w-[80%] object-contain"
         src={loadingPage}
         alt="loading"
       />
   </div>; 
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <>
      <Nav />
      <section className="w-full h-screen flex flex-col items-center bg-[#F2F2F2] pt-[4vh]">
        <div className="w-full h-screen flex items-center justify-center">
          <div className="w-[31.736vw] h-[60vh] flex flex-col items-center justify-between">
            <Link to="/user">
              <button className="w-[30vw] text-white h-[8vh] rounded-full bg-[#EB4E27] text-xl font-bold cursor-pointer">
                Back to All
              </button>
            </Link>

            <div className="w-full h-[38vh] flex flex-col justify-between font-[Archivo] text-black">
              <div>
                <h1 className="text-xl font-bold mb-2">
                  {ad?.title || "No Title"}
                </h1>
                <p className="text-xl mb-10">{ad.category}</p>
                <p className="text-xl font-medium text-gray-700 italic ">
                  {ad?.description || "No description available"}
                </p>
              </div>

              <div className="w-[6vw] h-[7vh] bg-[#EB4E27] text-2xl text-white flex items-center justify-center font-medium rounded-xl">
                ${ad?.price || "N/A"}
              </div>
            </div>
          </div>
          <div className="w-[45vw] h-[60vh] object-contain ml-10 rounded-2xl flex items-center justify-center bg-white">
            {ad && (
              <img
                src={`https://res.cloudinary.com/drsmbcxb6/image/upload/${ad.image[0]}`}
                alt="Advert"
                width='350'
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AdDetail;
