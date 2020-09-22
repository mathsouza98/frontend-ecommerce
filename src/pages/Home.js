import React from 'react';
import Navbar from '../components/Navbar';
import Products from './Products';
import RecommendedProducts from './RecommendedProducts';

const Home = props => {
  return (
    <div>
      <Navbar />
      <RecommendedProducts />
      <Products />
    </div>
  );
}

export default Home;
