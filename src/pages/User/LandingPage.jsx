import React from "react";
import ParallaxComponent from "./components/Parallax";
import white from "./components/bots2.mp4";
export const LandingPage = () => {
  return (
    <div>
      <ParallaxComponent />
      <section>
        <div className="relative">
          <div className="px-20 sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center bg-white p-4">
            <div className="flex-1 text-7xl font-medium text-black flex flex-col justify-center items-center text-center ">
              <h1 className="mb-25">
                {" "}
                Digital Showroom for Vendors & Retailers
              </h1>{" "}
              <img
                src="https://framerusercontent.com/images/dJvdzAxodMG2Uz94f6biE2WM.png"
                width="300"
                alt=""
              />
            </div>

            <div className="flex-1 text-center md:text-left p-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-black leading-11">
                Welcome to our Ad Media Library, the ultimate platform for
                vendors, brands, and retailers to showcase their products. Our
                showroom provides a centralized space where you can upload
                high-quality product images, promotional videos, and detailed
                specifications to attract customers and business partners.
                Whether you're a vendor looking to advertise your products or a
                retailer searching for the perfect items to stock, our media
                library has everything you need.{" "}
              </h1>
              <button className="bg-[#7D9595] w-[10vw] h-[9vh] text-2xl font-bold cursor-pointer mt-10">
                Sign Up
              </button>
            </div>
          </div>

          <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white px-50">
            <div className="flex-1 text-center md:text-left p-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl leading-11">
                Welcome to our Ad Media Library, the ultimate platform for
                vendors, brands, and retailers to showcase their products. Our
                showroom provides a centralized space where you can upload
                high-quality product images, promotional videos, and detailed
                specifications to attract customers and business partners.
                Whether you're a vendor looking to advertise your products or a
                retailer searching for the perfect items to stock, our media
                library has everything you need.{" "}
              </h1>
              <button className="bg-[#650B14] w-[10vw] h-[9vh] text-2xl text-white font-bold cursor-pointer mt-10">
                Sign Up
              </button>
            </div>

            <div className="flex items-center justify-center">
              <img
                width="400"
                className=" max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                src="https://framerusercontent.com/images/rORLREkDkdCaeZoiZ8EV9GpSCY.webp"
                alt=""
              />
            </div>
          </div>

          <div className="sticky top-0 h-screen flex  md:flex-row items-center justify-center bg-white text-black p-4">
            <div className="flex flex-col justify-center items-center">
              <img
              width="500"
                src="https://framerusercontent.com/images/QJbv2VFheaAQZxkNAxg0yejpmZk.png"
                alt=""
              /> 
              <h1 className="text-7xl font-bold font-[Dancing Script]">only the best</h1>
            </div>{" "}
            
          </div>
          <div className="sticky top-0 h-screen flex flex-col md: items-center justify-center bg-white text-black ">
            <div className="w-full h-[80vh] border-white bg-white flex justify-end">
              <video
                src={white}
                width="600"
                autoPlay
                muted
                className="bg-white border-none"
              ></video>
            </div>
            <div className="w-full h-[20vh] bg-black text-white flex items-center">
              <h1 className="text-2xl">
                © 2025 teamBots®. All rights reserved.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LandingPage;
