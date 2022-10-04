import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  borderRadius: '12px',
  background: "url('https://themes10.win/wp-content/uploads/2022/08/Unexpected-Land.jpg')",
  palette: {
    primary: 'rgba(17, 25, 40, 0.48)',
    secondary: '#55828B',
    font: '#DDDDDD',
    red: '#EF6F6C',
  },
  fontFamily: {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif',
  },
};

export const lightTheme: DefaultTheme = {
  borderRadius: '12px',
  background: "url('https://themes10.win/wp-content/uploads/2022/08/Unexpected-Land-Light-1.jpg')",
  palette: {
    primary: 'rgba(17, 25, 40, 0.28)',
    secondary: '#55828B',
    font: '#DDDDDD',
    red: '#EF6F6C',
  },
  fontFamily: {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif',
  },
};
