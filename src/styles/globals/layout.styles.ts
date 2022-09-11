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

  .content {
    &__wrapper {
      position: relative;
      padding: 48px 0;
      @media screen and (min-width: 767px) {
        padding: 80px 0;
      }
    }
  }
`
