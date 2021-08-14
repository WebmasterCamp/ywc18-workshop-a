import { Avatar, Button, Skeleton, Typography } from '@material-ui/core'
import { update } from 'firebase/database'
import React from 'react'

import { profileRef, useProfile } from '@/backend/profile'

import { useUser } from './UserProvider'

export function TopBarUserProfile() {
  const user = useUser()
  const profile = useProfile(user.uid)

  const handleClick = () => {
    const newName = prompt('Change profile name')
    if (newName !== null) {
      update(profileRef(user.uid), { name: newName })
    }
  }

  return (
    <Button variant="text" onClick={handleClick}>
      <Typography variant="body1" sx={{ marginRight: 2 }}>
        {profile ? profile.name : <Skeleton variant="text" width={120} />}
      </Typography>
      {profile ? (
        <Avatar>{profile.name.substring(0, 1)}</Avatar>
      ) : (
        <Skeleton variant="circular" width={40} height={40} />
      )}
    </Button>
  )
}
