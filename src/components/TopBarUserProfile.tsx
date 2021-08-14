import { Avatar, Skeleton, Typography } from '@material-ui/core'
import React from 'react'

import { useProfile } from '@/backend/profile'

import { useUser } from './UserProvider'

export function TopBarUserProfile() {
  const user = useUser()
  const profile = useProfile(user.uid)
  return (
    <>
      <Typography sx={{ marginRight: 2 }}>
        {profile ? profile.name : <Skeleton variant="text" width={120} />}
      </Typography>
      {profile ? (
        <Avatar>{profile.name.substring(0, 1)}</Avatar>
      ) : (
        <Skeleton variant="circular" width={40} height={40} />
      )}
    </>
  )
}
