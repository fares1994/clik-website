import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../theme';

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterHeader>
          <RightSection>
            <Logo src="/Images/logoWhite.png" />
            <SocialsWrapper>
              <SocialIconWrapper>
                <SocialIcon src="/Images/linkedin.svg" />
              </SocialIconWrapper>
              <SocialIconWrapper>
                <SocialIcon src="/Images/facebook.svg" />
              </SocialIconWrapper>
              <SocialIconWrapper>
                <SocialIcon src="/Images/instagram.svg" />
              </SocialIconWrapper>
              <SocialIconWrapper>
                <SocialIcon src="/Images/twitter.svg" />
              </SocialIconWrapper>
              <SocialIconWrapper>
                <SocialIcon src="/Images/youtube.svg" />
              </SocialIconWrapper>
            </SocialsWrapper>
          </RightSection>
          <MiddleSection>
            <TitleWrapper>
              <ScanWrapper>
                <ScanWhiteText>Scan to get</ScanWhiteText>
                <ScanOrangeText>Clik</ScanOrangeText>
              </ScanWrapper>
              <Split />
            </TitleWrapper>
            <Row>
              <Column>
                <QRCodeWrapper>
                  <QRCode src={'/Images/qrCode.png'} />
                </QRCodeWrapper>
                <DownloadApp src="/Images/googlePlay.png" />
              </Column>
              <Column>
                <QRCodeWrapper>
                  <QRCode src={'/Images/qrCode.png'} />
                </QRCodeWrapper>
                <DownloadApp src="/Images/googlePlay.png" />
              </Column>
            </Row>
          </MiddleSection>
          <LeftSection>
            <ColumnInstance>
              <Title>
                <ScanOrangeText>Shop</ScanOrangeText>
                <Split />
              </Title>
              <FooterButton>Clik Card</FooterButton>
              <FooterButton>Clik Flat</FooterButton>
              <FooterButton>Clik Brand</FooterButton>
              <FooterButton>Clik Menu</FooterButton>
            </ColumnInstance>
            <ColumnInstance>
              <Title>
                <ScanOrangeText>Links</ScanOrangeText>
                <Split />
              </Title>
              <FooterButton>How to Clik</FooterButton>
              <FooterButton>FAQs</FooterButton>
              <FooterButton>Contacts</FooterButton>
            </ColumnInstance>
          </LeftSection>
        </FooterHeader>
      </FooterWrapper>
      <FooterFooter>
        <CopyrightText>Copyright © 2022</CopyrightText>
        <OrangeText>Clik</OrangeText>
        <CopyrightText>. All rights reserved.</CopyrightText>
      </FooterFooter>
    </>
  );
};

export default Footer;
const CopyrightText = styled.span`
  color: white;
  @media only screen and (max-width: 800px) {
    font-size: 17px;
  }
`;
const FooterHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FooterWrapper = styled.div`
  width: 100vw;
  /* background-color: ${Colors.offBlack}; */
  display: flex;
  height: 465px;
  justify-content: center;
  background-image: url('Images/RectangleFooter.png');
  background-position: center;
  background-repeat: no-repeat;
`;

const FooterFooter = styled.div`
  width: 100vw;
  background-color: #3e3e3e;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 87px;
  color: white;
  font-size: 20px;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 280px;
  justify-content: space-between;
  margin: 0px 60px 20px;
  @media only screen and (max-width: 1000px) {
    height: 325px;
    margin: 0px 10px 0px;
  }
`;
const MiddleSection = styled(RightSection)`
  @media only screen and (max-width: 1250px) {
    display: none;
  }
`;
const LeftSection = styled(RightSection)`
  flex-direction: row;
  align-items: flex-start;
  width: 350px;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

const Logo = styled.img`
  height: 140px;
  width: 170px;
`;

const SocialIconWrapper = styled.div`
  border-radius: 1002px;
  height: 55px;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000015;
  cursor: pointer;
  margin: 0px 5px;
`;

const SocialsWrapper = styled.div`
  justify-content: space-around;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media only screen and (max-width: 1000px) {
    width: 240px;
    height: 130px;
    align-items: space-between;
  }
`;

const SocialIcon = styled.img`
  height: 27px;
  width: 27px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Split = styled.div`
  height: 2px;
  background-color: ${Colors.orange};
  width: 120px;
  margin-top: 12px;
`;

const ScanWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ScanWhiteText = styled.div`
  color: white;
  font-size: 24px;
  margin-right: 5px;
  font-weight: 700;
`;
const ScanOrangeText = styled.div`
  color: ${Colors.orange};
  font-size: 24px;
  font-weight: 700;
`;

const QRCodeWrapper = styled.div`
  border: 3.5px solid ${Colors.orange};
  border-radius: 30px;
  padding: 12px;
  background-color: white;
  margin: 0px 5px;
`;

const QRCode = styled.img`
  height: 70px;
  width: 70px;
`;

const Row = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 27px;
  width: 370px;
`;

const Column = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const DownloadApp = styled.img`
  height: 60px;
  width: 155px;
  background-color: black;
  margin-top: 30px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FooterButton = styled.div`
  color: white;
  font-size: 20px;
  margin-top: 25px;
`;

const ColumnInstance = styled(Column)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const OrangeText = styled.div`
  font-size: 20px;
  margin-left: 5px;
  color: ${Colors.orange};
  @media only screen and (max-width: 800px) {
    font-size: 17px;
  }
`;
