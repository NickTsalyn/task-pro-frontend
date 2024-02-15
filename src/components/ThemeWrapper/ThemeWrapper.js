import { getTheme } from 'components/ThemeWrapper/themes';
import { useSelector } from 'react-redux';
import { selectedTheme } from 'redux/auth/selectors';
import { ThemeProvider } from 'styled-components';

export const ThemeWrapper = ({ children }) => {
  const themeName = useSelector(selectedTheme);
  const currentTheme = getTheme(themeName),
    theme = {
      currentTheme,

      colors: {
        //кольори для реєстрації і логіну
        white: '#fff',
        darkTextColor: '#161616',
        greyTextColor: 'rgba(255, 255, 255, 0.3)',
        greyIconColor: 'rgba(22, 22, 22, 0.5)',
        lightGreen: '#bedbb0',
        green: '#9dc888',
        darkBgn: '#151515',
        darkInputBgn: '#1f1f1f',
        shadowColor: 'rgba(22, 22, 22, 0.08)',
        colorFilterSVG: '',
      },
      priorityColors: {
        // task's priority colors
        low: '#8FA1D0', //low priority
        medium: '#E09CB5', //medium priority
        high: '#BEDBB0', // high priority=colors.lightGreen
        without: 'rgba(22, 22, 22, 0.3);', //without priority
      },
      radius: {
        s: '6px', //button +
        m: '8px',
        l: '12px', //scroll
      },
      spacing: value => `${value * 4}px`,
    };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
