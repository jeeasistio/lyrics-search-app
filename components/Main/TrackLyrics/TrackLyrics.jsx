import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Button } from '@material-ui';

const TrackLyrics = ({ match }) => {
  
  const [track, setTrack] = useState({
    track_name: 'None',
    artist_name: 'None'
  });
  const [lyrics, setLyrics] = useState('');
  
  useEffect(() => {
    axios.all([
      axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${match.params.id}&apikey=6249d0414a4138bea4e67323fccc223f`),
      axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${match.params.id}&apikey=6249d0414a4138bea4e67323fccc223f`)
    ])
      .then(axios.spread((trackRes, lyricsRes) => {
        const trackData = trackRes.data.message.body.track;
        Object.keys(trackData).length ? setTrack(trackData) : null;
        setLyrics(lyricsRes.data.message.body.lyrics);
      }))
  }, []);
  
  const {track_name: trackName, artist_name: artistName} = track;
  
  return (
    <Box m={2}>
      <Typography align="center" variant="h5">{trackName}</Typography>
      <Box display="flex" justifyContent="center" mb={5}>
        <Typography variant="body2">by&nbsp;</Typography>
        <Typography style={{fontWeight: 500}} variant="body2">{artistName}</Typography>
      </Box>
      <Box
        minHeight={'70vh'}
        mb={2}
      >
        {typeof lyrics === 'object' ?
          <Typography>{lyrics.lyrics_body}</Typography> :
          <Typography variant="h5" color="textSecondary" align="center">No Lyrics</Typography>
        }
      </Box>
      <Box>
        <Button 
          onClick={() => history.back()} 
          fullWidth 
          variant="contained"
          color="primary"
        >
          Go Back
        </Button>
      </Box>
    </Box>
  )
}

export default TrackLyrics;