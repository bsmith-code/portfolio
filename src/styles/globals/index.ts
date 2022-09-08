import { createGlobalStyle } from 'styled-components'
import base from 'styles/globals/base.styles'
import fonts from 'styles/globals/fonts.styles'
import colors from 'styles/globals/colors.styles'
import normalize from 'styles/globals/normalize.styles'
import typography from 'styles/globals/typography.styles'
import layout from 'styles/globals/layout.styles'

const StylesGlobal = createGlobalStyle`
  ${colors}
  ${fonts}
  ${normalize}
  ${base}
  ${typography}
  ${layout}
`

export default StylesGlobal
