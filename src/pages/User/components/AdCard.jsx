import React from "react";
import img from "./bag.png";
import { Link } from "react-router";

export const AdCard = () => {
  return (
    <Link to="/detail">
      <div className="w-[29vw] h-[50vh] bg-white">
        <div className="w-full h-4/5 flex items-center justify-center">
          <img src={img} alt="" />
        </div>
        <div className="w-full h-1/5 text-black flex items-start justify-between px-[2.6vw] font-[Archivo] text-xl">
        <div><h1 className="font-bold">le chiquito long</h1>
          <p>jacquemus</p></div>
          
          <div className="w-[4vw] h-[6vh] bg-[#EB4E27] text-white flex items-center justify-center font-medium rounded-xl ">
            $600
          </div>
        </div>
      </div>
    </Link>
  );
};
export default AdCard;
