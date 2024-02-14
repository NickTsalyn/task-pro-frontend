// import { store } from "redux/store";

export const violetTheme = {
  sidebarBgn: '#5255bc',
  headerBgn: '#fff',
  screensBgn: '#ecdfd',
  mainText: '#161616',
  grayText: 'rgba(22, 22, 22, 0.5)',
  accent: '#5255bc', //hoverIcon, button, inputBorder, calendarText, calendarIcon
  hoverButton: '#7b7ede',
  plusIconStroke: '#161616',
  plusIconFill: '#fff',
  iconNeedHelp: '#fff',
  iconLogout: '#fff',
  hoverIconLogout: '#b8bcfd',
  horizontScrollBgn: '#fff',
  horizontScroll: '#b8bcfd',
  verticalScrollBgn: '#fff',
  verticalScroll: '#b8bcfd',
  btnPlusStroke: '#fff', //create a new board
  btnPlusFill: '#b8bcfd',
  hoverBtnPlusFill: '#979cea',
};

export const lightTheme = {
  sidebarBgn: '#fff',
  headerBgn: '#fcfcfc',
  screensBgn: '#f6f6f6',
  mainText: '#161616',
  grayText: 'rgba(22, 22, 22, 0.5)',
  accent: '#bedbb0', //hoverIcon, button, inputBorder, calendarText, calendarIcon
  hoverButton: '#9dc888',
  plusIconStroke: '#fff',
  plusIconFill: '#161616',
  iconNeedHelp: '#161616',
  iconLogout: '#bedbb0',
  hoverIconLogout: '#9dc888',
  horizontScrollBgn: '#fff',
  horizontScroll: '#e8e8e8',
  verticalScrollBgn: '#e8e8e8',
  verticalScroll: '#rgba(22, 22, 22, 0.1)',
  btnPlusStroke: '#121212', //create a new board
  btnPlusFill: '#bedbb0',
  hoverBtnPlusFill: '#9dc888',
};

export const darkTheme = {
  sidebarBgn: '#121212',
  headerBgn: '#161616',
  screensBgn: '#1f1f1f',
  mainText: '#ffffff',
  grayText: 'rgba(22, 22, 22, 0.5)',
  accent: '#bedbb0', //hoverIcon, button, inputBorder, calendarText, calendarIcon
  hoverButton: '#9dc888',
  plusIconStroke: '#fff',
  plusIconFill: '#161616',
  iconNeedHelp: '#fff',
  iconLogout: '#bedbb0',
  hoverIconLogout: '#9dc888',
  horizontScrollBgn: '#161616',
  horizontScroll: '#rgba(225, 225, 225, 0.1)',
  verticalScrollBgn: '#fff', // додати opacity: 0.008
  verticalScroll: '#121212',
  btnPlusStroke: '#121212', //create a new board
  btnPlusFill: '#bedbb0',
  hoverBtnPlusFill: '#9dc888',
};

// const theme = store.getState().selectedTheme;
// console.log(selectedTheme);
// const themeName = getTheme(selectedTheme);

export const getTheme = (themeName) => {
  switch (themeName) {
    case 'violet':
      return violetTheme;
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    default:
      return violetTheme;
  }
};

//ПРИКЛАД ВИКОРИСТАННЯ В СТИЛІЗАЦІЇ КОМПОНЕНТІВ

// import styled from 'styled-components';
// import { getTheme } from './themes';
// const Container = styled.div`
//     background-color: ${p => getTheme(p.theme.selectedTheme).sidebarBgn};
// radius: ${p => p.theme.radius.m};

// `;

//ЛОГІКА ЗМІНИ ТЕМИ ДОДАТИ В Header Home Page

// const dispatch = useDispatch();
//   const currentTheme = useSelector(selectThemeName);

//   const handleThemeChange = (e) => {
//     const selectedTheme = e.target.value;
//      dispatch(changeTheme(selectedTheme));
//   };

// return (
//     <div>
//       <select value={currentTheme} onChange={handleThemeChange}>
//         <option value="light">Light Theme</option>
//         <option value="dark">Dark Theme</option>
//         <option value="green">Blue Theme</option>
//         <option value="violet">Violet Theme</option>
//       </select>
//     </div>
//   );
