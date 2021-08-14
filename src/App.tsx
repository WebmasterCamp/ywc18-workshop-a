import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Landing } from './pages/Landing'

const MainApp = lazy(() => import('./MainApp'))

const theme = createTheme({
  palette: {
    primary: {
      main: '#3C41E7',
    },
    secondary: {
      main: '#F6CF4A',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'unset',
        },
      },
    },
  },
  typography: {
    fontFamily: ['Kanit'].join(','),
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/app">
            <Suspense fallback="Loading...">
              <MainApp />
            </Suspense>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
