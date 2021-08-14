import firebase from 'firebase/app'

export async function getUser() {
  const auth = firebase.auth()
  const user = auth.currentUser
  if (user) {
    return user
  }
  return await new Promise<firebase.User>((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        resolve(user)
        unsubscribe()
      } else {
        reject(new Error('User not authenticated'))
      }
    })
  })
}
