import { IconButton, List, Skeleton, Typography } from '@material-ui/core'
import Create from '@material-ui/icons/Create'
import { update } from 'firebase/database'
import React from 'react'
import { useParams } from 'react-router-dom'

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
    const newName = prompt('Change board name')
    if (newName !== null) {
      update(boardRef(boardId), { name: newName })
    }
  }

  return (
    <Scaffold
      drawerChildren={
        board ? (
          <div>
            <Typography variant="h6" sx={{ pt: 2, px: 2 }}>
              Members
            </Typography>
            <List>
              {Object.keys(board.members).map((member) => (
                <MemberItem key={member} memberId={member} />
              ))}
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
