import styled from '@emotion/styled'
import { Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

import { useBoardName } from '@/backend/board'
import { addBoardToProfile } from '@/backend/profile'

import { useUser } from './UserProvider'

export interface BoardCardProps {
  boardId: string
}

const Layout = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 165px;
  height: 200px;
  margin: 8px;
  background-color: #c1c4ff;
  border-radius: 24px;
  color: inherit;
  overflow: hidden;
  text-decoration: none;
`

const Preview = styled.div`
  width: 100%;
  height: 165px;
  background-color: #3841ec;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`

const BoardName = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export function BoardCard({ boardId }: BoardCardProps) {
  const boardName = useBoardName(boardId)
  const user = useUser()
  return (
    <Layout
      to={`/app/board/${boardId}`}
      onClick={() => addBoardToProfile(user.uid, boardId)}
    >
      <Preview />
      <BoardName>
        <Typography>{boardName}</Typography>
      </BoardName>
    </Layout>
  )
}
