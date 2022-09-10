import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../theme';

interface Props {
  width?: number;
  handleChange: (quantity: number) => void;
  error?: boolean;
  value: number;
  size?: 'lg' | 'sm';
}
const CounterComponent = ({ handleChange, value, size }: Props) => {
  const handleAdd = () => {
    handleChange(++value);
  };
  const handleMinus = () => {
    if (!value) {
      return;
    }
    handleChange(--value);
  };
  return (
    <CounterWrapper>
      <Minus src="/Images/minus.svg" onClick={handleMinus} />
      <NumberWrapper size={size || 'lg'}>{value}</NumberWrapper>
      <Plus src="/Images/plus.svg" onClick={handleAdd} />
    </CounterWrapper>
  );
};

export default CounterComponent;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NumberWrapper = styled(Row)<{
  size: 'sm' | 'lg';
}>`
  background-color: ${Colors.background};
  border-radius: 30px;
  width: ${({ size }) => (size === 'sm' ? '200px' : '221px')};
  height: ${({ size }) => (size === 'sm' ? '30px' : '44px')};
  margin: 0px 12px;
  font-size: ${({ size }) => (size === 'lg' ? '28px' : '18px')};
  @media only screen and (max-width: 800px) {
    width: ${({ size }) => (size === 'sm' ? '180px' : '200px')};
  }
`;

const CounterWrapper = styled(Row)``;

const Plus = styled.img`
  cursor: pointer;
`;
const Minus = styled.img`
  cursor: pointer;
`;
