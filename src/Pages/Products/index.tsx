import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { getProductsAction } from '../../Redux/storeReducer';

const Products = () => {
  const { products } = useAppSelector((state) => state.storeReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  // eslint-disable-next-line no-console
  console.log(products, 'products');
  return <div>Products</div>;
};

export default Products;
