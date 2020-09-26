import React, { useState, useEffect } from 'react';
import axios from 'axios';

/*
    @param {string} id;
    @param {string} street;
    @param {string} number;
    @param {string} neighborhood;
    @param {string} zip;
    @param {string} city;
    @param {string} fedUnit;
*/

function SelectAddress() {
  const [addressState, setAddressState] = useState([])
  const [selectAddressIdState, setSelectedAddressIdState] = useState('');

  axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/account/address");
      console.log(response);
      setAddressState(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  const checkAddressEvent = (id) => {
    if (selectAddressIdState === id) {
      setSelectedAddressIdState('');
      localStorage.setItem('addressId', '');
    } else {
      setSelectedAddressIdState(id);
      localStorage.setItem('addressId', id);
    }

    addressState.map(address => (address.id !== id ? document.getElementById(address.id).checked = false : ''));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h4 style={{ margin: '30px 0px' }}>Selecione o endereço de entrega</h4>
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Selecione</th>
              <th scope="col">Rua</th>
              <th scope="col">CEP</th>
              <th scope="col">Cidade</th>
            </tr>
          </thead>
          <tbody>
            {addressState.map(address => (
              <tr key={address.id}>
                <th scope="row">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value=""
                      id={address.id}
                      style={{ position: 'relative', left: '30px' }}
                      onClick={() => checkAddressEvent(address.id)} />
                  </div>
                </th>
                <td>{address.street + `, ` + address.number + ` - ` + address.neighborhood}</td>
                <td>{address.zip}</td>
                <td>{address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={() => console.log(selectAddressIdState)}>Testar</button>
    </div>
  );
}

export default SelectAddress;