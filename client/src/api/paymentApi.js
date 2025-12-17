import axiosInstance from "./axiosInstance";

// Get all trainers
export const getAllTrainers = () => axiosInstance.get("/trainers");

// Get current trainer profile
export const fetchMyTrainerProfile = () => axiosInstance.get("/trainers/me");

// Delete trainer
export const deleteTrainer = (id) => axiosInstance.delete(`/trainers/${id}`);

