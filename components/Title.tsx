import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'

interface Props {
  title: string,
  variant?: Variant,
}

const Title: FC<Props> = ({ title, variant = 'h1'}) => {
  const customStyle: React.CSSProperties = {
   textAlign: 'left',
  };

  return (
    <Typography variant={variant} style={customStyle}>
      {title}
    </Typography>
  )
}

export default Title