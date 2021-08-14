import { Avatar, Typography } from '@material-ui/core'
import React from 'react'

import { useProfile } from '@/backend/profile'

import { useUser } from './UserProvider'

export function TopBarUserProfile() {
  const user = useUser()
  const profile = useProfile(user.uid)
  if (profile !== null) {
    return (
      <>
        <Typography sx={{ marginRight: 2 }}>{profile.name}</Typography>
        <Avatar>{profile.name.substring(0, 1)}</Avatar>
      </>
    )
  } else {
    return null
  }
}
