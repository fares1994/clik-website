import React, { useState } from 'react';
import styled from 'styled-components';
import { Row } from '../ProductDetailsComponent';
interface Props {
  title: string;
  content: string;
}
const FAQComponent = ({ title, content }: Props) => {
  const [opened, setOpened] = useState<boolean>(false);
  const handleOpened = () => {
    setOpened((prev) => !prev);
  };
  return (
    <Wrapper onClick={handleOpened} opened={opened}>
      <RowWrapper>
        <Title>{title}</Title>
        <Arrow src="Images/down_arrow.svg" />
      </RowWrapper>
      {!!opened && (
        <ContentWrapper>
          <Splitter />
          {content.split('\n').map(function (item, key) {
            return (
              <Content key={key}>
                {item}
                <br />
              </Content>
            );
          })}
        </ContentWrapper>
      )}
    </Wrapper>
  );
};

export default FAQComponent;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const RowWrapper = styled(Row)`
  justify-content: space-between;
  width: 100%;
`;
const Content = styled.div`
  font-weight: 400;
  size: 20px;
  color: #444444;
`;
const Wrapper = styled.div<{
  opened?: boolean;
}>`
  padding: 10px 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1100px;
  border-radius: 25px;
  background-color: #f4f4f4;
  cursor: pointer;
  margin-bottom: 20px;
  @media only screen and (max-width: 1200px) {
    width: 900px;
  }
  @media only screen and (max-width: 1000px) {
    width: 800px;
  }
  @media only screen and (max-width: 800px) {
    width: 500px;
    justify-content: center;
  }
`;

const Title = styled.div`
  font-weight: 700;
  size: 24px;
  color: #444444;
`;

const Arrow = styled.img`
  height: 6px;
  width: 12px;
`;

const Splitter = styled.div`
  width: 1050px;
  height: 0.5px;
  background-color: #b7b7b7;
  margin-bottom: 20px;
  @media only screen and (max-width: 1200px) {
    width: 700px;
  }
  @media only screen and (max-width: 1000px) {
    width: 700px;
  }
  @media only screen and (max-width: 800px) {
    width: 450px;
    justify-content: center;
  }
`;
