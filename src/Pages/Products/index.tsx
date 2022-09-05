import React from 'react';
import SubNavigationBar from '../../Components/SubNavigationBar';
import SubTitle from '../../Components/SubTitle';
import ProductsList from './ProductsList';

const Shop = () => {
  return (
    <div>
      <SubTitle title="Clik Store" />
      <SubNavigationBar currentPosition="clikStore" />
      <ProductsList />
    </div>
  );
};

export default Shop;
