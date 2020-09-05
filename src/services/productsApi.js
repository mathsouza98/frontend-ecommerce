import axios from 'axios';

const products = axios.create({ baseURL: 'http://localhost:8080/api/products' });

export default products;

