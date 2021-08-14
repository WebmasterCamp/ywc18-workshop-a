import { Box, Typography } from '@material-ui/core'
import React, { useMemo } from 'react'

import { useProfile } from '@/backend/profile'
import { sortByValue } from '@/backend/utils'
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
  const rawBoards = profile?.boards
  const boards = useMemo(() => {
    if (!rawBoards) {
      return null
    } else {
      return sortByValue(rawBoards, true)
    }
  }, [rawBoards])
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">ห้องของฉัน</Typography>
      {boards !== null ? <BoardList boards={boards} /> : <p>Loading...</p>}
    </Box>
  )
}
