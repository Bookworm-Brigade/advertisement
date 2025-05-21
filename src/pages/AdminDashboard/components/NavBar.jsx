import React from "react";
import ModalForm from "./ModalForm";
import ParentComponent from "./ParentComponent";

export const NavBar = () => {
  return (
    <div className="navbar bg-white shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-black text-xl">Vendor Dashboard</a>
      </div>
      <div className="flex items-center gap-2">
             <div className="flex size-13 rounded-full bg-red-600" ></div>
      </div>
    </div>
  );
};
export default NavBar;
