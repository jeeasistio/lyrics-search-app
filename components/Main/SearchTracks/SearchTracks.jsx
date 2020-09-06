import React from 'react';
import { Box } from '@material-ui';
import SearchForm from './SearchForm.jsx';
import SearchList from './SearchList.jsx'

const SearchTracks = () => {
  return (
    <Box>
      <SearchForm />
      <SearchList />
    </Box>
  )
}

export default SearchTracks;