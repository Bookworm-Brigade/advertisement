import React from "react";
import Edit from "./Edit";
import Delete from "./Delete";

export const TableList = () => {
  return (
    <div className="overflow-x-auto flex  justify-center">
      <table className="table w-300 ">
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
                  <div className="rounded-full size-15">
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
            <td className="flex justify-end">
             <Edit/>
             <Delete/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TableList;
