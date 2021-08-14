import React, { ReactNode } from 'react';
import { ReactElement } from 'react';
import { Box } from '../Box/Box';

interface ContainerProps {
  children?: ReactNode;
}

export function Container(props: ContainerProps): ReactElement {
  return (
    <Box maxWidth="1100px" display="flex">
      {props.children}
    </Box>
  );
}