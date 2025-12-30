import axios from 'axios'

const axiosInstance = axios.create({
    baseURL : "https://axios-students-default-rtdb.asia-southeast1.firebasedatabase.app/"
});

export default axiosInstance;