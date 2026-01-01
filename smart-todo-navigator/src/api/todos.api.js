import axiosInstance from "./client";

export const fetchAllTodos = () => {
    return axiosInstance.get('/todos')
}

export const fetchTodosById = (id) => {
    return axiosInstance.get(`/todos/${id}`)
}