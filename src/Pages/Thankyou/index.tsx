import React from 'react';
import styled from 'styled-components';
import SubNavigationBar from '../../Components/SubNavigationBar';
import SubTitle from '../../Components/SubTitle';

const ThankyouComponent = () => {
  return (
    <div>
      <SubTitle title="Clik Store" />
      <SubNavigationBar currentPosition="ContactInfo" />
      <Column>
        <Thankyou src="Images/check-circle.svg" />
        <ThankyouText>THANK YOU</ThankyouText>
        <Details>for completing the order successfully</Details>
      </Column>
    </div>
  );
};

export default ThankyouComponent;
const Thankyou = styled.img`
  height: 213px;
  width: 213px;
  @media only screen and (max-width: 600px) {
    height: 150px;
    width: 150px;
  }
  @media only screen and (max-width: 500px) {
    height: 110px;
    width: 110px;
  }
`;
const ThankyouText = styled.div`
  font-size: 38px;
  color: #444444;
  @media only screen and (max-width: 600px) {
    font-size: 32px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 26px;
  }
`;
const Details = styled.div`
  font-size: 22px;
  color: #b7b7b7;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 18px;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0px 300px;
  @media only screen and (max-width: 600px) {
    margin: 70px 0px 180px;
  }
  @media only screen and (max-width: 500px) {
    margin: 50px 0px 100px;
  }
`;
export const ColumnInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
