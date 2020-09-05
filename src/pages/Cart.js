import React, { Component, useState } from 'react';
import Navbar from '../components/Navbar';
import cartStyle from '../styles/cartStyle.css';

export default function Cart() {
    
    return(
        <div>
            <Navbar />
            <div class="container">
                <table id="cart" class="table table-hover table-condensed">
                    <thead>
                        <tr>
                            <th style={{"width":"70%"}}>Produto</th>
                            <th style={{"width":"10%"}}>Preço</th>
                            <th style={{"width":"8%"}}>Quantidade</th>
                            <th style={{"width":"22%"}} class="text-center">Subtotal</th>
                            <th style={{"width":"10%"}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-th="Produto">
                                <div class="row">
                                    <div class="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." class="img-responsive"/></div>
                                    <div class="col-sm-10">
                                        <h4 class="nomargin">Produto 1</h4>
                                        <p>Marca: ABCD.</p>
                                    </div>
                                </div>
                            </td>
                            <td data-th="Preço">$1.99</td>
                            <td data-th="Quantidade">
                                <input type="number" class="form-control text-center" />
                            </td>
                            <td data-th="Subtotal" class="text-center">1.99</td>
                            <td class="actions" data-th="">
                                <button class="btn btn-danger btn-sm">Excluir<i class="fa fa-trash-o"></i></button>								
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><a href="#" class="btn btn-warning"><i class="fa fa-angle-left"></i>Continuar comprando</a></td>
                            <td colspan="2" class="hidden-xs"></td>
                            <td class="hidden-xs text-center"><strong>Total $1.99</strong></td>
                            <td><a href="#" class="btn btn-success"><i class="fa fa-angle-right"></i>Finalizar Compra</a></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}