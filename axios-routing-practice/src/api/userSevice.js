import axiosInstance from "./axoisInstance";

export const getUsers = () => {
    return axiosInstance.get('/users');
}

export const getUsersById = (id) => {
    return axiosInstance.get(`/users/${id}`);
}