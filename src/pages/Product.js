import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import style from '../styles/productStyle.css';

export default class Product extends Component {
    state = {
        product: {}
    };

    render() {
        const { product } = this.state;

        return (
            <div>
                <Navbar />
                <div class="container">
                    <div class="left-column">
                        <img src=""></img>
                    </div>
                    <div class="right-column">
                        <div class="product-description">
                            <span>Marca</span>
                            <h1>Produto</h1>
                            <p>Categoria</p>
                            <p>Quantidade</p>
                            <p>Visualizações</p>
                        </div>

                        <div class="product-price">
                            <span>R$0,00</span>
                            <a href="#" class="cart-btn">Adicionar ao carrinho</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}