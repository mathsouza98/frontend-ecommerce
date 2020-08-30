import React, { Component } from 'react';
import productApi from '../services/productsApi';

export default class Products extends Component {
    state = {
        products: []
    }
    
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await productApi.get('/list-products');
        
        this.setState({ products: response.data });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row" style={{margin: '30px 0px', justifyContent: 'center'}}>
                    {this.state.products.map(product => (
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div key={Math.random()} className="card" style={{width: '100%', marginBottom: '20px'}}>
                                <div className="card-body" style={{textAlign: 'center'}}>
                                    <h5 className="card-title">{product.name}</h5>
                                    <div className="card-text">
                                        <p>{product.category}</p>
                                        <p>{product.categoryByPrice}</p>
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

