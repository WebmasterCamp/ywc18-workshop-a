import React, { createContext, PropsWithChildren, useContext } from 'react'

import { useProfile } from '@/backend/profile'
import { Profile } from '@/backend/types'

import { useUser } from './UserProvider'

const ProfileContext = createContext<Profile | null>(null)

export function ProfileProvider({
  children,
}: PropsWithChildren<{}>): JSX.Element {
  const user = useUser()
  const profile = useProfile(user.uid)

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  )
}

export function useMyProfile() {
  return useContext(ProfileContext)
}
