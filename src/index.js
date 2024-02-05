import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'App';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './fonts/poppins-v20-latin-regular.woff2';
import './fonts/poppins-v20-latin-500.woff2';
import './fonts/poppins-v20-latin-600.woff2';
import { persistor, store } from 'redux/store';

const theme = {
  colors: {
    //кольори для реєстрації і логіну
    white: '#fff',
    darkTextColor: '#161616',
    greyTextColor: 'rgba(255, 255, 255, 0.3)',
    greyIconColor: 'rgba(22, 22, 22, 0.5)',
    lightGreen: '#bedbb0',
    green:'#9dc888',
    darkBgn: '#151515',
    darkInputBgn: '#1f1f1f',
    shadowColor: 'rgba(22, 22, 22, 0.08)',
  },
  violetColors: {
    //кольори для VioletTheme
    violetFill: '#ECEDFD', //фон Screen Page
    accentColor: '#5255bc', //button
    hoverViolet: '#7b7ede', //hover button
    lightViolet: '#b8bcfd', //button +
    violet: '#979cea', //hover button +
    helpBlockColor: 'rgba(236, 237, 253, 0.4)'
  },
  priorityColors: { // task's priority colors
    low: '#8FA1D0', //low priority
    medium:'E09CB5', //medium priority
    // high:'BEDBB0', // high priority=colors.lightGreen
    without: 'rgba(22, 22, 22, 0.3)', //without priority
    },
  radius: {
    s: '6px', //button +
    m: '8px',
    l: '12px', //scroll
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="task-pro-frontend">
          <ThemeProvider theme={theme}>
            <App></App>
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
