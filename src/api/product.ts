import axios from "axios";
import { Product } from "../types";
import { API_BASE_URL } from "../config";
const PRODUCT_URL = `${API_BASE_URL}/api/v1/products`; 

// Get all products
export const getProducts = async ():Promise<Product[]> => {
  const response = await axios.get(`${PRODUCT_URL}`);
  console.log("API Response:", response.data); // Debugging
  return response.data.data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await axios.get(`${PRODUCT_URL}/get-product/${id}`);
  console.log("API Response:", response.data); // Debugging
  return response.data.data;
};

// Add new product
export const addProduct = async (data: object):Promise<Product> => {
  const response = await axios.post(`${PRODUCT_URL}/add-product`, data);
  return response.data;
};

// Update product
export const updateProduct = async (id: string, data: object):Promise<Product[]> => {
  const response = await axios.put(`${PRODUCT_URL}/update-product/${id}`, data);
  return response.data;
};

// Delete product
export const deleteProduct = async (id: string):Promise<Product[]> => {
  const response = await axios.delete(`${PRODUCT_URL}/delete-product/${id}`);
  return response.data;
};
