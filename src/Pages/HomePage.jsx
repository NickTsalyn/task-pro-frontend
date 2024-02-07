import { Header } from 'components/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import {  Text, TextA } from './HomePage.styled';
// import { Loader } from 'components/Loader/Loader';

const HomeWrapper = styled.div`
  min-height: 100vh;
  margin: 0 auto;
`;

export default function HomePage() {
  return (
    <HomeWrapper>
      <Header />
      <Text>Before starting your project, it is essential <TextA>to create a board</TextA> to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members.</Text>
      {/* <Loader/>            */}
      <Suspense fallback={null}>
          <Outlet />
        </Suspense>    
    </HomeWrapper>
  );
}
