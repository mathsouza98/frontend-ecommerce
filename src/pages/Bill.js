import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/index'
import axios from 'axios';

const Bill = (props) => {
  const params = useParams();
  const orderId = params.orderId ? params.orderId.toString() : undefined;
  const [orderState, setOrderState] = useState([]);
  const [BillState, setBillState] = useState([]);
  const [addressState, setAddressState] = useState([]);
  const [cartState, setCartState] = useState([]);
  const [productListState, setProductListState] = useState([]);

  axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');

  const fetchBillData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/account/bill/' + orderId);
      console.log(response);
      setBillState(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchOrderData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/account/orders/' + orderId);
      console.log(response);
      setOrderState(response.data);
      setAddressState(response.data.address);
      setCartState(response.data.cart);
      setProductListState(response.data.cart.productList);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchBillData();
    fetchOrderData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h4 style={{ margin: '30px 0px', color: '#067D64' }}>Seu pedido de n° {orderState.id} foi executado</h4>
        <div className="card" style={{ padding: '15px' }}>
          <p>Endereço de entrega: {addressState.street + ', ' + addressState.number + ' - ' + addressState.neighborhood + '. ' + addressState.city + ' ' + addressState.fedUnit + ' - ' + addressState.zip}</p>
          <p>Data do pedido: {cartState.closeDate !== undefined ? cartState.closeDate.substring(0,10) + ' - ' + cartState.closeDate.substring(11,19) : ''}</p>
          <p>Número de itens no pedido: {productListState.length}</p>
        </div>
      </div>
    </>
  );
}

export default Bill;