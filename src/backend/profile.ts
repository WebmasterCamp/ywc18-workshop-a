import firebase from 'firebase/app'
import { useMemo } from 'react'

import { Profile } from './types'
import { useObject } from './utils'

const defaultProfile: Profile = {
  name: 'Anonymous',
  boards: {},
}

export function profileRef(uid: string) {
  return firebase.database().ref(`/profiles/${uid}`)
}

export async function createProfileIfNotExist(uid: string) {
  const ref = profileRef(uid)
  const profile = await ref.get()
  if (!profile.exists()) {
    await ref.set(defaultProfile)
  }
}

export async function addBoardToProfile(uid: string, boardId: string) {
  return await profileRef(uid)
    .child(`boards/${boardId}`)
    .set(firebase.database.ServerValue.TIMESTAMP)
}

export function useProfile(uid: string) {
  return useObject<Profile>(useMemo(() => profileRef(uid), [uid]))
}
