import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../theme';
interface Props {
  currentPosition: 'clikStore' | 'myCart' | 'ContactInfo';
  productName?: string;
}
const SubNavigationBar = ({ currentPosition, productName }: Props) => {
  // eslint-disable-next-line no-console
  return (
    <SubNavigationContainer>
      <RightSection>
        <PathTitle active={true}>Home</PathTitle>
        {currentPosition === 'clikStore' && (
          <>
            <ForwordSlash>/</ForwordSlash>
            <PathTitle
              active={currentPosition !== 'clikStore' || !!productName}
            >
              Clik Store
            </PathTitle>
            {!!productName && (
              <>
                <ForwordSlash>/</ForwordSlash>
                <PathTitle active={false}>{productName}</PathTitle>
              </>
            )}
          </>
        )}
        {(currentPosition === 'myCart' ||
          currentPosition === 'ContactInfo') && (
          <>
            <ForwordSlash>/</ForwordSlash>
            <PathTitle active={currentPosition !== 'myCart'}>
              Clik Store
            </PathTitle>
            {currentPosition === 'ContactInfo' && (
              <>
                <ForwordSlash>/</ForwordSlash>
                <PathTitle active={true}>Contact Information</PathTitle>
              </>
            )}
          </>
        )}
      </RightSection>
      <LeftSection />
    </SubNavigationContainer>
  );
};

export default SubNavigationBar;

const SubNavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: '100%';
  height: 50px;
  background-color: ${Colors.background};
  padding: 0px 360px;
  @media only screen and (max-width: 1200px) {
    padding: 0px 36px;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const LeftSection = styled.div``;

const PathTitle = styled.div<{
  active: boolean;
}>`
  color: ${({ active }) => (active ? Colors.orange : Colors.silver)};
  font-size: 16px;
`;

const ForwordSlash = styled.div`
  color: ${Colors.silver};
  font-size: 16px;
  margin: 0px 15px;
`;
