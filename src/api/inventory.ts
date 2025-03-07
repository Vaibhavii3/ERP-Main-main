import axios from "axios";
import { API_BASE_URL } from "../config";

const INVENTORY_URL = `${API_BASE_URL}/api/v1/inventory`; 

// Get all inventories
export const getInventories = async () => {
  const response = await axios.get(`${INVENTORY_URL}/inventories`);
  return response.data;
};

// Get a single inventory by ID
export const getInventoryById = async (id: string) => {
  const response = await axios.get(`${INVENTORY_URL}/inventory/${id}`);
  return response.data;
};

// Add new inventory item
export const addInventory = async (data: object) => {
  const response = await axios.post(`${INVENTORY_URL}/inventory`, data);
  return response.data;
};

// Update inventory item
export const updateInventory = async (id: string, data: object) => {
  const response = await axios.put(`${INVENTORY_URL}/inventory/${id}`, data);
  return response.data;
};

// Delete inventory item
export const deleteInventory = async (id: string) => {
  const response = await axios.delete(`${INVENTORY_URL}/inventory/${id}`);
  return response.data;
};

// Increase stock
export const increaseStock = async (data: object) => {
  const response = await axios.post(`${INVENTORY_URL}/add-stock`, data);
  return response.data;
};

// Decrease stock
export const removeStock = async (data: object) => {
  const response = await axios.post(`${INVENTORY_URL}/remove-stock`, data);
  return response.data;
};

// Get low stock alerts
export const getLowStockItems = async () => {
  const response = await axios.get(`${INVENTORY_URL}/low-stock`);
  return response.data;
};

// Get expired items
export const getExpiredItems = async () => {
  const response = await axios.get(`${INVENTORY_URL}/expired-items`);
  return response.data;
};

// Get inventory valuation
export const getInventoryValuation = async () => {
  const response = await axios.get(`${INVENTORY_URL}/inventory-valuation`);
  return response.data;
};
