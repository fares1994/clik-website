import { Center, Container } from '@mantine/core';
import styled from 'styled-components';
import { Medium } from '../../Components/CustomFonts';

const maxWidth = 480;
export const ProfileContainer = styled(Container)`
  overflow: hidden;
  position: relative;
  min-height: 100vh;
  z-index: -3;
  max-width: ${maxWidth}px;
`;

export const UserInfo = styled(Center)`
  display: flex;
  flex-direction: column;
  width: auto;
  justify-content: flex-start;
  margin-top: 78px;
`;

const archDimensions = 650;
export const ProfileArch = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1000px;
  height: ${archDimensions}px;
  width: ${archDimensions}px;
  position: absolute;
  top: -185px;
  right: -${(archDimensions - maxWidth) / 2}px;
  left: -${(archDimensions - maxWidth) / 2}px;
  overflow: hidden;
  background-color: #f4f4f4;
  z-index: -2;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 500px) {
    right: -${(archDimensions - window.innerWidth) / 2}px;
    left: -${(archDimensions - window.innerWidth) / 2}px;
  }
`;

export const BackgroundImage = styled.div`
  background-image: url('https://pics.freeartbackgrounds.com/fullhd/Beach_Background-885.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 200px;
  width: auto;
  z-index: -1;
  position: relative;
`;

export const ProfileImageWrapper = styled(Center)`
  width: auto;
  height: 200px;
  position: relative;
  @media screen and (max-width: 500px) {
    width: auto;
  }
`;
export const UserImage = styled.img`
  height: 140px;
  width: 140px;
  border-radius: 1000px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: -70px;
`;

export const BioText = styled(Medium)`
  width: 280px;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: -3;
  margin: 35px;
  margin-top: 70px;
  justify-content: space-between;
`;
