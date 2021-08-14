import styled from '@emotion/styled'
import { Box } from '@material-ui/core'
import React from 'react'

import { SideBar } from '@/components/SideBar'
import { TopBar } from '@/components/TopBar'

const Layout = styled.div`
  display: flex;
`

export function Home() {
  return (
    <Layout>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <TopBar />
      </Box>
    </Layout>
  )
}
