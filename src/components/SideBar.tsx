import styled from '@emotion/styled'
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from '@material-ui/core'
import React from 'react'

import { createBoard } from '@/backend/board'

import { AsyncButton } from './NewBoardButton'

const drawerWidth = 240

const NewButton = styled(AsyncButton)`
  margin: 16px;
  width: calc(100% - 32px);
`

export function SideBar() {
  return (
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
      <NewButton
        variant="contained"
        onClick={async () => {
          await createBoard()
        }}
      >
        New Workspace
      </NewButton>
      <List>
        <ListItem button>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Tutorial</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  )
}
