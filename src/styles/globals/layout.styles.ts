import { css } from 'styled-components'

export default css`
  .container {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    height: inherit;
    z-index: 500;
    padding: 0 32px;
    @media screen and (min-width: 1364px) {
      padding: 0;
    }
  }
`
