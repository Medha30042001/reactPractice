import axiosInstance from "./axoisInstance";

export const getPostsByUser = (userId) => {
    return axiosInstance.get(`/posts?userId=${userId}`);
}