import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { UserProvider } from './components/UserProvider'
import { Home } from './pages/Home'
import { Pomodoro } from './pages/Pomodoro'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/pomodoro" component={Pomodoro} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
