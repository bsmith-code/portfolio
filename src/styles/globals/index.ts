import { createGlobalStyle } from 'styled-components'
import base from 'styles/globals/base.styles'
import colors from 'styles/globals/colors.styles'
import layout from 'styles/globals/layout.styles'
import typography from 'styles/globals/typography.styles'
import normalize from 'normalize-scss/sass/normalize/_import-now.scss'
import materialIcons from 'material-icons/iconfont/material-icons.scss'

const StylesGlobal = createGlobalStyle`
  ${colors}
  ${materialIcons}
  ${normalize}
  ${base}
  ${typography}
  ${layout}
`

export default StylesGlobal
