import { useSelector } from "react-redux";

export const violetTheme = {
    sidebarBgn: '#5255bc',
    headerBgn: '#fff',
    screensBgn: '#ecdfd',
    mainText: '#161616',
    grayText: '#rgba(22, 22, 22, 0.7)',
    accent: '#5255bc',//hoverIcon, button, inputBorder, calendarText, calendarIcon    
    hoverButton: '#7b7ede',
    plusIconStroke: '#161616',
    plusIconFill: '#fff',
    iconNeedHelp: '#fff',
    iconLogout: '#fff',
    hoverIconLogout: '#b8bcfd',
    horizontScrollBgn: '#fff',
    horizontScroll:'#b8bcfd',
    verticalScrollBgn: '#fff',
    verticalScroll:'#b8bcfd',
    btnPlusStroke: '#fff',//create a new board
    btnPlusFill: '#b8bcfd',
    hoverBtnPlusFill: '#979cea'
};

export const lightTheme = {
    sidebarBgn: '#fff',
    headerBgn: '#fcfcfc',
    screensBgn: '#f6f6f6',
    mainText: '#161616',
    grayText: '#rgba(22, 22, 22, 0.7)',
    accent: '#bedbb0',//hoverIcon, button, inputBorder, calendarText, calendarIcon    
    hoverButton: '#9dc888',
    plusIconStroke: '#fff',
    plusIconFill: '#161616',
    iconNeedHelp: '#161616',
    iconLogout: '#bedbb0',
    hoverIconLogout: '#9dc888',
    horizontScrollBgn: '#fff',
    horizontScroll:'#e8e8e8',
    verticalScrollBgn: '#e8e8e8',
    verticalScroll:'#rgba(22, 22, 22, 0.1)',
    btnPlusStroke: '#121212',//create a new board
    btnPlusFill: '#bedbb0',
    hoverBtnPlusFill: '#9dc888'
};

export const darkTheme = {
    sidebarBgn: '#121212',
    headerBgn: '#161616',
    screensBgn: '#1f1f1f',
    mainText: '#fff',
    grayText: '#rgba(225, 225, 225, 0.5)',
    accent: '#5255bc',//hoverIcon, button, inputBorder, calendarText, calendarIcon    
    hoverButton: '#9dc888',
    plusIconStroke: '#fff',
    plusIconFill: '#161616',
    iconNeedHelp: '#fff',
    iconLogout: '#bedbb0',
    hoverIconLogout: '#9dc888',
    horizontScrollBgn: '#161616',
    horizontScroll:'#rgba(22, 22, 22, 0.1)',
    verticalScrollBgn: '#fff',// додати opacity: 0.008
    verticalScroll:'#121212',
    btnPlusStroke: '#121212',//create a new board
    btnPlusFill: '#bedbb0',
    hoverBtnPlusFill: '#9dc888'
};


import { selectedThemeName } from "redux/auth/selectors";

const celectedTheme = useSelector(selectedThemeName);


export const getTheme = (celectedTheme) => {
    switch (celectedTheme) {
        case 'light':
            return lightTheme;
        case 'dark':
            return darkTheme;
        case 'violet':
            return violetTheme;
        default:
            return violetTheme;
    }
};

import styled from 'styled-components';
import { getTheme } from './themes';
const Container = styled.div`
    background-color: ${p => getTheme(p.selectedTheme).sidebarBgn};
    
`;