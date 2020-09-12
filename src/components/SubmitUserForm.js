import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import axios from 'axios';

function SubmitUserForm({ requestMethod, data }) {

  function handleSubmit() {

  }

  return (
    <Formik
      initialValues={{
        name: "", cpf_cnpj: "", street: "", number: "", nbhd: "", city: "", uf: "", zip: "",
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
                    <Field name="name" type="text" placeholder="Entre com seu nome completo.." className="form-control" required></Field>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>Selecione uma opção</label>
                    <select className="form-control" id="option1">
                      <option value={"1"} >Sou Pessoa Física</option>
                      <option value={"2"} >Sou Pessoa Jurídica</option>
                    </select>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>CPF / CNPJ</label>
                    <Field name="cpf_cnpj" type="text" placeholder="Entre com seu CPF/CNPJ.." className="form-control" required></Field>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-sm-4 form-group">
                      <label>Rua/Avenida</label>
                      <Field name="street" placeholder="Entre com sua Rua/Avenida.." className="form-control" required></Field>
                    </div>
                    <div className="col-sm-4 form-group">
                      <label>Número</label>
                      <Field name="number" type="number" placeholder="Entre com o número.." className="form-control" required></Field>
                    </div>
                    <div className="col-sm-4 form-group">
                      <label>Bairro</label>
                      <Field name="nbhd" type="text" placeholder="Entre com seu bairro.." className="form-control" required></Field>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 form-group">
                    <label>Cidade</label>
                    <Field name="city" type="text" placeholder="Enter com sua cidade.." className="form-control" required></Field>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>UF</label>
                    <Field name="uf" type="text" placeholder="Entre com seu estado.." className="form-control" required></Field>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>CEP</label>
                    <Field name="zip" type="text" placeholder="Entre com seu CEP.." className="form-control" required></Field>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 form-group">
                    <label>Nome de Usuário</label>
                    <Field name="user_name" type="text" placeholder="Entre com um nome de usuário.." className="form-control" required></Field>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>Senha</label>
                    <Field name="password" type="password" placeholder="Entre com uma senha.." className="form-control" required></Field>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>E-mail</label>
                    <Field name="email" type="email" placeholder="Entre com seu e-mail.." className="form-control" required></Field>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 form-group">
                    <label>Celular</label>
                    <Field name="cellphone" type="text" placeholder="Entre com seu Celular.." className="form-control" required></Field>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>Telefone Residencial</label>
                    <Field name="homephone" type="text" placeholder="Entre com seu Telefone Residencial.." className="form-control" required></Field>
                  </div>
                  <div className="col-sm-4 form-group">
                    <label>Telefone Comercial</label>
                    <Field name="workphone" type="text" placeholder="Entre com seu Telefone Comercial.." className="form-control" required></Field>
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

