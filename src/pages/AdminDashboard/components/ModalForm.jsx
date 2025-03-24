import axios from "axios";
import { useState } from "react";

export default function ModalForm() {
  const handleOpenForm = () => {
    const newWindow = window.open("", "_blank");
    if (newWindow) {
      newWindow.document.write(`
        <html>
          <head>
            <title>Add Product</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; text-align: center; }
              form { display: flex; flex-direction: column; gap: 10px; max-width: 400px; margin: auto; }
              input, button { padding: 10px; font-size: 16px; }
              .success { color: green; }
              .error { color: red; }
              .close-btn { background-color: #ff4d4d; color: white; border: none; padding: 10px; cursor: pointer; margin-top: 20px; }
            </style>
          </head>
          <body>
            <h2>Add a Product</h2>
            <form id="productForm">
              <input type="text" name="product_name" placeholder="Product Name" required />
              <input type="text" name="category" placeholder="Category" required />
              <input type="text" name="description" placeholder="Description" required />
              <input type="number" name="price" placeholder="Price" required />
              <input type="file" name="image" accept="image/*" required />
              <button type="submit">Submit</button>
              <p id="responseMessage"></p>
            </form>

            <button class="close-btn" onclick="window.close()">Close</button>

            <script>
              document.getElementById("productForm").onsubmit = async function(event) {
                event.preventDefault();
                const formData = new FormData(this);

                try {
                  const response = await fetch("https://advertisement-api-zwzm.onrender.com", {
                    method: "POST",
                    body: formData
                  });

                  const result = await response.json();
                  document.getElementById("responseMessage").innerHTML = "<span class='success'>Product added successfully!</span>";
                } catch (error) {
                  document.getElementById("responseMessage").innerHTML = "<span class='error'>Failed to add product.</span>";
                }
              };
            </script>
          </body>
        </html>
      `);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleOpenForm}
        className="bg-[#F5F5F5] text-red-400 px-4 py-2 rounded-lg mb-6"
      >
        Add Product
      </button>
    </div>
  );
}
