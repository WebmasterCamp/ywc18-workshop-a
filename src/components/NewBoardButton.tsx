import { ButtonProps } from '@material-ui/core'
import { LoadingButton } from '@material-ui/lab'
import React, { useState } from 'react'

export interface AsyncButtonProps {
  onClick: () => Promise<void>
}

export function AsyncButton({
  onClick,
  ...props
}: AsyncButtonProps & Omit<ButtonProps, 'onClick'>) {
  const [loading, setLoading] = useState(false)
  const handleClick = () => {
    if (loading) return
    setLoading(true)
    onClick().then(
      () => setLoading(false),
      () => setLoading(false)
    )
  }
  return <LoadingButton {...props} onClick={handleClick} />
}
