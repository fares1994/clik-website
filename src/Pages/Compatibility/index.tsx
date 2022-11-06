import React from 'react';
import styled from 'styled-components';
import SubTitle from '../../Components/SubTitle';
import Type from '../../Components/Type';
import { Column, HeaderTitle, Row } from '../Cart';
import content from './content';
const Compatibility = () => {
  return (
    <div>
      <SubTitle title="Clik Store" />
      <Column bottom="100" top="90">
        <HeaderTitle>
          To scan Swopi with just a tap, you need iPhone 7 and newer or any
          Android with NFC. <br /> Swopi can be placed anywhere and on any
          phone, regardless it has NFC or not.
        </HeaderTitle>
        <Wrapper>
          {content.map((cn) => (
            <Type title={cn.title} content={cn.content} />
          ))}
        </Wrapper>
      </Column>
    </div>
  );
};

export default Compatibility;

export const Wrapper = styled(Row)`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1300px;
  justify-content: space-between;
  align-items: flex-start;
  @media only screen and (max-width: 1200px) {
    width: 1000px;
  }
  @media only screen and (max-width: 1000px) {
    width: 800px;
  }
  @media only screen and (max-width: 800px) {
    width: 600px;
  }
  @media only screen and (max-width: 600px) {
    width: 400px;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 400px) {
    width: 300px;
  }
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
