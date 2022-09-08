import { css } from 'styled-components'

const materialIcons =
  // eslint-disable-next-line @typescript-eslint/no-var-requires, unicorn/prefer-module, global-require
  require('material-icons/iconfont/material-icons.scss') as string

export default css`
  ${materialIcons}
`
