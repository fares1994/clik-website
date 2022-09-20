import React, { useState } from 'react';
import styled from 'styled-components';
interface Props {
  title: string;
  content: string[];
}
const Type = ({ title, content }: Props) => {
  const [opened, setOpened] = useState<boolean>(false);
  const handleOpen = () => {
    setOpened((prev) => !prev);
  };
  return (
    <TypeWrapper opened={opened} onClick={handleOpen}>
      <TitleWrapper>
        <TypeText>{title}</TypeText>
        <Arrow src="Images/arrow_down.svg" />
      </TitleWrapper>
      {opened && (
        <>
          <Splitter />
          <ContentWrapper>
            {content?.map((cn) => (
              <ContentRow>{cn}</ContentRow>
            ))}
          </ContentWrapper>
        </>
      )}
    </TypeWrapper>
  );
};
export default Type;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 219px;
`;
export const Arrow = styled.img`
  height: 8px;
  width: 20px;
`;

export const TypeWrapper = styled.div<{
  opened?: boolean;
}>`
  height: ${({ opened }) => (opened ? '' : '50px')};
  width: 280px;
  border: 1px solid #ff8b00;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: ${({ opened }) => (opened ? 'flex-start' : 'center')};
  padding-top: ${({ opened }) => (opened ? '5px' : '0px')};
  cursor: pointer;
  align-items: center;
  margin-bottom: 15px;
`;

export const TypeText = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #444444;
`;

export const Splitter = styled.div`
  border-top: 1px dashed #b7b7b7;
  height: 1px;
  width: 219px;
  margin-top: 5px;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 5px 30px 10px;
`;
export const ContentRow = styled.div`
  font-weight: 400;
  color: #444444;
  font-size: 20px;
  text-align: left;
`;
