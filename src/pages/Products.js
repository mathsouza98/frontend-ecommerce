import React, { Component } from 'react';
import { productsApi } from '../services/index';
import productAssets from '../assets/productAssets';
import axios from 'axios'

export default class Products extends Component {
  state = {
    products: []
  }

  async componentDidMount() {
    const response = await axios.get('http://localhost:8080/api/products');
    this.setState({ products: response.data });
  }

  findProductAssets(productCategory) {
    for (let productAsset of productAssets) {
      if (productAsset.category === productCategory) return productAsset.thumb;
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Produtos</h1>
        <div className="row" style={{ margin: '30px 0px', justifyContent: 'center' }}>
          {this.state.products.map(product => (
            <div key={product.id} className="col-sm-12 col-md-6 col-lg-4">
              <div className="card" style={{ width: '100%', marginBottom: '20px' }}>
                <img className="card-img-top" src={this.findProductAssets(product.category)} alt="" srcSet={this.findProductAssets(product.category)} />
                <div className="card-body" style={{ textAlign: 'center' }}>
                  <h5 className="card-title">{product.name}</h5>
                  <div className="card-text">
                    <p>{product.category}</p>
                    <p>{product.categoryByPrice}</p>
                    <p>{product.brand}</p>
                    <p>{product.price}</p>
                  </div>
                  <a href="#" className="btn btn-primary">Comprar</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

