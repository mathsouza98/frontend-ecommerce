import React from 'react';
import { Address, Navbar, SelectAddress, SelectPaymentCard } from '../components/index';
import axios from 'axios';
import { useEffect } from 'react';

const OrderPage = props => {

  useEffect(() => {
    localStorage.setItem('addressId', '');
    localStorage.setItem('paymentCardId', '');
  }, [])

  const requestOrder = () => {
    const addressId = localStorage.getItem('addressId');
    const paymentCardId = localStorage.getItem('paymentCardId');

    console.log(addressId, paymentCardId)
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

export default OrderPage;
