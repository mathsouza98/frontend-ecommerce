import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import productApi from '../services/productsApi';
import style from '../styles/adminStyle.css';

const Checkout = () => {
    return (
        <div>
            <Navbar />
            <main className="mt-5 pt-4">
                <h2 className="container align-self-center" style={{color: "black", textAlign: "center"}} >Finalizar Compra</h2> 
                <div className="container"> 
                    <div className="row">
                        <div className="col-md-8 mb-4">    
                            <div className="card">         
                                <form className="card-body"> 
                            <div className="md-form mb-5">
                                <p>Endereço de Entrega</p>
                                <select class="custom-select">
                                    <option selected>Endereço Para Entrega</option>
                                    <option value="EndereçoCadastrado1">Endereço Cadastrado 01</option>
                                    <option value="EndereçoCadastrado2">Endereço Cadastrado 02</option>
                                </select>
                                <a href="#addEnderecoModal" className="btn btn-success" data-toggle="modal" style={{ margin: 10 }}><span>Novo Endereço</span></a>
                            </div>
                            <div id="addEnderecoModal" className="modal fade">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <form>
                                            <div className="modal-header">						
                                                <h4 className="modal-title">Adicionar Endereço</h4>
                                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            </div>
                                            <div className="modal-body">					
                                                <div className="form-group">
                                                    <label>Endereço da entrega</label>
                                                    <input type="text" className="form-control" required></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>Número da entrega</label>
                                                    <input type="text" className="form-control" required></input>
                                                </div>	
                                                <div className="form-group">
                                                    <label>Bairro da entrega</label>
                                                    <input type="text" className="form-control" required></input>
                                                </div>	
                                                <div className="form-group">
                                                    <label>CEP da entrega</label>
                                                    <input type="text" className="form-control" required></input>
                                                </div>		
                                                <div className="form-group">
                                                    <label>Cidade da entrega</label>
                                                    <input type="text" className="form-control" required></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>UF da entrega</label>
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
                            <hr />
                            <p>Formas de Pagamento</p>
                            <div className="d-block my-3">
                                <div className="custom-control custom-radio">
                                <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required></input>
                                <label className="custom-control-label" for="credit">Cartão de Crédito</label>
                                </div>
                                <div className="custom-control custom-radio">
                                <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required></input>
                                <label className="custom-control-label" for="debit">Boleto</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                <p>Cartões Cadastrados</p>
                                <select class="custom-select">
                                    <option selected>Cartões Cadastrados</option>
                                    <option value="CartãoCadastrado1">Cartão Cadastrado 01</option>
                                    <option value="CartãoCadastrado2">Cartão Cadastrado 02</option>
                                </select>
                                <a href="#addCartaoModal" className="btn btn-success" data-toggle="modal" style={{ margin: 10 }}><span>Novo Cartão</span></a>
                                </div>
                                <div id="addCartaoModal" className="modal fade">
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
                                <div className="col-md-6 mb-3">
                                <p>Parcelamento</p>
                                <select class="custom-select">
                                    <option selected>Parcelar em x vezes</option>
                                    <option value="1x">1x</option>
                                    <option value="2x">2x</option>
                                    <option value="1x">3x</option>
                                    <option value="2x">4x</option>
                                    <option value="1x">5x</option>
                                    <option value="2x">6x</option>
                                    <option value="1x">7x</option>
                                    <option value="2x">8x</option>
                                    <option value="1x">9x</option>
                                    <option value="2x">10x</option>
                                    <option value="1x">11x</option>
                                    <option value="2x">12x</option>
                                </select>
                                </div>
                            </div>
                            <hr className="mb-4" />
                            <button className="btn btn-primary btn-lg btn-block" type="submit">Finalizar Compra</button>
                            </form>
                            <form className="card-body">
                               <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar Compra</button>
                            </form>
                        </div>
                        </div>
                        <div className="col-md-4 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Seu Carrinho</span>
                            <span className="badge badge-secondary badge-pill">3</span>
                        </h4>
                        <ul className="list-group mb-3 z-depth-1">
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Produto 1</h6>
                                <small className="text-muted">Marca 1</small>
                            </div>
                            <span className="text-muted">R$0,00</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Produto 2</h6>
                                <small className="text-muted">Marca 2</small>
                            </div>
                            <span className="text-muted">R$0,00</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Produto 3</h6>
                                <small className="text-muted">Marca 3</small>
                            </div>
                            <span className="text-muted">R$0,00</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                                <h6 className="my-0">Cupom</h6>
                            </div>
                            <span className="text-success">-R$0,00</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                            <span>Total</span>
                            <strong>R$00,00</strong>
                            </li>
                        </ul>
                        <form className="card p-2">
                            <div className="input-group">
                            <input type="text" className="form-control" placeholder="Cupom" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                            <div className="input-group-append">
                                <button className="btn btn-secondary btn-md waves-effect m-0" type="button">Aplicar</button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="page-footer text-center font-small mt-4">
                <hr className="my-4" />
                <div className="footer-copyright py-3">
                    © 2020 Primo's Store
                </div>
            </footer>
        </div>
    );
}

export default Checkout;