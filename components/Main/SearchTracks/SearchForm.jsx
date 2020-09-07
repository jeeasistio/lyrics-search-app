import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Box, Typography, TextField, Button } from '@material-ui';

import { TracksContext } from '/contexts/TracksContext.jsx';

const SearchForm = () => {

  const { dispatchTracks, setFetching } = useContext(TracksContext);

  const [inputText, setInputText] = useState('');

  const searchTracks = (e) => {
    e.preventDefault();
    setFetching(true)
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${inputText}&apikey=6249d0414a4138bea4e67323fccc223f`)
      .then(res => {
        setFetching(false);
        dispatchTracks({
          type: 'SEARCH_TRACKS',
          payload: {
            searched_tracks: res.data.message.body['track_list'],
            heading: 'Matched Tracks'
          }
        })
      })
  }

  return (
    <Box 
      component="form"
      display="flex"
      flexDirection="column"
      m={2}
      onSubmit={searchTracks}
     >
      <Typography align="center" >Search your favorite song</Typography>
      <TextField margin="normal" label="Enter song..." onChange={(e) => setInputText(e.target.value)} />
      <Button color="primary" type="submit" variant="contained">Search Lyrics</Button>
    </Box>
  )
}

export default SearchForm;