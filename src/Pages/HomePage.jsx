import { Header } from 'components/Header/Header';
import React, {  useEffect, useState } from 'react';

import {
  // ButtonText,
  HeaderWrapper,
  HomeWrapper,
  // Text,
} from './HomePage.styled';
// import { useTranslation } from 'react-i18next';
import { Sidebar } from 'components/Sidebar/Sidebar';
import ScreensPage from './ScreensPage';
// import { Loader } from 'components/Loader/Loader';

export default function HomePage() {
  // const { t } = useTranslation('global');
  // const boards = useSelector(selectAllBoards);
  // const { boardId } = useParams();

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
        {/* <Text> */}
          {/* {t('screenPage.static.message1')}
          <ButtonText>{t('screenPage.static.message2')}</ButtonText>
          {t('screenPage.static.message3')} */}
        {/* </Text> */}
        <ScreensPage/>
      </HeaderWrapper>

      {/* <Loader/>            */}
      {/* <Suspense fallback={null}>
        <Outlet />
      </Suspense> */}

      {/* <Header /> */}
      {/* {!boards.length && 
      <Text>{t('screenPage.static.message1')}
      <ButtonText>{t('screenPage.static.message2')}</ButtonText>
      {t('screenPage.static.message3')}</Text>} */}
      <ScreensPage/>
      {/* <Link to={`/home/${boardId}`}></Link> */}
       {/* <Suspense fallback={<Loader/>}><Outlet /></Suspense>     */}
    </HomeWrapper> 
  );
}
