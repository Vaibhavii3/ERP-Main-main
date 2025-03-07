import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../api/product";
import { listWarehouses } from "../api/warehouse";


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
  const [warehouses, setWarehouses] = useState<{ _id: string; name: string }[]>([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState("");

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const response = await listWarehouses();
        setWarehouses(response.warehouses); // Adjust based on API response structure
      } catch (error) {
        console.error("Error fetching warehouses:", error);
      }
    };

    fetchWarehouses();
  }, []);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Convert numeric fields to numbers
    if (name === 'price' || name === 'stocks') {
      setNewProduct({ ...newProduct, [name]: value === '' ? 0 : Number(value) });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // setError(null);
    
    try {
      const addedProduct = await addProduct(newProduct);
      console.log("Product added:", addedProduct);
      // navigate(`/products/${addedProduct._id}`);
      navigate(`/products`);
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
        <select 
          name="warehouse" 
          // onChange={handleChange}
          onChange={(e) => {
            setSelectedWarehouse(e.target.value); // Update selectedWarehouse state
            setNewProduct({ ...newProduct, warehouse: e.target.value }); // Update newProduct
          }}
          value={selectedWarehouse} 
          className="block w-full p-2 border rounded mb-4">
        <option value="" disabled>
          Select a Warehouse
        </option>
        {warehouses.map((warehouse) => (
          <option key={warehouse._id} value={warehouse._id}>
          {warehouse.name}
        </option>
        ))}
        </select>

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