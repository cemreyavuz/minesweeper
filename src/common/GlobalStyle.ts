import { createGlobalStyle } from 'styled-components';

import '@blueprintjs/core/lib/css/blueprint.css';

export const StyledGlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
  }
`;