/* eslint-disable react-native/no-inline-styles */
import { Drawer } from '@mantine/core';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../Redux/store';
import { Colors } from '../../theme';
const Header = () => {
  const { selectedProducts } = useAppSelector((state) => state.storeReducer);
  const [opened, setOpened] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate('home');
    opened && setOpened(false);
  };
  const handleNavigateToShop = () => {
    navigate('shop');
    opened && setOpened(false);
  };
  const handleNavigateToHowToClik = () => {
    navigate('howToClik');
    opened && setOpened(false);
  };
  const handleNavigateTofaq = () => {
    navigate('faq');
    opened && setOpened(false);
  };
  const handleNavigateToContacts = () => {
    navigate('contacts');
    opened && setOpened(false);
  };
  const handleNavigateToCart = () => {
    navigate('Cart');
    opened && setOpened(false);
  };
  const toggleDrawer = () => {
    setOpened((prev) => !prev);
  };
  return (
    <HeaderWrapper>
      <Drawer
        opened={opened}
        onClose={toggleDrawer}
        title="Menu"
        padding="xl"
        size="xl"
      >
        <NavigationButtonsContainer>
          <NavigationButton
            active={pathname.includes('home')}
            onClick={handleNavigateToHome}
            marginBottom={true}
          >
            Home
          </NavigationButton>
          <NavigationButton
            active={pathname.includes('shop')}
            onClick={handleNavigateToShop}
            marginBottom={true}
          >
            Shop
          </NavigationButton>
          <NavigationButton
            active={pathname.includes('howToClik')}
            onClick={handleNavigateToHowToClik}
            marginBottom={true}
          >
            How to Clik
          </NavigationButton>
          <NavigationButton
            active={pathname.includes('faq')}
            onClick={handleNavigateTofaq}
            marginBottom={true}
          >
            FAQs
          </NavigationButton>
          <NavigationButton
            active={pathname.includes('contacts')}
            onClick={handleNavigateToContacts}
            marginBottom={true}
          >
            Contacts
          </NavigationButton>
          <WhatsAppWrapper>
            <WhatsAppIcon src="Images/whatsAppIcon.svg" />
            <PhoneNumber>+962790943343</PhoneNumber>
          </WhatsAppWrapper>
        </NavigationButtonsContainer>
      </Drawer>
      <ResponsiveShopIconWrapper>
        <div style={{ display: !selectedProducts?.length ? 'none' : 'flex' }}>
          <Qnt src="Images/qnt.svg" alt="qnt" />
          <QntNumber>{selectedProducts?.length}</QntNumber>
        </div>
        <ShopIconInnerWrapper>
          <img src="Images/shopping-bag.svg" />
        </ShopIconInnerWrapper>
      </ResponsiveShopIconWrapper>
      <ResponsiveLogo src="Images/logo.svg" alt="logo" />
      <HumbergerMenu
        src="Images/menu_icon.png"
        alt="humberger"
        color="white"
        onClick={toggleDrawer}
      />
      <HalfCircleWrapper>
        <HalfCircle>
          <Logo src="Images/logo.svg" alt="logo" />
        </HalfCircle>
      </HalfCircleWrapper>
      <RightWrapper>
        <UpperWrapper>
          <WhatsAppWrapper>
            <WhatsAppIcon src="Images/whatsAppIcon.svg" />
            <PhoneNumber>+962790943343</PhoneNumber>
          </WhatsAppWrapper>
          <ShopIconWrapper onClick={handleNavigateToCart}>
            <div
              style={{ display: !selectedProducts?.length ? 'none' : 'flex' }}
            >
              <Qnt src="Images/qnt.svg" alt="qnt" />
              <QntNumber>{selectedProducts?.length}</QntNumber>
            </div>
            <ShopIconInnerWrapper>
              <img src="Images/shopping-bag.svg" />
            </ShopIconInnerWrapper>
          </ShopIconWrapper>
        </UpperWrapper>
        <NavigationWrapper>
          <NavigationButton
            active={pathname.includes('home')}
            onClick={handleNavigateToHome}
          >
            Home
          </NavigationButton>
          <NavigationButton
            active={pathname.includes('shop')}
            onClick={handleNavigateToShop}
          >
            Shop
          </NavigationButton>
          <NavigationButton
            active={pathname.includes('howToClik')}
            onClick={handleNavigateToHowToClik}
          >
            How to CLik
          </NavigationButton>
          <NavigationButton
            active={pathname.includes('faq')}
            onClick={handleNavigateTofaq}
          >
            FAQs
          </NavigationButton>
          <NavigationButton
            active={pathname.includes('contacts')}
            onClick={handleNavigateToContacts}
          >
            Contacts
          </NavigationButton>
        </NavigationWrapper>
      </RightWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  justify-content: space-between;
  align-items: space-between;
  display: flex;
  flex-direction: row;
  width: '100%';
  height: 215px;

  background-color: white;
  padding: 0px 10vw;
  @media only screen and (max-width: 1500px) {
    height: 200px;
  }
  @media only screen and (max-width: 1300px) {
    padding: 0px 7vw;
  }
  @media only screen and (max-width: 850px) {
    padding: 0px 6vw;
  }
  @media only screen and (max-width: 800px) {
    background-color: ${Colors.background};
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const HalfCircle = styled.div`
  justify-content: flex-end;
  align-items: center;
  height: 445px;
  width: 445px;
  border-radius: 10000px;
  background-color: ${Colors.background};
  position: absolute;
  top: -250px;
  @media only screen and (max-width: 1500px) {
    height: 390px;
    width: 390px;
    top: -240px;
  }
  @media only screen and (max-width: 1300px) {
    height: 375px;
    width: 375px;
    top: -230px;
  }
  @media only screen and (max-width: 850px) {
    height: 360px;
    width: 360px;
    top: -220px;
  }
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const Logo = styled.img`
  height: 120px;
  width: 120px;
  z-index: 20;
  position: absolute;
  bottom: 45px;
  right: 160px;

  @media only screen and (max-width: 1500px) {
    height: 110px;
    width: 110px;
    right: 142.5px;
    bottom: 30px;
  }
  @media only screen and (max-width: 1300px) {
    right: 140px;
    bottom: 28px;
  }
  @media only screen and (max-width: 850px) {
    right: 135px;
    bottom: 26px;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 24px;
  margin-bottom: 50px;
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 0px;
  width: 55vw;
`;

const NavigationButton = styled.div<{
  active: boolean;
  marginBottom?: boolean;
}>`
  color: ${({ active }) => (active ? Colors.orange : Colors.offBlack)};
  font-size: 23px;
  border: ${({ active }) => (active ? `solid 2px ${Colors.orange}` : 'none')};
  border-radius: 30px;
  padding: 1px ${({ active }) => (active ? '20px' : '0px')};
  cursor: pointer;
  @media only screen and (max-width: 1500px) {
    font-size: 21px;
  }
  @media only screen and (max-width: 1300px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 19px;
  }
  margin-bottom: ${({ marginBottom }) => (marginBottom ? '60px' : '0px')};
`;

const ShopIconInnerWrapper = styled.div`
  background-color: ${Colors.background};
  border-radius: 100px;
  height: 56px;
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1500px) {
    height: 60px;
    width: 60px;
  }
  @media only screen and (max-width: 1300px) {
    width: 52px;
    height: 52px;
  }
  @media only screen and (max-width: 800px) {
    background-color: ${Colors.white};
    height: 45px;
    width: 45px;
  }
`;

const ShopIconWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const ResponsiveShopIconWrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: none;
  @media only screen and (max-width: 800px) {
    display: flex;
  }
`;

const Qnt = styled.img`
  position: absolute;
  top: -10px;
  left: -15px;
  height: 27px;
  width: 27px;

  @media only screen and (max-width: 800px) {
    top: -15px;
    left: -17px;
    height: 25px;
    width: 25px;
  }
`;

const QntNumber = styled.div`
  position: absolute;
  top: -10px;
  left: -5px;
  font-size: 16px;
  color: white;

  @media only screen and (max-width: 800px) {
    top: -15px;
    left: -11px;
  }
`;

const WhatsAppWrapper = styled.div`
  background-color: ${Colors.orange};
  padding: 0px 20px;
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 55px;
  width: 225px;
  height: 56px;

  @media only screen and (max-width: 1500px) {
    width: 215px;
    height: 52px;
  }
  @media only screen and (max-width: 1300px) {
    width: 205px;
    height: 50px;
  }
`;

const PhoneNumber = styled.div`
  color: ${Colors.white};
  font-size: 19px;
  @media only screen and (max-width: 1500px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 1300px) {
    font-size: 17px;
  }
`;

const WhatsAppIcon = styled.img``;
const HumbergerMenu = styled.img`
  height: 42px;
  width: 42px;
  color: white;
  display: none;
  cursor: pointer;
  @media only screen and (max-width: 800px) {
    display: flex;
  }
`;

const UpperWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ResponsiveLogo = styled.img`
  display: none;
  height: 22vw;
  width: 22vw;

  @media only screen and (max-width: 800px) {
    display: flex;
  }
`;

const HalfCircleWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const NavigationButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  flex-direction: column;
`;
