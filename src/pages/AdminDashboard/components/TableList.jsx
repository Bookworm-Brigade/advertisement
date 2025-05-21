import React, { useState } from "react";
import Edit from "./Edit";
import Delete from "./Delete";

export const TableList = ({ ad, onDeleteSuccess }) => {
  return (
    <div className="">
      <div className="w-[29vw] h-[50vh] mb-40 bg-white">
        <div className="w-full h-4/5 flex items-center justify-center">
          <img
            className="w-full h-full object-cover object-top"
            src={`https://res.cloudinary.com/drsmbcxb6/image/upload/${ad.image[0]}`}
            alt={ad.title}
          />
        </div>
        <div className="w-full h-1/5 text-black flex items-start justify-between px-[2.6vw] font-[Archivo] text-xl mt-5">
          <div>
            <h1 className="font-bold">{ad.title}</h1>
            <p>{ad.category}</p>
          </div>
          <div className="px-[0.5vw] py-[0.9vh] bg-[#EB4E27] text-white flex items-center justify-center font-medium rounded-xl">
            ${ad.price}
          </div>
        </div>
        <div className="flex gap-2 p-2">
          <Edit ad={ad} />
          <Delete adId={ad.id} onDeleteSuccess={onDeleteSuccess} />
        </div>
      </div>
    </div>
  );
};

export default TableList;
