import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import productApi from '../services/productsApi';
import style from '../styles/adminStyle.css';

const Creditcard = () => {
    return (
        <div>
            <Navbar />
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Meus <b>Cartões</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addProdutoModal" className="btn btn-success" data-toggle="modal"><span>Novo Cartão</span></a>
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
                                    <th>Número</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
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
                                    <td>************1111</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <a href="#editProdutoModal" className="edit" data-toggle="modal"><button type="button" class="btn btn-warning" data-toggle="tooltip" title="Edit">Editar</button></a>
                                    </td>
                                    <td>
                                        <a href="#deletarProdutoModal" className="Deletar" data-toggle="modal"><button type="button" class="btn btn-danger" data-toggle="tooltip" title="Deletar">Deletar</button></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div id="addProdutoModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">						
                                <h4 className="modal-title">Adicionar Cartão</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <div className="form-group">
                                    <label>Número do Cartão</label>
                                    <input type="number" min="0000000000000000" max="9999999999999999" minLength= '16' maxLength='16' className="form-control" required></input>
                                </div>
                                <div className="form-group">
                                    <label>Validade do Cartão</label>
                                    <div style={{paddingBottom: 10 }}>
                                        <select class="custom-select">
                                            <option selected>Mês</option>
                                            <option value="1">01</option>
                                            <option value="2">02</option>
                                            <option value="3">03</option>
                                            <option value="1">04</option>
                                            <option value="2">05</option>
                                            <option value="3">06</option>
                                            <option value="1">07</option>
                                            <option value="2">08</option>
                                            <option value="3">09</option>
                                            <option value="1">10</option>
                                            <option value="2">11</option>
                                            <option value="3">12</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select class="custom-select">
                                            <option selected>Ano</option>
                                            <option value="1">2020</option>
                                            <option value="2">2021</option>
                                            <option value="3">2022</option>
                                            <option value="1">2023</option>
                                            <option value="2">2024</option>
                                            <option value="3">2025</option>
                                            <option value="1">2026</option>
                                            <option value="2">2027</option>
                                            <option value="3">2028</option>
                                            <option value="1">2029</option>
                                            <option value="2">2030</option>
                                        </select>
                                    </div>
                                </div>	
                                <div className="form-group">
                                    <label>Bandeira do Cartão</label>
                                    <div>
                                       <select class="custom-select">
                                            <option selected>Bandeira</option>
                                            <option value="1">Visa</option>
                                            <option value="2">Mastercard</option>
                                            <option value="3">American Express</option>
                                            <option value="1">Elo</option>
                                            <option value="2">Hipercard</option>
                                            <option value="3">Dinners Club</option>
                                            <option value="1">Sorocred</option>
                                        </select> 
                                    </div>
                                </div>	
                                <div className="form-group">
                                    <label>Nome do Titular</label>
                                    <input type="text" className="form-control" required></input>
                                </div>		
                                <div className="form-group">
                                    <label>Código de Segurança</label>
                                    <input type="number" min="000" max="999" minLength= '3' maxLength='3' className="form-control" required></input>
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
                                <h4 className="modal-title">Editar Cartão</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                            <div className="form-group">
                                    <label>Número do Cartão</label>
                                    <input type="number" min="0000000000000000" max="9999999999999999" minLength= '16' maxLength='16' className="form-control" required></input>
                                </div>
                                <div className="form-group">
                                    <label>Validade do Cartão</label>
                                    <div style={{paddingBottom: 10 }}>
                                        <select class="custom-select">
                                            <option selected>Mês</option>
                                            <option value="1">01</option>
                                            <option value="2">02</option>
                                            <option value="3">03</option>
                                            <option value="1">04</option>
                                            <option value="2">05</option>
                                            <option value="3">06</option>
                                            <option value="1">07</option>
                                            <option value="2">08</option>
                                            <option value="3">09</option>
                                            <option value="1">10</option>
                                            <option value="2">11</option>
                                            <option value="3">12</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select class="custom-select">
                                            <option selected>Ano</option>
                                            <option value="1">2020</option>
                                            <option value="2">2021</option>
                                            <option value="3">2022</option>
                                            <option value="1">2023</option>
                                            <option value="2">2024</option>
                                            <option value="3">2025</option>
                                            <option value="1">2026</option>
                                            <option value="2">2027</option>
                                            <option value="3">2028</option>
                                            <option value="1">2029</option>
                                            <option value="2">2030</option>
                                        </select>
                                    </div>
                                </div>	
                                <div className="form-group">
                                    <label>Bandeira do Cartão</label>
                                    <select class="custom-select">
                                        <option selected>Bandeira</option>
                                        <option value="1">Visa</option>
                                        <option value="2">Mastercard</option>
                                        <option value="3">American Express</option>
                                        <option value="1">Elo</option>
                                        <option value="2">Hipercard</option>
                                        <option value="3">Dinners Club</option>
                                        <option value="1">Sorocred</option>
                                    </select>
                                </div>	
                                <div className="form-group">
                                    <label>Nome do Titular</label>
                                    <input type="text" className="form-control" required></input>
                                </div>		
                                <div className="form-group">
                                    <label>Código de Segurança</label>
                                    <input type="number" min="000" max="999" minLength= '3' maxLength='3' className="form-control" required></input>
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
                                <h4 className="modal-title">Deletar Cartão</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <p>Tem certeza que quer deletar esse(s) cartão(ões)?</p>
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

export default Creditcard;