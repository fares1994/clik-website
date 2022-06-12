import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Large, LargeMedBold } from '../../Components/CustomFonts';
import { LinkIcon } from '../../Components/LinkIcon';
import { REST_URI } from '../../configs';
import { useAxiosGet } from '../../Redux/helpers';
import { UserReturn } from '../../Redux/types';
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
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, loaded } = useAxiosGet<UserReturn>({
    url: REST_URI + `/users/user/${id}`,
  });
  useEffect(() => {
    if ((loaded && !data) || error) {
      navigate('/');
    }
  }, [loaded, data, navigate, error]);

  return (
    <ProfileContainer px={0}>
      <BackgroundImage>
        <ProfileImageWrapper>
          <UserImage src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
        </ProfileImageWrapper>
      </BackgroundImage>
      <UserInfo>
        <LargeMedBold>{data?.name}</LargeMedBold>
        <Large color={Colors.orange}>{data?.title?.title}</Large>
        <Large color={Colors.silver}>{data?.city + '-' + data?.country}</Large>
        <BioText>
          {data?.personalBio && data?.personalBio?.length > 42
            ? data?.personalBio?.slice(0, 42) + '...'
            : data?.personalBio}
        </BioText>
      </UserInfo>
      <ProfileArch />
      <IconsContainer>
        {data?.myLinks?.map((link) => (
          <LinkIcon link={link} />
        ))}
        {data?.customLinks?.map((customLink) => (
          <LinkIcon customLink={customLink} />
        ))}
      </IconsContainer>
    </ProfileContainer>
  );
};

export default Profile;
