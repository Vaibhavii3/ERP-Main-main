import axios from "axios";
import { Product } from "../types";
const API_BASE_URL = "http://localhost:3000/api/v1/products"; 

// Get all products
export const getProducts = async ():Promise<Product[]> => {
  const response = await axios.get(`${API_BASE_URL}`);
  return response.data.products;
};

// Get a single product by ID
export const getProductById = async (id: string):Promise<Product[]> => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

// Add new product
export const addProduct = async (data: object):Promise<Product[]> => {
  const response = await axios.post(`${API_BASE_URL}/add-product`, data);
  return response.data;
};

// Update product
export const updateProduct = async (id: string, data: object):Promise<Product[]> => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, data);
  return response.data;
};

// Delete product
export const deleteProduct = async (id: string):Promise<Product[]> => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
};
