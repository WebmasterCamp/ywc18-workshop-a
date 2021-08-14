import React from 'react'

export interface BoardListProps {
  boards: string[]
}

export function BoardList({ boards }: BoardListProps) {
  return (
    <div>
      {boards.map((board) => (
        <div key={board}>{board}</div>
      ))}
    </div>
  )
}
