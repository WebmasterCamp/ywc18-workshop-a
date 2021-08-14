import {
  Avatar,
  ListItem,
  ListItemIcon,
  ListItemText,
  Skeleton,
} from '@material-ui/core'
import React from 'react'

import { useProfile } from '@/backend/profile'

export interface MemberItemProps {
  memberId: string
}

export function MemberItem({ memberId }: MemberItemProps) {
  const profile = useProfile(memberId)
  return (
    <ListItem button>
      <ListItemIcon>
        {profile ? (
          <Avatar sx={{ width: 28, height: 28 }}>
            {profile.name.substring(0, 1)}
          </Avatar>
        ) : (
          <Skeleton variant="circular" width={28} height={28} />
        )}
      </ListItemIcon>
      <ListItemText>
        {profile ? profile.name : <Skeleton variant="text" width={120} />}
      </ListItemText>
    </ListItem>
  )
}
