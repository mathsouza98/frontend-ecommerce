import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Navbar } from '../components/index';
import findproductAssets from '../utils/findProductAssets'

export default function ProductScreen(props) {
  const params = useParams();
  const productId = params.productId ? params.productId.toString() : undefined;
  const [productState, setProductState] = useState();

  axios.defaults.headers.common['Authorization'] = localStorage.getItem('authToken');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products/' + productId);
      console.log(response);
      setProductState(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const addProductOnCart = async (id) => {
    const response = await axios.post('http://localhost:8080/api/cart/' + id);
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        {productState !== undefined ? (
          <div className="row" style={{ margin: '30px 0px', justifyContent: 'center' }}>
            <div key={productState.id} className="col-sm-12 col-md-6 col-lg-4">
              <div className="card" style={{ width: '100%', marginBottom: '20px' }}>
                <img className="card-img-top" src={findproductAssets(productState.category)} alt="" srcSet={findproductAssets(productState.category)} />
                <div className="card-body" style={{ textAlign: 'center' }}>
                  <h5 className="card-title">{productState.name}</h5>
                  <div className="card-text">
                    <p>{productState.brand} {productState.category}</p>
                    <p><b>R$ {productState.price},00</b></p>
                  </div>
                  <a href="/cart" className="btn btn-primary" onClick={() => addProductOnCart(productState.id)}>Adicionar ao Carrinho</a>
                </div>
              </div>
            </div>
          </div>
        ) : ''}
      </div>
    </div>
    );
  }

