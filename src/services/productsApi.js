import axios from 'axios';

const products = axios.create({ baseURL: 'http://localhost:8080/api' });

export default products;

