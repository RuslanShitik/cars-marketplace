import axios from "axios";

export const axiosAPI = axios.create({
    withCredentials: false,
    baseURL: `${process.env.REACT_APP_API_URL}`
})