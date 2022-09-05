import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../theme';

interface Props {
  color: 'orange' | 'black';
  size: 'sm' | 'md' | 'lg';
  title: string;
}
const CounterComponent = ({ color, size, title }: Props) => {
  return (
    <Wrapper color={color} size={size}>
      {title}
    </Wrapper>
  );
};

export default CounterComponent;
const Wrapper = styled.div<{
  color: 'orange' | 'black';
  size: 'sm' | 'md' | 'lg';
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 25px;
  background-color: ${({ color }) =>
    color === 'orange' ? Colors.orange : Colors.offBlack};
  width: ${({ size }) =>
    size === 'lg' ? '275px' : size === 'sm' ? '150px' : '200px'};
  height: ${({ size }) =>
    size === 'lg' ? '48px' : size === 'sm' ? '38px' : '40px'};
  color: white;
  font-size: 20px;
`;
