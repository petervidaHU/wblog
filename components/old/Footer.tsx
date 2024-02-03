import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'
import RecentlyVisited from './RecentlyVisited'

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body1" component="div">
        Footer
      </Typography>
      <RecentlyVisited />
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
    background-color: lightgray;
    color: darkgrey;
    padding: 1rem;
    text-align: center;
    font-size: 0.8rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    min-height: 10rem;
`
