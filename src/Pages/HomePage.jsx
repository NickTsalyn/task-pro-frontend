import { Header } from 'components/Header/Header';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { HeaderWrapper, HomeWrapper, } from './HomePage.styled';
import { Sidebar } from 'components/Sidebar/Sidebar';
import ScreensPage from './ScreensPage';

export default function HomePage() {  

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1440);
  const { t, i18n } = useTranslation('global');

  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
 }, [i18n, i18n.language]);
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
