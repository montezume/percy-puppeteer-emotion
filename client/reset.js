import { css } from '@emotion/core';
import vars from './theme';

const reset = () => css`
  body {
    background: ${vars.light};
    font-size: ${vars.baseFontSize};
    color: ${vars.dark};
    font-family: ${vars.baseFont};
  }
  body,
  html {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${vars.headingFont};
  }
`;

export default reset;
