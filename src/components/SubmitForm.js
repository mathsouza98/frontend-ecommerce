import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import axios from 'axios';

function SubmitForm({ requestMethod, data }) {

  async function insertProduct(values) {
    const response = await axios.post('http://localhost:8080/api/products/', values)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleSubmit(values) {
    if (requestMethod === 'post') {
      insertProduct(values);
    } else if (requestMethod === 'put') {
      //api.editProduct();
    }
  }

  return (
    <Formik
      initialValues={{ name: "", category: "", price: "", brand: "", stockQuantity: "" }}
      onSubmit={values => handleSubmit(values)}
    >
      <Form>
        <div className="form-group">
          <label>Nome do Produto</label>
          <Field name="name" type="text" className="form-control" required></Field>
        </div>
        <div className="form-group">
          <label>Categoria do Produto</label>
          <Field name="category" type="text" className="form-control" required></Field>
        </div>
        <div className="form-group">
          <label>Preço do Produto</label>
          <Field name="price" className="form-control" required></Field>
        </div>
        <div className="form-group">
          <label>Marca do Produto</label>
          <Field name="brand" type="text" className="form-control" required></Field>
        </div>
        <div className="form-group">
          <label>Quantidade do Produto</label>
          <Field name="stockQuantity" className="form-control" required></Field>
        </div>
        <div className="modal-footer" >
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
          <button type="submit" className="btn btn-primary">Salvar</button>
        </div>
      </Form>
    </Formik>
  );
}

export default SubmitForm;

