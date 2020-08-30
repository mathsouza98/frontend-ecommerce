import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import productApi from '../services/productsApi';

export default class Product extends Component {
    state = {
        product: {}
    };

    render() {
        const { product } = this.state;

        return (
            <div>
                <Navbar />
                <div className="product-info">
                    <h1>Nome</h1>
                    <p>Categoria</p>
                    <p>Preço</p>
                    <p>Marca</p>
                    <p>Quantidade de Estoque</p>
                    <p>Visualização</p>
                    <p>Imagem</p>
                </div>
            </div>
        );
    }
}