import { Box, Divider, Drawer, Toolbar } from '@material-ui/core'
import React from 'react'

import { TopBar } from './TopBar'

const drawerWidth = 240

export interface ScaffoldProps {
  drawerChildren: React.ReactNode
  topBarChildren?: React.ReactNode
  children: React.ReactNode
}

export function Scaffold({
  drawerChildren,
  topBarChildren,
  children,
}: ScaffoldProps) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar>Logo here</Toolbar>
        <Divider />
        {drawerChildren}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <TopBar>{topBarChildren}</TopBar>
        {children}
      </Box>
    </Box>
  )
}
