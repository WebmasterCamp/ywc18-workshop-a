import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Typography,
} from '@material-ui/core'
import Add from '@material-ui/icons/Add'
import Check from '@material-ui/icons/Check'
import Create from '@material-ui/icons/Create'
import React from 'react'
import { useParams } from 'react-router-dom'
import useCopyClipboard from 'react-use-clipboard'

import { boardRef, useBoard } from '@/backend/board'
import { MemberItem } from '@/components/MemberItem'
import { Scaffold } from '@/components/Scaffold'
import { useUser } from '@/components/UserProvider'

import { Pomodoro } from './Pomodoro'

export function Board() {
  const { boardId } = useParams<{ boardId: string }>()
  const board = useBoard(boardId)
  const user = useUser()

  const renameBoard = () => {
    const newName = prompt('เปลี่ยนชื่อห้องทำงาน', board?.name)
    if (newName !== null) {
      boardRef(boardId).update({ name: newName })
    }
  }

  return (
    <Scaffold
      drawerChildren={
        board ? (
          <div>
            <Typography variant="h6" sx={{ pt: 2, px: 2 }}>
              สมาชิก
            </Typography>
            <List>
              {Object.keys(board.members).map((member) => (
                <MemberItem key={member} memberId={member} />
              ))}
              <InviteButton boardId={boardId} />
            </List>
          </div>
        ) : null
      }
      topBarChildren={
        <>
          <Typography variant="h6" sx={{ mr: 1 }}>
            {board ? board.name : <Skeleton variant="text" width={150} />}
          </Typography>
          {board?.owner === user.uid ? (
            <IconButton size="small" onClick={renameBoard}>
              <Create fontSize="small" />
            </IconButton>
          ) : null}
        </>
      }
    >
      <Pomodoro />
    </Scaffold>
  )
}

function InviteButton({ boardId }: { boardId: string }) {
  const [
    isCopied,
    setCopied,
  ] = useCopyClipboard(`${window.location.origin}/joinboard/${boardId}`, {
    successDuration: 1000,
  })
  return (
    <ListItem button onClick={setCopied}>
      <ListItemIcon>{isCopied ? <Check /> : <Add />}</ListItemIcon>
      <ListItemText>
        {isCopied ? 'คัดลอกลิงก์แล้ว' : 'ชวนสมาชิกเพิ่ม'}
      </ListItemText>
    </ListItem>
  )
}
