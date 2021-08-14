import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { UserProvider } from './components/UserProvider'
import { Home } from './pages/Home'
import { Pomodoro } from './pages/Pomodoro'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3C41E7',
    },
    secondary: {
      main: '#F6CF4A',
    },
  },
});

function App() {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/pomodoro" component={Pomodoro} />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </UserProvider>
  )
}

export default App
