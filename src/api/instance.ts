import axios from 'axios';
console.log( process.env.REACT_APP_SERVER);
const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER
});

export default api
