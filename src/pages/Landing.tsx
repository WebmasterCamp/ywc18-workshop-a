import React, { ReactElement } from "react";
import styled from '@emotion/styled';

const Page = styled.div`
  background: red;
`

export function Landing(): ReactElement {
  return (
    <Page>
      Test
    </Page>
  )
}