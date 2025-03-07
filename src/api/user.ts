import axios from 'axios';
import { API_BASE_URL } from '../config';

const USER_URL = `${API_BASE_URL}/api/v1/auth`; 

// Fetch only warehouse managers
export const listManagers = async () => {
    try {
      const token = localStorage.getItem("token"); // If using authentication
      const response = await axios.get(`${USER_URL}/managers`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching managers:", error);
      throw error;
    }
  };