import React from "react";
import Nav from "./components/Nav";
import img from "./components/bag.png";
import { Link } from "react-router";

export const AdDetail = () => {
  return (
    <>
      <Nav />
      <section className="w-full h-screen flex flex-col items-center bg-[#F2F2F2] pt-[4vh]">
        <div className="w-full h-screen flex items-center justify-center">
          <div className="w-[31.736vw] h-[60vh] flex flex-col items-center justify-between">
            <Link to="/user" viewTransition>
              <button className="w-[30vw] h-[8vh] rounded-full bg-[#EB4E27] text-xl font-bold cursor-pointer">
                back to all
              </button>
            </Link>

            <div className="w-full h-[38vh] flex flex-col justify-between font-[Archivo] text-black">
             <div>
             <h1 className="text-xl font-bold mb-2">
                dieter rams: the complete works
              </h1>
              <p className="text-xl mb-10">by dieter rams . lifestyle</p>
              <p className="text-xl font-medium text-gray-700 italic ">
                from the creative flair of Ico and Luisa Parisi comes the
                ceramic hand vase, part of the Impronta collection, conceived in
                the 1960s by the designer and his wife as a refined series of
                home accessories with clear pop-art references.
              </p>
             </div>

              <div className="w-[6vw] h-[7vh] bg-[#EB4E27] text-2xl text-white flex items-center justify-center font-medium rounded-xl ">
                $600
              </div>
            </div>
          </div>
          <div className="w-[45vw] h-[60vh] ml-10 rounded-2xl flex items-center justify-center bg-white">
            <img src={img} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
export default AdDetail;
