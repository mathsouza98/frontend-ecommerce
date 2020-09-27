import React, { useState, useEffect } from 'react';
import { Navbar, SubmitForm } from '../components/index';
import style from '../styles/adminStyle.css';
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import axios from 'axios'

export default function Admin() {
  const [productState, setProductState] = useState([]);
  const [selectedProductState, setSelectedProductState] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:8080/api/products');
      setProductState(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <Navbar />
      <div className="container-xl" style={{ margin: 0, maxWidth: '100%' }}>
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Administrar <b>Produtos</b></h2>
                </div>
                <div className="col-sm-6">
                  <a href="#addProdutoModal" className="btn btn-success" data-toggle="modal"><span>Novo Produto</span></a>
                </div>
              </div>
            </div>

            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  {/* <th>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="selectAll"></input>
                      <label for="selectAll"></label>
                    </span>
                  </th> */}
                  <th>Id</th>
                  <th>Nome</th>
                  <th>Categoria</th>
                  <th>Preço</th>
                  <th>Marca</th>
                  <th>Quantidade</th>
                  <th>Visualizações</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {productState.map(product => (
                  <tr key={product.id}>
                    {/* <td>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="checkbox1" name="options[]" value="1"></input>
                        <label for="checkbox1"></label>
                      </span>
                    </td> */}
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.brand}</td>
                    <td>{product.stockQuantity}</td>
                    <td>{product.totalVisualization}</td>
                    <td style={{ paddingRight: '0px' }}>
                      <a href="#editProdutoModal" data-toggle="modal"><button type="button" className="btn btn-warning" data-toggle="tooltip" title="Edit" onClick={() => setSelectedProductState(product)}>Editar</button></a>
                    </td>
                    <td>
                      <button
                        onClick={async () => axios.delete('http://localhost:8080/api/products/' + product.id)
                          .then(function (response) {
                            fetchData();
                            console.log(response);
                          })
                          .catch(function (error) {
                            console.log(error);
                          })}
                        type="button"
                        className="btn btn-danger"
                        data-toggle="tooltip"
                        title="Deletar"
                      >
                        Deletar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div id="addProdutoModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Adicionar Produto</h4>
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div className="modal-body">
              <SubmitForm requestMethod="post" />
            </div>
          </div>
        </div>
      </div>

      <div id="editProdutoModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar Produto</h4>
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div className="modal-body">
              <SubmitForm requestMethod="put" data={selectedProductState} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}