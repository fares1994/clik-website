import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../theme';

interface Props {
  color: 'orange' | 'black';
  size: 'sm' | 'md' | 'lg' | 'xl' | 'contact';
  title: string;
  onClick?: () => void;
  marginTop?: number;
  style?: React.CSSProperties | undefined;
}
const CounterComponent = ({
  color,
  size,
  title,
  onClick,
  marginTop,
  style,
}: Props) => {
  return (
    <Wrapper
      color={color}
      size={size}
      onClick={onClick}
      marginTop={marginTop}
      style={style}
    >
      {title}
    </Wrapper>
  );
};

export default CounterComponent;
const Wrapper = styled.div<{
  color: 'orange' | 'black';
  size: 'sm' | 'md' | 'lg' | 'xl' | 'contact';
  marginTop: number | undefined;
}>`
  margin-top: ${({ marginTop }) => (marginTop ? marginTop + 'px' : 0 + 'px')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 25px;
  background-color: ${({ color }) =>
    color === 'orange' ? Colors.orange : Colors.offBlack};
  width: ${({ size }) =>
    size === 'lg'
      ? '275px'
      : size === 'sm'
      ? '150px'
      : size === 'xl'
      ? '400px'
      : size === 'contact'
      ? '500px'
      : '200px'};
  height: ${({ size }) =>
    size === 'lg'
      ? '48px'
      : size === 'sm'
      ? '38px'
      : size === 'xl'
      ? '50px'
      : size === 'contact'
      ? '55px'
      : '40px'};
  color: white;
  font-size: 20px;
  @media only screen and (max-width: 600px) {
    width: 85vw;
  }
`;
