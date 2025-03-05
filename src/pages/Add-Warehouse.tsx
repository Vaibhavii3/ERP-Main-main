import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addWarehouse } from "../api/warehouse";
import { listManagers } from "../api/user";

const AddWarehouse = () => {
  const [newWarehouse, setNewWarehouse] = useState({
    name: "",
    location: "",
    manager: "",
    zones: "",
  });

  const [loading, setLoading] = useState(false);
  const [managers, setManagers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchManagers = async () => {
      try {
        const response = await listManagers();//
        setManagers(response.users); // Adjust based on API response structure
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchManagers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWarehouse({ ...newWarehouse, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const addedWarehouse = await addWarehouse({
        ...newWarehouse,
        zones: newWarehouse.zones.split(",").map((zone) => zone.trim()), // Convert zones to an array
      });
      console.log("Warehouse added:", addedWarehouse);
      navigate("/warehouses");
    } catch (error) {
      console.error("Error adding warehouse:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Add Warehouse</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
        <input name="name" placeholder="Warehouse Name" onChange={handleChange} className="block w-full p-2 border rounded mb-4" required />
        <input name="location" placeholder="Location" onChange={handleChange} className="block w-full p-2 border rounded mb-4" required />
        
        {/* Manager Dropdown */}
        <select name="manager" onChange={handleChange} className="block w-full p-2 border rounded mb-4" required>
          <option value="">Select Manager</option>
          {managers.map((manager) => (
            <option key={manager._id} value={manager._id}>{manager.name}</option>
          ))}
        </select>
        
        <input name="zones" placeholder="Zones (comma-separated)" onChange={handleChange} className="block w-full p-2 border rounded mb-4" required />
        
        <div className="mt-4 flex justify-end">
          <button type="button" onClick={() => navigate('/warehouses')} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mr-2">
            Cancel
          </button>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md" disabled={loading}>
            {loading ? 'Adding...' : 'Add Warehouse'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddWarehouse;
