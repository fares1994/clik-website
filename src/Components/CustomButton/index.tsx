import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../theme';

interface Props {
  color: 'orange' | 'black';
  size: 'sm' | 'md' | 'lg' | 'xl';
  title: string;
  onClick?: () => void;
}
const CounterComponent = ({ color, size, title, onClick }: Props) => {
  return (
    <Wrapper color={color} size={size} onClick={onClick}>
      {title}
    </Wrapper>
  );
};

export default CounterComponent;
const Wrapper = styled.div<{
  color: 'orange' | 'black';
  size: 'sm' | 'md' | 'lg' | 'xl';
}>`
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
      : '200px'};
  height: ${({ size }) =>
    size === 'lg'
      ? '48px'
      : size === 'sm'
      ? '38px'
      : size === 'xl'
      ? '50px'
      : '40px'};
  color: white;
  font-size: 20px;
`;
