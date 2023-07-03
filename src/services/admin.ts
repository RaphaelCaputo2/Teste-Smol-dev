```typescript
import axios from 'axios';
import { Admin } from '../types/index';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const registerAdmin = async (admin: Admin) => {
  try {
    const response = await axios.post(`${API_URL}/admin/register`, admin);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginAdmin = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/admin/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAdminProfile = async (adminId: string) => {
  try {
    const response = await axios.get(`${API_URL}/admin/profile/${adminId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateAdminProfile = async (adminId: string, updatedAdmin: Admin) => {
  try {
    const response = await axios.put(`${API_URL}/admin/profile/${adminId}`, updatedAdmin);
    return response.data;
  } catch (error) {
    throw error;
  }
};
```