import { css, createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
  @font-face {
    font-family: 'yantra-regular';
    src: url('/fonts/Yantramanav-Regular.ttf');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'yantra-medium';
    src: url('/fonts/Yantramanav-Medium.ttf');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'yantra-light';
    src: url('/fonts/Yantramanav-Light.ttf');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html, body {
    height: 100%;
  }

  button {
    cursor: pointer;
    border: 0;
    background: transparent;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      font-family: ${theme.font.family.regular}
    }
  `}
`;