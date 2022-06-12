import styled from 'styled-components';

export const LinkIconWrapper = styled.div`
  border-radius: 1000px;
  height: 100px;
  width: 100px;
  box-shadow: 2px 2px 2px 2px rgb(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  @media screen and (max-width: 500px) {
    width: 88px;
    height: 88px;
  }
`;

export const Icon = styled.img`
  border-radius: 1000px;
  height: 64px;
  width: 64px;
  box-shadow: 2px 2px 2px 2px rgb(0, 0, 0, 0.1);
  @media screen and (max-width: 500px) {
    width: 60px;
    height: 60px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    width: 90px;
  }
`;
