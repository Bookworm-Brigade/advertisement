import React from "react";

export const Nav = () => {
  return (
    <div>
      <nav className="w-full h-[64px] flex justify-between items-center p-4  bg-[#F2F2F2] border-amber-300 border-2 text-white">
        <div className="bg-amber-600 size-4"></div>
        <input className="border" type="search" />
      </nav>
    </div>
  );
};
export default Nav;
