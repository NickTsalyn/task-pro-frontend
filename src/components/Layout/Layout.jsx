// import { Loader } from 'components/Loader/Loader';
import { Loader } from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLayout = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  /* background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    ${p => p.theme.colors.lightGreen} 92.19%
  ); */
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
