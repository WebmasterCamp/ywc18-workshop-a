import styled from '@emotion/styled'
import { CircularProgress } from '@material-ui/core'
import React from 'react'

const LoadingContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export function Loading() {
  return (
    <LoadingContainer>
      <CircularProgress />
    </LoadingContainer>
  )
}
