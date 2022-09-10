import React, { memo } from 'react';
import styled from 'styled-components';
import { VIEW_UPLOAD_URI } from '../../configs';
import useWindowSize from '../../Helpers/WindowSizeHook';
import { Split } from '../../Pages/Products/ProductsList';
import { OrderProductInputFrontEnd } from '../../Redux/types';
import { Colors } from '../../theme';
import CounterComponent from '../Counter';
import namedColors from 'color-name-list';
import { useAppDispatch } from '../../Redux/store';
import {
  removeSelectedProduct,
  setSelectedProductsQuantity,
} from '../../Redux/storeReducer';

interface Props {
  selectedProduct: OrderProductInputFrontEnd;
}

const ProductDetailsComponent = ({ selectedProduct }: Props) => {
  const window = useWindowSize();
  const dispatch = useAppDispatch();

  const handleRemoveSelectedProduct = () => {
    dispatch(removeSelectedProduct(selectedProduct));
  };

  const handleChange = (currentQuantity: number) => {
    if (!currentQuantity) {
      handleRemoveSelectedProduct();
    } else {
      dispatch(
        setSelectedProductsQuantity({
          ...selectedProduct,
          product: selectedProduct?.product,
          quantity: currentQuantity,
        } as OrderProductInputFrontEnd)
      );
    }
  };

  const {
    choice: { image, colorsHex },
    product: { name, price },
    quantity,
  } = selectedProduct;

  const color = namedColors.find((c) => c.hex === colorsHex);

  return (
    <>
      <ProductDetailsContainter>
        <ImageWrapper>
          <Image src={VIEW_UPLOAD_URI + image?._id} />
        </ImageWrapper>
        <DetailsWrapper>
          <Title>{name}</Title>
          <Row>
            <ElementTitle>Color:</ElementTitle>
            <ColorText>{color?.name}</ColorText>
          </Row>
          <Price>{price} JD</Price>
          <Row>
            <ElementTitle>Quantity:</ElementTitle>
            <CounterComponent
              handleChange={handleChange}
              value={quantity}
              size={(window.width || 0) > 1000 ? 'lg' : 'sm'}
            />
          </Row>
          <ElementTitle>Total:</ElementTitle>
          <PriceText>{quantity * parseInt(price, 10)} JD</PriceText>
        </DetailsWrapper>
        <RemoveWrapper onClick={handleRemoveSelectedProduct}>
          <RemoveText>Remove</RemoveText>
          <XIcon src="Images/x-circle.svg" alt="x" />
        </RemoveWrapper>
      </ProductDetailsContainter>
      <ProductSplit />
    </>
  );
};

export default memo(ProductDetailsComponent);

const ProductSplit = styled(Split)`
  margin: 40px 0px;
  @media only screen and (max-width: 800px) {
    margin: 20px 0px;
  }
`;
const RemoveWrapper = styled.div`
  height: 50px;
  width: 153px;
  background-color: #f4f4f4;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px 12px 32px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  @media only screen and (max-width: 1000px) {
    font-size: 18px;
    width: 140px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 18px;
    width: 120px;
    padding: 12px 12px 12px 18px;
  }
  @media only screen and (max-width: 700px) {
    height: 35px;
    width: 35px;
    justify-content: center;
    padding: 0px;
  }
`;

const RemoveText = styled.div`
  font-weight: 400;
  font-size: 20px;
  @media only screen and (max-width: 1000px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const XIcon = styled.img`
  height: 20px;
  width: 20px;
`;

const ColorText = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #444444;
`;

const PriceText = styled(ColorText)`
  margin-bottom: 10px;
  margin-top: 10px;
`;
const Price = styled.div`
  font-size: 20px;
  color: ${Colors.orange};
`;
const Title = styled.div`
  font-size: 32px;
  color: ${Colors.offBlack};
  font-weight: 700;
  @media only screen and (max-width: 1200px) {
    font-size: 26px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 24px;
  }
`;

const size = 250;
const ImageWrapper = styled.div`
  background-color: ${Colors.background};
  height: ${size}px;
  width: ${size}px;
  border-radius: 10000px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 25px;
  @media only screen and (max-width: 1200px) {
    height: ${size / 1.2}px;
    width: ${size / 1.2}px;
  }
  @media only screen and (max-width: 1000px) {
    height: ${size / 1.3}px;
    width: ${size / 1.3}px;
  }
  @media only screen and (max-width: 800px) {
    height: ${size / 1.4}px;
    width: ${size / 1.4}px;
  }
`;

const Image = styled.img`
  height: ${size * 0.6}px;
  width: ${size * 0.6}px;
  border-radius: 10000px;
  @media only screen and (max-width: 1200px) {
    height: ${size * 0.5}px;
    width: ${size * 0.5}px;
  }
  @media only screen and (max-width: 800px) {
    height: ${size * 0.4}px;
    width: ${size * 0.4}px;
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

const DetailsWrapper = styled(Column)`
  height: ${size}px;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 25px;
  padding: 6px 0px;
  padding: 6px 60px 0px 0px;
  @media only screen and (max-width: 800px) {
    margin: 20px 10px;
  }
  @media only screen and (max-width: 800px) {
    margin: 20px 10px;
    padding: 6px 8px 0px 0px;
  }
  @media only screen and (max-width: 500px) {
    align-items: center;
  }
`;

const ElementTitle = styled.div`
  font-size: 18px;
  color: ${Colors.offBlack};
  margin-right: 18px;
`;

const ProductDetailsContainter = styled(Row)`
  margin: 35px;
  margin-right: 50px;
  position: relative;
  @media only screen and (max-width: 1000px) {
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 700px) {
    align-items: center;
  }
`;
