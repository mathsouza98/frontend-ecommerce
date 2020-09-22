import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import axios from 'axios';
import style from '../styles/addressStyle.css'
import { insertAddress } from '../services/AddressService';

function SubmitAddressForm() {

  // async function insertAddress(values) {
  //   try {
  //     const response = await axios.post('http://localhost:8080/api/account/address', values);
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <Formik
      initialValues={{ street: "", number: "", neighborhood: "", zip: "", city: "", fedUnit: "" }}
      onSubmit={values => insertAddress(values)}
    >
      <Form>
        <div className="form-group">
          <label>Rua</label>
          <Field name="street" type="text" className="form-control" required></Field>
        </div>
        <div className="form-group">
          <label>Número</label>
          <Field name="number" type="text" className="form-control" required></Field>
        </div>
        <div className="form-group">
          <label>Bairro</label>
          <Field name="neighborhood" type="text" className="form-control" required></Field>
        </div>
        <div className="form-group">
          <label>CEP</label>
          <Field name="zip" type="text" className="form-control" required></Field>
        </div>
        <div className="form-group">
          <label>Cidade</label>
          <Field name="city" type="text" className="form-control" required></Field>
        </div>
        <div className="form-group">
          <label>Estado</label>
          <Field name="fedUnit" type="text" className="form-control" required></Field>
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button style={{ marginRight: '20px' }} className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
          <button type="submit" className="btn btn-primary">Salvar</button>
        </div>
      </Form>
    </Formik>
  );
}

export default SubmitAddressForm;

