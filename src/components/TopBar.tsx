import { Divider, Toolbar } from '@material-ui/core'
import React, { ReactNode } from 'react'

import { FlexOne } from './FlexOne'
import { TopBarUserProfile } from './TopBarUserProfile'

export interface TopBarProps {
  children?: ReactNode
  endChildren?: ReactNode
}

export function TopBar({ children, endChildren }: TopBarProps) {
  return (
    <div>
      <Toolbar>
        {children}
        <FlexOne />
        {endChildren}
        <TopBarUserProfile />
      </Toolbar>
      <Divider />
    </div>
  )
}
