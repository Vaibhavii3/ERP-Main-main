import axios from 'axios';
import { API_BASE_URL } from '../config';

const WAREHOUSE_URL = `${API_BASE_URL}/api/v1/warehouse`; 

// Create a new warehouse
export const addWarehouse = async (data: object) => {
  const response = await axios.post(`${WAREHOUSE_URL}/warehouse`, data);
  return response.data.data;
};

// Update a warehouse by ID
export const updateWarehouse = async (id: string, data: object) => {
  const response = await axios.put(`${WAREHOUSE_URL}/warehouse/${id}`, data);
  return response.data.data;
};

// Delete a warehouse by ID
export const deleteWarehouse = async (id: string) => {
  const response = await axios.delete(`${WAREHOUSE_URL}/warehouse/${id}`);
  return response.data;
};

// Get a specific warehouse by ID
export const getWarehouseById = async (id: string) => {
  const response = await axios.get(`${WAREHOUSE_URL}/warehouse/${id}`);
  return response.data;
};

// Get a list of all warehouses
export const listWarehouses = async () => {
  const response = await axios.get(`${WAREHOUSE_URL}/warehouses`);
  return response.data;
};
