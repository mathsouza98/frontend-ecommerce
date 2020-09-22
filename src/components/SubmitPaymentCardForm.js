import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import axios from 'axios';

function SubmitPaymentCardForm() {

  async function insertPaymentCard(values) {
    try {
      const response = await axios.post('http://localhost:8080/api/account/payment-card', values);
      console.log(response);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Formik
      initialValues={{ number: "", expDate: "", banner: "", holderName: "", secCode: "" }}
      onSubmit={values => insertPaymentCard(values)}
    >
      <Form>
        <div className="form-group">
          <label>Número</label>
          <Field name="number" type="text" className="form-control" required></Field>
        </div>
        <div className="form-group">
          <label>Nome impresso no cartão</label>
          <Field name="holderName" type="text" className="form-control" required></Field>
        </div>
        <div className="form-group">
          <label>Data de expedição</label>
          <Field name="expDate" type="text" className="form-control" required></Field>
        </div>
        <div className="form-group">
          <label>Bandeira</label>
          <Field name="banner" type="text" className="form-control" required></Field>
        </div>
        <div className="form-group">
          <label>Código de segurança</label>
          <Field name="secCode" type="text" className="form-control" required></Field>
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button style={{ marginRight: '20px' }} className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
          <button type="submit" className="btn btn-primary">Salvar</button>
        </div>
      </Form>
    </Formik>
  );
}

export default SubmitPaymentCardForm;

