import { getDatabase, ref, push, set } from 'firebase/database'

import { addBoardToProfile } from './profile'
import { getUser } from './user'

export interface Board {
  name: string
  owner: string
  members: string[]
}

export async function createBoard() {
  const user = await getUser()
  const board = {
    name: 'Untitiled workspace',
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
