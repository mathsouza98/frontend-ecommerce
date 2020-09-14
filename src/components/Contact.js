import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from "formik";
import axios from 'axios';

function Contact() {
  const [contactState, setContactState] = useState([])

  axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');

  useEffect(() => {
    fetchData()
  }, []);

  async function editUserContact(values) {
    console.log(values)
    try {
      const response = await axios.put("http://localhost:8080/api/account/contact", values);
      setContactState(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:8080/api/account/contact");
      setContactState(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container-fluid">
      <Formik
        initialValues={{ email: "", cellPhone: "", homePhone: "", commercialPhone: "" }}
        onSubmit={values => editUserContact(values)}
      >
        <div className="container">
          <h1 className="well" style={{ marginTop: '40px' }}>Contato</h1>
          <div className="col-lg-12 well">
            <div className="row">
              <div className="card" style={{ padding: '20px' }}>
                <Form>
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-6 form-group">
                        <label>Celular</label>
                        <Field name="cellPhone" type="text" placeholder={contactState.cellPhone} className="form-control" required></Field>
                      </div>
                      <div className="col-sm-6 form-group">
                        <label>Telefone Residencial</label>
                        <Field name="homePhone" type="text" placeholder={contactState.homePhone} className="form-control" required></Field>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 form-group">
                        <label>Telefone Comercial</label>
                        <Field name="commercialPhone" type="text" placeholder={contactState.commercialPhone} className="form-control" required></Field>
                      </div>
                      <div className="col-sm-6 form-group">
                        <label>E-mail</label>
                        <Field name="email" type="text" placeholder={contactState.email} className="form-control" required></Field>
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <button type="submit" className="btn btn-primary">Salvar</button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Formik>
    </div>
  );
}

export default Contact;