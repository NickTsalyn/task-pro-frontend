import { Header } from 'components/Header/Header';
import React, {  useEffect, useState } from 'react';

import { HeaderWrapper, HomeWrapper, } from './HomePage.styled';
import { Sidebar } from 'components/Sidebar/Sidebar';
import ScreensPage from './ScreensPage';

export default function HomePage() {  

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1440);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <HomeWrapper>
      {isWideScreen && <Sidebar />}
      <HeaderWrapper>
        <Header />       
        <ScreensPage/>
      </HeaderWrapper>    
    </HomeWrapper> 
  );
}
