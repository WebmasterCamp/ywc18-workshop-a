import {
  getDatabase,
  ref,
  child,
  get,
  update,
  onValue,
} from 'firebase/database'
import { useEffect, useState } from 'react'

import { Profile } from './types'

const defaultProfile: Profile = {
  name: 'Anonymous',
}

function profilePath(uid: string) {
  return `/profiles/${uid}`
}

function profileRef(uid: string) {
  const dbRef = ref(getDatabase())
  return child(dbRef, profilePath(uid))
}

export async function createProfileIfNotExist(uid: string) {
  const profile = await get(profileRef(uid))
  if (!profile.exists()) {
    update(ref(getDatabase()), {
      [profilePath(uid)]: defaultProfile,
    })
  }
}

export function useProfile(uid: string) {
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    return onValue(profileRef(uid), (snapshot) => {
      setProfile(snapshot.val())
    })
  }, [uid])

  return profile
}
