import { getDatabase, ref, push, set, child } from 'firebase/database'
import { useMemo } from 'react'

import { addBoardToProfile } from './profile'
import { getUser } from './user'
import { useObject } from './utils'

export interface Board {
  name: string
  owner: string
  members: string[]
}

function boardRef(boardId: string) {
  const dbRef = ref(getDatabase())
  return child(dbRef, `/boards/${boardId}`)
}

export async function createBoard() {
  const user = await getUser()
  const board = {
    name: 'Untitled workspace',
    owner: user.uid,
    members: {
      [user.uid]: true,
    },
  }
  const newRef = push(ref(getDatabase(), 'boards'))
  await set(newRef, board)
  const boardId = newRef.key as string
  await addBoardToProfile(user.uid, boardId)
  return boardId
}

export function useBoard(boardId: string) {
  return useObject<Board>(useMemo(() => boardRef(boardId), [boardId]))
}
