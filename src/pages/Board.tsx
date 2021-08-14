import { List, Skeleton, Typography } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router-dom'

import { useBoard } from '@/backend/board'
import { MemberItem } from '@/components/MemberItem'
import { Scaffold } from '@/components/Scaffold'

import { Pomodoro } from './Pomodoro'

export function Board() {
  const { boardId } = useParams<{ boardId: string }>()
  const board = useBoard(boardId)

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
        <Typography variant="h6">
          {board ? board.name : <Skeleton variant="text" width={150} />}
        </Typography>
      }
    >
      <Pomodoro />
    </Scaffold>
  )
}
