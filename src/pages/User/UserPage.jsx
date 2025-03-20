import React from "react";
import Nav from "./components/Nav";
import AdCard from "./components/AdCard";
import all from "./components/all.png";

export const UserPage = () => {
  return (
    <>
      <Nav />
      <section className="w-full h-full flex flex-col items-center bg-[#F2F2F2] pt-30">
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
        <div className="flex items-center justify-center flex-wrap gap-4 mt-[2vh]">
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        <AdCard />
        </div>
      </section>
    </>
  );
};
export default UserPage;
