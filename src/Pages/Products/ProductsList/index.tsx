import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CustomProduct from '../../../Components/Product';
import { useAppDispatch, useAppSelector } from '../../../Redux/store';
import { getProductsAction } from '../../../Redux/storeReducer';
import { Colors } from '../../../theme';

const ProductsList = () => {
  const navigate = useNavigate();

  const { products } = useAppSelector((state) => state.storeReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  const handleNavigateToProductDetails = (id: string) => {
    navigate(`/ProductDetails/${id}`);
  };

  return (
    <>
      <SubContainer>
        <PageHeading>
          <HeadingTitle>You don’t Have Clik device ?</HeadingTitle>
          <HeadingTitle>Choose the device you are activating</HeadingTitle>
          <Split />
        </PageHeading>
      </SubContainer>
      <ProductsContainer>
        {products?.map((product) => (
          <CustomProduct
            key={product._id}
            product={product}
            handleNavigateToProductDetails={handleNavigateToProductDetails}
          />
        ))}
      </ProductsContainer>
    </>
  );
};

export default ProductsList;
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
  font-size: 24px;
  text-align: center;
  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

export const Split = styled.div`
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
