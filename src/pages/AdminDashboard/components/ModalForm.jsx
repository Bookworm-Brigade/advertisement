import React, { useState } from "react";

export default function ModalForm({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

React.useEffect(() => {
    if (!isOpen) {
        setName("");
        setCategory("");
    }
}, [isOpen]);

return (
    <>
        <dialog id="my_modal_3" className="modal bg-black/90" open={isOpen}>
            <div className="modal-box">
                <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={onClose}
                >
                    ✕
                </button>
                <h3 className="font-bold text-lg py-4">Add Book</h3>

                <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Product Name</legend>
                        <input type="text" className="input w-full h-16" value={category}
                            onChange={(e) => setCategory(e.target.value)} placeholder="Type here" />
                    </fieldset>
            
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Category</legend>
                        <input type="text" className="input w-full h-16" value={name}
                            onChange={(e) => setName(e.target.value)} placeholder="Type here" />
                    </fieldset>
            
                    <button type="submit" className="btn btn-success mt-10">
                        Add
                    </button>
                </form>
            </div>
        </dialog>
    </>
);
}
