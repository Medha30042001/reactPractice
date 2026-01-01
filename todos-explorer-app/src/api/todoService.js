import axiosInstance from "./axiosInstance";

export const getTodos = () => {
    return axiosInstance.get('/todos');
}

export const getTodosById = (id) => {
    return axiosInstance.get(`/todos/${id}`);
}