import React, { useEffect } from 'react';
import styled from 'styled-components';
const testimonials = [
  {
    image:
      'https://www.vetcarepethospital.ca/wp-content/uploads/sites/247/2022/03/petrabbitcare-1-scaled.jpg',
    name: 'John Doe',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.ullamcoex ea commodo consequat.',
    position: 'CEO, ABC Company',
    location: 'New York, NY',
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/0576/1974/2872/articles/white-rabbit-running_1100x.jpg?v=1646132516',
    name: 'Jane Doe2',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    position: 'CEO, ABC Company',

    location: 'New York, NY',
  },
  {
    image:
      'https://www.vetcarepethospital.ca/wp-content/uploads/sites/247/2022/03/petrabbitcare-1-scaled.jpg',
    name: 'John Doe',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut , aliquip ex ea commodo consequat.',
    position: 'CEO, ABC Company',
    location: 'New York, NY',
  },
  {
    image:
      'https://cdn.shopify.com/s/files/1/0576/1974/2872/articles/white-rabbit-running_1100x.jpg?v=1646132516',
    name: 'John Doe',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua., aliquip ex ea commodo consequat.',
    position: 'CEO, ABC Company',
    location: 'New York, NY',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <ContentWrapper>
        {testimonials[activeIndex].quote}
        <Tail />
        <QuatationUp src="/Images/quotation_up.svg" />
        <QuatationDown src="/Images/quotation_down.svg" />
      </ContentWrapper>
      <InfoWrapper>
        <ImageWrapper>
          <Image src={testimonials[activeIndex].image} />
        </ImageWrapper>
        <Name>{testimonials[activeIndex].name}</Name>
        <Position>{testimonials[activeIndex].position}</Position>
        <Loctation>{testimonials[activeIndex].location}</Loctation>
        <PointsWrapper>
          {testimonials.map((item, index) => (
            <Point active={index === activeIndex} />
          ))}
        </PointsWrapper>
      </InfoWrapper>
    </Wrapper>
  );
};

export default Testimonials;

const PointsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 95px;
  margin-bottom: 25px;
  @media only screen and (max-width: 400px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 45px;
  }
`;
const ContentWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  height: 398px;
  width: 800px;
  position: relative;
  padding: 110px 74px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  size: 32px;
  font-weight: 400;
  color: white;
  @media only screen and (max-width: 1200px) {
    height: 300px;
    width: 690px;
    font-size: 25px;
  }
  @media only screen and (max-width: 1000px) {
    height: 250px;
    width: 550px;
    font-size: 22px;
  }
  @media only screen and (max-width: 800px) {
    height: 250px;
    width: 60vw;
    font-size: 17px;
  }
  @media only screen and (max-width: 400px) {
    height: 250px;
    width: 85vw;
    font-size: 14px;
  }
`;
const tailSize = 75;
const Tail = styled.div`
  position: absolute;
  top: 72px;
  right: ${-tailSize}px;
  width: 0;
  height: 0;
  border-top: ${tailSize / 2}px solid transparent;
  border-bottom: ${tailSize / 2}px solid transparent;
  border-left: ${tailSize}px solid rgba(255, 255, 255, 0.2);
  @media only screen and (max-width: 1200px) {
    right: ${-tailSize / 1.2}px;
    border-top: ${tailSize / 2.2}px solid transparent;
    border-bottom: ${tailSize / 2.2}px solid transparent;
    border-left: ${tailSize / 1.2}px solid rgba(255, 255, 255, 0.2);
    top: 72px;
  }
  @media only screen and (max-width: 1000px) {
    right: ${-tailSize / 1.4}px;
    border-top: ${tailSize / 2.4}px solid transparent;
    border-bottom: ${tailSize / 2.4}px solid transparent;
    border-left: ${tailSize / 1.4}px solid rgba(255, 255, 255, 0.2);
    top: 60px;
  }
  @media only screen and (max-width: 800px) {
    right: ${-tailSize / 1.6}px;
    border-top: ${tailSize / 2.6}px solid transparent;
    border-bottom: ${tailSize / 2.6}px solid transparent;
    border-left: ${tailSize / 1.6}px solid rgba(255, 255, 255, 0.2);
    top: 60px;
  }
  @media only screen and (max-width: 400px) {
    display: none;
  }
`;
const QuatationUp = styled.img`
  height: 260px;
  width: 75px;

  position: absolute;
  bottom: 200px;
  left: 50px;
  @media only screen and (max-width: 1200px) {
    height: 200px;
    width: 60px;
    bottom: 150px;
    left: 40px;
  }
  @media only screen and (max-width: 1000px) {
    height: 170px;
    width: 50px;
    bottom: 120px;
    left: 32px;
  }
  @media only screen and (max-width: 800px) {
    height: 140px;
    width: 35px;
    bottom: 140px;
    left: 28px;
  }
  @media only screen and (max-width: 400px) {
  }
`;

const QuatationDown = styled.img`
  height: 260px;
  width: 75px;
  position: absolute;
  top: 200px;
  right: 36px;
  @media only screen and (max-width: 1200px) {
    height: 200px;
    width: 50px;
    top: 150px;
    right: 40px;
  }
  @media only screen and (max-width: 1000px) {
    height: 170px;
    width: 50px;
    top: 120px;
    right: 32px;
  }
  @media only screen and (max-width: 800px) {
    height: 140px;
    width: 35px;
    top: 140px;
    right: 28px;
  }
  @media only screen and (max-width: 400px) {
  }
`;

const ImageWrapper = styled.div`
  height: 215px;
  width: 215px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10000px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1200px) {
    height: 200px;
    width: 200px;
  }
  @media only screen and (max-width: 1000px) {
    height: 170px;
    width: 170px;
  }
  @media only screen and (max-width: 800px) {
    height: 23vw;
    width: 23vw;
  }
  @media only screen and (max-width: 400px) {
    height: 32vw;
    width: 32vw;
  }
`;

const Image = styled.img`
  height: 188px;
  width: 188px;
  border-radius: 10000px;
  @media only screen and (max-width: 1200px) {
    height: 170px;
    width: 170px;
  }
  @media only screen and (max-width: 1000px) {
    height: 145px;
    width: 145px;
  }
  @media only screen and (max-width: 800px) {
    height: 20vw;
    width: 20vw;
  }
  @media only screen and (max-width: 400px) {
    height: 29vw;
    width: 29vw;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 150px;
  @media only screen and (max-width: 1200px) {
    margin-left: 110px;
  }
  @media only screen and (max-width: 1000px) {
    margin-left: 90px;
  }
  @media only screen and (max-width: 800px) {
    margin-left: 12vw;
  }
  @media only screen and (max-width: 400px) {
    margin-left: 0px;
    margin-bottom: 35px;
  }
`;
const Name = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: white;
  margin-top: 15px;
`;
const Position = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: white;
`;

const Loctation = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
`;

const Point = styled.div<{
  active: boolean;
}>`
  width: ${(props) => (props.active ? '22px' : '11px')};
  height: 11px;
  border-radius: 10000px;
  border: 2px solid white;
  margin: 0px 10px;
  background-color: ${(props) => (props.active ? 'white' : 'transparent')};

  @media only screen and (max-width: 800px) {
    width: ${(props) => (props.active ? '20px' : '10px')};

    margin: 0px 8px;
  }
  @media only screen and (max-width: 400px) {
  }
`;
