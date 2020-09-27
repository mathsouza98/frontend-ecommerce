import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/index'
import axios from 'axios';

const Bill = (props) => {
  const params = useParams();
  const orderId = params.orderId ? params.orderId.toString() : undefined;
  const [orderState, setOrderState] = useState([]);
  const [billState, setBillState] = useState([]);
  const [addressState, setAddressState] = useState([]);
  const [cartState, setCartState] = useState([]);
  const [productListState, setProductListState] = useState([]);
  const [paymentCardState, setPaymentCardState] = useState([]);

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
      setPaymentCardState(response.data.paymentCard);
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
          <p>Data do pedido: {cartState.closeDate !== undefined ? cartState.closeDate.substring(0, 10) + ' - ' + cartState.closeDate.substring(11, 19) : ''}</p>
          <p>Número de itens no pedido: {productListState.length}</p>
          <p>Forma de pagamento: {billState.paymentForm} - {paymentCardState.banner}. Final: {paymentCardState.number !== undefined ? paymentCardState.number.substring(12, 16) : ''}</p>
          <p>Titular do cartão: {paymentCardState.holderName}</p>
          <p>Entrega estimada: 20 a 28 de outubro</p>
          <p><b>Valor total do pedido:</b> R$ {cartState.finalPrice},00</p>
          <br />
          <h6>Itens no pedido</h6>
          <ul>
            {productListState.map(product => (
              <li key={product.id}>({product.orderQuantity}x) {product.name}</li>
            ))}
          </ul>
          <br />
          <p>Vendido e entregue por Primo's store</p>
        </div>
      </div>
    </>
  );
}

export default Bill;