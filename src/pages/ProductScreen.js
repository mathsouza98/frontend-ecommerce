import React, { useEffect, useState, Component } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import findProductAssets from '../utils/findProductAssets';
import { Navbar } from '../components/index';

export default function ProductScreen(props) {
  const params = useParams();
  const productId = params.productId ? params.productId.toString() : undefined;
  const [productState, setProductState] = useState();

  useEffect(() => {
      fetchData();
      }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products/' + productId);
      console.log(response);
      setProductState(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addProductOnCart = async (id) => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');
    const response = await axios.post('http://localhost:8080/api/cart/' + id);
  };

    return (
      <div>
      <Navbar />
      <div className="container-fluid">
        {/* <h1>Produtos</h1> */}
        <div className="row" style={{ margin: '30px 0px', justifyContent: 'center' }}>
          {productState.map(product => (
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
                  <a href="/cart" className="btn btn-primary" onClick={() => addProductOnCart(product.id)}>Adicionar ao Carrinho</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  }

