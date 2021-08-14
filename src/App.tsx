import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home'
import { Pomodoro } from './pages/Pomodoro'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <Switch>
        <Route path="/pomodoro" component={Pomodoro} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
