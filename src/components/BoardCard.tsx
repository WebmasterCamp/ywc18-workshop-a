import styled from '@emotion/styled'
import { Typography } from '@material-ui/core'
import React, { cloneElement, ReactElement } from 'react'
import { Link } from 'react-router-dom'

import blank from '@/assets/images/blank.svg'
import pomodoro from '@/assets/images/pomodoro.svg'
import stickies from '@/assets/images/stickies.svg'

export interface BoardCardProps {
  to?: string
  title: string
  type: BoardType
  loading?: boolean
  onClick?: () => void
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 165px;
  height: 200px;
  margin: 8px;
  border-radius: 24px;
  color: inherit;
  overflow: hidden;
  text-decoration: none;
`

const LayoutLink = Layout.withComponent(Link)

const Preview = styled.img`
  width: 100%;
  height: 165px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`

const BoardName = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export function BoardCard({ to, title, type, onClick }: BoardCardProps) {
  let toElement: ReactElement
  if (to) {
    toElement = <LayoutLink to={to} />
  } else {
    toElement = <Layout />
  }
  return cloneElement(toElement, {
    onClick,
    style: {
      backgroundColor: type.bg2,
      cursor: onClick ? 'pointer' : 'default',
    },
    children: (
      <>
        <Preview src={type.bg1} />
        <BoardName>
          <Typography>{title}</Typography>
        </BoardName>
      </>
    ),
  })
}

export interface BoardType {
  bg1: string
  bg2: string
}

export const boardTypePomodoro: BoardType = {
  bg1: pomodoro,
  bg2: '#FFECAC',
}

export const boardTypeStickies: BoardType = {
  bg1: stickies,
  bg2: '#C1C4FF',
}

export const boardTypeBlank: BoardType = {
  bg1: blank,
  bg2: '#C1C4FF',
}
