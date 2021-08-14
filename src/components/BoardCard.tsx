import styled from '@emotion/styled'
import { Typography } from '@material-ui/core'
import React from 'react'

import { useBoard } from '@/backend/board'

export interface BoardCardProps {
  boardId: string
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 165px;
  height: 200px;
  margin: 8px;
  background-color: #c1c4ff;
  border-radius: 24px;
  overflow: hidden;
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
  const board = useBoard(boardId)
  return (
    <Layout>
      <Preview />
      <BoardName>
        <Typography>{board?.name}</Typography>
      </BoardName>
    </Layout>
  )
}
