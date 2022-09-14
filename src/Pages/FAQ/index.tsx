/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components';
import { Column, Row } from '../../Components/ProductDetailsComponent';
import SubNavigationBar from '../../Components/SubNavigationBar';
import SubTitle from '../../Components/SubTitle';
import CustomButton from '../../Components/CustomButton';
import FAQComponent from '../../Components/FAQComponent';
import useWindowSize from '../../Helpers/WindowSizeHook';
import content from './content';

const FAQ = () => {
  const size = useWindowSize();

  return (
    <div>
      <SubTitle title="My Cart" />
      <SubNavigationBar currentPosition="faq" />
      <FQAColumn>
        <UpperWrapper>
          <LeftSec>
            <Row>
              <PointNumber>
                <Number>1</Number>
              </PointNumber>
              <Point>Watch the Video first</Point>
            </Row>
            <Row>
              <PointNumber>
                <Number>2</Number>
              </PointNumber>
              <Point>Read FAQs clearly</Point>
            </Row>
            <Row>
              <PointNumber>
                <Number>3</Number>
              </PointNumber>
              <Point>You can buy Clik now :)</Point>
            </Row>
            <CustomButton
              color="orange"
              size={(size?.width || 0) > 1000 ? 'xl' : 'lg'}
              title="Get Clik Now"
              marginTop={(size?.width || 0) > 1000 ? 45 : 25}
              style={{ alignSelf: 'center' }}
            />
          </LeftSec>
          <VideoSection>Video here</VideoSection>
        </UpperWrapper>
        {content?.map((com) => (
          <FAQComponent title={com.title} content={com.content} />
        ))}
      </FQAColumn>
    </div>
  );
};

export default FAQ;
const FQAColumn = styled(Column)`
  margin-bottom: 100apx;
`;
const UpperWrapper = styled(Row)`
  width: 1100px;
  justify-content: space-between;
  margin-bottom: 50px;
  @media only screen and (max-width: 1200px) {
    width: 900px;
  }
  @media only screen and (max-width: 1000px) {
    width: 800px;
  }
  @media only screen and (max-width: 800px) {
    width: 650px;
    justify-content: center;
  }
`;
const LeftSec = styled(Column)`
  align-items: flex-start;
`;
const Point = styled.div`
  font-weight: 400;
  font-size: 26px;
  color: #444444;
  @media only screen and (max-width: 1000px) {
    size: 20px;
  }
`;
const Number = styled.div`
  font-weight: 700;
  size: 24px;
  color: #ff8b00;
  @media only screen and (max-width: 1000px) {
    font-size: 21px;
  }
`;
const PointNumber = styled.div`
  background-image: url('Images/point_circle.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 55px;
  margin-right: 35px;
  @media only screen and (max-width: 1000px) {
    margin-right: 25px;
    height: 50px;
    width: 50px;
  }
`;

const VideoSection = styled.div`
  height: 390px;
  width: 500px;
  border-radius: 25px;
  background-color: #f4f4f4;
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1200px) {
    width: 350px;
    height: 320px;
  }
  @media only screen and (max-width: 800px) {
    margin-top: 70px;
    margin-left: 0px;
  }
`;
