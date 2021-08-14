import { Divider, Toolbar } from '@material-ui/core'
import React, { PropsWithChildren } from 'react'

import { FlexOne } from './FlexOne'
import { TopBarUserProfile } from './TopBarUserProfile'

export function TopBar({ children }: PropsWithChildren<{}>) {
  return (
    <div>
      <Toolbar>
        {children}
        <FlexOne />
        <TopBarUserProfile />
      </Toolbar>
      <Divider />
    </div>
  )
}
