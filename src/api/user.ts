import axios from 'axios';

const API_BASE_URL = "http://localhost:3000/api/v1/auth"; 

// Fetch only warehouse managers
export const listManagers = async () => {
    try {
      const token = localStorage.getItem("token"); // If using authentication
      const response = await axios.get(`${API_BASE_URL}/managers`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching managers:", error);
      throw error;
    }
  };