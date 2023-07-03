import axios from 'axios';

export const createRaffle = async (raffleData: any) => {
  try {
    const response = await axios.post('/api/raffle/create', raffleData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRaffles = async () => {
  try {
    const response = await axios.get('/api/raffle');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRaffle = async (id: string) => {
  try {
    const response = await axios.get(`/api/raffle/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateRaffle = async (id: string, updatedData: any) => {
  try {
    const response = await axios.put(`/api/raffle/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteRaffle = async (id: string) => {
  try {
    const response = await axios.delete(`/api/raffle/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};