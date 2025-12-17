import axiosInstance from "./axiosInstance";

// Fetch all trainers
export const getAllTrainers = () => axiosInstance.get("/trainers");

// Alias so you can import fetchTrainers too
export const fetchTrainers = getAllTrainers;

// Fetch current trainer profile
export const fetchMyTrainerProfile = () => axiosInstance.get("/trainers/me");

// Delete trainer
export const deleteTrainer = (id) => axiosInstance.delete(`/trainers/${id}`);

