import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomePageContainer>
      <RowWrapper />
    </HomePageContainer>
  );
};

export default Home;
const HomePageContainer = styled.div``;
const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// const ColumnSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
// `;

// const WhatsClikImage = styled.div``;
