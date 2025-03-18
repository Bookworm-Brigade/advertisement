import React, { useState } from "react";
import ModalForm from "./ModalForm";

export default function ParentComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        className="w-35 h-12 border rounded-full bg-amber-900"
        onClick={() => handleOpenModal()}
      >
        Add
      </button>

      <ModalForm isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
