import { createTheme, PaletteColor, PaletteColorOptions } from '@mui/material'

// declare module '@mui/material/styles' {
//   interface Palette {
//     neutral: PaletteColor
//   }

//   interface PaletteOptions {
//     neutral: PaletteColorOptions
//   }
// }

export const lightTheme = createTheme({
  typography: {
    fontFamily: 'Open Sans',
    fontWeightMedium: 600
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#7ebaeb',
      contrastText: '#fff'
    },
    secondary: {
      main: '#efefef',
      contrastText: '#151515'
    },
    text: {
      primary: '#151515'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body, #root': {
          height: '100%'
        }
      }
    }
  }
})
