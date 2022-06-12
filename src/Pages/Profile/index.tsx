import React from 'react';
import { useParams } from 'react-router-dom';
import { Large, LargeMedBold } from '../../Components/CustomFonts';
import { LinkIcon } from '../../Components/LinkIcon';
import { Colors } from '../../theme';

import {
  BackgroundImage,
  BioText,
  IconsContainer,
  ProfileArch,
  ProfileContainer,
  ProfileImageWrapper,
  UserImage,
  UserInfo,
} from './styles';

const Profile = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = useParams();
  const bio_static =
    'Ipsum is simply dummy text of the printinasdfasdfawd asdfasdf asdf ';
  return (
    <ProfileContainer px={0}>
      <BackgroundImage>
        <ProfileImageWrapper>
          <UserImage src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
        </ProfileImageWrapper>
      </BackgroundImage>
      <UserInfo>
        <LargeMedBold>Wajdi Alassar</LargeMedBold>
        <Large color={Colors.orange}>Web Developer</Large>
        <Large color={Colors.silver}>Amman - Jordan</Large>
        <BioText>
          {bio_static.length > 42
            ? bio_static.slice(0, 42) + '...'
            : bio_static}
        </BioText>
      </UserInfo>
      <ProfileArch />
      <IconsContainer>
        {[1, 2, 3, 1, 2, 3].map(() => (
          <LinkIcon />
        ))}
      </IconsContainer>
    </ProfileContainer>
  );
};

export default Profile;
