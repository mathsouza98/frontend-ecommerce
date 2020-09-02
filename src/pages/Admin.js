import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import productApi from '../services/productsApi';
import style from "./adminstyles.css";

const Admin = () => {
    return (
        <div>
            <Navbar />
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Administrar <b>Produtos</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addProdutoModal" className="btn btn-success" data-toggle="modal"><span>Novo Produto</span></a>
                                    <a href="#deletarProdutoModal" className="btn btn-danger" data-toggle="modal"><span>Deletar</span></a>						
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
                                    <td>Id</td>
                                    <td>Nome</td>
                                    <td>Categoria</td>
                                    <td>Preço</td>
                                    <td>Marca</td>
                                    <td>Quantidade</td>
                                    <td>Visualizações</td>
                                    <td>Foto</td>
                                    <td>
                                        <a href="#editProdutoModal" className="edit" data-toggle="modal"><button type="button" class="btn btn-warning" data-toggle="tooltip" title="Edit">Editar</button></a>
                                    </td>
                                    <td>
                                        <a href="#deletarProdutoModal" className="Deletar" data-toggle="modal"><button type="button" class="btn btn-danger" data-toggle="tooltip" title="Deletar">Deletar</button></a>
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
            <div id="addProdutoModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">						
                                <h4 className="modal-title">Adicionar Produto</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <div className="form-group">
                                    <label>Nome do Produto</label>
                                    <input type="text" className="form-control" required></input>
                                </div>
                                <div className="form-group">
                                    <label>Categoria do Produto</label>
                                    <input type="text" className="form-control" required></input>
                                </div>	
                                <div className="form-group">
                                    <label>Preço do Produto</label>
                                    <input type="text" className="form-control" required></input>
                                </div>	
                                <div className="form-group">
                                    <label>Marca do Produto</label>
                                    <input type="text" className="form-control" required></input>
                                </div>		
                                <div className="form-group">
                                    <label>Quantidade do Produto</label>
                                    <input type="text" className="form-control" required></input>
                                </div>
                                <div className="form-group">
                                    <label>Visualizações do Produto</label>
                                    <input type="text" className="form-control" required></input>
                                </div>
                                <div className="form-group">
                                    <label>Foto do Produto</label>
                                    <input type="text" className="form-control" required></input>
                                </div>			
                            </div>
                            <div className="modal-footer" >
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-primary">Adicionar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="editProdutoModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">						
                                <h4 className="modal-title">Editar Produto</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <div className="form-group">
                                    <label>Nome do Produto</label>
                                    <input type="text" className="form-control" required></input>
                                </div>
                                <div className="form-group">
                                    <label>Categoria do Produto</label>
                                    <input type="text" className="form-control" required></input>
                                </div>	
                                <div className="form-group">
                                    <label>Preço do Produto</label>
                                    <input type="text" className="form-control" required></input>
                                </div>	
                                <div className="form-group">
                                    <label>Marca do Produto</label>
                                    <input type="text" className="form-control" required></input>
                                </div>		
                                <div className="form-group">
                                    <label>Quantidade do Produto</label>
                                    <input type="text" className="form-control" required></input>
                                </div>
                                <div className="form-group">
                                    <label>Visualizações do Produto</label>
                                    <input type="text" className="form-control" required></input>
                                </div>
                                <div className="form-group">
                                    <label>Foto do Produto</label>
                                    <input type="text" className="form-control" required></input>
                                </div>				
                            </div>
                            <div className="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-primary">Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="deletarProdutoModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">						
                                <h4 className="modal-title">Deletar Produto</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <p>Tem certeza que quer deletar esse(s) produto(s)?</p>
                                <p className="text-warning"><small>Esta ação não pode ser desfeita.</small></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-primary">Deletar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;