import React, { useEffect } from 'react';
import styled from 'styled-components';
import CustomProduct from '../../Components/Product';
import SubNavigationBar from '../../Components/SubNavigationBar';
import SubTitle from '../../Components/SubTitle';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { getProductsAction } from '../../Redux/storeReducer';
import { Colors } from '../../theme';

const Shop = () => {
  const { products } = useAppSelector((state) => state.storeReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  return (
    <div>
      <SubTitle title="Clik Store" />
      <SubNavigationBar currentPosition="clikStore" />
      <SubContainer>
        <PageHeading>
          <HeadingTitle>You don’t Have Clik device ?</HeadingTitle>
          <HeadingTitle>Choose the device you are activating</HeadingTitle>
          <Split />
        </PageHeading>
      </SubContainer>
      <ProductsContainer>
        {products?.map((product) => (
          <CustomProduct key={product._id} product={product} />
        ))}
      </ProductsContainer>
    </div>
  );
};

export default Shop;
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px;
  @media only screen and (max-width: 800px) {
    margin: 20px;
  }
  height: 100px;
`;
const PageHeading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeadingTitle = styled.div`
  /* color: ${Colors.offBlack} */
  font-size: 24px;
  text-align: center;
  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

const Split = styled.div`
  width: 700px;
  height: 3px;
  margin-top: 20px;
  background-color: ${Colors.background};
  @media only screen and (max-width: 800px) {
    width: 200px;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;
