import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import productApi from '../services/productsApi';
import style from "./productstyles.css";

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
                    <p>Imagem</p>
                    <h1>Nome</h1>
                    <p>Categoria</p>
                    <p>Preço</p>
                    <p>Marca</p>
                    <p>Quantidade de Estoque</p>
                    <p>Visualização</p>
                </div>
            </div>
        );
    }
}