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
  members: Record<string, number>
  state: BoardState
}

export function boardRef(boardId: string) {
  return firebase.database().ref(`boards/${boardId}`)
}

export async function createBoard() {
  const user = await getUser()
  const board = {
    name: 'ห้องทำงานใหม่',
    owner: user.uid,
    members: {
      [user.uid]: true,
    },
    state: emptyBoardState,
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

export async function getBoard(boardId: string) {
  return (await boardRef(boardId).get()).val()
}

export async function addUserToBoard(boardId: string, uid: string) {
  return await boardRef(boardId)
    .child(`members/${uid}`)
    .set(firebase.database.ServerValue.TIMESTAMP)
}
