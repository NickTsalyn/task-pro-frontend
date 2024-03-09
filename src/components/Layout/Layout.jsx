import { Loader } from 'components/Loader/Loader';
import { Toaster } from 'react-hot-toast';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLayout = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  max-width: 320px;
  width: 100%;

  @media (min-width: 375px) {
    max-width: 375px;
  }

  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const Layout = () => {
  return (
    <StyledLayout>
      <Suspense fallback={<Loader />}>
        <Outlet />
        <Toaster />
      </Suspense>
    </StyledLayout>
  );
};
