import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from "formik";
import axios from 'axios';
import { SubmitPaymentCardForm } from './index';
import style from '../styles/adminStyle.css';

function Contact() {
  const [paymentCardState, setPaymentCardState] = useState([])

  axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');

  useEffect(() => {
    fetchData()
  }, []);

  async function editUserContact(values, id) {
    console.log(values)
    console.log(id)
    try {
      const response = await axios.put("http://localhost:8080/api/account/payment-card/" + id, values);
      fetchData();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function deletePaymentCard(id) {
    try {
      const response = await axios.delete("http://localhost:8080/api/account/payment-card/" + id);
      console.log(response);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:8080/api/account/payment-card");
      setPaymentCardState(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <h1 className="well" style={{ marginTop: '40px' }}>Cartões</h1>
          <div className="col-lg-12">
            {paymentCardState.map(paymentCard => (
              <div key={paymentCard.id} className="row" style={{ marginBottom: '20px' }}>
                <div className="card" style={{ padding: '20px' }}>
                  <Formik
                    initialValues={{ number: "", expDate: "", banner: "", holderName: "", secCode: "" }}
                    onSubmit={values => editUserContact(values, paymentCard.id)}
                  >
                    <Form>
                      <div className="col-sm-12">
                        <div className="row">
                          <div className="col-sm-6 form-group">
                            <label>Número</label>
                            <Field name="number" type="text" placeholder={paymentCard.number} className="form-control" required></Field>
                          </div>
                          <div className="col-sm-6 form-group">
                            <label>Nome impresso no cartão</label>
                            <Field name="holderName" type="text" placeholder={paymentCard.holderName} className="form-control" required></Field>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4 form-group">
                            <label>Data de expedição</label>
                            <Field name="expDate" type="text" placeholder={paymentCard.expDate} className="form-control" required></Field>
                          </div>
                          <div className="col-sm-4 form-group">
                            <label>Bandeira</label>
                            <Field name="banner" type="text" placeholder={paymentCard.banner} className="form-control" required></Field>
                          </div>
                          <div className="col-sm-4 form-group">
                            <label>Código de segurança</label>
                            <Field name="secCode" type="text" placeholder={paymentCard.secCode} className="form-control" required></Field>
                          </div>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '30px' }}>
                          <button onClick={() => deletePaymentCard(paymentCard.id)} style={{ marginRight: '20px' }} className="btn btn-danger">Excluir</button>
                          <button type="submit" className="btn btn-primary">Salvar</button>
                        </div>
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
            ))}
            <div className="card">
              <button href="#addPaymentCardModal" className="btn btn-primary" data-toggle="modal">Adicionar cartão</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de inserir cartão de crédito */}
      <div id="addPaymentCardModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Adicionar Produto</h4>
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div className="modal-body">
              <SubmitPaymentCardForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;