// import axios from "axios";

// const API_URL = "http://localhost:3000/dest";

// // Mendapatkan semua destinasi
// export const getDestinations = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching destinations:", error);
//     throw error;
//   }
// };

// // Mendapatkan detail destinasi berdasarkan ID
// export const getDestinationById = async (id) => {
//   try {
//     const response = await axios.get(`${API_URL}/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching destination:", error);
//     throw error;
//   }
// };

// // Menambahkan destinasi baru
// export const createDestination = async (data) => {
//   try {
//     const response = await axios.post(API_URL, data);
//     return response.data;
//   } catch (error) {
//     console.error("Error creating destination:", error);
//     throw error;
//   }
// };

// // Memperbarui destinasi berdasarkan ID
// export const updateDestination = async (id, data) => {
//   try {
//     const response = await axios.put(`${API_URL}/${id}`, data);
//     return response.data;
//   } catch (error) {
//     console.error("Error updating destination:", error);
//     throw error;
//   }
// };

// // Menghapus destinasi berdasarkan ID
// export const deleteDestination = async (id) => {
//   try {
//     const response = await axios.delete(`${API_URL}/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error deleting destination:", error);
//     throw error;
//   }
// };
