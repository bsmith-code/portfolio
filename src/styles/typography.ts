import { css } from 'styled-components'

export default css`
  body {
    color: var(--charcoal);
    font-family: 'Open Sans', sans-serif;
    font-feature-settings: 'kern', 'liga', 'pnum';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1;
    margin: 0;
    font-weight: 500;
    color: var(--charcoal);
  }

  p {
    margin: 0 0 1.5em;
  }

  a {
    text-decoration: none;
    position: relative;
    transition: all 0.2s ease;
  }

  blockquote {
    margin: 0;
    padding: 0;
  }
`
