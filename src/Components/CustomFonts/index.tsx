import React from 'react';
import { SharedTextProps, Text } from '@mantine/core';

type Props = {
  children: React.ReactNode;
} & SharedTextProps;

export const XLargeTitle = ({ children, ...props }: Props) => {
  return (
    <Text weight={400} size={'xl'} align="center" {...props} color="offBlack">
      {children}
    </Text>
  );
};

export const TitleOne = ({ children, ...props }: Props) => {
  return (
    <Text
      weight={500}
      size={'lg'}
      align="center"
      {...props}
      color="offBlack"
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ lineHeight: '32px' }}
    >
      {children}
    </Text>
  );
};

export const LargeBold = ({ children, ...props }: Props) => {
  return (
    <Text
      weight={700}
      size={'md'}
      align="center"
      {...props}
      color="#444444"
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ lineHeight: '32px' }}
    >
      {children}
    </Text>
  );
};

export const LargeMedBold = ({ children, ...props }: Props) => {
  return (
    <Text
      weight={500}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ lineHeight: '32px' }}
      size={'md'}
      align="center"
      {...props}
      color="#444444"
    >
      {children}
    </Text>
  );
};

export const Large = ({ children, ...props }: Props) => {
  return (
    <Text
      weight={400}
      size={'md'}
      align="center"
      {...props}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ lineHeight: '32px' }}
    >
      {children}
    </Text>
  );
};

export const MediumBold = ({ children, ...props }: Props) => {
  return (
    <Text
      weight={700}
      size={'sm'}
      align="center"
      {...props}
      color="#444444"
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ lineHeight: '30px' }}
    >
      {children}
    </Text>
  );
};

export const Medium = ({ children, ...props }: Props) => {
  return (
    <Text
      weight={400}
      size={'sm'}
      align="center"
      {...props}
      color="#444444"
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ lineHeight: '30px' }}
    >
      {children}
    </Text>
  );
};

export const SmallBold = ({ children, ...props }: Props) => {
  return (
    <Text
      weight={700}
      size={'xs'}
      align="center"
      {...props}
      color="#444444"
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ lineHeight: '28px' }}
    >
      {children}
    </Text>
  );
};

export const Small = ({ children, ...props }: Props) => {
  return (
    <Text
      weight={400}
      size={'xs'}
      align="center"
      {...props}
      color="#444444"
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ lineHeight: '28px' }}
    >
      {children}
    </Text>
  );
};
