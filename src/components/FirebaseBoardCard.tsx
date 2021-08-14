import React from 'react'

import { useBoard } from '@/backend/board'
import { addBoardToProfile } from '@/backend/profile'

import { BoardCard, boardTypePomodoro } from './BoardCard'
import { useUser } from './UserProvider'

interface FirebaseBoardCardProps {
  boardId: string
}

export function FirebaseBoardCard({ boardId }: FirebaseBoardCardProps) {
  const user = useUser()
  const board = useBoard(boardId)

  const handleClick = () => {
    addBoardToProfile(user.uid, boardId)
  }

  return (
    <BoardCard
      to={board ? `/app/board/${boardId}` : undefined}
      title={board?.name ?? ''}
      type={boardTypePomodoro}
      loading={!!board}
      onClick={handleClick}
    />
  )
}
