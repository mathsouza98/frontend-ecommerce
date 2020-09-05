import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";

const SubmitForm = () => {
  return (
    <div id="addProdutoModal" className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <form>
            <div className="modal-header">
              <h4 className="modal-title">Adicionar Produto</h4>
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div className="modal-body">
              <Formik
                initialValues={{ name: "", category: "", price: "", brand: "", stockQuantity: "", imagePathUrl: "" }}
                onSubmit={async values => {
                  await new Promise(resolve => setTimeout(resolve, 500));
                  alert(JSON.stringify(values, null, 2));
                }}
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
                    <Field name="price" type="text" className="form-control" required></Field>
                  </div>
                  <div className="form-group">
                    <label>Marca do Produto</label>
                    <Field name="brand" type="text" className="form-control" required></Field>
                  </div>
                  <div className="form-group">
                    <label>Quantidade do Produto</label>
                    <Field name="stockQuantity" type="text" className="form-control" required></Field>
                  </div>
                  <div className="form-group">
                    <label>Foto do Produto</label>
                    <Field type="imagePathUrl" className="form-control" required></Field>
                  </div>
                </Form>
              </Formik>
            </div>
            <div className="modal-footer" >
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary">Adicionar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SubmitForm;

