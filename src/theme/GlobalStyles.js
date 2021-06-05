import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import fontFaces from "./fonts/styles";
import colors from "./colors";

const GlobalStyles = createGlobalStyle`
  ${normalize}

  ${fontFaces}
  
  :root {
    ${colors}
    --font-primary: "Nunito Sans", sans-serif;
    --layout-width: 1100px;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--font-primary);
    ${({ theme }) => theme.typography.body};
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-primary);
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  h1 {
    font-size: 60px;
    font-weight: 700;
    line-height: 72px;
  }

  h2 {
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
  }

  h3 {
    font-size: 34px;
    font-weight: 800;
    line-height: 40px;
  }

  h4 {
    font-size: 24px;
    font-weight: 800;
    line-height: 32px;
  }

  h5 {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }
`;

export default GlobalStyles;
