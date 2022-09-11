import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  placeholder: string;
  error: boolean;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
const IconResolver = (title: string) => {
  switch (title) {
    case 'Name':
      return 'user.svg';
    case 'Email':
      return 'mail.svg';
    case 'Location':
      return 'map-pin.svg';
    case 'Phone':
      return 'phone.svg';
  }
};
const CustomInput = ({ title, placeholder, error, value, onChange }: Props) => {
  return (
    <InputWrapper error={error}>
      <Title>{title}</Title>
      <div
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          flexGrow: 1,
          width: '33%',
        }}
      >
        <Placeholder
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>

      <Icon src={`Images/${IconResolver(title)}`} />
    </InputWrapper>
  );
};

export default CustomInput;

const InputWrapper = styled.div<{ error: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 30px;
  width: 700px;
  height: 47px;
  padding: 12px 35px;
  margin-top: 20px;
  border: ${({ error }) => (error ? '1px solid red' : 'none')};
  width: 600px;
  height: 47px;
  @media only screen and (max-width: 700px) {
    width: 500px;
    height: 42px;
  }
  @media only screen and (max-width: 600px) {
    width: 350px;
    height: 42px;
    padding: 10px 25px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  color: #444444;
  font-weight: 400;
  width: 33%;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

const Placeholder = styled.input`
  color: #444444;
  background-color: transparent;
  border: none;
  font-size: 20px;
  outline: none;
  ::placeholder {
    color: #b7b7b7;
  }
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;
