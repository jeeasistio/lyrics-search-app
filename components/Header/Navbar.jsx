import React from 'react';
import { AppBar, Box, Typography } from '@material-ui';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Box p={1} >
        <Typography align="center" component="h1" variant="h5">Lyrics Search</Typography>
      </Box>
    </AppBar>
  )
}

export default Navbar;