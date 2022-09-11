/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import styled from 'styled-components';
import SubNavigationBar from '../../Components/SubNavigationBar';
import SubTitle from '../../Components/SubTitle';
import { Column, HeaderTitle } from '../Cart';
import { Split } from '../Products/ProductsList';
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput';
import useWindowSize from '../../Helpers/WindowSizeHook';

const OrderCheckout = () => {
  const window = useWindowSize();
  return (
    <div>
      <SubTitle title="Contact Information" />
      <SubNavigationBar currentPosition="ContactInfo" />
      <Column>
        <HeaderTitle>
          Please enter your contact information {'\n'} to be contacted and the
          product delivered
        </HeaderTitle>
        <Split />
        <Row>
          <InputWrapper>
            <CustomInput
              error={false}
              onClick={() => {}}
              placeholder="Enter your name"
              title="Name"
            />
            <CustomInput
              error={false}
              onClick={() => {}}
              placeholder="Enter your email"
              title="Email"
            />
            <CustomInput
              error={false}
              onClick={() => {}}
              placeholder="Enter your location"
              title="Location"
            />
            <CustomInput
              error={false}
              onClick={() => {}}
              placeholder="Enter your number"
              title="Phone"
            />
          </InputWrapper>
          <CustomButton
            color="orange"
            size={(window?.width || 0) > 700 ? 'xl' : 'lg'}
            title="Order Now"
          />
        </Row>
      </Column>
    </div>
  );
};

export default OrderCheckout;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin: 40px 0px 200px;
  flex-wrap: wrap;
  @media only screen and (max-width: 1000px) {
    margin: 40px 0px 120px;
    align-items: center;
  }
`;

const InputWrapper = styled(Column)`
  margin-right: 60px;
  @media only screen and (max-width: 1000px) {
    margin-right: 0px;
  }
  @media only screen and (max-width: 1150px) {
    margin-bottom: 50px;
  }
`;
