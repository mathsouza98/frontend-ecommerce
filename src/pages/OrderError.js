import React from 'react';
import { Address, Navbar, SelectAddress, SelectPaymentCard } from '../components/index';
import axios from 'axios';
import { useEffect } from 'react';

const OrderError = props => {

  return (
    <>
      <Navbar />
      <div className="container">
        <h4 style={{ margin: '30px 0px', color: '	#ff3333' }}>Seu pedido não pode ser executado</h4>
        <div className="card" style={{ padding: '15px' }}>
          <p>Não foi possível efetuar o seu pedido. Infelizmente, um ou mais produtos não estão disponíveis em estoque</p>
        </div>
      </div>
    </>
  );
}

export default OrderError;
