import { createGlobalStyle } from 'styled-components'
import base from './base'
import fonts from './fonts'
import colors from './colors'
import normalize from './normalize'
import typography from './typography'

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${normalize}
    ${colors}
    ${base}
    ${typography}
`

export default GlobalStyle
