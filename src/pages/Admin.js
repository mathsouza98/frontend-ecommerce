import React, { Component } from 'react';
import productApi from '../services/productsApi';
import style from "./styles.css";

const Admin = () => {
    return (
        <div>
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Administrar <b>Produtos</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Novo Produto</span></a>
                                    <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete</span></a>						
                                </div>
                            </div>
                        </div>

                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="selectAll"></input>
                                            <label for="selectAll"></label>
                                        </span>
                                    </th>
                                    <th>Id</th>
                                    <th>Nome</th>
                                    <th>Categoria</th>
                                    <th>Preço</th>
                                    <th>Marca</th>
                                    <th>Quantidade</th>
                                    <th>Visualizações</th>
                                    <th>Foto</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="checkbox1" name="options[]" value="1"></input>
                                            <label for="checkbox1"></label>
                                        </span>
                                    </td>
                                    <td>Id = 1</td>
                                    <td>Nome do Produto</td>
                                    <td>Categoria do Produto</td>
                                    <td>Preço do Produto</td>
                                    <td>Marca do Produto</td>
                                    <td>Quantidade no Estoque</td>
                                    <td>Visualizações</td>
                                    <td>Foto do Produto</td>
                                    <td>
                                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="clearfix">
                            <ul className="pagination">
                                <li className="page-item disabled"><a href="#">Anterior</a></li>
                                <li className="page-item active"><a href="#" className="page-link">1</a></li>
                                <li className="page-item"><a href="#" className="page-link">2</a></li>
                                <li className="page-item"><a href="#" className="page-link">3</a></li>
                                <li className="page-item"><a href="#" className="page-link">4</a></li>
                                <li className="page-item"><a href="#" className="page-link">5</a></li>
                                <li className="page-item"><a href="#" className="page-link">Próxima</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">						
                                <h4 className="modal-title">Adicionar Produto</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <div className="form-group">
                                    <label>Id</label>
                                    <input type="text" className="form-control" required></input>
                                </div>
                                <div className="form-group">
                                    <label>Nome</label>
                                    <input type="text" className="form-control" required></input>
                                </div>
                                <div className="form-group">
                                    <label>Categoria</label>
                                    <input type="text" className="form-control" required></input>
                                </div>	
                                <div className="form-group">
                                    <label>Preço</label>
                                    <input type="text" className="form-control" required></input>
                                </div>	
                                <div className="form-group">
                                    <label>Marca</label>
                                    <input type="text" className="form-control" required></input>
                                </div>		
                                <div className="form-group">
                                    <label>Quantidade</label>
                                    <input type="text" className="form-control" required></input>
                                </div>
                                <div className="form-group">
                                    <label>Visualizações</label>
                                    <input type="text" className="form-control" required></input>
                                </div>
                                <div className="form-group">
                                    <label>Foto</label>
                                    <input type="text" className="form-control" required></input>
                                </div>			
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"></input>
                                <input type="submit" className="btn btn-success" value="Add"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">						
                                <h4 className="modal-title">Edit Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" required></input>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required></input>
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea className="form-control" required></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" required></input>
                                </div>					
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"></input>
                                <input type="submit" className="btn btn-info" value="Save"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



            <div id="deleteEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">						
                                <h4 className="modal-title">Delete Employee</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <p>Are you sure you want to delete these Records?</p>
                                <p className="text-warning"><small>This action cannot be undone.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"></input>
                                <input type="submit" className="btn btn-danger" value="Delete"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;