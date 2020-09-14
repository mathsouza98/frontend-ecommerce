import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import axios from 'axios';

function SubmitUserForm() {

  async function registerUser(values) {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/signup", values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Formik
      initialValues={{
        name: "", userType: "", cpf_cnpj: "", username: "", password: "", email: "", cellPhone: "", homePhone: "", commercialPhone: ""
      }}
      onSubmit={values => registerUser(values)}
    >
      <div className="container">
        <h1 className="well" style={{ marginBottom: '60px' }}>Registre-se</h1>
        <div className="col-lg-12 well">
          <div className="row">
            <Form>
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-4 form-group">
                    <label>Nome Completo</label>
                    <Field name="name" type="text" placeholder="Entre com seu nome completo.." className="form-control" ></Field>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>Selecione uma opção</label>
                    <Field name="userType" component="select" className="form-control" id="userType">
                      <option value=""></option>
                      <option value="fisica">Sou Pessoa Física</option>
                      <option value="juridica">Sou Pessoa Jurídica</option>
                    </Field>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>CPF / CNPJ</label>
                    <Field name="cpf_cnpj" type="text" placeholder="Entre com seu CPF/CNPJ.." className="form-control" ></Field>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 form-group">
                    <label>Nome de Usuário</label>
                    <Field name="username" type="text" placeholder="Entre com um nome de usuário.." className="form-control" ></Field>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>Senha</label>
                    <Field name="password" type="password" placeholder="Entre com uma senha.." className="form-control" ></Field>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 form-group">
                    <label>Celular</label>
                    <Field name="cellPhone" type="text" placeholder="Entre com seu Celular.." className="form-control" ></Field>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>Telefone Residencial</label>
                    <Field name="homePhone" type="text" placeholder="Entre com seu Telefone Residencial.." className="form-control" ></Field>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>Telefone Comercial</label>
                    <Field name="workPhone" type="text" placeholder="Entre com seu Telefone Comercial.." className="form-control" ></Field>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>E-mail</label>
                    <Field name="email" type="text" placeholder="Entre com seu Telefone Comercial.." className="form-control" ></Field>
                  </div>
                </div>
                <div className="modal-footer" >
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                  <button type="submit" className="btn btn-primary">Salvar</button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Formik>
  );
}

export default SubmitUserForm;

