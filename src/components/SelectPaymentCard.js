import React, { useState, useEffect } from 'react';
import axios from 'axios';

/*
    @param {string} id;
    @param {string} number;
    @param {string} expDate;
    @param {string} banner;
    @param {string} holderName;
    @param {string} secCode;
*/

function SelectPaymentCard() {
  const [paymentCardState, setPaymentCardState] = useState([])
  const [selectPaymentCardIdState, setSelectedPaymentCardIdState] = useState('');

  axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/account/payment-card");
      console.log(response);
      setPaymentCardState(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  const checkPaymentCardEvent = (id) => {
    if (selectPaymentCardIdState === id) {
      setSelectedPaymentCardIdState('');
      localStorage.setItem('paymentCardId', '');
    } else {
      setSelectedPaymentCardIdState(id);
      localStorage.setItem('paymentCardId', id);
    }

    paymentCardState.map(paymentCard => (paymentCard.id !== id ? document.getElementById(paymentCard.id).checked = false : ''));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h4 style={{ margin: '30px 0px' }}>Selecione um cartão</h4>
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Selecione</th>
              <th scope="col">Titular do cartão</th>
              <th scope="col">Número</th>
              <th scope="col">Valido até</th>
              <th scope="col">Bandeira</th>
            </tr>
          </thead>
          <tbody>
            {paymentCardState.map(paymentCard => (
              <tr key={paymentCard.id}>
                <th scope="row">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value=""
                      id={paymentCard.id}
                      style={{ position: 'relative', left: '30px' }}
                      onClick={() => checkPaymentCardEvent(paymentCard.id)} />
                  </div>
                </th>
                <td>{paymentCard.holderName}</td>
                <td>{`...` + paymentCard.number.substring(12, 16)}</td>
                <td>{paymentCard.expDate}</td>
                <td>{paymentCard.banner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={() => console.log(selectPaymentCardIdState)}>Testar</button>
    </div>
  );
}

export default SelectPaymentCard;