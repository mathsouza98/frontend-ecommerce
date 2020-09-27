import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from '../components';

/*
    @param {string} id;
    @param {string} number;
    @param {string} expDate;
    @param {string} banner;
    @param {string} holderName;
    @param {string} secCode;
*/

function SelectPaymentCard() {
  const [userState, setUserState] = useState([])

  axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/user/all");
      console.log(response);
      setUserState(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  const rolesArrayToString = (roles) => {
    let roleString = '';

    for (let role of roles) {
      roleString += role.name + ' / ';
    }
    return roleString;
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <a className="btn btn-primary" style={{ marginTop: "30px" }} href="/admin">Produtos</a>
        <a className="btn btn-primary" style={{ marginTop: "30px", marginLeft: '30px' }} href="/admin/users/submit">Cadastrar Usuário</a>
        <h4 style={{ margin: '20px 0px' }}>Usuários</h4>
        <div className="card">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Usuário</th>
                <th scope="col">Nome</th>
                <th scope="col">Papéis</th>
                <th scope="col">E-mail</th>
              </tr>
            </thead>
            <tbody>
              {userState.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{rolesArrayToString(user.roles)}</td>
                  <td>{user.contact !== null ? user.contact.email : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default SelectPaymentCard;