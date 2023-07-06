// Common
import { createGlobalStyle } from 'styled-components'
import normalize from '@biere/normalize-scss/sass/normalize/_import-now.scss?inline'
import materialIcons from 'material-icons/iconfont/material-icons.scss?inline'

// Global Styles
import base from 'styles/globals/base.styles'
import forms from 'styles/globals/forms.styles'
import colors from 'styles/globals/colors.styles'
import layout from 'styles/globals/layout.styles'
import typography from 'styles/globals/typography.styles'

const StylesGlobal = createGlobalStyle`
  ${colors}
  ${materialIcons}
  ${normalize}
  ${base}
  ${typography}
  ${layout}
  ${forms}
`

export default StylesGlobal