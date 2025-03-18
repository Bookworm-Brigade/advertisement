import React from "react";
import ModalForm from "./ModalForm";
import ParentComponent from "./ParentComponent";

export const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Admin Dashboard</a>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
       <ParentComponent />
      </div>
    </div>
  );
};
export default NavBar;
