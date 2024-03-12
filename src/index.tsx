import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from 'App'
import { lightTheme } from 'themes'

import { store } from 'store'

import { CssBaseline } from '@mui/material'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <App />
        </StyledEngineProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
