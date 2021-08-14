import styled from '@emotion/styled'
import React from 'react'

import { SideBar } from '@/components/SideBar'

const Layout = styled.div`
  display: flex;
`

export function Home() {
  return (
    <Layout>
      <SideBar />
    </Layout>
  )
}
