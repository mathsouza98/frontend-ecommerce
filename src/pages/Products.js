import React, { Component } from 'react';
import productAssets from '../assets/productAssets';
import axios from 'axios';
import findProductAssets from '../utils/findProductAssets';

export default class Products extends Component {
  state = {
    products: []
  }

  async componentDidMount() {
    const response = await axios.get('http://localhost:8080/api/products');
    this.setState({ products: response.data });
  }

  async addProductOnCart(id) {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');
    const response = await axios.post('http://localhost:8080/api/cart/' + id);
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Produtos</h1>
        <div className="row" style={{ margin: '30px 0px', justifyContent: 'center' }}>
          {this.state.products.map(product => (
            <div key={product.id} className="col-sm-12 col-md-6 col-lg-4">
              <div className="card" style={{ width: '100%', marginBottom: '20px' }}>
                <img className="card-img-top" src={findProductAssets(product.category)} alt="" srcSet={findProductAssets(product.category)} />
                <div className="card-body" style={{ textAlign: 'center' }}>
                  <h5 className="card-title">{product.name}</h5>
                  <div className="card-text">
                    <p>{product.category}</p>
                    <p>{product.categoryByPrice}</p>
                    <p>{product.brand}</p>
                    <p>{product.price}</p>
                  </div>
                  <a href="/cart" className="btn btn-primary" onClick={() => this.addProductOnCart(product.id)}>Comprar</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

