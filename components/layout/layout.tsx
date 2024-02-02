import React, { ReactNode } from 'react'
import NavBar from './navbar'
import Footer from './footer'
import { Grid, Paper, styled } from '@mui/material'

const Layout = ({ children }: { children: ReactNode }) => {
  return (<>
    <Grid container spacing={3}>
      <Grid item xs={12}>
          <NavBar />
      </Grid>
      <Grid item xs>
        <ItemE />
      </Grid>
      <Grid item xs={6}>
        <Item>
          {children}
        </Item>
      </Grid>
      <Grid item xs>
        <ItemE />
      </Grid>
    </Grid>
    <Footer />
  </>)
}

export default Layout;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ItemE = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));