import React from "react";
import Nav from "./components/Nav";
import img from "./components/bag.png";

export const UserPage = () => {
  return (
    <>
      <Nav />
      <section className="w-full flex flex-col items-center justify-center bg-[#F2F2F2]">
        
        <div className="flex items-center justify-evenly w-[390px] h-[44px] border rounded-full mt-[24px] text-black">
          <p>all</p>
          <p>home</p>
          <p>lifestyle</p>
          <p>technology</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-[24px]">
          <div className="w-[472px] h-[375px] bg-white ">
            <div className="w-full h-4/5 flex items-center justify-center">
              <img src={img} alt=""  />
            </div>
            <div className="w-full h-1/5 text-black flex items-start  flex-col px-5">
              <h4>Le Chiquito long</h4>
              <p>jacquemus</p>
            </div>
          </div>
          <div className="w-[472px] h-[375px] bg-amber-900"></div>
          <div className="w-[472px] h-[375px] bg-amber-900"></div>
          <div className="w-[472px] h-[375px] bg-amber-900"></div>
          <div className="w-[472px] h-[375px] bg-amber-900"></div>
          <div className="w-[472px] h-[375px] bg-amber-900"></div>
          <div className="w-[472px] h-[375px] bg-amber-900"></div>
          <div className="w-[472px] h-[375px] bg-amber-900"></div>
          <div className="w-[472px] h-[375px] bg-amber-900"></div>
        </div>
      </section>
    </>
  );
};
export default UserPage;
