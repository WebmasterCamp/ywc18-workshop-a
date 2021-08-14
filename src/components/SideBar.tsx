import styled from '@emotion/styled'
import { List, ListItem, ListItemText } from '@material-ui/core'
import Add from '@material-ui/icons/Add'
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
        startIcon={<Add />}
      >
        สร้างห้องทำงาน
      </NewButton>
      <List>
        <ListItem button>
          <ListItemText>หน้าแรก</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>วิธีใช้งาน</ListItemText>
        </ListItem>
      </List>
    </>
  )
}
