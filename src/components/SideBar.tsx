import styled from '@emotion/styled'
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import React from 'react'

const NewButton = styled(Button)`
  margin: 16px;
  width: calc(100% - 32px);
`

export function SideBar() {
  return (
    <Drawer variant="permanent" anchor="left">
      <div style={{ width: 240 }}>
        Logo here
        <Divider />
        <NewButton variant="contained">New Document</NewButton>
        <List>
          <ListItem button>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>Tutorial</ListItemText>
          </ListItem>
        </List>
      </div>
    </Drawer>
  )
}
