import axios from 'axios';
const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = 'b7fa9a13';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`?t=${title}&apikey=${key}`)
    },
};


export default API;
