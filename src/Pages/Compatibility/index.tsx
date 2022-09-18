import React from 'react';
import styled from 'styled-components';
import SubTitle from '../../Components/SubTitle';
import { Column, Row } from '../Cart';

const Compatibility = () => {
  return (
    <div>
      <SubTitle title="Clik Store" />
      <Column bottom="200">
        <Title>Get in touch with us</Title>
        <Wrapper />
      </Column>
    </div>
  );
};

export default Compatibility;
export const Wrapper = styled(Row)`
  align-items: flex-start;
  margin-top: 40px;
`;
export const InnerWrapper = styled(Column)`
  margin: 0px 35px;
`;
export const Title = styled.div`
  color: #ff8b00;
  font-weight: 700;
  font-size: 50px;
`;

export const CustomField = styled.input<{
  bottom?: string;
  error?: boolean;
}>`
  background-color: #f4f4f4;
  width: 500px;
  height: 55px;
  border-radius: 50px;
  border-color: transparent;
  outline: none;
  padding: 22px 50px;
  ::placeholder {
    color: #b7b7b7;
    font-size: 24px;
  }
  margin-bottom: ${({ bottom }) => (bottom ? bottom + 'px' : '0px')};
  border: ${({ error }) => (error ? '1px solid red' : 'none')};
`;

export const MessageInput = styled.textarea<{
  bottom?: string;
  error?: boolean;
}>`
  background-color: #f4f4f4;
  width: 500px;
  border-radius: 50px;
  border-color: transparent;
  outline: none;
  padding: 22px 50px;
  margin-bottom: ${({ bottom }) => (bottom ? bottom + 'px' : '0px')};
  border: ${({ error }) => (error ? '1px solid red' : 'none')};
  height: 145px;
  ::placeholder {
    color: #b7b7b7;
    text-align: start;
    font-size: 24px;
  }
`;
