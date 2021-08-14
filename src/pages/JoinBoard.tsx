import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'

import { addUserToBoard, getBoard } from '@/backend/board'
import { addBoardToProfile } from '@/backend/profile'
import { useUser } from '@/components/UserProvider'

export function JoinBoard() {
  const { boardId } = useParams<{ boardId: string }>()
  const [joined, setJoined] = useState('')
  const user = useUser()
  const history = useHistory()

  useEffect(() => {
    if (joined === boardId) return
    setJoined(boardId)
    async function joinBoard() {
      const board = await getBoard(boardId)
      if (board === null) {
        history.replace('/app')
      } else {
        await addBoardToProfile(user.uid, boardId)
        await addUserToBoard(boardId, user.uid)
        history.replace(`/app/board/${boardId}`)
      }
    }
    joinBoard()
  }, [boardId, joined])

  return <>Loading...</>
}
