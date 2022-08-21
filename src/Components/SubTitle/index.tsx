import React from 'react';
import styled from 'styled-components';
interface Props {
  title: string;
}
const SubTitle = ({ title }: Props) => {
  // eslint-disable-next-line no-console
  return (
    <SubTitleContainer>
      <Title>{title}</Title>
      <Asset src="/Images/asset.svg" />
    </SubTitleContainer>
  );
};

export default SubTitle;

const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: '100%';
  height: 138px;
  background-color: #3e3e3e;
`;

const Title = styled.div`
  color: white;
  font-weight: 500;
  font-size: 42px;
  @media only screen and (max-width: 1000px) {
    font-size: 38px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 34px;
  }
`;

const Asset = styled.img`
  margin-bottom: -10px;
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
