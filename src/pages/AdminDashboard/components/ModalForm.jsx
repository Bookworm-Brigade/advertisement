

import { apiAddAdvert } from "../../../services/Advert";



 const AddProduct = () => {
  const handleSubmit = async(event) => {
    // prevent default behaviour of reload
    event.preventDefault();
    // show loading indicator
    // const [loading, setLoading] = useState(false);
    // collect form data
    const formData = new FormData (event.target);
    // post data to backend
    try{
      const response = await apiAddAdvert (formData);
      console.log (response);
    } catch (error) {
      console.log(error);
    }
  };
  
    // const handleClose = () => {
    //   setIsVisible(false);
    // };
  
 
  return (
    <div className="flex flex-col items-center">
      <button
        // onClick={() => setShowForm((prevState) => !prevState)}
        className="bg-[#F5F5F5] text-red-500 px-4 py-2 rounded-lg mb-6"
      >
        {/* {showForm ? "Hide Form" : "Show form"}  */}Submit
      </button>

       {/* {showForm && (  */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col h-100 w-180 items-center rounded-2xl border-4 border-gray-300 gap-6 pt-5 mr-100"
        >
          <div className="flex">
            <div className="flex flex-col">
              <label htmlFor="product_name" className="block pl-15">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Item name"
                required
                name="title"
                id="title"
                // value={formData.title}
                // onChange={handleChange}
                className="w-60 h-15 border-2 pl-5 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="category" className="block pl-20">
                Category
              </label>
              <input
                type="text"
                placeholder="Category"
                required
                name="category"
                id="category"
                // value={formData.category}





                // onChange={handleChange}
                className="w-60 h-15 border-2 ml-6 pl-5 rounded-lg"
              />
            </div>
            {/* <span className="pl-20">
              <button className="btn border-2" onClick={handleClose}>
            <IoMdClose />
            </button>
            </span> */}
          </div>

          <div className="flex flex-col">
            <label htmlFor="description" className="block pl-15">
              Description 
            </label>
            <input
              type="text"
              placeholder="Describe your product"
              required
              name="description"
              id="description"
              // value={formData.description}
              // onChange={handleChange}
              className="w-60 h-15 border-2 pl-5 rounded-lg"
            />
          </div>

          <div className="flex">
            <div className="flex flex-col">
              <label htmlFor="price" className="block pl-30">
                Price
              </label>
              <input
                type="text"
                placeholder="Set price here"
                required
                name="price"
                id="price"
                // value={formData.price}
                // onChange={handleChange}
                className="w-60 h-15 border-2 pl-5 ml-10 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="image" className="block pl-30">
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                required
                name="image"
                id="image"
                // onChange={handleChange}
                className="w-60 h-15 border-2 pl-5 pt-2 ml-5 rounded-lg"
              />
            </div>
          </div>

          {/* {error && <div className="text-red-500">{error}</div>} */}
          {/* {success && <div className="text-green-500">{success}</div>} */}

          <button
            // disabled={loading}
            className="flex justify-center bg-red-500 h-10 w-40 pt-2 rounded-2xl"
            type="submit"
          >
              "Add Product"
            
          </button>
        </form>
      
    </div>
          
  );
}

export default AddProduct;

