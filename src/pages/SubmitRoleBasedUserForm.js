import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import axios from 'axios';
import { Navbar } from "../components";

function SubmitRoleBasedUserForm() {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');

  async function registerUser(values) {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/admin/signup", values);
      console.log(values);
      alert("usuário cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Erro: Não foi possível cadastrar usuário!");
    }
  }

  return (
    <>
      <Navbar />
      <Formik
        initialValues={{
          name: "", userType: "", cpf_cnpj: "", username: "", password: "",
          contact: { email: "", cellPhone: "", homePhone: "", commercialPhone: "" },
          address: { street: "", number: "", neighborhood: "", zip: "", city: "", fedUnit: "" },
          roles: []
        }}
        onSubmit={values => registerUser(values)}
      >
        <div className="container">
          <a className="btn btn-primary" style={{ marginTop: "30px", marginRight: '30px' }} href="/admin">Produtos</a>
          <a className="btn btn-primary" style={{ marginTop: "30px" }} href="/admin/users">Usuários</a>
          <div className="col-lg-12 well">
            <div className="row">
              <Form>
                <div className="col-sm-12">
                  <h3 style={{ marginTop: '20px' }}>Dados pessoais</h3>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                      <label>Nome Completo</label>
                      <Field name="name" type="text" placeholder="Entre com seu nome completo.." className="form-control" required></Field>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                      <label>Selecione uma opção</label>
                      <Field name="userType" component="select" className="form-control" id="userType" required>
                        <option value=""></option>
                        <option value="fisica">Sou Pessoa Física</option>
                        <option value="juridica">Sou Pessoa Jurídica</option>
                      </Field>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                      <label>CPF / CNPJ</label>
                      <Field name="cpf_cnpj" type="text" placeholder="Entre com seu CPF/CNPJ.." className="form-control" required></Field>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                      <label>Nome de Usuário</label>
                      <Field name="username" type="text" placeholder="Entre com um nome de usuário.." className="form-control" required></Field>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                      <label>Senha</label>
                      <Field name="password" type="password" placeholder="Entre com uma senha.." className="form-control" required></Field>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                      <div className="label">Níveis de acesso</div>
                      <label>
                        <Field type="checkbox" name="roles" value="admin" />
                        &nbsp;Administrador
                        </label>
                      <label>
                        <Field type="checkbox" name="roles" value="mod" />
                        &nbsp;Moderador
                      </label>
                      <label>
                        <Field type="checkbox" name="roles" value="user" />
                        &nbsp;Usuário
                      </label>

                    </div>
                  </div>
                  <h3 style={{ marginTop: '20px' }}>Dados de contato</h3>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                      <label>Celular</label>
                      <Field name="contact.cellPhone" type="text" placeholder="Entre com seu Celular.." className="form-control" required></Field>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                      <label>Telefone Residencial</label>
                      <Field name="contact.homePhone" type="text" placeholder="Entre com seu Telefone Residencial.." className="form-control" required></Field>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                      <label>Telefone Comercial</label>
                      <Field name="contact.commercialPhone" type="text" placeholder="Entre com seu Telefone Comercial.." className="form-control" required></Field>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                      <label>E-mail</label>
                      <Field name="contact.email" type="text" placeholder="Entre com seu Telefone Comercial.." className="form-control" required></Field>
                    </div>
                  </div>
                  <h3 style={{ marginTop: '20px' }}>Dados de endereço</h3>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                      <label>Rua</label>
                      <Field name="address.street" type="text" placeholder="Entre com seu Celular.." className="form-control" required></Field>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                      <label>Número</label>
                      <Field name="address.number" type="text" placeholder="Entre com seu Telefone Residencial.." className="form-control" required></Field>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                      <label>Bairro</label>
                      <Field name="address.neighborhood" type="text" placeholder="Entre com seu Telefone Comercial.." className="form-control" required></Field>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                      <label>CEP</label>
                      <Field name="address.zip" type="text" placeholder="Entre com seu Telefone Comercial.." className="form-control" required></Field>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                      <label>Cidade</label>
                      <Field name="address.city" type="text" placeholder="Entre com seu Telefone Comercial.." className="form-control" required></Field>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 form-group">
                      <label>Estado</label>
                      <Field name="address.fedUnit" type="text" placeholder="Entre com seu Telefone Comercial.." className="form-control" required></Field>
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
    </>
  );
}

export default SubmitRoleBasedUserForm;

