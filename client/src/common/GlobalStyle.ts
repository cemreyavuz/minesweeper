import { createGlobalStyle } from 'styled-components';

import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';

export const StyledGlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    font-family: 'Rubik', sans-serif;
  }
`;