import axiosInstance from "./axiosInstance";

// Fetch all classes (for admin/member)
export const fetchClasses = () => axiosInstance.get("/classes");

// Fetch current trainer's classes
export const fetchMyTrainerClasses = () => axiosInstance.get("/classes/trainer/me");

// Create a new class
export const createClass = (data) => axiosInstance.post("/classes", data);

// Update a class by ID
export const updateClass = (id, updates) => axiosInstance.put(`/classes/${id}`, updates);

// Delete a class by ID
export const deleteClass = (id) => axiosInstance.delete(`/classes/${id}`);

// Book a class (member)
export const bookClass = (id) => axiosInstance.post(`/classes/${id}/book`);

// Cancel a booked class
export const cancelClass = (id) => axiosInstance.post(`/classes/${id}/cancel`);
