import { css } from 'styled-components'

const normalize =
  // eslint-disable-next-line @typescript-eslint/no-var-requires, unicorn/prefer-module, global-require
  require('normalize-scss/sass/normalize/_import-now.scss') as string

export default css`
  ${normalize}
`
