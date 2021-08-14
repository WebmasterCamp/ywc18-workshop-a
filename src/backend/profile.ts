import { getDatabase, ref, child, get, set } from 'firebase/database'
import { useMemo } from 'react'

import { Profile } from './types'
import { useObject } from './utils'

const defaultProfile: Profile = {
  name: 'Anonymous',
  boards: {},
  sharedBoards: {},
}

function profileRef(uid: string) {
  const dbRef = ref(getDatabase())
  return child(dbRef, `/profiles/${uid}`)
}

function profileBoardsRef(uid: string) {
  return child(profileRef(uid), 'boards')
}

export async function createProfileIfNotExist(uid: string) {
  const profile = await get(profileRef(uid))
  if (!profile.exists()) {
    set(profileRef(uid), defaultProfile)
  }
}

export async function addBoardToProfile(uid: string, boardId: string) {
  return await set(child(profileRef(uid), `boards/${boardId}`), true)
}

export function useProfile(uid: string) {
  return useObject<Profile>(useMemo(() => profileRef(uid), [uid]))
}
