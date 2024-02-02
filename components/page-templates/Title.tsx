import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'

interface Props {
  title: string,
  variant?: Variant,
}

const Title: FC<Props> = ({ title, variant = 'h1'}) => {
  return (
    <Typography variant={variant}>
      {title}
    </Typography>
  )
}

export default Title