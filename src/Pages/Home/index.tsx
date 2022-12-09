import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FAQComponent from '../../Components/FAQComponent';
import Testimonials from '../../Components/Testimonials';
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
        <HowItWorksImg src="Images/howItWorks.svg" />
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
      <WhiteWrapper>
        <RightSection>
          <TwoPhones src="Images/twoPhones.svg" />
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
      </WhiteWrapper>
      <Wrapper7>
        <TwoPhonesContentWrapper>
          <PointTitle>
            Custom icons <br /> and titles
          </PointTitle>
          <WhtsClikContent>
            Set custom icons and titles for each of your links! Setting better
            icons and titles can be great for engagement and tap through rate.
          </WhtsClikContent>
        </TwoPhonesContentWrapper>
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
        <Testimonials />
      </OrangeWrapper>
      <WrapperDark>
        <Column>
          <PointTitle2>Features</PointTitle2>
          <HowToClik home />
        </Column>
      </WrapperDark>
      <WhiteWrapper>
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
      </WhiteWrapper>
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
  @media only screen and (max-width: 400px) {
    width: 350px;
    justify-content: center;
    flex-direction: column;
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
  @media only screen and (max-width: 600px) {
    height: 36px;
    width: 36px;
    margin-top: 36px;
  }
  @media only screen and (max-width: 400px) {
    height: 33px;
    width: 33px;
    margin-top: 29px;
  }
`;
const CheckIcon = styled.img`
  height: 41px;
  width: 41px;
  margin-top: 36px;
  @media only screen and (max-width: 600px) {
    height: 36px;
    width: 36px;
    margin-top: 37px;
  }
  @media only screen and (max-width: 400px) {
    height: 33px;
    width: 33px;
    margin-top: 29px;
  }
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
  @media only screen and (max-width: 1000px) {
    font-size: 23px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 14px;
    margin-bottom: 33px;
  }
`;
const Logo9 = styled.img`
  height: 58px;
  width: 75px;
  margin-bottom: 3px;
  @media only screen and (max-width: 1000px) {
    height: 56px;
    width: 72px;
    margin-top: 4px;
  }
  @media only screen and (max-width: 800px) {
    height: 53px;
    width: 69px;
    margin-top: 7px;
  }
  @media only screen and (max-width: 600px) {
    width: 55px;
    height: 42px;
    margin-top: 13px;
  }
  @media only screen and (max-width: 400px) {
    width: 42px;
    height: 28px;
    margin-top: 28px;
    margin-bottom: 29px;
  }
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
  @media only screen and (max-width: 1350px) {
    width: 140px;
    right: 62px;
  }
  @media only screen and (max-width: 1200px) {
    width: 130px;
    right: 58px;
  }
  @media only screen and (max-width: 1000px) {
    width: 110px;
    right: 54px;
  }
  @media only screen and (max-width: 800px) {
    width: 85px;
    right: 30px;
  }
  @media only screen and (max-width: 600px) {
    right: 26px;
    padding: 26px 33px;
    height: 560px;
  }
  @media only screen and (max-width: 400px) {
    padding: 10px 10px;
    width: 47px;
    right: 10px;
    height: 490px;
  }
`;
const ColumnTextWrapper2 = styled(ColumnTextWrapper)`
  right: 250px;
  @media only screen and (max-width: 1350px) {
    right: 245px;
  }
  @media only screen and (max-width: 1200px) {
    right: 231px;
  }
  @media only screen and (max-width: 1000px) {
    right: 200px;
  }
  @media only screen and (max-width: 800px) {
    right: 138px;
  }
  @media only screen and (max-width: 600px) {
    right: 132px;
  }
  @media only screen and (max-width: 400px) {
    right: 70px;
  }
`;
const Content9 = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 23px;
  color: #ffffff;
  @media only screen and (max-width: 1000px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 11px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 10px;
  }
`;
const Title9 = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 39px;
  color: #ffffff;
  @media only screen and (max-width: 1000px) {
    font-size: 23px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 21px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 16px;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0px 100px;
  @media only screen and (max-width: 1000px) {
    margin: 0px 90px;
  }
  @media only screen and (max-width: 800px) {
    margin: 0px 80px;
  }
  @media only screen and (max-width: 700px) {
    margin: 0px 60px;
  }
  @media only screen and (max-width: 600px) {
    margin: 0px 40px;
  }
  @media only screen and (max-width: 400px) {
    margin: 0px 30px;
  }
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
  @media only screen and (max-width: 1350px) {
  }
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 1000px) {
  }
  @media only screen and (max-width: 800px) {
  }
  @media only screen and (max-width: 600px) {
    height: 70px;
  }
  @media only screen and (max-width: 400px) {
    height: 62px;
  }
`;
const Wrapper6 = styled.div`
  width: 1200px;
  justify-content: flex-start;
  margin-top: 50px;
  position: relative;
  @media only screen and (max-width: 1350px) {
    width: 1100px;
  }
  @media only screen and (max-width: 1200px) {
    width: 990px;
  }
  @media only screen and (max-width: 1000px) {
    width: 790px;
  }
  @media only screen and (max-width: 800px) {
    width: 90vw;
  }
  @media only screen and (max-width: 700px) {
  }
  @media only screen and (max-width: 600px) {
  }
  @media only screen and (max-width: 550px) {
  }
  @media only screen and (max-width: 500px) {
  }
  @media only screen and (max-width: 450px) {
  }
  @media only screen and (max-width: 400px) {
    width: 95vw;
  }
  @media only screen and (max-width: 350px) {
  }
`;
const Image2 = styled.img`
  height: 367px;
  width: 566px;
  @media only screen and (max-width: 1400px) {
    height: 350px;
    width: 540px;
  }
  @media only screen and (max-width: 1350px) {
    height: 340px;
    width: 520px;
  }
  @media only screen and (max-width: 1200px) {
    height: 320px;
    width: 490px;
  }
  @media only screen and (max-width: 1000px) {
    height: 300px;
    width: 470px;
  }
  @media only screen and (max-width: 800px) {
    height: 280px;
    width: 440px;
  }
  @media only screen and (max-width: 600px) {
    height: 260px;
    width: 400px;
  }
  @media only screen and (max-width: 400px) {
    height: 240px;
    width: 350px;
  }
`;

const PointTitle = styled.div`
  color: ${Colors.orange};
  font-size: 58px;
  font-weight: 700;
  line-height: 55px;
  margin: 0px 0px 40px;
  @media only screen and (max-width: 1400px) {
    font-size: 56px;
    line-height: 50px;
    margin: 0px 0px 38px;
  }
  @media only screen and (max-width: 1350px) {
    font-size: 50px;
    line-height: 48px;
    margin: 0px 0px 35px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 40px;
    line-height: 45px;
    margin: 0px 0px 32px;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 38px;
    line-height: 42px;
    margin: 0px 0px 28px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 34px;
    line-height: 36px;
    margin: 0px 0px 26px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 30px;
    line-height: 34px;
    margin: 0px 0px 22px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 28px;
    line-height: 32px;
    margin: 0px 0px 20px;
  }
`;
const PointTitle2 = styled(PointTitle)`
  color: ${Colors.orange};
  font-weight: 700;
  line-height: 55px;
  margin: 0px 100px 70px;
  @media only screen and (max-width: 1000px) {
    margin: 0px 90px 70px;
  }
  @media only screen and (max-width: 800px) {
    margin: 0px 80px 70px;
  }
  @media only screen and (max-width: 700px) {
    margin: 0px 60px 70px;
  }
  @media only screen and (max-width: 600px) {
    margin: 0px 40px 70px;
  }
  @media only screen and (max-width: 400px) {
    margin: 0px 30px 70px;
  }
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
  @media only screen and (max-width: 1400px) {
    padding: 48px 72px;
    width: 680px;
  }
  @media only screen and (max-width: 1350px) {
    padding: 44px 66px;
    width: 620px;
  }
  @media only screen and (max-width: 1200px) {
    padding: 40px 55px;
    width: 460px;
  }
  @media only screen and (max-width: 1000px) {
    padding: 36px 52px;
    width: 440px;
  }
  @media only screen and (max-width: 800px) {
    padding: 32px 46px;
    width: 400px;
  }
  @media only screen and (max-width: 600px) {
    padding: 30px 42px;
    width: 380px;
  }
  @media only screen and (max-width: 400px) {
    padding: 28px 38px;
    width: 340px;
  }
`;
const TwoPhones = styled.img`
  width: 570px;
  height: 570px;
  align-self: flex-end;
  @media only screen and (max-width: 1200px) {
    width: 500px;
    height: 500px;
  }
  @media only screen and (max-width: 1000px) {
    width: 440px;
    height: 440px;
  }
  @media only screen and (max-width: 800px) {
    width: 450px;
    height: 450px;
    align-self: center;
  }
  @media only screen and (max-width: 600px) {
    width: 410px;
    height: 410px;
  }
  @media only screen and (max-width: 400px) {
    width: 350px;
    height: 350px;
  }
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
  @media only screen and (max-width: 600px) {
    width: 280px;
    height: 42px;
  }
  @media only screen and (max-width: 600px) {
    width: 250px;
    height: 40px;
  }
`;
const ButtonOrange = styled(CustomButton)`
  color: ${Colors.white};
  background-color: ${Colors.orange};
`;
const ProductImage = styled.img`
  height: 90px;
  width: 90px;
  @media only screen and (max-width: 1400px) {
    height: 85px;
    width: 85px;
  }
  @media only screen and (max-width: 1350px) {
    height: 80px;
    width: 80px;
  }
  @media only screen and (max-width: 1200px) {
    height: 75px;
    width: 75px;
  }
  @media only screen and (max-width: 1000px) {
    height: 72px;
    width: 72px;
  }
  @media only screen and (max-width: 800px) {
    height: 65px;
    width: 65px;
  }
  @media only screen and (max-width: 600px) {
    height: 60px;
    width: 60px;
  }
  @media only screen and (max-width: 400px) {
    height: 55px;
    width: 55px;
  }
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
  @media only screen and (max-width: 1400px) {
    height: 200px;
    width: 200px;
  }
  @media only screen and (max-width: 1350px) {
    height: 180px;
    width: 180px;
  }
  @media only screen and (max-width: 1200px) {
    height: 170px;
    width: 170px;
  }
  @media only screen and (max-width: 1000px) {
    height: 160px;
    width: 160px;
  }
  @media only screen and (max-width: 800px) {
    height: 150px;
    width: 150px;
    margin: 0px 25px;
  }
  @media only screen and (max-width: 600px) {
    height: 130px;
    width: 130px;
    margin: 0px 20px;
  }
  @media only screen and (max-width: 400px) {
    height: 100px;
    width: 100px;
    margin: 0px 10px;
  }
`;
const BubbleTitle = styled.div`
  background-color: #ffffff;
  border-radius: 50px;
  width: 1200px;
  padding: 49px 72px;
  color: #444444;
  font-weight: 700;
  font-size: 29px;
  text-align: center;
  @media only screen and (max-width: 1400px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 1350px) {
    font-size: 27px;
    width: 1100px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 24px;
    width: 950px;
    padding: 40px 60px;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 22px;
    width: 750px;
    padding: 32px 38px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 19px;
    width: 550px;
    padding: 30px 34px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    padding: 28px 28px;
    width: 90vw;
  }
`;
const PhoneIcon = styled.img`
  height: 452px;
  width: 678px;
  margin-top: 60px;
  @media only screen and (max-width: 1000px) {
    height: 400px;
    width: 600px;
    margin-top: 60px;
  }
  @media only screen and (max-width: 800px) {
    height: 350px;
    width: 500px;
    margin-top: 50px;
  }
  @media only screen and (max-width: 600px) {
    height: 300px;
    width: 420px;
    margin-top: 40px;
  }
  @media only screen and (max-width: 600px) {
    height: 250px;
    width: 320px;
    margin-top: 40px;
  }
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
  font-size: 64px;
  color: #ff8b00;
  margin-bottom: 80px;
  @media only screen and (max-width: 1400px) {
    font-size: 52px;
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 28px;
    margin-bottom: 40px;
    text-align: center;
  }
  @media only screen and (max-width: 800px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 25px;
  }
`;
const MessageImage = styled.img`
  height: 634px;
  width: 634px;
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
  width: 1200px;
  border-radius: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 62px;
  @media only screen and (max-width: 1600px) {
    width: 85vw;
  }
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
  padding-top: 75px;
  height: 750px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
const WhiteWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 100px 0px;
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
    align-items: center;
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
  width: 470px;
  @media only screen and (max-width: 1350px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 1100px) {
    width: auto;
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
  @media only screen and (max-width: 1350px) {
    width: 1050px;
    height: 450px;
  }
  @media only screen and (max-width: 1100px) {
    width: 950px;
    border-width: 23px;
    height: 420px;
  }
  @media only screen and (max-width: 1000px) {
    width: 750px;
    border-width: 21px;
    height: 400px;
  }
  @media only screen and (max-width: 800px) {
    width: 580px;
    border-width: 20px;
    height: 360px;
  }
  @media only screen and (max-width: 600px) {
    width: 450px;
    border-width: 19px;
    height: 290px;
    padding: 18px 40px;
  }
  @media only screen and (max-width: 400px) {
    width: 360px;
    border-width: 17px;
    height: 260px;
    padding: 16px 32px;
  }
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
  @media only screen and (max-width: 1400px) {
    font-size: 52px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 48px;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 26px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

const WhiteContent = styled.div`
  font-size: 25px;
  font-weight: 400px;
  color: white;
  text-align: center;
  @media only screen and (max-width: 1400px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 12px;
  }
`;
const WrapperDarkColumn = styled(WrapperDark)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper7 = styled(WhiteWrapper)`
  background-color: #f4f4f4;
  @media only screen and (max-width: 600px) {
    justify-content: space-around;
  }
`;
