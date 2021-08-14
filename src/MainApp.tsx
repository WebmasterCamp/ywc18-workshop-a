import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { initFirebase } from './backend'
import { UserProvider } from './components/UserProvider'
import { Board } from './pages/Board'
import { Home } from './pages/Home'
import { JoinBoard } from './pages/JoinBoard'

initFirebase()

export default function MainApp() {
  return (
    <UserProvider>
      <Switch>
        <Route path="/app/" component={Home} exact />
        <Route path="/app/board/:boardId" component={Board} />
        <Route path="/app/joinboard/:boardId" component={JoinBoard} />
      </Switch>
    </UserProvider>
  )
}
