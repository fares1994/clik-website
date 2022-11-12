import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FAQComponent from '../../Components/FAQComponent';
import { VIEW_UPLOAD_URI } from '../../configs';
import { useAppDispatch, useAppSelector } from '../../Redux/store';
import { getProductsAction } from '../../Redux/storeReducer';
import { Colors } from '../../theme';
import Contacts from '../Contacts';
import content from '../FAQ/content';
import HowToClik from '../HowToClik';

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { products } = useAppSelector((state) => state.storeReducer);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);
  const handleNavigateToShop = () => {
    navigate('/shop');
  };
  return (
    <HomePageContainer>
      <Wrapper1>
        <RightSection>
          <TitleWrapper>
            <WhtisText>What is</WhtisText>
            <Clik>{' Clik?'}</Clik>
          </TitleWrapper>
          <WhtsClikContent>
            Clik is a smart technology built into sleek products and wearable
            gadgets that make connecting and sharing data with others easy,
            fast, and fun. With just a tap of your Clik product to someone's
            phone, you can share your social media, contact info, music, payment
            platforms, videos, presentations, files, an d anything else online.
          </WhtsClikContent>
        </RightSection>
        <LeftSection>
          <WhtisClikImg src={'Images/whts_clik.png'} />
        </LeftSection>
      </Wrapper1>
      <Wrapper2>
        <HowItWorksText>How it works?</HowItWorksText>
        <VideoWrapper />
        <HowItWorksImg src="Images/howItWorks.png" />
      </Wrapper2>
      <WrapperDark>
        <RightSection>
          <WhatCanUseClik>What Can I Use Clik For?</WhatCanUseClik>
          <WhatCanUseText>
            *Whether you are a student, artist, entrepreneur, model, influencer,
            athlete or photographer, or simply someone who loves technology.
          </WhatCanUseText>
        </RightSection>
        {/* <LeftSection> */}
        <MessageImage src="Images/Message.svg" />
        {/* </LeftSection> */}
      </WrapperDark>
      <OrangeWrapper>
        <InnerWrapper>
          <WhiteTitle>
            Create and customize your
            <br /> profile in minutes
          </WhiteTitle>
          <WhiteContent>
            Connects your social media, contact info, music, payment platforms,
            videos,
            <br /> presentations, files, and anything else
          </WhiteContent>
        </InnerWrapper>
      </OrangeWrapper>
      <WrapperDarkColumn>
        <WhiteContent>
          Once you register, the application gives you a unique QR code that you
          can print on <br /> packaging, products, mugs, menus, ads, and more.
        </WhiteContent>
        <PhoneIcon src="Images/iconsnphone.svg" />
      </WrapperDarkColumn>
      <Wrapper2>
        <BubbleTitle>
          Create a perfect and memorable impression of the people you <br />
          meet, and make them remember you long after the meeting is over
        </BubbleTitle>
        <ProductsWrapper>
          {products?.slice(0, 4)?.map((product) => (
            <ProductWrapper>
              <ProductImage
                src={VIEW_UPLOAD_URI + product.choices?.[0]?.image?._id}
              />
            </ProductWrapper>
          ))}
        </ProductsWrapper>
        <CustomButton onClick={handleNavigateToShop}>
          See All Products
        </CustomButton>
      </Wrapper2>
      <OrangeWrapper>
        <InnerWrapperNoBoder>
          <WhiteTitle>Make Better Connections</WhiteTitle>
          <WhiteContent>
            Whether you are a student, designer, e-marketer, programmer, etc.
            Clik suggests all the people close to your field, and you can add
            them and see Social Media, their personal information, their
            previous work, their CVs, and everything, so you can have new
            relationships and provide endless opportunities whatever your goal
            is to hire or even to increase your network.
          </WhiteContent>
        </InnerWrapperNoBoder>
      </OrangeWrapper>
      <Wrapper1>
        <RightSection>
          <Wrapper5>
            <TwoPhones src="Images/twoPhones.svg" />
          </Wrapper5>
        </RightSection>
        <LeftSection>
          <TwoPhonesContentWrapper>
            <PointTitle>Point them to one place</PointTitle>
            <WhtsClikContent>
              Direct Link is a special Clik feature that allows you to instantly
              redirect others to any link, without anyone seeing your Clik
              profile with other links.
            </WhtsClikContent>
          </TwoPhonesContentWrapper>
        </LeftSection>
      </Wrapper1>
      <Wrapper7>
        <LeftSection>
          <TwoPhonesContentWrapper>
            <PointTitle>
              Custom icons <br /> and titles
            </PointTitle>
            <WhtsClikContent>
              Set custom icons and titles for each of your links! Setting better
              icons and titles can be great for engagement and tap through rate.
            </WhtsClikContent>
          </TwoPhonesContentWrapper>
        </LeftSection>
        <RightSection>
          <Image2 src="Images/iconsnphone.svg" />
        </RightSection>
      </Wrapper7>
      <WrapperDark>
        <Wrapper6>
          <PointTitle2>Features</PointTitle2>
          <PointWrapper highLight>
            <ColumnTextWrapper>
              <Text0>Others</Text0>
              <XIcon src="Images/xIcon.svg" />
              <XIcon src="Images/xIcon.svg" />
              <XIcon src="Images/xIcon.svg" />
              <XIcon src="Images/xIcon.svg" />
              <XIcon src="Images/xIcon.svg" />
              <XIcon src="Images/xIcon.svg" />

              <XIcon />
            </ColumnTextWrapper>
            <ColumnTextWrapper2>
              <Logo9 src="Images/logoWhite.svg" />
              <CheckIcon src="Images/checkIcon.svg" />
              <CheckIcon src="Images/checkIcon.svg" />
              <CheckIcon src="Images/checkIcon.svg" />
              <CheckIcon src="Images/checkIcon.svg" />
              <CheckIcon src="Images/checkIcon.svg" />
              <CheckIcon src="Images/checkIcon.svg" />
            </ColumnTextWrapper2>
            <TextWrapper>
              <Title9>Free Mobile App</Title9>
              <Content9>Top rated, #1 on the App Store</Content9>
            </TextWrapper>
          </PointWrapper>
          <PointWrapper>
            <TextWrapper>
              <Title9>24/7 Customer Service</Title9>
              <Content9>Our 24/7 chat support is one-of-a-kind</Content9>
            </TextWrapper>
          </PointWrapper>
          <PointWrapper highLight>
            <TextWrapper>
              <Title9>Patented Phone Tag</Title9>
              <Content9>We created the popular, back of the phone tag</Content9>
            </TextWrapper>
          </PointWrapper>
          <PointWrapper>
            <TextWrapper>
              <Title9>Custom Smart Products</Title9>
              <Content9>
                We offer the largest variety of custom products
              </Content9>
            </TextWrapper>
          </PointWrapper>
          <PointWrapper highLight>
            <TextWrapper>
              <Title9>Popular Teams Platform</Title9>
              <Content9>Manage your team's digital business cards</Content9>
            </TextWrapper>
          </PointWrapper>
          <PointWrapper>
            <TextWrapper>
              <Title9>Business Card Scanner</Title9>
              <Content9>AI-powered scanner with 99% success rate</Content9>
            </TextWrapper>
          </PointWrapper>
        </Wrapper6>
      </WrapperDark>
      <OrangeWrapper>
        <WhiteTitle>Testimonials</WhiteTitle>
      </OrangeWrapper>
      <WrapperDark>
        <Column>
          <PointTitle2>Features</PointTitle2>
          <HowToClik home />
        </Column>
      </WrapperDark>
      <Wrapper1>
        <Column>
          <PointTitle2>FAQs</PointTitle2>
          {content?.slice(0, 4)?.map((com) => (
            <FAQComponent title={com.title} content={com.content} />
          ))}
          <ButtonsWrapper>
            <CustomButton>See All FAQs</CustomButton>
            <ButtonOrange>Comaptibility</ButtonOrange>
          </ButtonsWrapper>
        </Column>
      </Wrapper1>
      <Wrapper7>
        <Contacts />
      </Wrapper7>
    </HomePageContainer>
  );
};

export default Home;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1100px;
  @media only screen and (max-width: 1200px) {
    width: 900px;
  }
  @media only screen and (max-width: 1000px) {
    width: 800px;
  }
  @media only screen and (max-width: 800px) {
    width: 500px;
    justify-content: center;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const XIcon = styled.img`
  height: 41px;
  width: 41px;
  margin-top: 36px;
`;
const CheckIcon = styled.img`
  height: 41px;
  width: 41px;
  margin-top: 36px;
`;

const Text0 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  color: #ffffff;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const Logo9 = styled.img`
  height: 58px;
  width: 75px;
  margin-bottom: 3px;
`;
const ColumnTextWrapper = styled.div`
  height: 594px;
  width: 155px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  position: absolute;
  right: 67px;
  top: -110px;
  padding: 30px 45px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const ColumnTextWrapper2 = styled(ColumnTextWrapper)`
  right: 250px;
`;
const Content9 = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 23px;
  color: #ffffff;
`;
const Title9 = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 39px;
  color: #ffffff;
`;
const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0px 100px;
`;
const PointWrapper = styled.div<{ highLight?: boolean }>`
  background-color: ${({ highLight }) =>
    highLight ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  border-radius: 50px;
  width: 100%;
  height: 77px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;
const Wrapper6 = styled.div`
  width: 1200px;
  justify-content: flex-start;
  margin-top: 50px;
  position: relative;
`;
const Image2 = styled.img`
  height: 367px;
  width: 566px;
`;
const Wrapper5 = styled.div`
  height: 600px;
  width: 600px;
  background-color: #ffffff;
  border-radius: 50px;
`;
const PointTitle = styled.div`
  color: ${Colors.orange};
  font-size: 58px;
  font-weight: 700;
  line-height: 55px;
  margin: 0px 0px 40px;
`;
const PointTitle2 = styled(PointTitle)`
  color: ${Colors.orange};
  font-size: 58px;
  font-weight: 700;
  line-height: 55px;
  margin: 0px 100px 70px;
`;
const TwoPhonesContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #f4f4f4;
  border-radius: 50px;
  padding: 50px 80px;
  width: 700px;
`;
const TwoPhones = styled.img`
  width: 570px;
  height: 570px;
  align-self: flex-end;
`;
const CustomButton = styled.div`
  cursor: pointer;
  width: 400px;
  height: 75px;
  background-color: transparent;
  border: 2px solid ${Colors.orange};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 30px;
  color: ${Colors.orange};
  font-size: 22px;
  font-weight: 700;
  margin-top: 50px;
  @media only screen and (max-width: 800px) {
    width: 300px;
    height: 50px;
  }
`;
const ButtonOrange = styled(CustomButton)`
  color: ${Colors.white};
  background-color: ${Colors.orange};
`;
const ProductImage = styled.img`
  height: 90px;
  width: 90px;
`;
const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
const ProductWrapper = styled.div`
  display: flex;
  height: 210px;
  width: 210px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 10000px;
  margin: 0px 30px;
`;
const BubbleTitle = styled.div`
  background-color: #ffffff;
  border-radius: 50px;
  width: 1200px;
  padding: 49px 72px;
  color: #444444;
  font-weight: 700;
  font-size: 29px;
`;
const PhoneIcon = styled.img`
  height: 452px;
  width: 678px;
  margin-top: 60px;
`;
const WhatCanUseText = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  @media only screen and (max-width: 1000px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
`;
const WhatCanUseClik = styled.div`
  font-weight: 600;
  font-size: 60px;
  color: #ff8b00;
  margin-bottom: 80px;
  @media only screen and (max-width: 1400px) {
    font-size: 52px;
    margin-bottom: 70px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 48px;
    margin-bottom: 55px;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 30px;
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 26px;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin-bottom: 25px;
  }
`;
const MessageImage = styled.img`
  height: 834px;
  width: 815px;
  @media only screen and (max-width: 1400px) {
    height: 700px;
    width: 700px;
  }
  @media only screen and (max-width: 1200px) {
    height: 600px;
    width: 600px;
  }
  @media only screen and (max-width: 1000px) {
    height: 480px;
    width: 480px;
  }
  @media only screen and (max-width: 600px) {
    height: 380px;
    width: 380px;
  }
`;
const HowItWorksText = styled.div`
  font-weight: 600;
  font-size: 4vw;
  color: #444444;
  @media only screen and (max-width: 1000px) {
    font-size: 7vw;
  }
  @media only screen and (max-width: 600px) {
    font-size: 8vw;
  }
`;
const VideoWrapper = styled.div`
  height: 34vw;
  width: 68vw;
  border-radius: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 62px;
  @media only screen and (max-width: 1000px) {
    height: 50vw;
    width: 85vw;
  }
  @media only screen and (max-width: 600px) {
    height: 250px;
    width: 320px;
    margin-top: 40px;
  }
`;
const HowItWorksImg = styled.img`
  height: 28vw;
  width: 60vw;
  margin-top: 50px;
`;
const HomePageContainer = styled.div``;

const Wrapper1 = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: white;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Wrapper2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 62px 0px;
`;

const WrapperDark = styled(Wrapper2)`
  background-color: #444444;
  flex-direction: row;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 30vw;
  @media only screen and (max-width: 1600px) {
    width: 38vw;
  }
  @media only screen and (max-width: 1400px) {
    width: 40vw;
  }
  @media only screen and (max-width: 1200px) {
    width: 42vw;
  }
  @media only screen and (max-width: 1000px) {
    width: 45vw;
  }
  @media only screen and (max-width: 800px) {
    width: 90vw;
    justify-content: center;
    align-items: center;
  }
`;
const LeftSection = styled.div`
  display: flex;
  width: 30vw;
  @media only screen and (max-width: 1600px) {
    width: 38vw;
  }
  @media only screen and (max-width: 1400px) {
    width: 40vw;
  }
  @media only screen and (max-width: 1200px) {
    width: 42vw;
  }
  @media only screen and (max-width: 1000px) {
    width: 45vw;
  }
  @media only screen and (max-width: 800px) {
    margin-top: 80px;
    width: 90vw;
    justify-content: center;
    align-items: center;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const WhtisText = styled.div`
  font-size: 64px;
  font-weight: 700;
  color: 444444;
  @media only screen and (max-width: 1350px) {
    font-size: 54px;
  }
  @media only screen and (max-width: 1100px) {
    font-size: 48px;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 42px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 35px;
  }
`;

const WhtisClikImg = styled.img`
  width: 675px;
  height: 475px;
  @media only screen and (max-width: 1350px) {
    width: 600px;
    height: 400px;
  }
  @media only screen and (max-width: 1100px) {
    width: 500px;
    height: 320px;
  }
  @media only screen and (max-width: 1000px) {
    width: 450px;
    height: 280px;
  }
  @media only screen and (max-width: 600px) {
    width: 380px;
    height: 260px;
  }
`;
const Clik = styled(WhtisText)`
  color: #ff8b00;
  margin-left: 10px;
`;

const WhtsClikContent = styled.div`
  font-size: 28px;
  font-weight: 400;
  color: #444444;
  @media only screen and (max-width: 1350px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 1100px) {
    font-size: 23px;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    text-align: center;
  }
`;

const OrangeWrapper = styled(Wrapper2)`
  background-color: #ff8b00;
`;

const InnerWrapper = styled.div`
  border: 25px solid rgba(255, 255, 255, 0.12);
  height: 470px;
  width: 1200px;
  border-radius: 50px;
  margin: 40px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 20px 57px;
`;
const InnerWrapperNoBoder = styled(InnerWrapper)`
  border: none;
  background-color: rgba(255, 255, 255, 0.12);
  height: 350px;
`;

const WhiteTitle = styled.div`
  font-size: 60px;
  font-weight: 600px;
  color: white;
  text-align: center;
  font-weight: 700;
`;

const WhiteContent = styled.div`
  font-size: 25px;
  font-weight: 400px;
  color: white;
  text-align: center;
`;
const WrapperDarkColumn = styled(WrapperDark)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper7 = styled(Wrapper1)`
  background-color: #f4f4f4;
`;
