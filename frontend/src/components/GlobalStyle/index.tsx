import { ITheme } from 'common/types';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle<ITheme>`
  * {
    box-sizing: border-box;
  }
  body,
  #root {
    height: 100vh;
    width: 100vw;
    background-color: ${(p) => p.globalBackground};

    transition: background-color 0.2s linear;

    & h1,h2,h3,h4,h5 {
      margin: 0;
      padding: 0;
    }
  }
`;
