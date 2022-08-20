import { createGlobalStyle } from 'styled-components';
import { Colors } from '.';

export default createGlobalStyle`
    @font-face {
        font-family: 'DmSans';
        src: local('Font Name'), local('FontName'),
        url(${'./fonts/DMSans-Reguler.woff'}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    body {
        @import url('./fonts/DMSans-Reguler.woff');
        font-family: DmSans;
        color: ${Colors.offBlack};
        padding: 0px;
        margin: 0px;
  }
`;
