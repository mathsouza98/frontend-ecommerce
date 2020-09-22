import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from "formik";
import axios from 'axios';
import { SubmitAddressForm } from './index';
import style from '../styles/adminStyle.css';
import userRegistryStyle from '../styles/userRegistryStyle.css';

function Address() {
  const [addressState, setAddressState] = useState([])

  axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');

  useEffect(() => {
    fetchData()
  }, []);

  async function editUserAddress(values, id) {
    console.log(values)
    console.log(id)
    try {
      const response = await axios.put("http://localhost:8080/api/account/address/" + id, values);
      fetchData();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteAddress(id) {
    try {
      const response = await axios.delete("http://localhost:8080/api/account/address/" + id);
      console.log(response);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:8080/api/account/address");
      setAddressState(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h1 className="well" style={{ marginTop: '40px' }}>Endereço</h1>
          <div className="col-lg-12">
            {addressState.map(address => (
              <div key={address.id} className="row" style={{ marginBottom: '20px' }}>
                <div className="card" style={{ padding: '20px' }}>
                  <Formik
                    initialValues={{ street: "", number: "", neighborhood: "", zip: "", city: "", fedUnit: "" }}
                    onSubmit={values => editUserAddress(values, address.id)}
                  >
                    <Form>
                      <div className="col-sm-12">
                        <div className="row">
                          <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                            <label>Rua</label>
                            <Field name="street" type="text" placeholder={address.street} className="form-control" required></Field>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                            <label>Número</label>
                            <Field name="number" type="text" placeholder={address.number} className="form-control" required></Field>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                            <label>Bairro</label>
                            <Field name="neighborhood" type="text" placeholder={address.neighborhood} className="form-control" required></Field>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                            <label>CEP</label>
                            <Field name="zip" type="text" placeholder={address.zip} className="form-control" required></Field>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                            <label>Cidade</label>
                            <Field name="city" type="text" placeholder={address.city} className="form-control" required></Field>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                            <label>Estado</label>
                            <Field name="fedUnit" type="text" placeholder={address.fedUnit} className="form-control" required></Field>
                          </div>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '30px' }}>
                          <button onClick={() => addressState.length > 1 ? deleteAddress(address.id) : null} style={{ marginRight: '20px' }} className="btn btn-danger">Excluir</button>
                          <button type="submit" className="btn btn-primary">Salvar</button>
                        </div>
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
            ))}
            <div style={{ textAlign: 'center' }}>
              <button style={{ padding: '10px 60px' }} href="#addAddressModal" className="btn btn-primary" data-toggle="modal">Adicionar endereço</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de inserir cartão de crédito */}
      <div id="addAddressModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Adicionar endereço</h4>
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div className="modal-body">
              <SubmitAddressForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;