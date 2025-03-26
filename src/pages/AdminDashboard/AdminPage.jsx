import React from "react";
import NavBar from "./components/NavBar";
import TableList from "./components/TableList";

export const AdminPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="w-[18%] h-193 bg-red-600 "></div>
        <div className="w-[82%] h-193 bg-blue-500 flex flex-col items-center">
          <div className="flex justify-between items-center bg-green-600 h-30 px-15 w-full">
            <h1>Manage Users</h1>

            {/* Modal */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              open modal
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className=" flex flex-col bg-red-400 w-[40vw] h-[60vh] px-10 py-10">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>

                  <h3 className="font-bold text-lg">Add Product!</h3>
                  <input
                    type="text"
                    name="title"
                    placeholder="Name"
                    className="input mt-4 w-full h-15"
                  />
                  <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    className="input mt-4 w-full h-15"
                  />
                  <input
                    type="file"
                    name="image"
                    className="input mt-4 w-full h-15 cursor-pointer"
                  />
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    className="input mt-4 w-full h-15"
                  />
                  <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    className="input mt-4 w-full h-15"
                  />
                <button className=""></button>
                </form>
              </div>
            </dialog>
          </div>

          <div className="flex justify-between px-20 items-center bg-blue-100 w-full h-20 ">
            <h1>Ad List</h1>
            <input
              className="bg-amber-800 h-15"
              type="search"
              name=""
              id=""
            />{" "}
          </div>

          <TableList />
        </div>
      </div>
    </>
  );
};
export default AdminPage;
