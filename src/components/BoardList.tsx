import styled from '@emotion/styled'
import React from 'react'

import { BoardCard } from './BoardCard'

export interface BoardListProps {
  boards: string[]
}

const Layout = styled.div`
  display: flex;
  margin: -8px;
  margin-top: 16px;
`

export function BoardList({ boards }: BoardListProps) {
  return (
    <Layout>
      {boards.map((board) => (
        <BoardCard key={board} boardId={board} />
      ))}
    </Layout>
  )
}
