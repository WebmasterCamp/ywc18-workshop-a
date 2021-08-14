import { Divider, Toolbar } from '@material-ui/core'
import React from 'react'

import { FlexOne } from './FlexOne'
import { TopBarUserProfile } from './TopBarUserProfile'

export function TopBar() {
  return (
    <div>
      <Toolbar>
        <FlexOne />
        <TopBarUserProfile />
      </Toolbar>
      <Divider />
    </div>
  )
}
