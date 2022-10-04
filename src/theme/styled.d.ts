import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    background: string,
    palette: {
      primary: string,
      secondary: string,
      font: string,
      red: string,
    },
    fontFamily: {
      body: string,
      heading: string,
    },
  }
}
