import styled from '@emotion/styled'
import { List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'

import { createBoard } from '@/backend/board'

import { AsyncButton } from './NewBoardButton'

const NewButton = styled(AsyncButton)`
  margin: 16px;
  width: calc(100% - 32px);
`

export function SideBar() {
  return (
    <>
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
    </>
  )
}
