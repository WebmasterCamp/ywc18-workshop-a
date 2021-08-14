import { Box, Typography } from '@material-ui/core'
import React, { useMemo } from 'react'
import { useHistory } from 'react-router-dom'

import { createBoard } from '@/backend/board'
import { useProfile } from '@/backend/profile'
import { sortByValue } from '@/backend/utils'
import {
  BoardCard,
  boardTypeBlank,
  boardTypePomodoro,
  boardTypeStickies,
} from '@/components/BoardCard'
import { BoardList } from '@/components/BoardList'
import { FirebaseBoardCard } from '@/components/FirebaseBoardCard'
import { Loading } from '@/components/Loading'
import { Scaffold } from '@/components/Scaffold'
import { SideBar } from '@/components/SideBar'
import { useUser } from '@/components/UserProvider'

export function Home() {
  const history = useHistory()
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
    <Scaffold linkToHome={false} drawerChildren={<SideBar />}>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" color="primary">
          ห้องแนะนำ
        </Typography>
        <BoardList>
          <BoardCard
            title="สร้างห้องทำงาน"
            type={boardTypePomodoro}
            onClick={async () => {
              const boardId = await createBoard()
              history.push(`/app/board/${boardId}`)
            }}
          />
          <BoardCard title="สร้างห้องทำงาน" type={boardTypeStickies} />
          <BoardCard title="สร้างห้องทำงาน" type={boardTypeBlank} />
        </BoardList>
        <Typography variant="h4" color="primary" sx={{ mt: 4 }}>
          ห้องของฉัน
        </Typography>
        {boards !== null ? (
          <BoardList>
            {boards.map((board) => (
              <FirebaseBoardCard key={board} boardId={board} />
            ))}
          </BoardList>
        ) : (
          <Loading />
        )}
      </Box>
    </Scaffold>
  )
}
