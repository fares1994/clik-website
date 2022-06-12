import { MantineThemeOverride } from '@mantine/core';

export const Colors = {
  // Add your color
  // or replace default theme color
  white: '#FFFFFF',
  background: '#F4F4F4',
  orange: '#FF8B00',
  silver: '#B7B7B7',
  offBlack: '#444444',
};
const Theme: MantineThemeOverride = {
  // Theme is deeply merged with default theme
  colorScheme: 'light',
  colors: {
    white: ['#FFFFFF'],
    background: ['#F4F4F4'],
    orange: ['#FF8B00'],
    silver: ['#B7B7B7'],
    offBlack: ['#444444'],
  },

  shadows: {
    // other shadows (xs, sm, lg)   will be merged from default theme
    md: '1px 1px 3px rgba(0,0,0,.25)',
    xl: '5px 5px 3px rgba(0,0,0,.25)',
  },
  fontFamily: 'DM Sans',
  fontSizes: {
    xl: window.innerWidth < 500 ? 30 : 34,
    lg: window.innerWidth < 500 ? 26 : 30,
    md: window.innerWidth < 500 ? 22 : 26,
    sm: window.innerWidth < 500 ? 18 : 22,
    xs: window.innerWidth < 500 ? 14 : 18,
  },
};

export default Theme;
