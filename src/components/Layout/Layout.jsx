// import { Loader } from 'components/Loader/Loader';
import { Loader } from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLayout = styled.div`
  min-height: 100vh;
  margin: 0 ;  
`;

export const Layout = () => {
  return (
    <StyledLayout>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </StyledLayout>
  );
};
