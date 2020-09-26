import React from 'react';
import { Address, Navbar, SelectAddress, SelectPaymentCard } from '../components/index';
import axios from 'axios';
import { useEffect } from 'react';

const Order = props => {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');

  useEffect(() => {
    localStorage.setItem('addressId', '');
    localStorage.setItem('paymentCardId', '');
  }, [])

  const requestOrder = async (installmentNumber) => {
    const addressId = localStorage.getItem('addressId');
    const paymentCardId = localStorage.getItem('paymentCardId');

    if (addressId === '') {
      alert("Selecione um endereço")
      return
    }

    if (paymentCardId === '') {
      alert("Selecione um cartão")
      return
    }

    try {
      const response = await axios.post('http://localhost:8080/api/account/orders', {
        addressId: addressId,
        paymentCardId: paymentCardId,
        installmentNumber: installmentNumber
      });
      console.log(response);
      window.location.href = "http://localhost:3000/bill/" + response.data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <SelectAddress />
        <SelectPaymentCard />
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <button onClick={() => requestOrder()} className="btn btn-primary">Confirmar compra</button>
        </div>
      </div>
    </>
  );
}

export default Order;
