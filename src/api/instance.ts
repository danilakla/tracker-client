import axios from 'axios';

const api = axios.create({
  baseURL: 'https://192.168.1.103:3333', // localhost Replace with your backend URL docker
});

export default api
