import { User } from 'firebase/auth'
import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react'

import { getUser } from '@/backend/user'

const UserContext = createContext<User>(({} as unknown) as User)

export function UserProvider({ children }: PropsWithChildren<{}>): JSX.Element {
  const [user, setUser] = useState<User | null>(null)
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
