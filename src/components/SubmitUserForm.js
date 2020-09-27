import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import axios from 'axios';

function SubmitUserForm({ requestMethod, data }) {

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Formik
      initialValues={{
        name: "", userType: "", cpf_cnpj: "", street: "", number: "", neighborhood: "", city: "", uf: "", zip: "",
        user_name: "", password: "", email: "", cellphone: "", homephone: "", workphone: ""
      }}
      onSubmit={values => handleSubmit(values)}
    >
      <div className="container">
        <h1 className="well">Registre-se</h1>
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
                    <label>Rua/Avenida</label>
                    <Field name="street" placeholder="Entre com sua Rua/Avenida.." className="form-control" ></Field>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>Número</label>
                    <Field name="number" type="number" placeholder="Entre com o número.." className="form-control" ></Field>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>Bairro</label>
                    <Field name="neighborhood" type="text" placeholder="Entre com seu bairro.." className="form-control" ></Field>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 form-group">
                    <label>Cidade</label>
                    <Field name="city" type="text" placeholder="Enter com sua cidade.." className="form-control" ></Field>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label style={{ display: 'block' }}>UF</label>
                    <Field name="uf" type="text" placeholder="Entre com seu estado.." className="form-control" ></Field>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label style={{ display: 'block' }}>CEP</label>
                    <Field name="zip" type="text" placeholder="Entre com seu CEP.." className="form-control" ></Field>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 form-group">
                    <label>Nome de Usuário</label>
                    <Field name="user_name" type="text" placeholder="Entre com um nome de usuário.." className="form-control" ></Field>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>Senha</label>
                    <Field name="password" type="password" placeholder="Entre com uma senha.." className="form-control" ></Field>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>E-mail</label>
                    <Field name="email" type="email" placeholder="Entre com seu e-mail.." className="form-control" ></Field>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 form-group">
                    <label>Celular</label>
                    <Field name="cellphone" type="text" placeholder="Entre com seu Celular.." className="form-control" ></Field>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>Telefone Residencial</label>
                    <Field name="homephone" type="text" placeholder="Entre com seu Telefone Residencial.." className="form-control" ></Field>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>Telefone Comercial</label>
                    <Field name="workphone" type="text" placeholder="Entre com seu Telefone Comercial.." className="form-control" ></Field>
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

