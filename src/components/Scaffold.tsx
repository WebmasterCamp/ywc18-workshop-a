import { Box, Divider, Drawer, Toolbar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

import logo from '@/assets/images/logo.svg'

import { TopBar } from './TopBar'

const drawerWidth = 240

export interface ScaffoldProps {
  linkToHome?: boolean
  drawerChildren: React.ReactNode
  topBarChildren?: React.ReactNode
  topBarEndChildren?: React.ReactNode
  children: React.ReactNode
}

export function Scaffold({
  linkToHome,
  drawerChildren,
  topBarChildren,
  topBarEndChildren,
  children,
}: ScaffoldProps) {
  const logoImg = <img src={logo} style={{ width: 150, height: 32 }} />
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
        <Toolbar>
          {linkToHome !== false ? (
            <Link to="/app" style={{ height: 32 }}>
              {logoImg}
            </Link>
          ) : (
            logoImg
          )}
        </Toolbar>
        <Divider />
        {drawerChildren}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <TopBar endChildren={topBarEndChildren}>{topBarChildren}</TopBar>
        {children}
      </Box>
    </Box>
  )
}
