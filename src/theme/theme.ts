import { DefaultTheme } from 'styled-components';
import backgroundLight from '../assets/images/background-light.jpg';
import backgroundDark from '../assets/images/background-dark.jpg';

export const darkTheme: DefaultTheme = {
  borderRadius: '12px',
  background: `url(${backgroundDark})`,
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
  background: `url(${backgroundLight})`,
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
