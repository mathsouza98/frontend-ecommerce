import React from 'react';
import Navbar from '../components/Navbar';
import Products from './Products';

const Home = props => {
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
}

export default Home;
