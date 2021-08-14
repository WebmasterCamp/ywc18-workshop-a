import { Avatar, Button, Skeleton, Typography } from '@material-ui/core'
import React from 'react'

import { profileRef } from '@/backend/profile'

import { useMyProfile } from './ProfileProvider'
import { useUser } from './UserProvider'

export function TopBarUserProfile() {
  const user = useUser()
  const profile = useMyProfile()

  const handleClick = () => {
    const newName = prompt('เปลี่ยนชื่อโปรไฟล์', profile?.name)
    if (newName !== null) {
      profileRef(user.uid).update({ name: newName })
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
