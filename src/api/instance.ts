import axios from 'axios';

const api = axios.create({
  baseURL: 'https://192.168.31.30:3333', // localhost Replace with your backend URL docker
});

export default api
