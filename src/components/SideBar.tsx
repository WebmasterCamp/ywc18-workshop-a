import styled from '@emotion/styled'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import Add from '@material-ui/icons/Add'
import Dashboard from '@material-ui/icons/Dashboard'
import Help from '@material-ui/icons/Help'
import React from 'react'
import { Link } from 'react-router-dom'

import { createBoard } from '@/backend/board'

import { AsyncButton } from './NewBoardButton'

const NewButton = styled(AsyncButton)`
  margin: 16px;
  margin-top: 24px;
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
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText>หน้าแรก</ListItemText>
        </ListItem>
        <ListItem component={Link} to="/" button>
          <ListItemIcon>
            <Help />
          </ListItemIcon>
          <ListItemText>วิธีใช้งาน</ListItemText>
        </ListItem>
      </List>
    </>
  )
}
