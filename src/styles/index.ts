import { createGlobalStyle } from 'styled-components'
import base from './base'
import fonts from './fonts'
import colors from './colors'
import normalize from './normalize'
import typography from './typography'
import layout from './layout'

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${normalize}
    ${colors}
    ${base}
    ${typography}
    ${layout}
`

export default GlobalStyle
