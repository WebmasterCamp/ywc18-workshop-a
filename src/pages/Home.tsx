import styled from '@emotion/styled'
import { Box, Typography } from '@material-ui/core'
import React from 'react'

import { useProfile } from '@/backend/profile'
import { BoardList } from '@/components/BoardList'
import { Scaffold } from '@/components/Scaffold'
import { SideBar } from '@/components/SideBar'
import { useUser } from '@/components/UserProvider'

export function Home() {
  return (
    <Scaffold drawerChildren={<SideBar />}>
      <MyBoards />
    </Scaffold>
  )
}

function MyBoards() {
  const profile = useProfile(useUser().uid)
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">My workspaces</Typography>
      {profile ? (
        <BoardList boards={Object.keys(profile.boards ?? {})} />
      ) : (
        <p>Loading...</p>
      )}
    </Box>
  )
}
