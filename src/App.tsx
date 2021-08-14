import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { UserProvider } from './components/UserProvider'
import { Board } from './pages/Board'
import { Home } from './pages/Home'

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
    fontFamily: [
      'Kanit',
    ].join(','),
  },
});

function App() {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/board/:boardId" component={Board} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </UserProvider>
  )
}

export default App
