import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../api/product";


const AddProduct: React.FC = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    sku: "",
    category: "",
    price: 0,
    stocks: 0,
    warehouse: ""
  });

  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Convert numeric fields to numbers
    if (name === 'price' || name === 'stocks') {
      setNewProduct({ ...newProduct, [name]: value === '' ? 0 : Number(value) });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     await addProduct(newProduct);
  //     console.log("Product added:", newProduct);
  //     navigate("/");
  //   } catch (error) {
  //     console.error("Error adding product:", error);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // setError(null);
    
    try {
      const addedProduct = await addProduct(newProduct);
      console.log("Product added:", addedProduct);
      navigate(`/product/${addedProduct._id}`);
    } catch (error) {
      console.error("Error adding product:", error);
      // setError("Failed to add product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Add Product</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
        <input name="name" placeholder="Product Name" onChange={handleChange} className="block w-full p-2 border rounded mb-4" />
        <input name="description" placeholder="Description" onChange={handleChange} className="block w-full p-2 border rounded mb-4" />
        <input name="sku" placeholder="SKU" onChange={handleChange} className="block w-full p-2 border rounded mb-4" />
        <input name="category" placeholder="Category" onChange={handleChange} className="block w-full p-2 border rounded mb-4" />
        <input name="price" placeholder="Price" onChange={handleChange} className="block w-full p-2 border rounded mb-4" />
        <input name="stocks" placeholder="Stocks" onChange={handleChange} className="block w-full p-2 border rounded mb-4" />
        
        {/* Dropdown for selecting warehouse */}
        {/* <select name="warehouse" onChange={handleChange} className="block w-full p-2 border rounded mb-4">
          <option value="">Select Warehouse</option>
          <option value="65abc1234def56789ghi1011">Warehouse 1</option>
          <option value="65abc9876def54321ghi2022">Warehouse 2</option>
        </select> */}

        {/* <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Add Product
        </button> */}
        <div className="mt-4 flex justify-end">
          <button 
            type="button" 
            onClick={() => navigate('/products')}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mr-2"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Product'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;