import React, { useState } from 'react';
import styled from 'styled-components';
import { VIEW_UPLOAD_URI } from '../../configs';
import { Choice, Product } from '../../Redux/types';
import { Colors } from '../../theme';

interface Props {
  product: Product;
}
const CustomProduct = ({ product }: Props) => {
  const [currectChoice, setCurrentChoice] = useState<Choice>(
    product?.choices?.[0]
  );
  // eslint-disable-next-line no-console
  console.log(VIEW_UPLOAD_URI + currectChoice?.image?._id);
  return (
    <ProductWrapper>
      <ImageWrapper>
        <Image src={VIEW_UPLOAD_URI + currectChoice?.image?._id} />
      </ImageWrapper>
      <ProductName>{product?.name}</ProductName>
      <PriceWrapper>
        <Price>{product?.price}JD</Price>
        <OrangeButton>
          <ShoppingCart src={'/Images/shopping-cart.png'} />
        </OrangeButton>
      </PriceWrapper>
      <ColorsWrapper>
        {product?.choices?.map((choice, index) => {
          const handleClick = () => {
            setCurrentChoice(choice);
          };
          return (
            <Color
              color={choice.colorsHex}
              active={currectChoice?.colorsHex === choice?.colorsHex}
              onClick={handleClick}
              key={index}
            />
          );
        })}
      </ColorsWrapper>
    </ProductWrapper>
  );
};

export default CustomProduct;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 430px;
  margin: 20px 30px;
  @media only screen and (max-width: 800px) {
    height: 250px;
  }
`;
const size = 200;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${size + 'px'};
  width: ${size + 'px'};
  background-color: ${Colors.background};
  border-radius: 1000px;
  @media only screen and (max-width: 800px) {
    height: ${size / 2 + 'px'};
    width: ${size / 2 + 'px'};
  }
`;

const Image = styled.img`
  height: ${size * 0.7 + 'px'};
  width: ${size * 0.7 + 'px'};
  border-radius: 1000px;
  @media only screen and (max-width: 800px) {
    height: ${(size * 0.7) / 2 + 'px'};
    width: ${(size * 0.7) / 2 + 'px'};
  }
`;

const ProductName = styled.div`
  font-size: 32px;
  color: ${Colors.offBlack};
  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 250px;
  position: relative;
  height: 50px;
  border-radius: 30px;
  background-color: ${Colors.background};
  @media only screen and (max-width: 800px) {
    width: 130px;
    height: 30px;
  }
`;

const OrangeButton = styled.div`
  width: 90px;
  background-color: ${Colors.orange};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 50px;
  border-radius: 30px;
  @media only screen and (max-width: 800px) {
    width: 50px;
    height: 30px;
  }
`;

const Price = styled.div`
  color: ${Colors.offBlack};
  font-size: 20px;
  margin-right: 45px;
  @media only screen and (max-width: 800px) {
    margin-right: 30px;
    font-size: 18px;
  }
`;

const ShoppingCart = styled.img``;

const ColorsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Color = styled.div<{
  active: boolean;
  color: string;
}>`
  height: 20px;
  width: 20px;
  border-radius: 1000px;
  background-color: ${({ color }) => color};
  border: 1px solid ${Colors.background};
  border-color: ${({ active }) => (active ? Colors.orange : Colors.background)};
  margin: 0px 8px;
`;
