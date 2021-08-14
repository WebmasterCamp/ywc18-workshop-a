import firebase from 'firebase/app'
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'

import { getUser } from '@/backend/user'

const UserContext = createContext<firebase.User>(
  ({} as unknown) as firebase.User
)

export function UserProvider({ children }: PropsWithChildren<{}>): JSX.Element {
  const [user, setUser] = useState<firebase.User | null>(null)
  const [errored, setErrored] = useState(false)

  useEffect(() => {
    getUser().then(
      (user) => {
        setUser(user)
      },
      () => {
        setErrored(true)
      }
    )
  }, [])

  if (errored) {
    return <>Sign in error</>
  } else if (user !== null) {
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>
  } else {
    return <>Loading...</>
  }
}

export function useUser() {
  return useContext(UserContext)
}
