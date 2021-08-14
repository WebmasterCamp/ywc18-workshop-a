import React from 'react'
import { CSSProperties, ReactNode } from "react";

interface IBox extends CSSProperties {
  id?: string;
  children?: ReactNode;
  onClick?: any;
  className?: string;
}

export function Box(prop: IBox) {
  return (
    <div id={prop.id} className={prop.className} onClick={prop.onClick} style={prop}>
      {prop.children}
    </div>
  );
}