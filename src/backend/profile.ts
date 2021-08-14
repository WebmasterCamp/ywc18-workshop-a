import { UserProfile } from 'firebase/auth'
import { getDatabase, ref, child, get, update } from 'firebase/database'

const defaultProfile: UserProfile = {
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
