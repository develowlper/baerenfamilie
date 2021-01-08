import React from 'react';

import {
  defaultTheme,
  ThemeProvider,
  Preflight,
  createGlobalStyle,
} from '@xstyled/styled-components';

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    cool: 'hsl(300,100%,70%)',
    background: '#0e2120',
  },
  // Customize your theme here
};

const GlobalStyle = createGlobalStyle`
  #___gatsby {
    min-width: 100vw;
    min-height: 100vh;
    background: #0e2120;
    color: hsl(300,100%,70%);
    font-family: mono;
  }
`;

export default function XStyled({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
