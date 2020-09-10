import React, { Component, useState } from 'react';
import Navbar from '../components/Navbar';


export default function Cart() {
  const [selectBoxState, setSelectBoxState] = useState(1);

  return (
    <div>
      <Navbar />
      <section style={{ margin: '0px 20px' }}>
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-3">
              <div className="pt-4 wish-list">
                <h5 className="mb-4">Carrinho (<span>1</span> item)</h5>
                <div className="row mb-4">
                  <div className="col-md-5 col-lg-3 col-xl-3">
                    <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                      <img className="img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg" alt="Sample"/>
                      <a href="#!" >
                        <div className="mask">
                          <div className="mask rgba-black-slight"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-7 col-lg-9 col-xl-9">
                    <div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5>Blue denim shirt</h5>
                          <p className="mb-3 text-muted text-uppercase small">Shirt - blue</p>
                          <p className="mb-2 text-muted text-uppercase small">Color: blue</p>
                          <p className="mb-3 text-muted text-uppercase small">Size: M</p>
                        </div>
                        <div>
                          <div className="def-number-input number-input safari_only mb-0 w-100">
                            <button onClick={() => selectBoxState > 1 ? setSelectBoxState(selectBoxState - 1) : ''}
                              className="button"><span>-</span></button>
                            <input value={selectBoxState} style={{ width: '35px', textAlign: 'center'}} />
                            <button onClick={() => setSelectBoxState(selectBoxState + 1)} className="button"><span>+</span></button>
                          </div>
                          <small id="passwordHelpBlock" className="form-text text-muted text-center" >Quantidade</small>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <a href="#!" type="button" className="card-link-secondary small text-uppercase mr-3" ><i
                            className="fas fa-trash-alt mr-1"></i> Remover Item </a>
                        </div>
                        <p className="mb-0"><span><strong id="summary">$17.99</strong></span></p> {/*</p className="mb-0"> */}
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/" className="btn btn-warning" role="button" aria-pressed="true">Continuar Comprando</a>
              </div>
            </div>
            <div className="mb-3">
              <div className="pt-4">
                <h5 className="mb-4">Previsão de Entrega</h5>
                <p className="mb-0"> Qua., 24.09. - Ter., 30.09.</p>
              </div>
            </div>
            <div className="mb-3">
              <div className="pt-4">
                <h5 className="mb-4">Pague com</h5>
                <img className="mr-2" width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa" />
                <img className="mr-2" width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard" />
                <img className="mr-2" width="45px"
                  src="/#"
                  alt="Boleto Bancario" />
              </div>
            </div>

          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <div className="pt-4">
                <h5 className="mb-3">Total</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Subtotal<span>$25.98</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Frete<span>Gratis</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total</strong>
                      <strong>
                        <p className="mb-0">(com frete)</p>
                      </strong>
                    </div>
                    <span><strong>$53.98</strong></span>
                  </li>
                </ul>
                <button type="button" className="btn btn-primary btn-block">Finalizar Compra</button>
              </div>
            </div>
            <div className="mb-3">
              <div className="pt-4">
                <a className="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample"
                  aria-expanded="false" aria-controls="collapseExample">
                  Calcular frete<span><i className="fas fa-chevron-down pt-1"></i></span>
                </a>
                <div className="collapse" id="collapseExample">
                  <div className="mt-3">
                    <div className="md-form md-outline mb-0">
                      <input type="text" id="discount-code" className="form-control font-weight-light"
                        placeholder="Digite seu CEP" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}