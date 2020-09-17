import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import ReactDOM from "react-dom";
import auth from '../services/auth';
import findProductAssets from '../utils/findProductAssets';

export default function Cart() {
  const [selectBoxState, setSelectBoxState] = useState({});
  const [cartState, setCartState] = useState([]);
  const [cartProductState, setCartProductState] = useState([]);
  const [loadState, setLoadState] = useState(false);

  axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');

  useEffect(() => {
    fetchData();
  }, [selectBoxState]);

  const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:8080/api/cart');
      setCartState(result.data);
      setCartProductState(result.data.productList)
      console.log(result.data)
    } catch (error) {
      console.log(error)
      setCartState(null)
    }
  };

  const deleteCartProduct = async (id) => {
    try {
      const result = await axios.delete('http://localhost:8080/api/cart-product/' + id);
      fetchData();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  const handleIncDecProductOrder = async (id, operator) => {
    try {
      const result = await axios.post('http://localhost:8080/api/cart-product/' + id + '/' + operator);
      console.log(result);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <section style={{ margin: '0px 20px' }}>
          <div className="row">
            <div className="col-lg-8">
              <div className="mb-3">
                <div className="pt-4 wish-list">
                  <h5 className="mb-4">Carrinho (<span>{cartState === null ? 0 : cartProductState.length}</span> item)</h5>
                  {cartProductState.map(product => (
                    <div key={product.id} className="row mb-4">
                      <div className="col-md-5 col-lg-3 col-xl-3">
                        <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                          <img className="img-fluid w-100" src={findProductAssets(product.category)} alt="" srcSet={findProductAssets(product.category)} />
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
                              <h5>{product.name}</h5>
                              <p className="mb-3 text-muted text-uppercase small">{product.brand}</p>
                              <p className="mb-2 text-muted text-uppercase small">{product.category}</p>
                            </div>
                            <div>
                              <div className="def-number-input number-input safari_only mb-0 w-100">
                                <button onClick={() => product.orderQuantity > 1 ? handleIncDecProductOrder(product.id, "decrement") : ''}
                                  className="button"><span>-</span></button>
                                <input readOnly={product.orderQuantity} value={product.orderQuantity} style={{ width: '35px', textAlign: 'center' }} />
                                <button onClick={() => handleIncDecProductOrder(product.id, "increment")} className="button"><span>+</span></button>
                              </div>
                              <small id="passwordHelpBlock" className="form-text text-muted text-center" >Quantidade</small>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <a href="#!" type="button" className="card-link-secondary small text-uppercase mr-3" onClick={() => deleteCartProduct(product.id)} ><i
                                className="fas fa-trash-alt mr-1"></i> Remover Item </a>
                            </div>
                            <p className="mb-0"><span><strong id="summary">R$ {product.price}</strong></span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
                  <img className="mr-2" width="45px" src={require('../assets/visa.svg')} alt="Visa" />
                  <img className="mr-2" width="45px" src={require('../assets/mastercard.svg')} alt="Mastercard" />
                  <img className="mr-2" width="45px" src={require('../assets/boleto.png')} alt="Boleto Bancario" />
                </div>
              </div>

            </div>
            <div className="col-lg-4">
              <div className="mb-3">
                <div className="pt-4">
                  <h5 className="mb-3">Total</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Subtotal<span>R$ {cartState === null ? 0 : cartState.finalPrice}</span>
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
                      <span><strong>R$ {cartState === null ? 0 : cartState.finalPrice}</strong></span>
                    </li>
                  </ul>
                  <a  className="btn btn-primary btn-block" role="button" aria-pressed="true">Finalizar compra</a>
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
    </div>
  );
}