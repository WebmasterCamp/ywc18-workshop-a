import firebase from 'firebase/app'
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'

import { Loading } from './Loading'

const UserContext = createContext<firebase.User>(
  ({} as unknown) as firebase.User
)

export function UserProvider({ children }: PropsWithChildren<{}>): JSX.Element {
  const [user, setUser] = useState<firebase.User | null>(null)

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  }, [])

  if (user !== null) {
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>
  } else {
    return <Loading />
  }
}

export function useUser() {
  return useContext(UserContext)
}
