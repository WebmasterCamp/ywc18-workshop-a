import firebase from 'firebase/app'
import { useCallback, useMemo } from 'react'

import { addBoardToProfile } from './profile'
import { getUser } from './user'
import { useObject } from './utils'

export interface BoardState {}

const emptyBoardState: BoardState = {}

export interface Board {
  name: string
  owner: string
  members: Record<string, boolean>
  state: BoardState
}

export function boardRef(boardId: string) {
  return firebase.database().ref(`boards/${boardId}`)
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
  const newRef = firebase.database().ref('boards').push()
  await newRef.set(board)
  const boardId = newRef.key as string
  await addBoardToProfile(user.uid, boardId)
  return boardId
}

export function useBoard(boardId: string) {
  return useObject<Board>(useMemo(() => boardRef(boardId), [boardId]))
}

export function useBoardName(boardId: string) {
  return useObject<Board['name']>(
    useMemo(() => boardRef(boardId).child('name'), [boardId])
  )
}

export function useBoardState(boardId: string) {
  const value = useObject<Board['state']>(
    useMemo(() => boardRef(boardId).child('state'), [boardId])
  )
  const setValue = useCallback(
    async (newState: Board['state']) => {
      await boardRef(boardId).child('state').set(newState)
    },
    [boardId]
  )
  return [value, setValue] as const
}
