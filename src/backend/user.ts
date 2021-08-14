import { getAuth, onAuthStateChanged, User } from 'firebase/auth'

export async function getUser() {
  const auth = getAuth()
  const user = auth.currentUser
  if (user) {
    return user
  }
  return await new Promise<User>((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user)
      } else {
        reject(new Error('User not authenticated'))
      }
    })
  })
}
