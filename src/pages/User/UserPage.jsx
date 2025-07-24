import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import AdCard from "./components/AdCard";
import all from "./components/all.png";
import { apiAllAdvert } from "../services/Advert";
// import loadingPage from "./components/loading.png";
// import errors from "./components/error.png";, { useState, useEffect, useMemo }

// import axios from "axios";
// import { Link } from "react-router";

export const UserPage = () => {
  // defining a place to store with usestate
  const [ads, setAds] = useState([]);
  //  function to get ad
  const getAds = async () => {
    try {
      const response = await apiAllAdvert();
      setAds(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const getAds = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://advertisement-api-zwzm.onrender.com/advert"
  //     );
  //     setAds(response.data.ads);
  //   } catch (error) {
  //     console.error(error);
  //     setError(`failed to load ads`);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    getAds();
  }, []);

  
  // const sortedAds = useMemo(() => {
  //   return [...ads].sort((a, b) => a.title.localeCompare(b.title));
  // }, [ads]);

  // if (loading)
  //   return (
  //     <div className="w-[100%] h-screen flex items-center justify-center bg-black text-center text-xl">
  //       <img
  //         className="w-[80%] object-contain"
  //         src={loadingPage}
  //         alt="loading"
  //       />
  //     </div>
  //   );
  // if (error)
  //   return (
  //     <div className="w-[100%] h-screen flex flex-col items-center justify-center bg-black text-center text-xl relative">
  //       {" "}
  //       <img className="w-[70%] flex flex-col items-center justify-center object-contain " src={errors} alt={setError} />
  //       <Link to="/" className=" flex items-center justify-center" >
  //         <button className="absolute top-[80vh] bg-red-700 px-6 py-5 font-bold cursor-pointer rounded-4xl">
  //           Go Home
  //         </button>
  //       </Link>
  //     </div>
  //   );

  return (
    <>
      <Nav />
      <section
        className="w-full 
     h-full flex flex-col items-center bg-[#F2F2F2] pt-30"
      >
        <div className="flex items-center justify-evenly w-[27vw] h-[8vh] rounded-full mt-[2vh] text-black bg-white text-xl font-[550] font-[Archivo]">
          <p className="flex items-center justify-center">
            {" "}
            <img className="size-5 mr-2" src={all} alt="" />
            all
          </p>
          <p>home</p>
          <p>lifestyle</p>
          <p>technology</p>
        </div>

        {/* <div className="grid grid-cols-3 gap-4 mt-[2vh]"> */}
        <div className="flex  justify-center flex-wrap gap-4 mt-[2vh] h-screen">
          {ads.map((ad) => (
            <AdCard key={ad.id} ad={ad} />
          ))}
        </div>
      </section>
    </>
  );
};
export default UserPage;
