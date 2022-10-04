import React from 'react';
import styled from 'styled-components';

const Home = () => {
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
        <LeftSection>
          <MessageImage src="Images/Message.svg" />
        </LeftSection>
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
    </HomePageContainer>
  );
};

export default Home;

const WhatCanUseText = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
`;
const WhatCanUseClik = styled.div`
  font-weight: 600;
  font-size: 60px;
  color: #ff8b00;
  margin-bottom: 80px;
`;
const MessageImage = styled.img`
  height: 834px;
  width: 815px;
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
  height: 490px;
  width: 1200px;
  border-radius: 50px;
  margin: 40px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 10px 30px;
`;

const WhiteTitle = styled.div`
  font-size: 60px;
  font-weight: 600px;
  color: white;
  text-align: center;
`;

const WhiteContent = styled.div`
  font-size: 25px;
  font-weight: 400px;
  color: white;
  text-align: center;
`;
