import styled from '@emotion/styled'
import { Box, Typography } from '@material-ui/core'
import React from 'react'

import { useProfile } from '@/backend/profile'
import { BoardList } from '@/components/BoardList'
import { SideBar } from '@/components/SideBar'
import { TopBar } from '@/components/TopBar'
import { useUser } from '@/components/UserProvider'

const Layout = styled.div`
  display: flex;
`

export function Home() {
  return (
    <Layout>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <TopBar />
        <MyBoards />
      </Box>
    </Layout>
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
