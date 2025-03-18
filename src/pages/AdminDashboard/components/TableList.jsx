import React from "react";

export const TableList = () => {
  return (
    <div className="overflow-x-auto flex items-center justify-center">
      <table className="table w-250 ">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle size-25">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Banana Gum</div>
                  <div className="text-sm opacity-50">Sweets</div>
                </div>
              </div>
            </td>
            <td>8:00AM 18/06/2025</td>
            <td>
              <button className="btn w-23 h-15 bg-blue-800">Edit</button>
              <button className="btn w-23 h-15 bg-red-800 ml-10">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TableList;
