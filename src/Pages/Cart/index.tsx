import React, { useMemo } from 'react';
import styled from 'styled-components';
import SubTitle from '../../Components/SubTitle';
import CustomButton from '../../Components/CustomButton';
import { Split } from '../Products/ProductsList';
import ProductDetailsComponent from '../../Components/ProductDetailsComponent';
import { useAppSelector } from '../../Redux/store';
import SubNavigationBar from '../../Components/SubNavigationBar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const navigate = useNavigate();
  const { selectedProducts } = useAppSelector((state) => state.storeReducer);

  const calculateSubTotal = useMemo(() => {
    let subTotal = 0;
    selectedProducts?.forEach(
      (prd) =>
        (subTotal =
          parseInt(prd?.product?.price, 10) * prd?.quantity + subTotal)
    );
    return subTotal;
  }, [selectedProducts]);

  const navigateToContactInfo = () => {
    if (!selectedProducts?.length) {
      toast('Add At Least One Item', {
        type: 'error',
        style: {
          fontSize: 18,
        },
      });
      return;
    }
    navigate('/OrderCheckout');
  };

  return (
    <div>
      <SubTitle title="My Cart" />
      <SubNavigationBar currentPosition="myCart" />
      <Column>
        <HeaderTitle>Continue Shopping</HeaderTitle>
        <Split />
        {!selectedProducts?.length && (
          <NoProductsText>
            No Selected Products, Please Choose From Shop
          </NoProductsText>
        )}
        <RowInner>
          <Column>
            {selectedProducts?.map((product) => {
              return <ProductDetailsComponent selectedProduct={product} />;
            })}
          </Column>
          <OrderNowWrapper>
            <PriceWrapper>
              <PriceContent>Subtotal:</PriceContent>
              <PriceContent>{calculateSubTotal} JD</PriceContent>
            </PriceWrapper>
            <CustomButton
              color="orange"
              title="Order Now"
              size="lg"
              onClick={navigateToContactInfo}
            />
          </OrderNowWrapper>
        </RowInner>
      </Column>
    </div>
  );
};

export default ProductDetails;
const NoProductsText = styled.div`
  font-size: 30px;
  color: #444444;
  margin: 60px 0px 30px;
  @media only screen and (max-width: 800px) {
    font-size: 24px;
  }
`;
export const HeaderTitle = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #444444;
  text-align: center;
  @media only screen and (max-width: 800px) {
    font-size: 20px;
    max-width: 380px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    max-width: 380px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px 0px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;
export const RowInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const OrderNowWrapper = styled.div`
  height: 200px;
  width: 380px;
  background-color: #f4f4f4;
  border-radius: 55px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 25px 40px;
  margin-top: 55px;
`;

const PriceWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PriceContent = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #444444;
`;
