import React from 'react';
import { Medium } from '../CustomFonts';
import { Icon, LinkIconWrapper, LinkWrapper } from './styles';
interface Props {
  icon: '';
}
export const LinkIcon = ({}: Props) => {
  return (
    <LinkWrapper>
      <LinkIconWrapper>
        <Icon src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png?20210818083032" />
      </LinkIconWrapper>
      <Medium>Facebook</Medium>
    </LinkWrapper>
  );
};
