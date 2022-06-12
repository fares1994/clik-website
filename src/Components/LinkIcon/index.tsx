import React from 'react';
import { VIEW_UPLOAD_URI } from '../../configs';
import { CustomLink, MyLink } from '../../Redux/types';
import { Medium } from '../CustomFonts';
import { Icon, LinkIconWrapper, LinkWrapper } from './styles';
interface Props {
  link?: MyLink;
  customLink?: CustomLink;
}
export const LinkIcon = ({ link, customLink }: Props) => {
  let src,
    title,
    value = '';
  if (link) {
    src = link?.globalLink?.image;
    title = link?.globalLink?.title;
    value = link?.value;
  } else if (customLink) {
    src = customLink?.image?._id;
    title = customLink?.title;
    value = customLink?.value;
  }
  const handleClick = () => {
    window.open('https://' + value?.replace('https://', ''), '_blank');
  };
  return (
    <LinkWrapper onClick={handleClick}>
      <LinkIconWrapper>
        <Icon src={VIEW_UPLOAD_URI + src} />
      </LinkIconWrapper>
      <Medium>{title}</Medium>
    </LinkWrapper>
  );
};
