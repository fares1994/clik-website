import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import SubNavigationBar from '../../Components/SubNavigationBar';
import SubTitle from '../../Components/SubTitle';
import { VIEW_UPLOAD_URI } from '../../configs';
import { useAppDispatch } from '../../Redux/store';
import {
  addToSelectedProducts,
  getProductByIdAction,
} from '../../Redux/storeReducer';
import { Choice, OrderProductInputFrontEnd, Product } from '../../Redux/types';
import { Colors } from '../../theme';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CounterComponent from '../../Components/Counter';
import CustomButton from '../../Components/CustomButton';
import useWindowSize from '../../Helpers/WindowSizeHook';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const navigate = useNavigate();
  const [currentProduct, setCurrentProduct] = useState<Product>();
  const window = useWindowSize();
  const params = useParams();

  const dispatch = useAppDispatch();

  const validationSchema = yup.object().shape({
    // quantity: yup.number().min(1, 'choose minimum one').required(),
  });

  const { values, errors, touched, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      currentChoice: undefined,
      quantity: 0,
      toCart: false,
    } as {
      currentChoice: Choice | undefined;
      colorHex: string;
      quantity: number;
      toCart: boolean;
    },
    onSubmit: (submittedValues) => {
      const { currentChoice, quantity, toCart } = submittedValues;
      if (!quantity) {
        toast('Add Items To Be Added First', {
          type: 'error',
          style: {
            fontSize: 18,
          },
        });
      } else {
        dispatch(
          addToSelectedProducts({
            color: currentChoice?.colorsHex,
            quantity,
            product: currentProduct,
            choice: currentChoice,
          } as OrderProductInputFrontEnd)
        );
        toCart && navigate('/Cart');
        toast('Items Has Been Added Successfully', {
          type: 'success',
          style: {
            fontSize: 18,
          },
        });
      }
    },
    validationSchema,
  });

  const handleSetQuantity = (quantity: number) => {
    setFieldValue('quantity', quantity);
  };

  const setCurrentChoice = useCallback(
    (choice: Choice) => {
      setFieldValue('currentChoice', choice);
    },
    [setFieldValue]
  );

  const handleBuyNow = () => {
    setFieldValue('toCart', true);
    setTimeout(() => {
      handleSubmit();
    }, 0);
  };
  const handleAddToCart = () => {
    setFieldValue('toCart', false);
    setTimeout(() => {
      handleSubmit();
    }, 0);
  };
  useEffect(() => {
    params.id &&
      dispatch(
        getProductByIdAction(params.id, setCurrentProduct, setCurrentChoice)
      );
  }, [dispatch, params.id, setCurrentChoice, setFieldValue]);

  return (
    <div>
      <SubTitle title="Clik Store" />
      <SubNavigationBar
        currentPosition="clikStore"
        productName={currentProduct?.name}
      />
      <Column>
        <ColumnInner>
          <ProductDetailsContainter>
            <Wrapper>
              <ImageWrapper>
                <Image
                  src={VIEW_UPLOAD_URI + values?.currentChoice?.image?._id}
                />
              </ImageWrapper>
              <DetailsWrapper>
                <Title>{currentProduct?.name}</Title>
                <Price>{currentProduct?.price}JD</Price>
                <ElementWrapper>
                  <ElementTitle>Color</ElementTitle>
                  <ColorsWrapper>
                    {currentProduct?.choices?.map((choice) => {
                      const handleClick = () => {
                        setCurrentChoice(choice);
                      };
                      return (
                        <Color
                          active={
                            choice?.colorsHex ===
                            values.currentChoice?.colorsHex
                          }
                          color={choice?.colorsHex}
                          onClick={handleClick}
                        />
                      );
                    })}
                  </ColorsWrapper>
                </ElementWrapper>
                <ElementWrapper>
                  <ElementTitle>Quantity</ElementTitle>
                  <CounterComponent
                    handleChange={handleSetQuantity}
                    error={!!(errors.quantity && touched.quantity)}
                    value={values.quantity}
                    size={(window.width || 0) > 1000 ? 'lg' : 'sm'}
                  />
                </ElementWrapper>
                <ButtonsWrapper>
                  <CustomButton
                    title="Add to Cart"
                    color="black"
                    size={
                      (window.width || 0) > 1200
                        ? 'lg'
                        : (window.width || 0) > 800
                        ? 'md'
                        : 'sm'
                    }
                    onClick={handleAddToCart}
                  />
                  <CustomButton
                    title="Buy it now"
                    color="orange"
                    size={
                      (window.width || 0) > 1200
                        ? 'lg'
                        : (window.width || 0) > 800
                        ? 'md'
                        : 'sm'
                    }
                    onClick={handleBuyNow}
                  />
                </ButtonsWrapper>
              </DetailsWrapper>
            </Wrapper>
          </ProductDetailsContainter>
          <Content>
            <Discription>Description</Discription>
            <DiscriptionContent>
              {currentProduct?.description}
            </DiscriptionContent>
          </Content>
        </ColumnInner>
      </Column>
    </div>
  );
};

export default ProductDetails;
const DiscriptionContent = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-top: 20px;
`;
const Discription = styled.div`
  font-weight: 500;
  font-size: 20px;
`;
const Price = styled.div`
  font-size: 20px;
  color: ${Colors.orange};
`;
const Title = styled.div`
  font-size: 32px;
  color: ${Colors.offBlack};
  font-weight: 500;
  @media only screen and (max-width: 1200px) {
    font-size: 26px;
  }
`;

const size = 450;
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
    height: ${size / 1.5}px;
    width: ${size / 1.5}px;
  }
  @media only screen and (max-width: 800px) {
    height: ${size / 2}px;
    width: ${size / 2}px;
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
`;

const Wrapper = styled(Row)`
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ColumnInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const DetailsWrapper = styled(Column)`
  height: ${size}px;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 25px;
  @media only screen and (max-width: 800px) {
    margin: 20px 10px;
  }
`;

const ElementWrapper = styled(Column)`
  align-items: flex-start;
  justify-content: space-between;
  height: 90px;
  margin-top: 5px;
`;

const ElementTitle = styled.div`
  font-size: 18px;
  color: ${Colors.offBlack};
`;

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
  height: 40px;
  width: 40px;
  border-radius: 1000px;
  background-color: ${({ color }) => color};
  border: 2.5px solid ${Colors.background};
  border-color: ${({ active }) => (active ? Colors.orange : Colors.background)};
  margin-right: 18px;
`;

const ProductDetailsContainter = styled(Row)`
  margin: 35px;
  @media only screen and (max-width: 800px) {
    margin: 25px;
  }
`;
const ButtonsWrapper = styled(Row)`
  justify-content: space-between;
  width: 580px;
  margin-top: 20px;
  @media only screen and (max-width: 1200px) {
    width: 430px;
  }
  @media only screen and (max-width: 1200px) {
    width: 320px;
  }
  @media only screen and (max-width: 800px) {
    width: 310px;
  }
`;
const Content = styled(Column)`
  display: flex;
  flex-direction: column;
  padding: 80px;
  max-width: 1200px;
  justify-content: flex-start;
  align-items: flex-start;
  @media only screen and (max-width: 800px) {
    padding: 40px;
  }
`;
