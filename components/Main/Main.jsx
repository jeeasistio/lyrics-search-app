import React from 'react';
import { Box } from '@material-ui';
import SearchForm from './SearchTracks/SearchForm.jsx';
import SearchList from './SearchTracks/SearchList.jsx';

const Main = () => {
  return (
    <Box component="main" >
      <SearchForm />
      <SearchList />
    </Box>
  )
}

export default Main;