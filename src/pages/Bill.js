import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/index'
import axios from 'axios';

const Bill = (props) => {
  const params = useParams();
  const orderId = params.orderId ? params.orderId.toString() : undefined;
  const [orderState, setOrderState] = useState([]);

  axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/account/orders');
      console.log(response);
      setOrderState(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <h1>{orderId}</h1>
    </>
  );
}

export default Bill;