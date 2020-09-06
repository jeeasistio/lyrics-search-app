import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Box, Typography, TextField, Button } from '@material-ui';

import { TracksContext } from '/contexts/TracksContext.jsx';

const SearchForm = () => {
  
  const { dispatchTracks } = useContext(TracksContext);
  
  const [inputText, setInputText] = useState('');
  
  const searchTracks = async (e) => {
    
    e.preventDefault();
    
    const res = await axios.get('https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ph&f_has_lyrics=1&apikey=6249d0414a4138bea4e67323fccc223f');
    const fetchedTracks = await res.data.message.body['track_list'];
      
    const searchTracksAction = () => ({
      type: 'SEARCH_TRACKS',
      payload: {
        searched_tracks: fetchedTracks,
        heading: 'Matched Tracks'
      }
    })
    
    dispatchTracks(searchTracksAction())
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
      <TextField margin="normal" label="Enter song..." />
      <Button color="primary" type="submit" variant="contained">Search Lyrics</Button>
    </Box>
  )
}

export default SearchForm;